export const churchForEveryGeneration = [
  {
    __typename: 'MediaContentItem',
    title: 'KIDS',
    summary: 'Babies – Elementary',
    coverImage: {
      sources: [
        {
          __typename: 'ImageMediaSource',
          uri: 'external-landing/kids.jpeg',
        },
      ],
    },
    routing: {
      __typename: 'Route',
      pathname: 'christ-fellowship-kids',
    },
  },
  {
    __typename: 'MediaContentItem',
    title: 'STUDENTS',
    summary: 'Middle & High School',
    coverImage: {
      sources: [
        {
          __typename: 'ImageMediaSource',
          uri: 'external-landing/students.jpeg',
        },
      ],
    },
    routing: {
      __typename: 'Route',
      pathname: 'students',
    },
  },
  {
    __typename: 'MediaContentItem',
    title: 'YOUNG ADULTS',
    summary: 'College Students / 20s + 30s',
    coverImage: {
      sources: [
        {
          __typename: 'ImageMediaSource',
          uri: 'external-landing/young-adults.jpeg',
        },
      ],
    },
    routing: {
      __typename: 'Route',
      pathname: 'young-adults',
    },
  },
];

export const lifeToTheFullest = [
  {
    title: 'Know God personally',
    subtitle:
      'You can know Jesus on a personal level. See how a relationship with Him changes your life for the better.',
    icon: 'heart',
  },
  {
    title: 'Discover your purpose',
    subtitle:
      "You're here for a reason. Find out who God created <i>you</i> to be and learn how to live life on purpose.",
    icon: 'search',
  },
  {
    title: 'Grow in your relationships',
    subtitle:
      'You weren’t meant to do life alone. Find friends and build stronger relationships with God and others.',
    icon: 'handshake',
  },
  {
    title: 'Impact your world',
    subtitle:
      'You can make a difference. Learn how to impact people in your sphere of influence, your community, and on the other side of the world.',
    icon: 'world',
  },
];

export const startsHereButtons = [
  {
    title: 'Attend a Sunday Service',
    subtitle:
      'Service happens every week in person and online. We can’t wait to meet you.',
    image: 'external-landing/find-a-location.png',
    call: 'Find a Location',
    action: '/locations',
  },
  {
    title: 'Discover What’s Here',
    subtitle:
      'See how you and your family can grow in your faith, find friends, and serve others.',
    image: 'external-landing/ask-a-question.png',
    call: 'Learn More',
    action: '/it-all-starts-here',
  },
];
