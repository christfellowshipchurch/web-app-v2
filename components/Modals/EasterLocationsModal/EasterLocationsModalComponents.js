import { Box, Divider } from 'ui-kit';
import Styled from './EasterLocationsModal.styles';

export const EasterModalTitle = props => {
  return (
    <Box>
      <Box display="flex" alignItems="flex-end">
        <Box as="h1" fontSize={54} mb={0}>
          EASTER
        </Box>
        <Box width={90} fontWeight="bold" fontSize={12} mb={10}>
          AT CHRIST FELLOWSHIP
        </Box>
      </Box>
      <Box as="h1" fontSize={32}>
        {props?.name !== 'Trinity' && props?.name !== 'Online'
          ? props?.name
          : props?.name !== 'Trinity'
          ? 'Online - Christ Fellowship Everywhere'
          : 'Trinity in Palm Beach Gardens'}
      </Box>
      {props?.campusAddress && (
        <Box
          as="a"
          color="#3B7DD9"
          fontSize={24}
          textDecoration="underline"
          href={props?.mapLink}
        >
          {props?.campusAddress &&
            props?.name !== 'Online' &&
            props?.campusAddress}
        </Box>
      )}
    </Box>
  );
};

export const DontMissService = props => {
  const addToCalendar = () => {};
  const sendTextMessage = () => {};

  return (
    <Styled.DontMissService>
      <Box mx="base" my="base" width="100%">
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Box fontSize={{ _: 18, md: 24 }} fontWeight="bold">
            Don’t Miss Service
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            mt="s"
            color="#818181"
            fontSize={14}
            fontWeight="bold"
          >
            <Box minWidth="70%">Date</Box>
            <Box minWidth="30%">Time</Box>
          </Box>
          {/* Select Date and Time Section - MISSING */}
          <Styled.AddToCalendar onClick={addToCalendar}>
            Add to Calendar
          </Styled.AddToCalendar>

          <Divider mt="base" />
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Box fontSize={{ _: 18, md: 24 }} fontWeight="bold" mt="base">
            Invite A Friend
          </Box>
          <Box mt="s" color="#818181" fontSize={14} fontWeight="bold">
            Pick your message
          </Box>
          {/* Select Message Section - MISSING*/}
          <Styled.SendTextMessage onClick={sendTextMessage}>
            Send a Text Message
          </Styled.SendTextMessage>
        </Box>
      </Box>
    </Styled.DontMissService>
  );
};
