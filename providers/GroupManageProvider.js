import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const GroupManageProviderStateContext = createContext();
const GroupManageProviderDispatchContext = createContext();

const initialState = {
  sections: ['PHOTO', 'RESOURCES'],

  // IDLE, EDITING, SAVING, ERROR
  photoStatus: 'IDLE',

  // IDLE, ADD, ADD_LINK, ADD_CONTENT, SAVING_LINK, SAVING_CONTENT
  resourceStatus: 'IDLE',
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

function GroupManageProvider(props = {}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GroupManageProviderStateContext.Provider value={state}>
      <GroupManageProviderDispatchContext.Provider value={dispatch}>
        {props.children}
      </GroupManageProviderDispatchContext.Provider>
    </GroupManageProviderStateContext.Provider>
  );
}

// const state = useGroupManageState();
function useGroupManageState() {
  const context = useContext(GroupManageProviderStateContext);
  if (context === undefined) {
    throw new Error(
      `useGroupManageState must be used within a GroupManageProvider`
    );
  }
  return context;
}

// const dispatch = useGroupManageDispatch();
function useGroupManageDispatch() {
  const context = useContext(GroupManageProviderDispatchContext);
  if (context === undefined) {
    throw new Error(
      `useGroupManageDispatch must be used within a GroupManageProvider`
    );
  }
  return context;
}

// const [state, dispatch] = useGroupManage();
function useGroupManage() {
  const context = [useGroupManageState(), useGroupManageDispatch()];
  if (context === undefined) {
    throw new Error(`useGroupManage must be used within a GroupManageProvider`);
  }
  return context;
}

// SELECTORS
// const count = selectors.pieceOfState(state);
// const selectors = {
// 	pieceOfState: state => state.pieceOfState,
// };

// ACTION CREATORS
// dispatch(update({ pieceOfState: true }));
const update = payload => ({
  type: actionTypes.update,
  payload,
});

GroupManageProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};

export {
  GroupManageProvider as default,
  useGroupManage,
  useGroupManageState,
  useGroupManageDispatch,
  actionTypes,
  update,
};
