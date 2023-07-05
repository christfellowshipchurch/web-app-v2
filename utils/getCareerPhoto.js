import { camelCase } from 'lodash';

const photos = {
  businessAndFinance: '/careers/campus-operations.jpeg',
  cafe: '/location-pages/belle-glade-background.png',
  campusOperations: '/external-landing/new-here-1.jpeg',
  centralOperations: '/careers/central-operations.jpg',
  creative: '',
  discipleshipMinistries: '/careers/discipleship-ministries.jpg',
  events: '',
  kids: '',
  kidsCare: '',
  missions: '/careers/missions.jpg',
  onlineMinistries: '/careers/online-ministries.jpg',
  production: '/careers/production.jpg',
  cfSeu: '',
  specialNeeds: '',
};

const getCareerPhoto = name => {
  //Grabs Photo for Department
  const deptPhoto = photos[camelCase(name)];
  const defaultPhoto = '/careers/careers.jpeg';

  return deptPhoto ? deptPhoto : defaultPhoto;
};

export default getCareerPhoto;
