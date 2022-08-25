const navigation = {
  mainMenuLinks: [
    {
      call: 'About',
      action: '/about',
    },
    {
      call: 'Locations',
      action: '/locations',
    },
    {
      call: 'Messages',
      action: '/discover',
    },
    {
      call: 'Events',
      action: '/events',
    },
    {
      call: 'Next Steps',
      action: '/it-all-starts-here',
    },
    {
      call: 'Give',
      action: '/give',
    },
  ],
  subMenuLinks: [
    {
      call: 'Get involved',
      action: '/it-all-starts-here',
    },
    {
      call: 'Find community',
      action: '/groups',
    },
    {
      call: 'Strengthen my marriage',
      action: '/discover?c=married-people',
    },
    {
      call: 'Be a better parent',
      action: '/christ-fellowship-kids',
    },
    {
      call: 'Heal from past hurts',
      action: '/freedom-and-care',
    },
    {
      call: 'Improve my finances',
      action: '/discover?c=stewardship',
    },
  ],
  additionalLinks: [
    {
      headerLink: {
        call: 'Next Steps',
        action: '/it-all-starts-here',
      },
      subLinks: [
        {
          call: 'Jesus',
          action: '/discover?c=jesus',
        },
        {
          call: 'Baptism',
          action: '/events/interested-in-getting-baptized',
        },
        {
          call: 'Journey',
          action: '/events/journey',
        },
        {
          call: 'Groups and Classes',
          action: '/groups',
        },
        {
          call: 'Volunteer',
          action: '/dreamteam',
        },
      ],
    },
    {
      headerLink: {
        call: 'Give',
        action: '/give',
      },
      subLinks: [
        {
          call: 'Why We Give',
          action: '/give',
        },
        {
          call: 'Give Now',
          action: 'https://pushpay.com/g/christfellowship',
        },
        {
          call: 'Kingdom Builders',
          action: '/kingdom-builders',
        },
      ],
    },
    {
      headerLink: {
        call: 'Ministries',
        action: '/',
      },
      subLinks: [
        {
          call: 'Kids',
          action: '/christ-fellowship-kids',
        },
        {
          call: 'Students',
          action: '/events/cfstudents',
        },
        {
          call: 'Young Adults',
          action: '/events/cf-young-adults',
        },
        {
          call: 'Men',
          action: '/discover?c=men',
        },
        {
          call: 'Sisterhood',
          action: '/discover?c=sisterhood',
        },
        {
          call: 'Marriage',
          action: '/discover?c=married-people',
        },
        {
          call: 'Care',
          action: '/freedom-and-care',
        },
        {
          call: 'Missions',
          action: '/discover?c=missions',
        },
        {
          call: 'Special Needs',
          action: '/discover?c=special-needs',
        },
      ],
    },
    {
      headerLink: {
        call: 'Watch, Read, & More',
        action: '/discover?c=sundays',
      },
      subLinks: [
        { call: 'On-Demand Messages', action: '/discover?c=sundays' },
        { call: 'Devotionals & Articles', action: '/' },
        { call: 'Podcasts', action: '/' },
        { call: 'Music', action: '/' },
      ],
    },
  ],
};

export default navigation;
