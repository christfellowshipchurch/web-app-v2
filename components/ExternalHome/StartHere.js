import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Box, Image } from 'ui-kit';

const buttonData = [
  {
    title: 'Find a Location',
    subtitle:
      'Attend a Sunday service, in person or online. We would love to meet you!',
    image: 'external-landing/find-a-location.jpg',
    url: '/locations',
  },
  {
    title: 'Discover What’s Here',
    subtitle:
      'We’ve designed a path for you and your family to grow in your faith, find friends, and serve others.',
    image: 'external-landing/discover-whats-here.jpeg',
    url: '/it-all-starts-here',
  },
  {
    title: 'Ask a Question',
    subtitle:
      'Have a question or need prayer? Let us know and our team will reach out to you!',
    image: 'external-landing/ask-a-question.jpeg',
    url: 'https://rock.gocf.org/contactus',
    target: '_blank',
  },
];

const StyledCard = styled.a`
  background: white;
  border-radius: ${themeGet('radii.base')};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${themeGet('space.base')};
  padding-bottom: ${themeGet('space.l')};
  box-shadow: ${themeGet('shadows.base')};
  margin: ${themeGet('space.s')};
  text-align: center;
  transition: box-shadow ease 0.3s, transform ease 0.3s;
  text-decoration: none;
  flex: 1;

  &:hover {
    box-shadow: ${themeGet('shadows.xl')};
    cursor: pointer;
    transform: scale(1.03);
  }
`;

const StartHere = ({ maxWidth }) => {
  return (
    <Box my="xl">
      <Box textAlign="center" my="l">
        <Box as="h1" color="white" fontSize="3.5rem">
          It all starts here.
        </Box>
      </Box>
      <Box
        display="flex"
        flexGrow="1 1 0"
        flexDirection={{ _: 'column', lg: 'row' }}
        mx="auto"
        maxWidth={1200}
      >
        {buttonData.map(({ title, subtitle, image, url, target }, i) => (
          <StyledCard href={url} target={target}>
            <Image aspectRatio="16by9" source={image} />
            <Box
              as="h3"
              bg="secondary"
              borderRadius="base"
              p="s"
              my="base"
              color="white"
              fontWeight="bold"
              width="fit-content"
              px="l"
            >
              {title}
            </Box>
            <Box as="p" color="black">
              {subtitle}
            </Box>
          </StyledCard>
        ))}
      </Box>
    </Box>
  );
};

export default StartHere;
