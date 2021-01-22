import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const GroupFiltersProviderStateContext = createContext();
const GroupFiltersProviderDispatchContext = createContext();

const initialState = {
  preferences: [],
  subPreferences: [],
  campuses: [],
  days: [],
};

const actionTypes = {
  update: 'update',
  toggleValue: 'toggleValue',
};

function serializeState(state) {
  const { serialized, ...keys } = state;

  const entriesWithValues = Object.entries(keys).filter(([key, value]) =>
    // Only serialize state entries that are non-empty arrays or truthy
    Array.isArray(value) ? value.length : Boolean(value)
  );

  // console.log(
  //   '🔸 parseSerializedState:',
  //   parseSerializedState(new URLSearchParams(entriesWithValues).toString())
  // );

  return new URLSearchParams(entriesWithValues).toString();
}

function parseSerializedState(string) {
  const entries = new URLSearchParams(string).entries();
  const state = {};

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

function appendSerializedState(state) {
  const newState = {
    ...state,
    serialized: serializeState(state),
  };

  console.group(
    '%c🔵 [ GroupFiltersProvider ] Updated and serialized state',
    'color: #00AEFF'
  );
  console.log(
    `%cstate: %c${JSON.stringify(state, null, 2)}`,
    'color: cyan',
    ''
  );
  console.log(
    `%cserialized: %c"${newState.serialized}"`,
    'color: cyan',
    'color: limegreen;'
  );
  console.groupEnd();
  return newState;
}

function reducer(state, action) {
  switch (action.type) {
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
  const [state, dispatch] = useReducer(reducer, initialState, state => ({
    ...state,
  }));

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

// ACTION CREATORS
// dispatch(update({ pieceOfState: true }));
const update = payload => ({
  type: actionTypes.update,
  payload,
});

const toggleValue = payload => ({
  type: actionTypes.toggleValue,
  payload,
});

GroupFiltersProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  // ❓ :: Some prop like this 👇 so the Search results page instance of
  //       this provider can automatically serialize state changes to URL?
  // serializeStateToUrl: PropTypes.bool
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
