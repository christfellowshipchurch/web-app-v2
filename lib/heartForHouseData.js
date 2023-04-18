import React from 'react';
import { gql, useQuery } from '@apollo/client';

import {
  VERTICAL_CARD_LIST_FEATURE_FRAGMENT,
  RELATED_FEATURE_NODE_FRAGMENT,
} from 'fragments';
import { VerticalCardListFeature } from 'components';

const GET_FEATURE = gql`
  query getFeature($id: ID!) {
    node(id: $id) {
      ... on VerticalCardListFeature {
        ...VerticalCardListFeatureFragment
      }
    }
  }

  ${VERTICAL_CARD_LIST_FEATURE_FRAGMENT}
  ${RELATED_FEATURE_NODE_FRAGMENT}
`;

const GetThereFirst = () => {
  const featureId =
    'VerticalCardListFeature:f6b30a38eb547f1f75676ce0557a7e05bed66de665564bd0c5e37f0692676795e12dca024e16de4c6d7782ed0288eb10570bc45a488bee66c93ee7b8735beb7614541cad14c2012f62b51ed9af1ac9026889697120ad4f7abc4253ee0799e103188dceffa09e7a9394fdc970c1672aa9038732acfbe815fefac2a0e799ce5d76a914520790ededb7f8661504af0499dd3501dd2a41d69a21c8d0898981c3ca4674207b9b769845fc694bdaf20ee929a91c8896f07d4fc3bc4badeb311180eeee2a9c7e1cfa3984c509cffc3de71e116487578ca7e98d64f93aea3e4a4a7af4ae0889360a18181cc78e8f47a4170aad413c1fa3556ef0d6e8aca0510770f9759944b5cf42084bae6f3998b3571e9482e3c3bb9b0fb14901686d1211d0c4f01f8dce6ca8eaf67f0b56909379120a5908b5a23084644543b4f3c93756c920c4349ebb45431f954b3504a593d5676ee9aaad605d1faa5e2ba2c21b08615202886f24e53ece137dbf516d35ab4d1ddcb1cc1ae3c823eb754ee4ef3a71936bb2d8be141174fd798441d79b6f87b01d30da0b6a9da5a7a1298f969abafce04fb2382003d4571c221480f8c3aeb30341e54e9037219ada1a0d61db345ae76b7dee2bb9fcb88a890d93430d70c2deab981629ebc4d0f9647bdfc62f28d7287ec480de1594e9732aaff641cc4913939b6417472fe63d81f7e6e08a2888b523318160de6e092d98a751b8a9230c7586f903a887a454';

  const query = useQuery(GET_FEATURE, {
    fetchPolicy: 'cache-and-network',
    variables: {
      id: featureId,
    },
  });

  const dataNoTitle = { ...query?.data?.node, title: null };

  return <VerticalCardListFeature data={dataNoTitle} />;
};

const statistics = [
  {
    image: '/heart-for-house/statistics/9340_Statistic.png',
    subtitle: 'people said "Yes" to Jesus in 2022.',
  },
  {
    image: '/heart-for-house/statistics/2294_Statistic.png',
    subtitle:
      'people decided to make a public declaration of their faith through baptism in 2022.',
  },
  {
    image: '/heart-for-house/statistics/100K_Statistic.png',
    subtitle:
      'subscribers on YouTube—including 30,000 new subscribers in last year!',
  },
  {
    image: '/heart-for-house/statistics/2700_Statistic.png',
    subtitle:
      'people experienced Christ Fellowship Westlake at the Grand Opening in March, including 400 kids!',
  },
];

const testimonies = [
  {
    name: '<p style="color:#E63E51;margin-bottom: 6px;">Alex and Melissa</p><p style="color:#E63E51;font-weight:normal"><i>Christ Fellowship Palm Beach Gardens</i></p>',
    description:
      '<b>We can’t give enough in comparison to what God has given our family through Christ Fellowship.</b>',
    image: '/heart-for-house/heart-logo-box.png',
  },
  {
    name: '<p style="color:#E63E51;margin-bottom: 6px;">Kyle and Michelle</p><p style="color:#E63E51;font-weight:normal"><i>Christ Fellowship Young Adults</i></p>',
    description:
      '<b>Each time I walk through the doors of Christ Fellowship on a Sunday, I immediately feel like I am at home.</b>',
    image: '/heart-for-house/heart-logo-box.png',
  },
  {
    name: '<p style="color:#E63E51;margin-bottom: 6px;">Kandice, 6 years old</p><p style="color:#E63E51;font-weight:normal"><i>Christ Fellowship Kids</i></p>',
    description:
      '<b>I added a second piggy bank to outdo myself in giving because that’s what I’ve seen my mommy do!</b>',
    image: '/heart-for-house/heart-logo-box.png',
  },
];

const data = {
  statistics,
  testimonies,
  GetThereFirst,
};

export default data;
