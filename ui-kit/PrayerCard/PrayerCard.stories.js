import React from 'react';
import { Box } from 'ui-kit';

import PrayerCard from './PrayerCard';
import { CardCarousel } from '../';

export default {
  component: PrayerCard,
  tags: ['autodocs'],
};

const cardProps = {
  date: 'Aug 23, 2020',
  description: 'This is where my prayer would be displayed.',
  coverImage: 'https://source.unsplash.com/random/1000x1000',
  mx: 's',
};

export const Default = () => (
  <CardCarousel cardsDisplayed={4} hideArrows>
    <PrayerCard {...cardProps} />
    <PrayerCard {...cardProps} />
    <PrayerCard {...cardProps} />
    <PrayerCard {...cardProps} />
  </CardCarousel>
);
