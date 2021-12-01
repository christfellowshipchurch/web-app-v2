/**
 * AnalyticsProvider.js
 * 
 * Author: Caleb Panza
 * Created: Nov 24, 2021
 * 
 * Current implementation listens to changes in page route
 */

import React, { useContext, useEffect, useReducer } from 'react';
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
    exitPage: "Exited Page",
    openLink: "Open Link",
    clickButton: "Click Button"
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
    return [...state, action].map((a) => ({
        ...a,
        taskId: a?.taskId ?? uniqueId(),
    }))
}

// MARK : Ready State Reducer
const DEFAULT_READY_STATE = {
    fingerprint: false,
    amplitude: false,
    all: false
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

// MARK : Provider
const AnalyticsContext = React.createContext({
    trackEvent: () => null,
    eventKeys: EVENT_KEYS
});

export function useAnalytics() {
    const context = useContext(AnalyticsContext);
    if (context === undefined) {
      throw new Error(`useAnalytics must be used within an AnalyticsProvider`);
    }
    return context;
}

const AnalyticsProvider = ({ children }) => {
    const router = useRouter()
    const { currentUser } = useCurrentUser()
    const fingerprintId = useReactiveVar(fingerprintIdVar)
    const [isReady, setIsReady] = useReducer(readyStateReducer, DEFAULT_READY_STATE)
    const [events, dispatchEvent] = useReducer(eventsReduce, [])

    const _isNotValidClient = typeof window === 'undefined' 
        || typeof document === 'undefined'
        || process.env.NODE_ENV !== 'production';

    function handleRouteChange(route) {
        const parsedRoute = URL.parse(route)

        dispatchEvent({
            processed: false,
            key: EVENT_KEYS.pageView,
            props: {
                pathname: parsedRoute?.pathname,
                query: parsedRoute?.query?.split("&")
            } 
        })
    }

    function trackEvent(event) {
        amplitudeJS
            .getInstance()
            .logEvent(
                event?.key,
                event?.props,
                () => {
                    dispatchEvent({ ...event, processed: true })
                    if (event?.optCallback && typeof event?.optCallback === "function") {
                        event?.optCallback()
                    }
                },
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
        if (isEmpty(process.env.NEXT_PUBLIC_FINGERPRINTJS_KEY)) return

        if (isEmpty(fingerprintId)) {
            const fpPromise = fingerprintJS.load({
                token: process.env.NEXT_PUBLIC_FINGERPRINTJS_KEY
            })
    
            fpPromise
                .then(fp => fp.get())
                .then(result => fingerprintIdVar(result.visitorId))
        } else {
            setIsReady("fingerprint")
        }
    }, [fingerprintId])

    // note : When we have a change in our current user, we can set/unset the current user id
    useEffect(() => {
        if (!isReady.all) return

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

    // note : We break out the logic for setting the FingerprintId in Amplitude so that if Amplitude finishes after Fingerprint, we still run the logic
    useEffect(() => {
        if (!isReady.all) return

        var identify = new amplitudeJS.Identify().setOnce('fingerprintId', fingerprintId);
        amplitudeJS.getInstance().identify(identify);
    }, [isReady])

    // note : Initialize Amplitude client
    useEffect(() => {
        if (_isNotValidClient || !amplitudeJS || !fingerprintJS) return
        if (isEmpty(process.env.NEXT_PUBLIC_AMPLITUDE_KEY)) return

        amplitudeJS
            .getInstance()
            .init(
                process.env.NEXT_PUBLIC_AMPLITUDE_KEY, 
                null, 
                initOptions,
                () => setIsReady("amplitude")
            )
    }, [])

    return <AnalyticsContext.Provider 
        value={{
            trackEvent: (key, props, optCallback) => dispatchEvent({ 
                processed: false, 
                key, 
                props,
                optCallback
            }),
            eventKeys: EVENT_KEYS,
            trackingDisabled: _isNotValidClient || !amplitudeJS || !fingerprintJS || !isReady.all
        }}
    >
        {children}
    </AnalyticsContext.Provider>
};

AnalyticsProvider.propTypes = {}
AnalyticsProvider.defaultProps = {}

export default AnalyticsProvider;