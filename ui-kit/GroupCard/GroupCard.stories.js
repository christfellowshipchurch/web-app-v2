import React from 'react';

import GroupCard from './GroupCard';

const heroAvatars = [
  "https://picsum.photos/id/1062/200/200",
  "https://picsum.photos/id/237/200/200",
  "https://picsum.photos/id/433/200/200",
]

const avatars = [
  "https://picsum.photos/id/1062/140/180",
  "https://picsum.photos/id/237/140/180",
  "https://picsum.photos/id/275/140/180",
  "https://picsum.photos/id/334/140/180",
  "https://picsum.photos/id/338/140/180",
  "https://picsum.photos/id/433/140/180",
] 

const groupSummary = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

export default {
  title: 'ui-kit/GroupCard',
  component: GroupCard,
};

export const Default = () => (
  <GroupCard 
    title="Group Title" 
    groupType="Group Type"
    summary={groupSummary}
    heroAvatars={heroAvatars}
    avatars={avatars}
    dateTime="Wednesdays at 6:30pm"
    coverImage="https://source.unsplash.com/random/1000x1000"
    maxWidth="500px"
  />
);
