import React, { createContext, useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import { AUTH_TOKEN_KEY } from '../config/keys';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

const initialState = {
  authenticated: false,
  token: null,
};

const actionTypes = {
  update: 'update',
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.update: {
      return {
        ...state,
        authenticated: state.token !== null,
        ...action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function AuthProvider(props = {}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (window !== undefined) {
      const token = window.localStorage.getItem(AUTH_TOKEN_KEY);
      if (token) dispatch({ type: 'update', payload: { token } });
    }
  }, [dispatch]);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {props.children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

// const state = useAuthState();
function useAuthState() {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error(`useAuthState must be used within a AuthProvider`);
  }
  return context;
}

// const dispatch = useAuthDispatch();
function useAuthDispatch() {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error(`useAuthDispatch must be used within a AuthProvider`);
  }
  return context;
}

// const [state, dispatch] = useAuth();
function useAuth() {
  const context = [useAuthState(), useAuthDispatch()];
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};

export {
  AuthProvider as default,
  useAuth,
  useAuthState,
  useAuthDispatch,
  actionTypes,
};
