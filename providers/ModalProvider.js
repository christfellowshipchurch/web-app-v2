import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import find from 'lodash/find';

const ModalStateContext = createContext();
const ModalDispatchContext = createContext();

const initialState = {
  modals: [],
  activeModal: {
    component: null,
    props: {},
    step: null,
  },
};

const actionTypes = {
  show: 'show',
  hide: 'hide',
  showStep: 'showStep',
};

function findModal(state, action) {
  const title = action.payload.component;
  const activeModal = find(state.modals, m => m.title === title);
  if (activeModal) return activeModal;
  return false;
}

function modalReducer(state, action) {
  switch (action.type) {
    case actionTypes.show: {
      const activeModal = findModal(state, action);
      if (activeModal) {
        return {
          ...state,
          activeModal: {
            component: activeModal.component,
            props: {
              ...action.payload.props,
            },
          },
        };
      }
      return state;
    }
    case actionTypes.showStep: {
      return {
        ...state,
        activeModal: {
          ...state.activeModal,
          props: {
            ...state.activeModal.props,
            step: action.payload.step,
          },
          step: action.payload.step,
        },
      };
    }
    case actionTypes.hide: {
      return {
        ...state,
        activeModal: initialState.activeModal,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ModalProvider(props = {}) {
  const [state, dispatch] = useReducer(modalReducer, initialState, state => ({
    ...state,
    modals: props.modals || [],
  }));
  return (
    <ModalStateContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        {props.children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
}

function ModalManager() {
  const { activeModal: modal } = useModalState();

  if (!modal || !modal.component) return null;

  return <modal.component step={modal.step || 0} {...modal.props} />;
}

const showModal = (modal, modalProps = {}) => ({
  type: actionTypes.show,
  payload: {
    component: modal,
    props: modalProps,
  },
});

const showStep = step => ({
  type: actionTypes.showStep,
  payload: {
    step,
  },
});

const hideModal = () => ({
  type: actionTypes.hide,
});

function useModalState() {
  const context = useContext(ModalStateContext);
  if (context === undefined) {
    throw new Error(`useModalState must be used within a ModalProvider`);
  }
  return context;
}

function useModalDispatch() {
  const context = useContext(ModalDispatchContext);
  if (context === undefined) {
    throw new Error(`useModalDispatch must be used within a ModalProvider`);
  }
  return context;
}

function useModal() {
  const context = [useModalState(), useModalDispatch()];
  if (context === undefined) {
    throw new Error(`useModal must be used within a ModalProvider`);
  }
  return context;
}

ModalProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  modals: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      component: PropTypes.func,
    })
  ),
};

export {
  ModalProvider as default,
  ModalManager,
  useModal,
  useModalState,
  useModalDispatch,
  showModal,
  hideModal,
  showStep,
};