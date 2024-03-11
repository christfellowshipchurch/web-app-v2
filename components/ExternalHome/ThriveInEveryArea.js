import React from 'react';
import styled from 'styled-components';
import { Box, Image, HtmlRenderer, Button, system } from 'ui-kit';
import { gtag } from 'lib/analytics';
import { useCurrentBreakpoint } from 'hooks';
import { getUrlFromRelatedNode } from 'utils';
import { CustomLink } from 'components';
import { showModal, useModalDispatch } from 'providers/ModalProvider';

const actions = {
  title: 'About Us',
  relatedNode: {
    url: '/about',
  },
  onClick: () => [
    gtag.trackEvent({
      category: 'External Landing Page - Do more than just get by',
      label: `About - Button`,
      action: '/about',
    }),
  ],
};

const THRIVE_POINTS = [
  'Find people to do life with',
  'Break free from the pain of their past',
  'Thrive in their marriage',
  'Become a better parent',
  'Experience financial freedom',
  'Learn how to make a difference',
];

const StyledImage = styled.img`
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    top: 0px;
  }

  position: relative;
  top: 20px;
  transition: top 0.5s ease;
  border-radius: 10px;

  object-fit: contain;

  ${system}
`;

const ThriveInEveryArea = ({ maxWidth }) => {
  const modalDispatch = useModalDispatch();
  const currentBreakpoint = useCurrentBreakpoint();

  return (
    <Box
      fontSize={{ _: '1.05rem', md: '1.1rem' }}
      lineHeight={1.5}
      maxWidth={maxWidth}
      mx="auto"
    >
      <Box
        display="flex"
        flexDirection={{ _: 'column', lg: 'row' }}
        position="relative"
      >
        <Box
          display="flex"
          justifyContent="center"
          height={{ _: 'auto', md: 'auto', lg: 'auto' }}
          maxWidth={{ _: 'auto', md: '60%', lg: '45%' }}
          p={{ _: '50px', lg: '50px' }}
          pt={{ _: '30px', md: 'l', lg: '0px' }}
          mr={{ _: 'none', md: 'auto', lg: 'xl' }}
          ml={{ _: 'none', md: 'auto' }}
          mt="base"
          backgroundImage="url('external-landing/thrive-background-shapes.png')"
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
          backgroundPosition="center"
        >
          <StyledImage
            src={'external-landing/thrive-thumbnail.png'}
            cursor="pointer"
            maxWidth={{ _: '300px', md: '80%' }}
            onClick={() =>
              modalDispatch(
                showModal('Video', {
                  step: 0,
                  wistiaId: 'd546j0jc4g',
                })
              )
            }
          />
        </Box>

        <Box mx={{ _: 'auto', lg: '0px' }} mt="l">
          <Box as="h1" mb="base">
            Thrive in every area of your life.
          </Box>
          <Box
            as="p"
            fontSize={{ _: '16px', md: '18px' }}
            maxWidth={{ _: '320px', md: '490px' }}
          >
            For the past 40 years, we’ve helped thousands of people just like
            you to...
          </Box>
          <Box display="flex">
            <Image
              ml="0"
              mr="s"
              mt={{ _: '1.4rem', lg: '25px' }}
              width="auto"
              aspectRatio="auto"
              height={{ _: '240px', md: '280px' }}
              source="external-landing/thrive-line-dots15x.png"
            />
            <HtmlRenderer
              htmlContent={THRIVE_POINTS.map(
                point =>
                  `<h3 ${
                    currentBreakpoint.isSmall && 'style="font-size: 16px"'
                  }>${point}</h3>`
              ).join('')}
            />
          </Box>
          <Box
            as="p"
            mt={{ _: 'l', lg: 'base' }}
            fontSize={{ _: '15px', md: '18px' }}
          >
            What we’ve done for them, we want to do for you.
          </Box>

          <CustomLink
            as="a"
            href={getUrlFromRelatedNode(actions.relatedNode)}
            Component={Button}
            variant={'primary'}
            mt="base"
            mx={{ _: 'auto', md: '0px' }}
            maxWidth={{ _: 'fit-content', md: 'auto' }}
            display={{ _: 'flex', md: 'block' }}
            target={actions.newTab && '_blank'}
            {...actions}
          >
            {actions.title}
          </CustomLink>
        </Box>
      </Box>
    </Box>
  );
};

export default ThriveInEveryArea;
