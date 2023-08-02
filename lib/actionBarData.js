const actionBarData = {
  __typename: 'ActionBarFeature',
  actions: [
    {
      __typename: 'ActionBarAction',
      title: 'My Groups',
      action: 'OPEN_URL',
      icon: 'users',
      theme: {
        __typename: 'Theme',
        type: null,
        colors: {
          __typename: 'ThemeColors',
          primary: 'rgb(0, 174, 239)',
        },
      },
      relatedNode: {
        __typename: 'Url',
        id: 'Url:f4974a223763b3a06ea2cd73ff30952be89d6281e05bc41f7ee423cd227a2b00ac473ab51d6349eb947f770d463c04fc42ee90c50704322e45c31cfd47cb12717019f816675bc52309cc59215a0a3e720ac00fcc9525c22dc7846266e678b7cd5b962a605342aac9fcc34e9e5430b7e8ae2e004363609cdd040c993075c7a5f068daece5d15b11a7b2378464664d1a2056979758d4fb80e3c111517efabac51f',
        url: '/connect',
      },
    },
    {
      __typename: 'ActionBarAction',
      title: 'Serve',
      action: 'OPEN_URL',
      icon: 'handshake',
      theme: {
        __typename: 'Theme',
        type: null,
        colors: {
          __typename: 'ThemeColors',
          primary: 'rgb(213, 33, 88)',
        },
      },
      relatedNode: {
        __typename: 'Url',
        id: 'Url:f4974a223763b3a06ea2cd73ff30952be89d6281e05bc41f7ee423cd227a2b00d1450f028a3cc27c877c299851f5ea5d0bf20586cf662125b7485c108bdbf55de41cfc2bdc70b4bf43007387b0fed21005c78e164ce1aa3dfe53929dd3cf299752f0655ecf2cea1234b4b679053222b20c10ded04588f1d7627388b57688422bd3268a6c4b400b0d2a5b5b1dbe9393396edb297b2a30ffd436d01b8a5452bffcaa9d576a65d00087f9c0d6fd9acee024',
        url: 'https://rock.christfellowship.church/dreamteam',
      },
    },
    {
      __typename: 'ActionBarAction',
      title: 'Give Now',
      action: 'OPEN_URL',
      icon: 'envelope-open-dollar',
      theme: {
        __typename: 'Theme',
        type: null,
        colors: {
          __typename: 'ThemeColors',
          primary: 'rgb(30, 194, 127)',
        },
      },
      relatedNode: {
        __typename: 'Url',
        id: 'Url:f4974a223763b3a06ea2cd73ff30952be89d6281e05bc41f7ee423cd227a2b008149a76a099525a2281fbe97f73d117893f31771c96eada69c8e6cfa4d87cf23ccb5278a9f5812b18a5e40c438486a1d1b776da5d8988e08adc6a9b1fd6dfbd7ae6e6c6e2a0879a093785e450f503d654786e633742c13ca2eafd03ca68d6f2839a087cd8a98abe7b3f263f824d075381f690d831175b72f09692e727a014a00',
        url: 'https://cf.church/pushpay?feed=connect',
      },
    },
  ],
};

export default actionBarData;
