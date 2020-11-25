import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { normalizeUserData } from '../utils';

const UserProfileProviderStateContext = createContext();
const UserProfileProviderDispatchContext = createContext();

const initialState = {
  user: null,
  status: 'IDLE',
};

const actionTypes = {
  update: 'update',
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.update: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProfileProvider(props = {}) {
  const [state, dispatch] = useReducer(reducer, initialState, state => ({
    ...state,
    user: normalizeUserData(props.currentUser),
  }));

  return (
    <UserProfileProviderStateContext.Provider value={state}>
      <UserProfileProviderDispatchContext.Provider value={dispatch}>
        {props.children}
      </UserProfileProviderDispatchContext.Provider>
    </UserProfileProviderStateContext.Provider>
  );
}

// const state = useUserProfileState();
function useUserProfileState() {
  const context = useContext(UserProfileProviderStateContext);
  if (context === undefined) {
    throw new Error(
      `useUserProfileState must be used within a UserProfileProvider`
    );
  }
  return context;
}

// const dispatch = useUserProfileDispatch();
function useUserProfileDispatch() {
  const context = useContext(UserProfileProviderDispatchContext);
  if (context === undefined) {
    throw new Error(
      `useUserProfileDispatch must be used within a UserProfileProvider`
    );
  }
  return context;
}

// const [state, dispatch] = useUserProfile();
function useUserProfile() {
  const context = [useUserProfileState(), useUserProfileDispatch()];
  if (context === undefined) {
    throw new Error(`useUserProfile must be used within a UserProfileProvider`);
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

UserProfileProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  currentUser: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export {
  UserProfileProvider as default,
  useUserProfile,
  useUserProfileState,
  useUserProfileDispatch,
  actionTypes,
  selectors,
  update,
};
