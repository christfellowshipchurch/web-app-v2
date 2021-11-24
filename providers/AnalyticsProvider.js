/**
 * AnalyticsProvider.js
 * 
 * Author: Caleb Panza
 * Created: Nov 24, 2021
 * 
 * Current implementation listens to changes in page route
 */

import React, { useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { useReactiveVar } from '@apollo/client';
import { useRouter } from 'next/router'
import URL from 'url';
import uniqueId from 'lodash/uniqueId'
import isEmpty from 'lodash/isEmpty';
import { useCurrentUser } from 'hooks'

import { fingerprintIdVar } from 'lib/apolloClient/localStorage';

// MARK : Amplitude initialization
const amplitudeJS =
  typeof window !== 'undefined' ? require('amplitude-js') : null;
const EVENT_KEYS = {
    pageView: "Viewed Page",
    exitPage: "Exited Page"
}
const initOptions = {
    includeFbclid: true,
    includeGclid: true,
    includeReferrer: true,
    includeUtm: true,
    onExitPage: () => {
        amplitudeJS
            .getInstance()
            .logEvent(
                EVENT_KEYS.exitPage
            )
    }
}

// MARK : FingerprintJs initialization
const fingerprintJS = typeof window !== 'undefined' ? require('@fingerprintjs/fingerprintjs-pro') : null;

// MARK : Events reducer
function eventsReduce(state, action) {
    if (action?.processed) {
        return state
            .filter(({ taskId }) => taskId !== action?.taskId)
    }

    /**
     * Before returning the state, we want to insure that each event has a unique identifier in order to later identify which tasks have been completed. We cannot use the route in this case because a user may trigger multiple non-processed events for a single route and we do not want to lose out on that data
     * 
     * We also want to parse and format our route so that it's more easily digestible to Amplitude
     */
    return [...state, action].map(a => {
        const parsedRoute = URL.parse(a?.route)

        return {
            ...a,
            taskId: a?.taskId ?? uniqueId(),
            props: {
                pathname: parsedRoute?.pathname,
                query: parsedRoute?.query?.split("&")
            }
        }
    })
}

// MARK : Ready State Reducer
const DEFAULT_READY_STATE = {
    fingerprint: false,
    amplitude: false
}
function readyStateReducer(state, task) {
    let newState = {}

    function all(s) {
        if (typeof window === 'undefined' || typeof document === 'undefined') return false

        return s?.fingerprint && s?.amplitude
    }
    
    switch (task) {
        case "fingerprint":
            newState.fingerprint = true
        case "amplitude":
            newState.amplitude = true
        default:
            break
    }

    const combinedState = {
        ...state,
        ...newState
    }

    return {
        ...combinedState,
        all: all(combinedState)
    }
}

const AnalyticsProvider = ({ children }) => {
    const router = useRouter()
    const { currentUser } = useCurrentUser()
    const fingerprintId = useReactiveVar(fingerprintIdVar)
    const [isReady, setIsReady] = useReducer(readyStateReducer, DEFAULT_READY_STATE)
    const [events, dispatchEvent] = useReducer(eventsReduce, [])

    const _isNotValidClient = typeof window === 'undefined' 
        || typeof document === 'undefined'
        // || process.env.NODE_ENV !== 'production';

    function handleRouteChange(route) {
        dispatchEvent({ processed: false, route })
    }

    function trackEvent(event) {
        amplitudeJS
            .getInstance()
            .logEvent(
                EVENT_KEYS.pageView,
                event?.props,
                () => dispatchEvent({ ...event, processed: true }),
                (e) => console.warn("Error", { e })
            )
    }

    // note : Subscribe to `routeChangeComplete` when
    useEffect(() => {    
        if (_isNotValidClient) return

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events])

    // note : Track events when all initializers are ready
    useEffect(() => {
        if (!isReady.all) return

        events.map(trackEvent)
    }, [isReady, events])

    // note : Pull or fetch the FingerprintId
    useEffect(() => {
        if (_isNotValidClient) return

        if (isEmpty(fingerprintId)) {
            const fpPromise = fingerprintJS.load({
                token: process.env.NEXT_PUBLIC_FINGERPRINTJS_KEY
            })
    
            fpPromise
                .then(fp => fp.get())
                .then(result => fingerprintIdVar(result.visitorId))
        } else {
            setIsReady("fingerprint")
            var identify = new amplitudeJS.Identify().setOnce('fingerprintId', fingerprintId);
            amplitudeJS.getInstance().identify(identify);
        }
    }, [fingerprintId])

    // note : When we have a change in our current user, we can set/unset the current user id
    useEffect(() => {
        let identify = new amplitudeJS.Identify()
        if (currentUser?.id) {
            identify
                .set("apollosUserId", currentUser?.id)
                .set("apollosPersonId", currentUser?.profile?.id);
        } else {
            identify
                .set("apollosUserId", null)
                .set("apollosPersonId", null);
        }

        amplitudeJS.getInstance().identify(identify);
    }, [currentUser])

    // note : Initialize Amplitude client
    useEffect(() => {
        if (_isNotValidClient || !amplitudeJS || !fingerprintJS) return

        amplitudeJS
            .getInstance()
            .init(
                process.env.NEXT_PUBLIC_AMPLITUDE_KEY, 
                null, 
                initOptions,
                () => setIsReady("amplitude")
            )
    }, [])

    return children
};

AnalyticsProvider.propTypes = {}
AnalyticsProvider.defaultProps = {}

export default AnalyticsProvider;