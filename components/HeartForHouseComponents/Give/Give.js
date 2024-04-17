import React from 'react';
import { Box, HtmlRenderer } from 'ui-kit';

import { GiveButton } from './Give.components';

const HeartforHouseGive = ({ id }) => {
  return (
    <Box
      id={id}
      py="xxl"
      px="base"
      backgroundImage={{
        _: "url('/heart-for-house/give-bg.jpg')",
        lg: "url('/heart-for-house/h4h-logo-white.png'), url('/heart-for-house/give-bg.jpg')",
      }}
      backgroundPosition={{
        _: 'center',
        lg: '650px, center',
        xl: '105%, center',
      }}
      backgroundSize={{ _: 'cover', lg: '700px, cover' }}
      backgroundRepeat="no-repeat"
    >
      <Box
        width={{ _: 'auto', md: 600, lg: 1300 }}
        mx="auto"
        display="flex"
        justifyContent={{ _: 'center', lg: 'flex-start' }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          textAlign="center"
          color="white"
          ml={{ _: 0, lg: 'xl' }}
        >
          <Box
            fontFamily="vision"
            fontWeight="600"
            lineHeight="100%"
            fontSize={{ _: 42, md: 64 }}
          >
            <Box textDecoration="underline" display="inline">
              BE A PART <br />
            </Box>
            OF THE HEART
          </Box>
          <Box fontSize="l" color="white" mt="s">
            GIVE IN PERSON ON MAY 19 OR ONLINE & BY MAIL ANYTIME.
          </Box>
          <Box
            my="l"
            bg="neutrals.200"
            py="base"
            px={{ _: 'base', md: 'l' }}
            borderRadius="base"
            maxWidth={400}
          >
            <Box fontSize="h4" fontWeight="bold" color="black">
              Choose a Giving Option:
            </Box>
            <Box display="flex" flexDirection="column">
              <GiveButton
                id="2024-H4H-Give"
                type="primary"
                title="Give Now"
                description="Give a one-time gift toward Heart for the House today."
                url="https://pushpay.com/g/cfh4th?fnd=JgFANVErApOD9KzpWXOqcQ&fndv=lock"
              />
              <GiveButton
                id="2024-H4H-Pledge"
                type="tertiary"
                buttonHover={'#595959'}
                title="Plan to Give"
                description="Plan your giving goal for 2024 and set up a recurring gift until your goal is met."
                url="https://pushpay.com/c/825da57018e258503ca8aaa65e0a300e/JgFANVErApOD9KzpWXOqcQ"
              />

              <Box mt="s" as="a" color="black" href="#faq" fontSize={14}>
                Need help? Check out these FAQs.
              </Box>
            </Box>
          </Box>
          <HtmlRenderer htmlContent=' <span style="font-weight: bold">GIVE BY MAIL</span><br/>Christ Fellowship Church Contributions<br/>5343 Northlake Blvd. Palm Beach Gardens, FL 33418<br/> <i style="font-size:15px; font-style: italic;">"Heart for the House" on the memo line.</i>' />

          <Box mt="l" maxWidth={{ _: '90vw', sm: '80vw', md: 540 }}>
            <HtmlRenderer htmlContent='<span style="font-style: italic; font-size:12px;"> Please note: Indicating your plan to give to Heart for the House is for Christ Fellowship Church’s budget purposes only. You may change and/or rescind your indication at any time.</span>' />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeartforHouseGive;
