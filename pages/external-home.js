import React from 'react';

import { CollectionPreview, HeroLanding } from 'components';
import {
  LifeIsCrazy,
  LifeToTheFullest,
  StartHere,
  ThriveInEveryArea,
} from 'components/ExternalHome';
import { Box, ContentBlock } from 'ui-kit';
import { useExternalHomeActions, useCurrentBreakpoint } from 'hooks';

const BASE_MAX_WIDTH = 1200;
const BASE_VERITCAL_PADDING = 'xl';

const webStyle = {
  backgroundImage:
    'url(/external-landing/external-home-wedge-web.png), url(/external-landing/external-home-dots-web.png), url(/external-landing/external-home-corner-web.png)',
  backgroundPosition: 'top right, bottom right, bottom left',
  backgroundRepeat: 'no-repeat',
};

const mobileStyle = {
  backgroundImage:
    'url(/external-landing/external-home-wedge-mobile.png), url(/external-landing/external-home-dots-mobile.png), url(/external-landing/external-home-corner-mobile.png)',
  backgroundPosition: 'top right, bottom right, bottom left',
  backgroundRepeat: 'no-repeat',
};

export default function ExternalLandingPage(props = {}) {
  /**
   * todo : If we can, I would like to see if we can pull in the 'actions' prop from getStaticProps 🤔
   */
  const { actions } = useExternalHomeActions();
  const currentBreakpoint = useCurrentBreakpoint();

  return (
    <HeroLanding
      heroTitle="Get the most out of life."
      heroSummary="A church that wants to help you live the life you were created for."
      backgroundVideo="/external-landing/external-bg-vid.mp4"
      backgroundImage="/external-landing/external-bg-video-frame-1.png"
      actions={actions}
    >
      {/* Text Carousel */}
      <Box bg="white">
        <Box
          bg="white"
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          px="base"
          pt={{ _: 'xl', md: 'xxl' }}
          pb="l"
          mx="auto"
          style={{
            backgroundImage:
              !currentBreakpoint.isSmall && !currentBreakpoint.isMedium
                ? 'url(/background-dots-orange.png)'
                : '',
            backgroundPosition: '10px 0px',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <LifeIsCrazy />
        </Box>

        {/* Life to the Fullest Blocks */}
        <Box bg="white" mt={{ _: 0, md: 's' }}>
          <LifeToTheFullest />
        </Box>
      </Box>

      {/* It all starts here. */}
      <Box
        id="start-here"
        px={{ _: 'xs', md: 'xs', lg: 'xl' }}
        py={{ _: 'xxs', md: 'xxs' }}
        style={
          currentBreakpoint.isLarge || currentBreakpoint.isXLarge
            ? webStyle
            : mobileStyle
        }
      >
        <StartHere maxWidth={BASE_MAX_WIDTH} />
      </Box>

      {/* Get There First */}
      <Box id="get-there-first" px="base" py={{ _: 'xxl', md: 150 }} bg="white">
        <Box mx="auto" maxWidth={1000}>
          <Box textAlign="center" mb="l">
            <Box as="h1" color="secondary" fontSize={{ _: 35, md: 64 }}>
              A church for every generation.
            </Box>
            <Box as="p" fontSize={{ _: 16, md: 24 }}>
              In the race to the heart of the next generation, the first one
              there wins.
            </Box>
          </Box>
          <CollectionPreview
            hideTitle
            hideButton
            // todo: Create a new collection in Rock for this content
            contentId="UniversalContentItem:d29e24e1873b0c4f4f645218ca3338ea"
          />
        </Box>
      </Box>

      {/* Relevant Messages */}
      <Box px="base" py={BASE_VERITCAL_PADDING} bg="neutrals.100">
        <Box mx="auto" maxWidth={1200}>
          <CollectionPreview
            horizontalScroll
            contentId="UniversalContentItem:e45a213bba4f171708ef051041a22046"
            buttonOverride="/discover/relevant-messages?id=47a5a31f61ac5a4fb65576d0d47564e0"
          />
        </Box>
      </Box>

      {/* Just for You */}
      <Box px="base" py={BASE_VERITCAL_PADDING} bg="white">
        <Box mx="auto" maxWidth={1200}>
          <CollectionPreview
            horizontalScroll
            contentId="UniversalContentItem:d29e24e1873b0c4f4f645218ca3338ea"
            buttonOverride="/discover"
          />
        </Box>
      </Box>

      {/* Do more than just get by.*/}
      <Box px="base" pt={BASE_VERITCAL_PADDING} pb="l" bg="neutrals.100">
        <ThriveInEveryArea maxWidth={BASE_MAX_WIDTH} />
      </Box>

      <Box px="base" py={BASE_VERITCAL_PADDING} bg="white">
        <Box mt={{ _: '-0.5rem', md: 'base' }} mx="auto" maxWidth={1200}>
          <ContentBlock
            title="Never miss a thing."
            subtitle="Receive events and updates straight to your inbox!"
            actions={[
              {
                title: 'Subscribe',
                relatedNode: {
                  url: 'http://eepurl.com/hAk7aP',
                },
                mt: '-0.8rem',
                target: '_blank',
              },
            ]}
          />
        </Box>
      </Box>
    </HeroLanding>
  );
}
