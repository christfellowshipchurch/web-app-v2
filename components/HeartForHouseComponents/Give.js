import React from 'react';
import { Box, HtmlRenderer } from 'ui-kit';

const HeartforHouseGive = () => {
  const GiveButton = ({ title, description, type, url }) => {
    return (
      <Box as="a" href={url} target="_blank" textDecoration="none">
        <Box
          m="base"
          py="base"
          maxWidth={300}
          bg={type === 'primary' ? 'white' : 'primary'}
          color={type === 'secondary' ? 'white' : 'black'}
          border={type === 'primary' && '1px solid'}
          borderRadius="l"
          px="base"
        >
          <Box as="h4">{title}</Box>
          <Box as="p" fontSize="s">
            {description}
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      id="give"
      py="xxl"
      px="base"
      backgroundImage="url(/heart-for-house/give-background.png)"
      backgroundPosition="center"
      backgroundSize="cover"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
      color="white"
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
      <Box fontWeight="bold" fontSize="l" color="white" mt="s">
        GIVE IN PERSON ON MAY 19 OR ONLINE & BY MAIL ANYTIME.
      </Box>
      <Box
        my="l"
        bg="neutrals.200"
        py="base"
        px={{ _: 's', md: 'l' }}
        borderRadius="base"
      >
        <Box color="black">Choose a Giving Option:</Box>
        <GiveButton
          type="secondary"
          title="Give Now"
          description="Give a one-time gift toward Heart for the House today."
          url="https://pushpay.com/g/cfh4th?fnd=JgFANVErApOD9KzpWXOqcQ&fndv=lock"
        />
        <GiveButton
          type="primary"
          title="Plan to Give"
          description="Plan your giving goal for 2024 and set up a recurring gift until your goal is met."
          url="https://pushpay.com/c/825da57018e258503ca8aaa65e0a300e/JgFANVErApOD9KzpWXOqcQ"
        />
        <Box as="a" color="secondary" href="#faq" fontSize={14}>
          Need help? Check out these FAQs.
        </Box>
      </Box>
      <HtmlRenderer htmlContent=' <span style="font-weight: bold">GIVE BY MAIL</span><br/>Christ Fellowship Church Contributions<br/>5343 Northlake Blvd. Palm Beach Gardens, FL 33418<br/> <i style="font-size:15px; font-style: italic;">"Heart for the House" on the memo line.</i>' />

      <Box mt="l" width={{ _: '', md: '38%' }}>
        <HtmlRenderer htmlContent='<span style="font-style: italic; font-size:12px;"> Please note: Indicating your plan to give to Heart for the House is for Christ Fellowship Church’s budget purposes only. You may change and/or rescind your indication at any time.</span>' />
      </Box>
    </Box>
  );
};

export default HeartforHouseGive;
