import addMinutes from 'date-fns/addMinutes';
import nextSunday from 'date-fns/nextSunday';
import setMinutes from 'date-fns/setMinutes';
import setHours from 'date-fns/setHours';
import setSeconds from 'date-fns/setSeconds';

function parseTimeAsInt(_time) {
  const time = _time?.toString().trim().toUpperCase();
  const a = time.match(/(AM)|(PM)/g)?.join();
  const [hour, minute] = time
    .replace(/(AM)|(PM)/g, '')
    .trim()
    .split(':')
    .map(n => parseInt(n));
  let hour24 = a === 'PM' ? hour + 12 : hour;

  return [hour24, minute];
}

function icsLinkEvents(serviceTimes, address) {
  return serviceTimes.map(({ day, time }) => {
    let now = new Date();
    let [hour, minute] = parseTimeAsInt(time);
    let sunday = nextSunday(now);
    sunday = setMinutes(sunday, minute ?? 0);
    sunday = setHours(sunday, hour ?? 0);
    sunday = setSeconds(sunday, 0);

    return {
      label: `${time}`,
      event: {
        title: 'Sunday service at Christ Fellowship Church',
        description: `Join us this Sunday!`,
        address,
        startTime: sunday,
        endTime: addMinutes(sunday, 90),
      },
    };
  });
}

export default icsLinkEvents;
