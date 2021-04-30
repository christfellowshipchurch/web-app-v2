import React, { createContext, useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import useGroupFilterOptions from 'hooks/useGroupFilterOptions';
import isEmpty from 'lodash/isEmpty';
import { useRouter } from 'next/router';

const GroupFiltersProviderStateContext = createContext();
const GroupFiltersProviderDispatchContext = createContext();

// Frozen to convey that these are static.
const options = Object.freeze({
  campuses: [],
  days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  preferences: [],
  subPreferences: [],
  meetingType: [],
});

const initialState = {
  hydrated: false,
  options,
  values: {
    campuses: [],
    days: [],
    preferences: [],
    subPreferences: [],
    meetingType: [],
    text: [],
  },
  queryData: {
    attributes: [],
  },
};

const actionTypes = {
  hydrate: 'hydrate',
  resetValues: 'resetValues',
  toggleValue: 'toggleValue',
  update: 'update',
  updateOptions: 'updateOptions',
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

// dispatch(toggleValue({ name: 'array prop key', value: "value to add/remove" }));
const toggleValue = payload => ({
  type: actionTypes.toggleValue,
  payload,
});

// dispatch(update({ pieceOfState: true }));
const update = payload => ({
  type: actionTypes.update,
  payload,
});

// dispatch(updateOptions({ fieldName1: ['Option 1', 'Option 2'] }));
const updateOptions = payload => ({
  type: actionTypes.updateOptions,
  payload,
});

// PRIVATE UTILS / HELPERS

/**
 * Convert a state object to a serialized string representing it. The format
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

function getQueryData(values) {
  const getValidValues = filterName =>
    values[filterName].filter(string => !isEmpty(string));

  const attributes = [
    { key: 'campusNames', values: getValidValues('campuses') },
    { key: 'preferences', values: getValidValues('preferences') },
    { key: 'subPreferences', values: getValidValues('subPreferences') },
    { key: 'days', values: getValidValues('days') },
    { key: 'meetingType', values: getValidValues('meetingType') },
    { key: 'text', values: getValidValues('text') },
  ].filter(({ values }) => values.length > 0 && values !== '');

  return {
    attributes,
  };
}

/**
 * Appends serialized properties for the state values. All reducer actions
 * should apply their updates via this function, so the serialized data
 * always reflects the state values.
 *
 * This lets the provider be fully responsible for the state as it gets
 * hydrated from the URL, modified, and serialized into API query params.
 * @param {Object} state
 * @param {Object} updatedState
 */
function updateAndSerialize(state) {
  const newState = {
    ...state,
    // URL String version of values
    valuesSerialized: serializeFilterValues(state.values),
    // Object for use as a variable in API search queries
    queryData: getQueryData(state.values),
  };

  // Uncomment to see log all state updates
  // console.log('[ 🎛️ GroupFiltersProvider ] 🆕 newState:', newState);

  return newState;
}

// REDUCER

function reducer(state, action) {
  // Uncomment to see log all actions
  // console.log('[ 🎛️ GroupFiltersProvider ] 🎬 action: ', action);

  switch (action.type) {
    case actionTypes.hydrate: {
      return updateAndSerialize({
        ...state,
        hydrated: true,
        values: action.payload
          ? {
              ...initialState.values,
              ...parseFilterValues(action.payload),
            }
          : state.values,
      });
    }
    case actionTypes.resetValues: {
      return updateAndSerialize({
        ...state,
        values: initialState.values,
      });
    }
    case actionTypes.update: {
      return updateAndSerialize({
        ...state,
        values: {
          ...state.values,
          ...action.payload,
        },
      });
    }
    case actionTypes.updateOptions: {
      return updateAndSerialize({
        ...state,
        options: {
          ...state.options,
          ...action.payload,
        },
      });
    }
    case actionTypes.toggleValue: {
      const { name, value } = action.payload;

      if (!state.values[name]) {
        console.warn(
          `Cannot update GroupFiltersProvider state at path \`values.${name}\``
        );
        return state;
      }
      const valueExists = state.values[name]?.includes(value);

      console.log({ name, value });

      return updateAndSerialize({
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
  const optionsData = useGroupFilterOptions();

  const [state, dispatch] = useReducer(reducer, initialState);
  const isClient = typeof window !== 'undefined';

  // :: Hydrate the state values from URL search params.
  useEffect(() => {
    if (state.hydrated || !isClient) {
      return;
    }

    const shouldHydrate = router?.asPath.includes('?');

    if (!shouldHydrate) {
      dispatch(hydrate());
      return;
    }

    // For a brief moment/render cycle, we see URL search params are present, but
    // Next.js hasn't parsed them onto `router.query` yet. Wait until it's ready.
    const readyToHydrate = !isEmpty(router?.query);

    if (readyToHydrate) {
      // Remove extra "hidden" query params that Next.js adds to `router.query`,
      // that don't exist in the URL search (which is all we care about, here).
      const { title, ...rest } = router?.query;
      dispatch(hydrate({ ...rest }));
    }
  }, [router?.asPath, router?.query, isClient, state.hydrated]);

  // :: Update filter options.
  useEffect(() => {
    dispatch(
      updateOptions({
        campuses: optionsData?.campusName || [],
        preferences: optionsData?.preference || [],
        subPreferences: optionsData?.subPreference || [],
        meetingType: optionsData?.meetingType || [],
      })
    );
  }, [optionsData]);

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
