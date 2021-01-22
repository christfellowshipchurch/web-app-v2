import React, { createContext, useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { useRouter } from 'next/router';

const GroupFiltersProviderStateContext = createContext();
const GroupFiltersProviderDispatchContext = createContext();

const initialState = {
  hydrated: false,
  preferences: [],
  subPreferences: [],
  campuses: [],
  days: [],
};

const actionTypes = {
  hydrate: 'hydrate',
  update: 'update',
  toggleValue: 'toggleValue',
};

// ACTION CREATORS
// dispatch(hydrate("?subPreferences=Crew%2CSisterhood&days=mon%2Cwed%2Cfri"));
const hydrate = payload => ({
  type: actionTypes.hydrate,
  payload,
});

// dispatch(update({ pieceOfState: true }));
const update = payload => ({
  type: actionTypes.update,
  payload,
});

// dispatch(toggleValue({ arrayProp: "value to add/remove from array" }));
const toggleValue = payload => ({
  type: actionTypes.toggleValue,
  payload,
});

// PRIVATE UTILS / HELPERS
/**
 * Convert a state object to a serialized string representing it. The format
 * is a URL search params/query string.
 * We customize the serialization, instead of fully relying on Next.js and
 * browser/Node mechanisms, because of how array values are serialized.
 * Next.js will serialize { days: ["mon", "tue", "wed"] } as:
 * "?days=mon&days=tue&days=wed" ... which makes parsing cumbersome.
 * @example
 * serializeState({ colors: ['red', 'green', 'blue'], num: 3, emptyArray: [] })
 * // --> "?colors=red,green,blue&num=3"
 * @see https://nextjs.org/docs/api-reference/next/link#with-url-object
 * @param {Object} state
 * @returns {String} string
 */
function serializeState(state) {
  const { hydrated, serialized, ...keys } = state;

  const entriesWithValues = Object.entries(keys).filter(([key, value]) =>
    // Only serialize state entries that are non-empty arrays or truthy
    Array.isArray(value) ? value.length : Boolean(value)
  );

  return new URLSearchParams(entriesWithValues).toString();
}

/**
 * Return state object from a serialized string.
 * @param {String} string
 * @returns {Object}
 */
function parseSerializedState(string) {
  const entries = new URLSearchParams(string).entries();
  const state = { hydrated: true };

  for (let [key, value] of entries) {
    // Slightly risky logical leap: look at the initialState value
    // for this key, and if it's an array, parse the value as one.
    if (Array.isArray(initialState[key])) {
      // Properly parse single and multiple selections into an array.
      state[key] = value.includes(',') ? value.split(',') : [value];
    } else {
      state[key] = value;
    }
  }

  return state;
}

/**
 * Appends a `serialized` property to a state object, representing the
 * state as a serialized string.
 * @param {Object} state
 * @param {Object} updatedState
 */
function appendSerializedState(state) {
  const newState = {
    ...state,
    serialized: serializeState(state),
  };

  return newState;
}

// REDUCER
function reducer(state, action) {
  switch (action.type) {
    case actionTypes.hydrate: {
      return appendSerializedState({
        ...initialState,
        ...parseSerializedState(action.payload),
      });
    }
    case actionTypes.update: {
      return appendSerializedState({
        ...state,
        ...action.payload,
      });
    }
    case actionTypes.toggleValue: {
      const { name, value } = action.payload;
      const valueExists = state[name].includes(value);

      if (valueExists) {
        // Remove value
        return appendSerializedState({
          ...state,
          [name]: state[name].filter(item => item !== value),
        });
      } else {
        // Add value
        return appendSerializedState({
          ...state,
          [name]: state[name].concat(value),
        });
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function GroupFiltersProvider(props = {}) {
  const router = useRouter();

  const [state, dispatch] = useReducer(reducer, initialState);

  // Next.js won't have the hydrated state query string available when
  // rendering server-side, so watch for changes to `router.query` and
  // hydrate when it becomes available.
  useEffect(() => {
    if (!isEmpty(router.query) && !state.hydrated) {
      dispatch(hydrate(router.query));
    }
  }, [router.query, state.hydrated]);

  return (
    <GroupFiltersProviderStateContext.Provider value={state}>
      <GroupFiltersProviderDispatchContext.Provider value={dispatch}>
        {props.children}
      </GroupFiltersProviderDispatchContext.Provider>
    </GroupFiltersProviderStateContext.Provider>
  );
}

// const state = useGroupFiltersState();
function useGroupFiltersState() {
  const context = useContext(GroupFiltersProviderStateContext);
  if (context === undefined) {
    throw new Error(
      `useGroupFiltersState must be used within a GroupFiltersProvider`
    );
  }
  return context;
}

// const dispatch = useGroupFiltersDispatch();
function useGroupFiltersDispatch() {
  const context = useContext(GroupFiltersProviderDispatchContext);
  if (context === undefined) {
    throw new Error(
      `useGroupFiltersDispatch must be used within a GroupFiltersProvider`
    );
  }
  return context;
}

// const [state, dispatch] = useGroupFilters();
function useGroupFilters() {
  const context = [useGroupFiltersState(), useGroupFiltersDispatch()];
  if (context === undefined) {
    throw new Error(
      `useGroupFilters must be used within a GroupFiltersProvider`
    );
  }
  return context;
}

// SELECTORS
// const count = selectors.pieceOfState(state);
const selectors = {};

GroupFiltersProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};

export {
  GroupFiltersProvider as default,
  useGroupFilters,
  useGroupFiltersState,
  useGroupFiltersDispatch,
  actionTypes,
  selectors,
  update,
  toggleValue,
};
