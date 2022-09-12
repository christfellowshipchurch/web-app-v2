import React from 'react';

import { CollectionPreview, HeroLanding, Layout, SEO } from 'components';
import {
  LifeIsCrazy,
  LifeToTheFullest,
  StartHere,
  ThriveInEveryArea,
} from 'components/ExternalHome';
import { Box, ContentBlock, ValueStack } from 'ui-kit';
import { useModalDispatch, showModal } from 'providers/ModalProvider';

const BASE_MAX_WIDTH = 1200;
const BASE_VERITCAL_PADDING = 'xl';

export default function ExternalLandingPage(props = {}) {
  const modalDispatch = useModalDispatch();

  const handleLoginClick = event => {
    event.preventDefault();
    modalDispatch(showModal('Auth'));
  };

  /**
   * note : Commenting out the Welcome Modal for now, but may implement in the future.
   */
  // useEffect(() => {
  //   setTimeout(() => {
  //     function showLandingModal() {
  //       modalDispatch(showModal('Welcome'));
  //     }
  //     showLandingModal();
  //   }, 1000);
  // }, [modalDispatch]);

  return (
    <HeroLanding
      heroTitle="Get the most out of life."
      heroSummary="A church that wants to help you live the life you were created for."
      backgroundVideo="/external-landing/external-bg-vid.mp4"
      backgroundImage="/external-landing/external-bg-video-frame-1.png"
      actions={[
        {
          title: 'Start Now',
          url: '#start-here',
        },
        {
          title: 'I Already Attend',
          onClick: e => handleLoginClick(e),
          url: '#login',
          color: 'white',
          borderColor: 'white',
          hoverColor: 'neutrals.400',
        },
      ]}
    >
      {/* Value Stack */}
      <ValueStack
        display={{ _: 'none', md: 'flex' }}
        backgroundColorMap={['secondary', 'secondary']}
        items={[
          'Know God Personally',
          'Grow In Relationships',
          'Discover Your Purpose',
        ]}
      />

      {/* Text Carousel */}
      <Box
        bg="neutral-200"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        px="base"
        py="xxl"
        mx="auto"
        style={{
          backgroundImage: 'url(/background-dots.png)',
          backgroundPosition: '-100px -18px',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <LifeIsCrazy />
      </Box>

      {/* Life to the Fullest Blocks */}
      <Box
        style={{
          backgroundImage: 'url(/background-blob-white.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        mt={{ _: 0, md: 'l' }}
        mb="l"
      >
        <LifeToTheFullest />
      </Box>

      {/* It all starts here. */}
      <Box
        mt="base"
        id="start-here"
        bg="primary"
        px="base"
        py={BASE_VERITCAL_PADDING}
        style={{
          backgroundImage:
            'url(/start-here-corners.png), url(/start-here-dots.png), url(start-here-wedge.png)',
          backgroundPosition: 'right, -100px -62px, bottom left',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <StartHere maxWidth={BASE_MAX_WIDTH} />
      </Box>

      {/* Do more than just get by.*/}
      <Box
        px="base"
        pt={BASE_VERITCAL_PADDING}
        bg="white"
        style={{
          backgroundImage: 'url(/blue-dots.png)',
          backgroundPosition: '100% 119%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <ThriveInEveryArea maxWidth={BASE_MAX_WIDTH} />
      </Box>

      {/* Relevant Messages */}
      <Box px="base" py={BASE_VERITCAL_PADDING} bg="neutrals.100">
        <Box mx="auto" maxWidth={1200}>
          <CollectionPreview
            contentId="UniversalContentItem:e45a213bba4f171708ef051041a22046"
            buttonOverride="/discover/relevant-messages?id=47a5a31f61ac5a4fb65576d0d47564e0"
          />
        </Box>
      </Box>

      {/* Just for You */}
      <Box px="base" py={BASE_VERITCAL_PADDING} bg="neutrals.100">
        <Box mx="auto" maxWidth={1200}>
          <CollectionPreview
            contentId="UniversalContentItem:d29e24e1873b0c4f4f645218ca3338ea"
            buttonOverride="/discover"
          />
        </Box>
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
