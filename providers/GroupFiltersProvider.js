import React, { createContext, useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { useRouter } from 'next/router';

const GroupFiltersProviderStateContext = createContext();
const GroupFiltersProviderDispatchContext = createContext();

// TODO: There has to be a better, dynamic way to define these.
// Frozen to convey these are static
const options = Object.freeze({
  campuses: [
    { label: 'Boynton Beach', value: 'boynton-beach' },
    { label: 'Daytona', value: 'daytona' },
    { label: 'Jupiter', value: 'jupiter' },
    { label: 'Orlando', value: 'orlando' },
    { label: 'West Palm Beach', value: 'west-palm-beach' },
  ],
  days: [
    { label: 'Mon', value: 'mon' },
    { label: 'Tue', value: 'tue' },
    { label: 'Wed', value: 'wed' },
    { label: 'Thu', value: 'thu' },
    { label: 'Fri', value: 'fri' },
    { label: 'Sat', value: 'sat' },
    { label: 'Sun', value: 'sun' },
  ],
  preferences: [
    { label: "Crew (Men's)", value: 'crew' },
    { label: 'Sisterhood', value: 'sisterhood' },
    { label: 'Married People', value: 'married-people' },
    { label: 'Young Adults', value: 'young-adults' },
  ],
  subPreferences: [
    { label: 'Bible Studies', value: 'bibleStudies' },
    { label: 'Prayer Groups', value: 'prayerGroups' },
    { label: 'Activity Studies', value: 'activityStudies' },
    { label: 'Classes', value: 'classes' },
  ],
});

const initialState = {
  hydrated: false,
  options,
  values: {
    campuses: [],
    days: [],
    preferences: [],
    subPreferences: [],
  },
};

const actionTypes = {
  hydrate: 'hydrate',
  resetValues: 'resetValues',
  toggleValue: 'toggleValue',
  update: 'update',
};

// ACTION CREATORS
// dispatch(hydrate("?subPreferences=Crew%2CSisterhood&days=mon%2Cwed%2Cfri"));
const hydrate = payload => ({
  type: actionTypes.hydrate,
  payload,
});

// dispatch(resetValues());
const resetValues = payload => ({
  type: actionTypes.resetValues,
  payload,
});

// dispatch(toggleValue({ arrayProp: "value to add/remove from array" }));
const toggleValue = payload => ({
  type: actionTypes.toggleValue,
  payload,
});

// dispatch(update({ pieceOfState: true }));
const update = payload => ({
  type: actionTypes.update,
  payload,
});

// PRIVATE UTILS / HELPERS

/**
 * Convert a state object to a serialized string representing it. The format
 * is a URL search params/query string.
 * We need to roll our own wrapper since Next.js will serialize this:
 *   { days: ["mon", "tue", "wed"] }
 * as:
 *   "?days=mon&days=tue&days=wed"
 * The redundant keys are cumbersome and inconvenient.
 *
 * @example
 * serializeFilterValues({ colors: ['red', 'green', 'blue'], num: 3, emptyArray: [] })
 * // --> "?colors=red,green,blue&num=3"
 * @see https://nextjs.org/docs/api-reference/next/link#with-url-object
 * @param {Object} state
 * @returns {String} string
 */
function serializeFilterValues(filterValues) {
  const nonEmptyValues = Object.entries(filterValues).filter(([key, value]) =>
    Array.isArray(value) ? value.length > 0 : Boolean(value)
  );

  return new URLSearchParams(nonEmptyValues).toString();
}

/**
 * Return state object from a serialized string.
 * @param {String} string
 * @returns {Object}
 */
function parseFilterValues(string) {
  const entries = new URLSearchParams(string).entries();
  const values = {};

  for (let [key, value] of entries) {
    if (key === 'debug') {
      continue;
    }

    // Slightly risky logical leap: look at the initialState value
    // for this key, and if it's an array, parse the value as one.
    if (Array.isArray(initialState.values[key])) {
      // Properly parse single and multiple selections into an array.
      values[key] = value.includes(',') ? value.split(',') : [value];
    } else {
      values[key] = value;
    }
  }

  return values;
}

/**
 * Appends a property with the string-serialized filter values.
 * @param {Object} state
 * @param {Object} updatedState
 */
function appendSerialized(state) {
  const newState = {
    ...state,
    valuesSerialized: serializeFilterValues(state.values),
  };

  return newState;
}

// REDUCER

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.hydrate: {
      return appendSerialized({
        ...initialState,
        hydrated: true,
        values: {
          ...initialState.values,
          ...parseFilterValues(action.payload),
        },
      });
    }
    case actionTypes.resetValues: {
      return {
        ...state,
        values: initialState.values,
      };
    }
    case actionTypes.update: {
      return appendSerialized({
        ...state,
        values: {
          ...state.values,
          ...action.payload,
        },
      });
    }
    case actionTypes.toggleValue: {
      const { name, value } = action.payload;
      const valueExists = state.values[name].includes(value);

      return appendSerialized({
        ...state,
        values: {
          ...state.values,
          [name]: valueExists
            ? state.values[name].filter(item => item !== value) // Remove
            : state.values[name].concat(value), // Add
        },
      });
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
  resetValues,
  toggleValue,
  update,
};
