import React, { useEffect, useState } from 'react';
import { hideModal, useModalDispatch } from 'providers/ModalProvider';
import { Box, Button, Icon } from 'ui-kit';
import { useRouter } from 'next/router';
import { icsLinkEvents } from 'utils';
import { useCampus } from 'hooks';
import { icsLink } from 'components/AddToCalendar/utils';

const ConfirmationScreen = (props = {}) => {
  const modalDispatch = useModalDispatch();
  const router = useRouter();
  const [campusAddress, setCampusAddress] = useState(
    'Christ Fellowship Church'
  );
  const { campus: eventCampus } = useCampus({
    variables: {
      campusName: props?.campus,
    },
  });

  useEffect(() => {
    async function getCampusAddress() {
      try {
        const { street1, city, state, postalCode } = await eventCampus;
        setCampusAddress(
          [street1, city, state, postalCode.substring(0, 5)].join(', ')
        );
      } catch (error) {
        setCampusAddress('Christ Fellowship Church');
      }
    }
    getCampusAddress();
  }, [eventCampus]);

  const events = icsLinkEvents(
    [{ day: 'Sunday', time: props?.serviceTime }],
    campusAddress,
    props?.campus
  );

  console.log('events', events[0].event);
  console.log('campusAddress', campusAddress);

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
          href={icsLink(events[0].event)}
          borderRadius="xxl"
          size="s"
          px="base"
          variant="secondary"
          mr="xs"
        >
          ADD TO CALENDAR
        </Button>
        <Button
          borderRadius="xxl"
          size="s"
          px="base"
          ml={{ _: 0, lg: 'xs' }}
          m={{ _: 'xs', lg: 0 }}
          onClick={() => modalDispatch(hideModal())}
        >
          CONTINUE
        </Button>
      </Box>
    </Box>
  );
};
export default ConfirmationScreen;
