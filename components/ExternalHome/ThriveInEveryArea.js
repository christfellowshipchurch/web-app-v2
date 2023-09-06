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
        display="flex"
        flexDirection={{ _: 'column', lg: 'row' }}
        position="relative"
      >
        <Image
          source={'external-landing/thrive-web3.png'}
          width={{ md: '560px' }}
          height={{ md: '560px' }}
          p={{ lg: '50px' }}
          pt={{ _: 'base', md: 'l', lg: '0px' }}
        />
        <Box mx={{ _: 'auto', lg: '0px' }} mt={{ _: '0', lg: 'l' }}>
          <Box as="h1" mb="base">
            Thrive in every area of your life.
          </Box>
          <Box
            as="p"
            fontSize={{ _: '16px', md: '18px' }}
            maxWidth={{ _: '320px', md: '490px' }}
          >
            For the past 35 years, we’ve helped thousands of people just like
            you to...
          </Box>
          <Box display="flex">
            <Image
              ml="0"
              mr="s"
              mt={{ _: '1.4rem', lg: '25px' }}
              width="auto"
              aspectRatio="auto"
              height={{ _: '255px', md: '280px' }}
              source="external-landing/thrive-line-dots15x.png"
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
