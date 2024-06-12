import React from 'react';
import { Box, HtmlRenderer, Icon } from 'ui-kit';
import { otherWaysToGiveData } from '../../lib/giveData';

const WaysToGive = () => {
  return (
    <Box
      py="l"
      id="ways-to-give"
      bg="#DAEAF1"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box as="h1" mt="base" color="#004F71">
        Other Ways to Give
      </Box>
      <Box mt="l" width={{ md: '80%' }} pb={{ md: 'base' }}>
        <Box
          display="flex"
          justifyContent={{ _: 'center', md: 'space-around' }}
          alignItems={{ _: 'center', md: 'flex-start' }}
          flexDirection={{ _: 'column', md: 'row' }}
          pb="l"
        >
          {otherWaysToGiveData?.map((card, index) => (
            <Box
              textAlign="center"
              display="flex"
              mt={index !== 0 ? { _: 'l', md: 0 } : 0}
              ml={index !== 0 && { md: 'base' }}
              mr={index === 0 && { md: 'base' }}
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              maxWidth={{ _: '90vw', md: 430 }}
              width={{ _: '90vw', md: '45vw' }}
              color="#004F71"
            >
              <Icon
                width="80px"
                height="80px"
                name={card?.icon}
                mt={index !== 0 && { _: 'base', md: 0 }}
                mb="s"
              />
              <Box
                as="h2"
                width="320px"
                mt={{ _: 'base', md: 'l' }}
                mb="base"
                color="black"
              >
                {card?.title}
              </Box>
              <HtmlRenderer htmlContent={card?.htmlContent} />
            </Box>
          ))}
        </Box>
        <Box py="l" textAlign="center" mx={{ _: 'base', md: 0 }}>
          For help setting up electronic giving or other giving questions,{' '}
          <Box display="inline" color="#004F71" fontWeight="bold">
            please call 561-776-3380.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WaysToGive;
