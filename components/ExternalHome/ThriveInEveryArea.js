import React from 'react';
import { Box, Image, HtmlRenderer, Button } from 'ui-kit';
import { gtag } from 'lib/analytics';
import { useCurrentBreakpoint } from 'hooks';
import { getUrlFromRelatedNode } from 'utils';
import { CustomLink } from 'components';

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

const ThriveInEveryArea = ({ maxWidth }) => {
  const currentBreakpoint = useCurrentBreakpoint();

  const content = currentBreakpoint.isSmall
    ? '<h3> Find people to do life with </h3><h3> Break free from the pain of their past</h3><h3> Thrive in their marriage</h3><h3> Become a better parent </h3><h3> Experience financial freedom </h3><h3> Learn how to make a difference</h3>'
    : '<h3> Find people to do life with </h3><h3> Break free from the pain of their past</h3><h3> Thrive in their marriage</h3><h3> Become a better parent </h3><h3> Experience financial freedom </h3><h3> Learn how to make a difference</h3>';

  return (
    <Box
      fontSize={{ _: '1.05rem', md: '1.1rem' }}
      lineHeight={1.5}
      maxWidth={maxWidth}
      mx="auto"
    >
      <Box
        display={{ _: 'block', lg: 'flex' }}
        justifyContent={
          !currentBreakpoint.isSmall && !currentBreakpoint.isMedium && 'end'
        }
        flexDirection={{ _: 'column', lg: 'row' }}
        heigh={
          currentBreakpoint.isSmall || (currentBreakpoint.isMedium && 'auto')
        }
      >
        <Box
          mb={{ _: '-240px', md: '200px', lg: '0px' }}
          position={{ md: 'relative', lg: 'relative' }}
        >
          <Image
            position={{ _: 'relative', lg: 'absolute' }}
            left={{ _: '-45px', lg: '0px' }}
            top={'0px'}
            source="external-landing/thrive-rectangle.png"
            width={{ _: '68%', lg: '30%' }}
            height={{ _: '230px', md: '500px', lg: '54%' }}
          />
          <Image
            position={{ _: 'relative', md: 'absolute', lg: 'absolute' }}
            left={{ _: '-5px', md: '16%', lg: '30px' }}
            top={{ _: '-200px', md: '40px', lg: '28px' }}
            source="external-landing/pastors-image.png"
            width={{ _: '78%', lg: '32%' }}
            height={{ _: '300px', md: '600px', lg: '72%' }}
            zIndex="2"
          />
          <Image
            position={{ _: 'relative', md: 'absolute', lg: 'absolute' }}
            left={{ _: '26%', md: '79%', lg: '23%' }}
            top={{ _: '-280px', md: '112%', lg: '63%' }}
            source="external-landing/dots-pastors.png"
            borderRadius="0"
            width="auto"
          />
        </Box>
        <Box mx={{ _: 'auto', lg: '0px' }}>
          <Box as="h1" mb="base" mt={{ _: '30px', lg: '0px' }}>
            Thrive in every area of your life.
          </Box>
          <Box
            as="p"
            fontSize={{ _: '16px', md: '18px' }}
            maxWidth={{ _: '320px', md: '490px' }}
            mb={{ _: '20px', lg: '0px' }}
          >
            For the past 35 years, we’ve helped thousands of people just like
            you to...
          </Box>
          <Box display="flex">
            <Image
              ml="0"
              mr="s"
              mt={{ _: '1.4rem', lg: '22px' }}
              width="auto"
              aspectRatio="auto"
              height="260px"
              source="external-landing/thrive-line-dots.png"
            />
            <HtmlRenderer htmlContent={content} />
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
            mx="auto"
            mt="base"
            width={currentBreakpoint.isSmall && '140px'}
            textTransform="capitalize!important"
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
