import React from 'react';

import GroupCard from './GroupCard';
import { CardGrid } from 'ui-kit';

const heroAvatars = [
  {
    node: {
      photo: {
        uri:
          'https://cloudfront.christfellowship.church/GetImage.ashx?guid=fc61edd2-6888-4486-a7fe-bd720cb82241&quality=50&maxwidth=100&maxheight=100',
      },
    },
  },
  {
    node: {
      photo: {
        uri: 'https://rock.christfellowship.church/GetImage.ashx?id=2218791',
      },
    },
  },
  {
    node: {
      photo: {
        uri:
          'https://cloudfront.christfellowship.church/GetImage.ashx?guid=9c96050a-aeb8-49a1-94e3-bc325eacebb6&quality=50&maxwidth=100&maxheight=100',
      },
    },
  },
];

const avatars = [
  {
    node: {
      photo: {
        uri:
          'https://cloudfront.christfellowship.church/GetImage.ashx?guid=3376aa0d-5610-4a8a-ae24-046250ebf297&quality=50&maxwidth=100&maxheight=100',
      },
    },
  },
  {
    node: {
      photo: {
        uri:
          'https://cloudfront.christfellowship.church/GetImage.ashx?guid=4d39cddc-264c-4317-9768-a607c95f09bb&quality=50&maxwidth=100&maxheight=100',
      },
    },
  },
  {
    node: {
      photo: {
        uri: 'https://rock.christfellowship.church/GetImage.ashx?id=2218791',
      },
    },
  },
  {
    node: {
      photo: {
        uri:
          'https://cloudfront.christfellowship.church/GetImage.ashx?guid=1f7aa067-d7c5-4afa-a5ae-5e7af37f01c8&quality=50&maxwidth=100&maxheight=100',
      },
    },
  },
  {
    node: {
      photo: {
        uri:
          'https://cloudfront.christfellowship.church/GetImage.ashx?guid=af7bb444-66f0-49d0-afb4-d1ff12d4c5b3&quality=50&maxwidth=100&maxheight=100',
      },
    },
  },
];

const blankAvatars = [
  '',
  {
    node: {
      photo: {
        uri:
          'https://cloudfront.christfellowship.church/GetImage.ashx?guid=fc61edd2-6888-4486-a7fe-bd720cb82241&quality=50&maxwidth=100&maxheight=100',
      },
    },
  },
  '',
  {
    node: {
      photo: {
        uri: 'https://rock.christfellowship.church/GetImage.ashx?id=2218791',
      },
    },
  },
  '',
  '',
  '',
];

const groupSummary =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

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
    dateTime={new Date()}
    coverImage="https://source.unsplash.com/random/1000x1000"
    totalAvatars={10}
  />
);

export const GridView = () => (
  <CardGrid maxWidth="68.75rem">
    <GroupCard
      title="Group Title"
      groupType="Group Type"
      summary={groupSummary}
      heroAvatars={heroAvatars}
      avatars={avatars}
      dateTime={new Date()}
      coverImage="https://source.unsplash.com/random/1000x1000"
      totalAvatars={17}
    />
    <GroupCard
      title="A Group That Does Not Contain Summary Text"
      groupType="Group Type"
      heroAvatars={heroAvatars}
      avatars={blankAvatars}
      coverImage="https://source.unsplash.com/random/1000x1000"
      totalAvatars={100}
    />
    <GroupCard
      title="No Leaders in Group"
      summary={groupSummary}
      avatars={avatars}
      dateTime={new Date()}
      coverImage="https://source.unsplash.com/random/1000x1000"
      totalAvatars={512}
    />
  </CardGrid>
);
