import { CardGridFeature, Layout, VideoHeader } from 'components';
import React from 'react';

import { Box } from 'ui-kit';
import { FeatureProvider } from 'providers';
import {
  GettingThereFirst,
  Resources,
} from 'components/GetThereFirstComponents';
import { RaceToTheNextGen } from 'components/GetThereFirstComponents/getThereFirstComponents';

function GetThereFirst() {
  return (
    <Layout>
      {/* Hero Section */}
      <VideoHeader
        backgroundVideo={{
          desktop: '/get-there-first/GetThereFirst.mp4',
        }}
        logoOverlay={'/get-there-first/logo.png'}
        logoWidth={{ _: 300, md: 600, lg: 800 }}
        logoAspectRatio="16/9"
        backgroundImage="url(/get-there-first/banner.jpg)"
        backgroundPosition="center"
        backgroundSize="cover"
      />
      {/* Join the Race with Video Section*/}
      <RaceToTheNextGen />

      {/* How We're Getting There Section */}
      <GettingThereFirst />

      {/* Vertical Cardlist Feature Section*/}
      <Box
        py="xl"
        px="l"
        backgroundImage="linear-gradient(to right, #E8A374, #E26D44, #CE3525)"
        color="white"
      >
        {/* custom title here */}
        <Box maxWidth={1100} mx="auto">
          <FeatureProvider
            Component={CardGridFeature}
            customCardSize={'HIGHLIGHT_MEDIUM'}
            horizontalScroll={false}
            titleOverride
            dataOverride={{
              title:
                '<div style="margin-bottom: 18px; font-size: 48px;">JOIN THE <span style="font-weight: bold; text-decoration: underline;">RACE<span></div>',
              subtitle:
                '<div style="font-weight: bold;">BE A PART OF MAKING A DIFFERENCE IN THE LIVES OF THE NEXT GENERATION.</div>',
            }}
            options={{
              variables: {
                id: 'VerticalCardListFeature:f6b30a38eb547f1f75676ce0557a7e05bed66de665564bd0c5e37f0692676795e12dca024e16de4c6d7782ed0288eb10570bc45a488bee66c93ee7b8735beb7675d6a9ab1a060d39594fa3a2468a99fb7243ca9b485554978c1c16ebd9815f1d47bb23af5338a1a665b992c2047ab2680659fa39eeb61d2f48e231f89d8c3e8899ce1951f9ddfe389234d07f8628d01bf06517512005c5b99c3da0fb0648d299c2595763216223a7cac01b25b792dbb612f14d2489fabae48801ac628f8885755016ac7a78a23bb8a44c8731e781162112e7591fe1596a793249c1eccefbbfc460ea060f0caaa352ac56adf1184a985d21e74f3faf174e18468fac9da317f441',
              },
            }}
          />
        </Box>
      </Box>

      {/* Last Section */}
      <Resources />
    </Layout>
  );
}

export default GetThereFirst;
