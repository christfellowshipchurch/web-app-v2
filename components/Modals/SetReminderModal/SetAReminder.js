import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'ui-kit';
import { useCurrentUser } from 'hooks';
import Confirmation from '../ConnectCardModal/Confirmation';
import SetAReminderForm from './SetAReminderForm';

function SetAReminder(props = {}) {
  const { currentUser } = useCurrentUser();
  const [serviceTime, setServiceTime] = useState(null);

  function render(step) {
    switch (step) {
      case 0: {
        return (
          <SetAReminderForm
            {...currentUser?.profile}
            defaultCampus={props?.defaultCampus}
            handleCallBack={e => setServiceTime(e)}
          />
        );
      }
      case 1: {
        return (
          <Confirmation
            serviceTime={serviceTime}
            campus={props?.defaultCampus}
          />
        );
      }
      default: {
        return <SetAReminderForm />;
      }
    }
  }

  return (
    <Modal width={800} {...props}>
      {render}
    </Modal>
  );
}

SetAReminder.propTypes = {
  // ...Modal.propTypes,
  defaultCampus: PropTypes.string,
};

SetAReminder.defaultProps = {
  defaultCampus: 'Palm Beach Gardens',
};

export default SetAReminder;
