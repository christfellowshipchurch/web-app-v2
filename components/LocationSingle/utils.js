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
