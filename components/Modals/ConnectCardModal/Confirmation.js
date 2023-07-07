import React from 'react';
import { hideModal, useModalDispatch } from 'providers/ModalProvider';
import { Box, Button, Icon } from 'ui-kit';
import { useRouter } from 'next/router';
import { icsLinkEvents } from 'utils';
import { useCampus } from 'hooks';
import { icsLink } from 'components/AddToCalendar/utils';

const ConfirmationScreen = (props = {}) => {
  const modalDispatch = useModalDispatch();
  const router = useRouter();
  //grabs address from current campus
  const { city, street1, state, postalCode } = useCampus({
    variables: {
      campusName: props?.campus,
    },
  });

  const events = icsLinkEvents(
    [{ day: 'Sunday', time: props?.serviceTime }],
    `${street1}, ${city}, ${state} ${postalCode}`
  );

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
          as="a"
          download="ChristFellowshipChurch.ics"
          href={icsLink(events[0])}
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
