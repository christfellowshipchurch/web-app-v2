import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { amplitude, gtag } from 'lib/analytics';
import { Box, Image, Button } from 'ui-kit';

const StartHere = ({ maxWidth }) => {
  const data = [
    {
      title: 'Plan a Visit',
      subtitle: 'Attend a Sunday service. We would love to meet you!',
      image: '/plan-a-visit.png',
      url: '/locations',
    },
    {
      title: 'Find Friends',
      subtitle: 'Meet other people just like you. Find a group or class today.',
      image: 'find-friends.png',
      url: '/groups',
    },
    {
      title: 'Ask a Question',
      subtitle:
        'Do you have questions or need prayer? Text or call us at (561) 799-5600.',
      image: 'ask-a-question.png',
      url: 'https://rock.gocf.org/contactus',
      target: '_blank',
    },
  ];

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

    :hover {
      box-shadow: ${themeGet('shadows.xl')};
      cursor: pointer;
      transform: scale(1.03);
    }
  `;

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
                  amplitude.trackEvent({
                    eventType: 'Button Click',
                    eventProperties: {
                      category: 'External Landing Page - It All Starts Here',
                      label: `${title} - Button`,
                      action: url,
                    },
                  }),
                  gtag.trackEvent({
                    category: 'External Landing Page - It All Starts Here',
                    label: `${title} - Button`,
                    action: url,
                  }),
                ]}
              >
                <Image mb="2rem" source={image} aspectRatio={16 / 9} />

                <Box px="s">
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Button bg="secondary" as="h2" m="0" mb="0.25rem">
                      {title}
                    </Button>
                  </Box>
                </Box>
                <Box as="p" fontSize="1.35rem" lineHeight="1.65rem" mt="s">
                  {subtitle}
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
