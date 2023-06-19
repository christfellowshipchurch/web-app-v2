import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { gtag } from 'lib/analytics';
import { Box, Image, Button } from 'ui-kit';
import { htmlToReactParser } from 'utils';

const StyledCard = styled.div`
  background: white;
  border-radius: ${themeGet('radii.base')};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: ${themeGet('space.base')};
  padding-bottom: ${themeGet('space.l')};
  height: 100%;

  box-shadow: ${themeGet('shadows.base')};
  transition: box-shadow ease 0.3s, transform ease 0.3s;
`;

const StartHere = ({ maxWidth }) => {
  const data = [
    {
      title: 'Find a Location',
      subtitle:
        'Attend a Sunday service, in person or online. We would love to meet you!',
      image: 'find-a-location.jpg',
      url: '/locations',
    },
    {
      title: 'Discover What’s Here',
      subtitle:
        'We’ve designed a path for you and your family to grow in your faith, find friends, and serve others.',
      image: 'discover-whats-here.jpeg',
      url: '/it-all-starts-here',
    },
    {
      title: 'Ask a Question',
      subtitle:
        'Have a question or need prayer? Let us know and our team will reach out to you!',
      image: 'ask-a-question.jpeg',
      url: 'https://rock.gocf.org/contactus',
      target: '_blank',
    },
  ];

  return (
    <Box my="xl">
      <Box textAlign="center" my="l">
        <Box as="h1" color="white" fontSize="3.5rem">
          It all starts here.
        </Box>
      </Box>

      <Box
        display={{ _: 'block', md: 'grid' }}
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="1fr"
        gridGap="1rem 1rem"
        gridTemplateAreas={`". . ."`}
        textAlign="center"
        maxWidth={maxWidth}
        margin="auto"
      >
        {data.map(({ title, subtitle, image, url, target }, i) => (
          <Box
            key={i}
            mb={{ _: i === data.length - 1 ? '0' : 'base', md: '0' }}
            display="flex"
          >
            <Box
              as="a"
              textDecoration="none"
              color="black"
              href={url}
              target={target}
            >
              <StyledCard
                boxShadow={i === 0 ? 'l' : 'base'}
                onClick={() => [
                  gtag.trackEvent({
                    category: 'External Landing Page - It All Starts Here',
                    label: `${title} - Button`,
                    action: url,
                  }),
                ]}
              >
                <Image mb="2rem" source={image} aspectRatio="16by9" />

                <Box px="s">
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Button
                      bg="secondary"
                      as="h2"
                      m="0"
                      mb="0.25rem"
                      fontSize={{ _: '1.1rem', lg: '1.25rem' }}
                    >
                      {title}
                    </Button>
                  </Box>
                </Box>
                <Box
                  as="p"
                  fontSize={{ _: '1rem', lg: '1.1rem' }}
                  lineHeight="1.65rem"
                  mt="s"
                >
                  {htmlToReactParser.parse(subtitle)}
                </Box>
              </StyledCard>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default StartHere;
