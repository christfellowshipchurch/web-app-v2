import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'ui-kit';
import { useCurrentUser, useSubmitSetReminder } from 'hooks';
import Confirmation from '../ConnectCardModal/Confirmation';
import SetAReminderForm from './SetAReminderForm';
import { icsLinkEvents } from 'utils';

function SetAReminder(props = {}) {
  const { currentUser } = useCurrentUser();

  const [test] = useSubmitSetReminder();

  console.log('test', test);

  console.log('SetAReminder', { props });

  //data.serviceTime is what I need to not need a time

  function setAddtoCalendar(data) {
    // add logic for calendar button
    // createSundayLink({time: data?.serviceTime, day: 'Sunday})
    // icsLinkEvents({ time: data?.serviceTime, address: 'test' });

    // return console.log('data', { data });

    return data;
  }

  function render(step) {
    // console.log('modal:', { step, props });
    switch (step) {
      case 0: {
        return (
          <SetAReminderForm
            {...currentUser?.profile}
            defaultCampus={props?.defaultCampus}
            handleCallBack={setAddtoCalendar}
          />
        );
      }
      case 1: {
        return <Confirmation data={setAddtoCalendar()} />;
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
