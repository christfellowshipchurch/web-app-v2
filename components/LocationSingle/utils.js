import { Box, Button } from 'ui-kit';

export const validDaysOfWeek = scheduleData => {
  const validDays = [];

  for (const day in scheduleData) {
    const schedules = scheduleData[day];
    if (
      schedules !== null &&
      Array.isArray(schedules) &&
      schedules.length > 0
    ) {
      validDays.push(day);
    }
  }

  return validDays.map(day => {
    return {
      [day]: scheduleData[day],
    };
  });
};

export const weekdaySpanishTranslation = weekDay => {
  switch (weekDay) {
    case 'Monday': {
      return 'Lunes';
    }
    case 'Tuesday': {
      return 'Martes';
    }
    case 'Wednesday': {
      return 'Miércoles';
    }
    case 'Thursday': {
      return 'Jueves';
    }
    case 'Friday': {
      return 'Viernes';
    }
    case 'Saturday': {
      return 'Sábado';
    }
    case 'Sunday': {
      return 'Domingo';
    }
    default: {
      return '';
    }
  }
};

export const groupsClassesCampusSection = language => {
  switch (language) {
    case 'English': {
      return (
        <Box>
          <Box as="h3">Groups & Classes</Box>
          <Box>
            Discover groups and classes to help you grow in your relationship
            with God and others.
          </Box>
          <Button size="s" mt="s">
            Find a Group or Class
          </Button>
        </Box>
      );
    }
    case 'Spanish': {
      return (
        <Box>
          <Box as="h3">Grupos y Clases</Box>
          <Box>
            Descubre grupos y clases que te ayudarán a crecer en tu relación con
            Dios y los demás.
          </Box>
          <Button size="s" mt="s">
            Grupos y Clases
          </Button>
        </Box>
      );
    }
    default: {
      return '';
    }

    // export const campusNameFormatted = campusName => {
    //   switch (campusName) {
    //     case 'Cf Everywhere':
    //       return 'Online (CF Everywhere)';
    //     case 'Port St Lucie':
    //       return 'Port St. Lucie';
    //     default:
    //       return campusName;
  }
};
