/**
 * useFeatureAction.js
 *
 * This hook is really here to give us a more consentraited access to other global hooks like `modalDispatch` and `authDispatch`
 */
import { update as updateAuth, useAuth } from 'providers/AuthProvider';
import { useModalDispatch, showModal } from 'providers/ModalProvider';

/**
 * preventDefault
 * @param {event} The event passed in from pressing an `<a>`
 * @returns
 */
function preventDefault(event) {
  if (event.preventDefault && typeof event.preventDefault === 'function') {
    event.preventDefault();
  }
}

function useFeatureAction(options = {}) {
  const modalDispatch = useModalDispatch();
  const [{ authenticated }, authDispatch] = useAuth();

  const showConnectModal = (relatedNode, modalProps) => {
    modalDispatch(
      showModal('ConnectModal', {
        groupId: relatedNode?.id,
        ...modalProps,
      })
    );
  };

  const onPressActionItem = (event, { action, relatedNode, modalProps }) => {
    /**
     * note : if an action should do anything outside of linking using `<a>`, break the default and handle your logic here
     *
     * preventDefault(event)
     */
    switch (action) {
      case 'READ_CONTENT':
      case 'READ_EVENT':
      case 'OPEN_NODE':
      case 'OPEN_URL':
        return relatedNode?.url;
      case 'OPEN_AUTHENTICATED_URL':
      case 'OPEN_CHANNEL':
      case 'CONTACT_GROUP':
        preventDefault(event);

        if (!authenticated) {
          modalDispatch(showModal('Auth'));
          authDispatch(
            updateAuth({
              onSuccess: () => showConnectModal(relatedNode, modalProps),
            })
          );
        } else {
          showConnectModal(relatedNode, modalProps);
        }
        break;
      default:
        break;
    }
  };

  return [onPressActionItem];
}

export default useFeatureAction;
