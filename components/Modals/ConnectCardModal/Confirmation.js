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
  let events = null;

  useEffect(() => {
    if (window.location.pathname.includes('locations')) {
      if (!window.location.pathname.includes('#set-reminder-submitted')) {
        window.location = '#set-reminder-submitted';
      }
    }
  }, []);

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

  if (props?.serviceTime && props?.campus) {
    events = icsLinkEvents(
      [{ day: 'Sunday', time: props?.serviceTime }],
      campusAddress,
      props?.campus
    );
  }

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
      <Box as="h2" color="secondary" my="l" maxWidth="80vw">
        {!router.asPath.includes('locations')
          ? `You're all set!`
          : props?.campus.includes('Español')
          ? `Asegúrese de revisar su correo electrónico para obtener más detalles y nos vemos este domingo.`
          : `Be sure to check out your email for more details and we'll see you this Sunday.`}
      </Box>

      <Box display={{ _: 'inline', lg: 'flex' }}>
        {events && (
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
            {props?.campus.includes('Español')
              ? 'AÑADIR AL CALENDARIO'
              : 'ADD TO CALENDAR'}
          </Button>
        )}
        <Button
          borderRadius="xxl"
          size="s"
          px="base"
          ml={{ _: 0, lg: 'xs' }}
          m={{ _: 'xs', lg: 0 }}
          onClick={() => modalDispatch(hideModal())}
        >
          {props?.campus.includes('Español') ? 'CONTINUAR' : 'CONTINUE'}
        </Button>
      </Box>
    </Box>
  );
};
export default ConfirmationScreen;
