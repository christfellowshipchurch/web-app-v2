import React from 'react';
import { camelCase } from 'lodash';

const photos = {
  businessAndFinance: '/careers/careers.jpeg',
  cafe: '/location-pages/belle-glade-background.png',
  campusOperations: '/external-landing/new-here-1.jpeg',
};

const getPhoto = name => {
  //Grabs Photo for Department
  const deptPhoto = photos[camelCase(name)];
  const defaultPhoto = '/careers/careers.jpeg';

  return deptPhoto ? deptPhoto : defaultPhoto;
};

export default getPhoto;
