import React from 'react';
import { Box, Button, HtmlRenderer } from 'ui-kit';
import { tithingOfferingCards } from '../../lib/giveData';

const WhatTheBibleSays = () => {
  return (
    <Box
      mt="l"
      id="what-the-bible-says"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box mb={{ _: 'base', md: 'l' }} textAlign="center" maxWidth="1000px">
        <Box as="h1" mt="base" color="#004F71">
          What Does the Bible Say About Giving?
        </Box>
        <Box mx="base" mt="base" fontStyle="italic">
          “Remember this: Whoever sows sparingly will also reap sparingly, and
          whoever sows generously will also reap generously. Each of you should
          give what you have decided in your heart to give, not reluctantly or
          under compulsion, for God loves a cheerful giver. And God is able to
          bless you abundantly, so that in all things at all times, having all
          that you need, you will abound in every good work.” <br />
          <br />
        </Box>
        <Box fontWeight="bold">2 Corinthians 9:6-8</Box>
      </Box>
      <Box
        mt="l"
        display="flex"
        flexDirection={{ _: 'column', md: 'row' }}
        mb="base"
      >
        {tithingOfferingCards?.map((card, index) => (
          <Box
            maxWidth={{ _: '90vw', md: 510 }}
            width={{ _: '90vw', md: '45vw' }}
            id={index}
            mt={index !== 0 ? { _: 'l', md: 0 } : 0}
            ml={index !== 0 && { md: 'base' }}
            mr={index === 0 && { md: 'base' }}
            p="base"
            borderRadius="l"
            boxShadow="0px 8px 20px -5px rgba(0, 0, 0, 0.36)"
          >
            <Box textAlign="center">
              <Box as="h2" color="black">
                {card?.title}
              </Box>
              <Box mb="base" color="#9C9C9D" fontWeight="bold">
                {card?.subtitle}
              </Box>
              <HtmlRenderer htmlContent={card?.htmlContent} />
            </Box>
          </Box>
        ))}
      </Box>
      <Button
        as="a"
        mt="l"
        mb={{ _: 'base', md: 'l' }}
        fontWeight="normal"
        fontSize="s"
        href="#give"
      >
        GIVE NOW
      </Button>
    </Box>
  );
};

export default WhatTheBibleSays;
