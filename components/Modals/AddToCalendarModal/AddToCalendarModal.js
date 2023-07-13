/**
 * AddToCalendarModal.js
 *
 * Author: Daniel Wood
 * Created: Feb 18, 2022
 *
 * Add service time to calendar.
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Modal } from 'ui-kit';
import { icsLink } from 'components/AddToCalendar/utils';
import { hideModal, useModalDispatch } from 'providers/ModalProvider';

const AddToCalendarModal = ({ title, events }) => {
  const modalDispatch = useModalDispatch();

  return (
    <Modal>
      <Box px="l" py="base">
        <Box
          as="h2"
          mx={{ _: 0, sm: 'l' }}
          color="secondary"
          textAlign="center"
          mb="l"
        >
          {title}
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr"
          justifyContent="center"
          mx={{ _: 0, sm: 'base' }}
        >
          {events &&
            events.length > 0 &&
            events.map(n => (
              <Button
                as="a"
                download="ChristFellowshipChurch.ics"
                href={icsLink(n?.event)}
                onClick={() => modalDispatch(hideModal())}
                mx="auto"
                my="s"
                minWidth={{ _: 115, sm: 150 }}
                borderRadius="xxl"
                size="s"
              >
                {n?.label}
              </Button>
            ))}
        </Box>
      </Box>
    </Modal>
  );
};

AddToCalendarModal.propTypes = {
  title: PropTypes.string,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      event: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        address: PropTypes.string,
        startTime: PropTypes.instanceOf(Date),
        endTime: PropTypes.instanceOf(Date),
      }),
    })
  ),
};
AddToCalendarModal.defaultProps = {
  title: 'What time would you like to attend?',
  events: [],
};

export default AddToCalendarModal;
