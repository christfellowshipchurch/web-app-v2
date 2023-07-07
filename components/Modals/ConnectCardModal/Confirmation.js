import React from 'react';
import {
  hideModal,
  useModalDispatch,
  showModal,
} from 'providers/ModalProvider';
import { Box, Button, Icon } from 'ui-kit';
import { useRouter } from 'next/router';
import { icsLinkEvents } from 'utils';

const ConfirmationScreen = props => {
  const modalDispatch = useModalDispatch();
  const router = useRouter();

  console.log('confirmationprops', props);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="l"
      textAlign="center"
      px="xxl"
    >
      <Icon name="check" color="success" size="100" />
      <Box as="h2" color="secondary" my="l">
        {!router.asPath.includes('locations')
          ? `You're all set!`
          : `Be sure to check out your email for more details and we'll see you this Sunday.`}
      </Box>

      <Box display={{ _: 'inline', lg: 'flex' }}>
        <Button
          onClick={() => {
            modalDispatch(
              showModal('AddToCalendar', {
                title: 'What service would you like to attend?',
                events: icsLinkEvents(props?.serviceTimes, 'address'),
              })
            );
          }}
          borderRadius="xxl"
          size="s"
          px="l"
          variant="secondary"
          mr="xs"
        >
          ADD TO CALENDAR
        </Button>
        <Button
          borderRadius="xxl"
          size="s"
          px="l"
          onClick={() => modalDispatch(hideModal())}
        >
          CONTINUE
        </Button>
      </Box>
    </Box>
  );
};
export default ConfirmationScreen;
