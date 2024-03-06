import { Box, Button, Divider, Select } from 'ui-kit';
import Styled from './EasterLocationsModal.styles';
import { handleSocialShare, shareMessaging } from 'components/Share/shareUtils';
import { useState } from 'react';
import { icsLink } from 'components/AddToCalendar/utils';
import { addMinutes } from 'date-fns';
import { useCurrentBreakpoint } from 'hooks';
import { colorHover } from 'utils';

const SMS_OPTIONS = [
  'Hey! Come with me to Easter at Christ Fellowship!',
  'Check this out! Would you want to come with me to an Easter service?',
  'Hi! I wanted to invite you to come to Easter with me at my church. Are you free?',
];

function parseTimeAsInt(_time) {
  const time = _time?.toString().trim().toUpperCase();
  const a = time.match(/(AM)|(PM)/g)?.join();
  const [hour, minute] = time
    .replace(/(AM)|(PM)/g, '')
    .trim()
    .split(':')
    .map(n => parseInt(n));
  let hour24 = a === 'PM' ? hour + 12 : hour;

  return [hour24, minute || '00'];
}

const setEasterEvent = ({
  dateTimes,
  selectedDay,
  selectedTime,
  campus,
  campusAddress,
}) => {
  let day = dateTimes[selectedDay]?.day;
  let date = dateTimes[selectedDay]?.date;
  let time = dateTimes[selectedDay]?.times[selectedTime];
  let milTime = parseTimeAsInt(time);
  let startTime = new Date(`${date}, 2024 ${milTime[0]}:${milTime[1]}`);
  let serviceType = day === 'Friday' ? 'Good Friday' : 'Easter';
  return {
    label: dateTimes[selectedDay]?.selectedIndex,
    event: {
      title:
        campus !== 'Trinity' || campus !== 'Online'
          ? `${serviceType} service at Christ Fellowship Church in ${campus}`
          : campus === 'Trinity'
          ? `${serviceType}  service at Trinity Church by Christ Fellowship`
          : `${serviceType}  service online`,
      description: `Join us ${day} for ${serviceType}!`,
      address: campusAddress,
      startTime: startTime,
      endTime: addMinutes(startTime, 90),
    },
  };
};

export const EasterModalTitle = props => {
  const currentBreakpoints = useCurrentBreakpoint();
  let cfe = false;
  if (props?.name.includes('Español')) {
    cfe = true;
  }
  return (
    <Box>
      <Box display="flex" alignItems="flex-end">
        <Box as="h1" fontSize={54} mb={0}>
          {!cfe ? 'EASTER' : 'PASCUA'}
        </Box>
        <Box width={90} fontWeight="bold" fontSize={12} mb={10} ml="xs">
          {!cfe ? 'AT' : 'EN'} CHRIST FELLOWSHIP
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
          target="_blank"
          color="#3B7DD9"
          fontSize={20}
          textDecoration="underline"
          href={props?.mapLink}
        >
          {props?.campusAddress && props?.name !== 'Online' && (
            <Box>
              {props?.campusStreet}, {currentBreakpoints.isSmall && <br />}
              {props?.campusAddress}
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export const DontMissService = props => {
  const [selectedMessage, setSelectedMessage] = useState(
    'Hey! Come with me to Easter at Christ Fellowship!'
  );
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTime, setSelectedTime] = useState(0);

  const { campus, campusAddress, data } = props;
  const { dateTimes } = data;

  const easterEvent = setEasterEvent({
    dateTimes,
    selectedDay,
    selectedTime,
    campus,
    campusAddress,
  });
  const messages = shareMessaging({
    ...props,
    shareMessages: {
      sms: `${selectedMessage}`,
    },
    url: document.URL,
  });
  let url = document.URL;
  let title = 'Easter at Christ Fellowship';
  let text = messages.sms;
  const shareDetails = { title, url, text };

  const handleSharing = async () => {
    if (navigator.share) {
      navigator
        .share(shareDetails)
        .then(() => console.log('Successful share'))
        .catch(error => console.log('Error sharing: ', error));
    } else {
      handleSocialShare({
        shareType: 'sms',
        shareMessages: {
          sms: `${selectedMessage} https://www.christfellowship.church/easter-2024`,
        },
      });
      console.log('Navigator.share is not a function');
    }
  };

  let cfe = campus.includes('Español');
  return (
    <Styled.DontMissService>
      <Box mx="base" my="base" width="100%">
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Box fontSize={{ _: 18, md: 20 }} pl={4} fontWeight="bold">
            {!cfe ? 'Don’t Miss Service' : 'No Te Pierdas el Servicio'}
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            mt="s"
            pl={4}
            color="#818181"
            fontSize={14}
            fontWeight="bold"
          >
            <Box minWidth="65%">{!cfe ? 'Date' : 'Fecha'}</Box>
            <Box minWidth="35%">{!cfe ? 'Time' : 'Hora'}</Box>
          </Box>
          <Box display="flex" width={{ _: 200, md: 330 }}>
            <Styled.CustomSelect
              width={300}
              onChange={e => setSelectedDay(e.target.selectedIndex)}
              name="day"
              pr={cfe && 30}
            >
              {dateTimes?.map(event => {
                return (
                  <Select.Option>{`${event.day}, ${event.date}`}</Select.Option>
                );
              })}
            </Styled.CustomSelect>
            <Styled.CustomSelect
              onChange={e => setSelectedTime(e.target.selectedIndex)}
              name="time"
              width={160}
              ml="xs"
              pr={30}
            >
              {dateTimes[selectedDay]?.times?.map(event => {
                return <Select.Option>{event}</Select.Option>;
              })}
            </Styled.CustomSelect>
          </Box>
          {/* Add To Calendar */}
          <Styled.StyledButton
            color="white"
            buttonColor="#3B7DD9"
            buttonHover={colorHover('#3B7DD9')}
            download="ChristFellowshipChurch.ics"
            href={icsLink(easterEvent?.event)}
            width={{ _: 300, md: 'none' }}
          >
            {!cfe ? 'Add to Calendar' : 'Añadir al Calendario'}
          </Styled.StyledButton>
          <Divider mt="base" />
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Box fontSize={{ _: 18, md: 20 }} pl={4} fontWeight="bold" mt="base">
            {!cfe ? 'Invite A Friend' : 'Invita A Un Amigo'}
          </Box>
          <Box color="#818181" mt="s" pl={4} fontSize={14} fontWeight="bold">
            {!cfe ? 'Pick your message' : 'Elige tu Mensaje'}
          </Box>
          <Styled.MessageSelect
            width={{ _: 260, md: 330 }}
            onChange={e => setSelectedMessage(e.target.value)}
            name="message"
          >
            {SMS_OPTIONS.map(message => {
              return <Select.Option>{message}</Select.Option>;
            })}
          </Styled.MessageSelect>
          {/* Send a Text Message */}
          <Styled.StyledButton
            // color="black"
            buttonColor="#ffec7f"
            buttonHover={colorHover('#ffec7f')}
            width={{ _: 300, md: 'none' }}
            onClick={handleSharing}
          >
            {!cfe ? 'Send a Text Message' : 'Envía un Mensaje de Texto'}
          </Styled.StyledButton>
        </Box>
      </Box>
    </Styled.DontMissService>
  );
};
