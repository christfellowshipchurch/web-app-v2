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
