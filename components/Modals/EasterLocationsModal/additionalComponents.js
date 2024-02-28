import { Box, Button, Divider, Select } from 'ui-kit';
import Styled from './EasterLocationsModal.styles';
import { handleSocialShare } from 'components/Share/shareUtils';
import { useState } from 'react';
import { icsLink } from 'components/AddToCalendar/utils';
import { addMinutes } from 'date-fns';

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
          <Box display="flex" width="330px">
            <Select
              mt="s"
              mr="base"
              borderColor="primary"
              onChange={e => setSelectedDay(e.target.selectedIndex)}
              name="day"
            >
              {dateTimes?.map(event => {
                return (
                  <Select.Option>{`${event.day} ${event.date}`}</Select.Option>
                );
              })}
            </Select>
            <Select
              mt="s"
              borderColor="primary"
              onChange={e => setSelectedTime(e.target.selectedIndex)}
              name="time"
              width={160}
            >
              {dateTimes[selectedDay]?.times?.map(event => {
                console.log(event, { selectedDay });
                return <Select.Option>{event}</Select.Option>;
              })}
            </Select>
          </Box>
          <Button
            as="a"
            bg="#3B7DD9"
            download="ChristFellowshipChurch.ics"
            href={icsLink(easterEvent?.event)}
            mt="s"
            border="1px solid #000"
            borderRadius={50}
          >
            Add to Calendar
          </Button>
          <Divider mt="base" />
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Box fontSize={{ _: 18, md: 24 }} fontWeight="bold" mt="base">
            Invite A Friend
          </Box>
          <Box mt="s" color="#818181" fontSize={14} fontWeight="bold">
            Pick your message
          </Box>
          <Select
            mt="s"
            width="330px"
            borderColor="primary"
            onChange={e => setSelectedMessage(e.target.value)}
            name="message"
          >
            {SMS_OPTIONS.map(message => {
              return <Select.Option>{message}</Select.Option>;
            })}
          </Select>
          <Styled.SendTextMessage
            onClick={() =>
              handleSocialShare({
                shareType: 'sms',
                shareMessages: { sms: selectedMessage },
              })
            }
          >
            Send a Text Message
          </Styled.SendTextMessage>
        </Box>
      </Box>
    </Styled.DontMissService>
  );
};
