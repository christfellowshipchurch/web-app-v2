import React, { createContext, useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

const GroupManageProviderStateContext = createContext();
const GroupManageProviderDispatchContext = createContext();

const initialState = {
  groupData: null,

  sections: {
    photo: 'PHOTO',
    resources: 'RESOURCES',
  },

  // IDLE, EDITING, SAVING, ERROR
  photoStatus: 'IDLE',

  // IDLE, ADD, ADD_LINK, ADD_CONTENT, SAVING_LINK, SAVING_CONTENT, ERROR
  resourceStatus: 'IDLE',

  message: null,
};

const actionTypes = {
  update: 'update',
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.update: {
      // We do this so that we reset the message whenever we're
      // going back to the idle state.
      if (
        action.payload?.photoStatus === 'IDLE' ||
        action.payload?.resourceStatus === 'IDLE'
      ) {
        return {
          ...state,
          message: null,
          ...action.payload,
        };
      }

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
  const { groupData } = props;
  const [state, dispatch] = useReducer(reducer, initialState, state => ({
    ...state,
    groupData,
  }));

  useEffect(() => {
    dispatch({ type: actionTypes.update, payload: { groupData } });
  }, [groupData]);

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
  groupData: PropTypes.object,
};

export {
  GroupManageProvider as default,
  useGroupManage,
  useGroupManageState,
  useGroupManageDispatch,
  actionTypes,
  update,
  initialState,
};
