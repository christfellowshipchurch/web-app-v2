import React, { createContext, useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { AUTH_TOKEN_KEY } from 'config/keys';
import { useAuthenticateRockPersonId } from 'hooks';
import { includes } from 'lodash';

// Define context objects
const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

// Define initial state and action types
const initialState = {
  authenticated: false,
  identity: null,
  step: 0,
  token: null,
  rockPersonId: null,
  type: null,
  userExists: false,
  onSuccess: () => false,
  userProfile: [],
};

const actionTypes = {
  update: 'update',
  logout: 'logout',
  reset: 'reset',
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case actionTypes.update:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.logout:
    case actionTypes.reset:
      return initialState;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// Function to get initial state
function getInitialState(state) {
  if (typeof window !== 'undefined') {
    const token = window.localStorage.getItem(AUTH_TOKEN_KEY);
    if (token) {
      return {
        ...state,
        authenticated: true,
        token,
      };
    } else if (includes(window.location.href, 'rckipid')) {
      const rpid = decodeURIComponent(
        window.location.href.split('rckipid=')[1]
      );
      return {
        ...state,
        rockPersonId: rpid,
      };
    }
    return state;
  }
  return state;
}

// AuthProvider component
function AuthProvider(props = {}) {
  const [state, dispatch] = useReducer(reducer, initialState, getInitialState);
  const [authenticateRpid] = useAuthenticateRockPersonId();
  const { authenticated, token, rockPersonId } = state;

  useEffect(() => {
    const getRockPersonToken = async rpid => {
      if (rpid && rpid !== 'invalid') {
        try {
          const options = { variables: { personId: rpid } };
          const { data } = await authenticateRpid(options);
          const rockPersonToken = data?.authenticateRockPersonId?.token;
          if (rockPersonToken) {
            window.localStorage.setItem(AUTH_TOKEN_KEY, rockPersonToken);
            dispatch({
              type: actionTypes.update,
              payload: { authenticated: true, token: rockPersonToken },
            });
            //update url to remove rpid so we don't keep trying to authenticate
            const url = window.location.href.split('?')[0];
            window.history.replaceState({}, '', url);
          }
        } catch (err) {
          if (includes(err.message, 'Invalid Rock Person ID')) {
            dispatch({
              type: actionTypes.update,
              payload: { rockPersonId: 'invalid' },
            });
          }
        }
      }
    };

    if (typeof window !== 'undefined') {
      if (token) {
        window.localStorage.setItem(AUTH_TOKEN_KEY, token);
        dispatch({
          type: actionTypes.update,
          payload: { authenticated: true },
        });
      } else if (rockPersonId && rockPersonId !== 'invalid') {
        getRockPersonToken(rockPersonId);
      } else {
        if (!authenticated) {
          window.localStorage.removeItem(AUTH_TOKEN_KEY);
        }
      }
    }
  }, [token, authenticated, rockPersonId]); // eslint-disable-line

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {props.children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

// Custom hooks
function useAuthState() {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error(`useAuthState must be used within an AuthProvider`);
  }
  return context;
}

function useAuthDispatch() {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error(`useAuthDispatch must be used within an AuthProvider`);
  }
  return context;
}

function useAuth() {
  const context = [useAuthState(), useAuthDispatch()];
  if (context === undefined) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }
  return context;
}

// Action creators
const update = payload => ({
  type: actionTypes.update,
  payload,
});

const logout = payload => ({
  type: actionTypes.logout,
});

const reset = payload => ({
  type: actionTypes.reset,
});

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};

export {
  AuthProvider as default,
  useAuth,
  useAuthState,
  useAuthDispatch,
  actionTypes,
  update,
  logout,
  reset,
};
