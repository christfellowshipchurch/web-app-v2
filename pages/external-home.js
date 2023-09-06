import React from 'react';

import { CollectionPreview, HeroLanding } from 'components';
import {
  LifeIsCrazy,
  LifeToTheFullest,
  StartHere,
  ThriveInEveryArea,
} from 'components/ExternalHome';
import { Box, ContentBlock } from 'ui-kit';
import { useExternalHomeActions } from 'hooks';
import { churchForEveryGeneration } from 'lib/externalHomeData';

const BASE_MAX_WIDTH = 1200;
const BASE_VERITCAL_PADDING = 'xl';

export default function ExternalLandingPage(props = {}) {
  /**
   * todo : If we can, I would like to see if we can pull in the 'actions' prop from getStaticProps 🤔
   */
  const { actions } = useExternalHomeActions();

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
        <LifeIsCrazy />

        {/* Life to the Fullest Blocks */}
        <Box mt={{ _: 0, md: 's' }}>
          <LifeToTheFullest />
        </Box>
      </Box>

      {/* It all starts here. */}
      <StartHere maxWidth={BASE_MAX_WIDTH} />

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
            contentOverride={churchForEveryGeneration}
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
      <Box
        px="base"
        pb={{ BASE_VERITCAL_PADDING }}
        bg="neutrals.100"
        pt={{ lg: BASE_VERITCAL_PADDING }}
      >
        <ThriveInEveryArea maxWidth={BASE_MAX_WIDTH} />
      </Box>

      {/* Never miss a thing. */}
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
