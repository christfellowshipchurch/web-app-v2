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

function reducer(state, action) {
  console.log('[GroupFiltersProvider] action:', action);

  switch (action.type) {
    case actionTypes.update: {
      return {
        ...state,
        ...action.payload,
        // ❓ :: Should we auto-serialize state to url param string here?
      };
    }
    case actionTypes.toggleValue: {
      const { name, value } = action.payload;
      const valueExists = state[name].includes(value);

      if (valueExists) {
        // Remove value
        return {
          ...state,
          [name]: state[name].filter(item => item !== value),
        };
      } else {
        // Add value
        return {
          ...state,
          [name]: state[name].concat(value),
        };
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
    values: props.values || {}, //  ❓ :: Hydrate state from URL params?
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
  values: PropTypes.object,
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
