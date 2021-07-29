import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';

import { CollectionPreview, HeroLanding } from 'components';
import { Box, ContentBlock, Image, ValueStack, Button } from 'ui-kit';
import { useModalDispatch, showModal } from 'providers/ModalProvider';

import random from 'lodash/random';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { trackEvent } from 'lib/analytics';

const BASE_MAX_WIDTH = 1200;
const BASE_VERITCAL_PADDING = 'xl';

// const placeholderImage = '/placeholder.png';
const placeholderImage = () =>
  `https://source.unsplash.com/random?random=${random(0, 100, true)}`;

const StartHere = () => {
  const data = [
    {
      title: 'Plan a Visit',
      subtitle: 'Attend a Sunday service. We would love to meet you!',
      image: '/plan-a-visit.png',
    },
    {
      title: 'Find Friends',
      subtitle: 'Meet other people just like you. Find a group or class today.',
      image: 'find-friends.png',
    },
    {
      title: 'Ask a Question',
      subtitle:
        'Do you have questions or need prayer? Text or call us at (561) 799-5600.',
      image: 'ask-a-question.png',
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

    box-shadow: ${themeGet('shadows.base')};
    transition: box-shadow ease-in 0.3s;

    :hover {
      box-shadow: ${themeGet('shadows.xl')};
      cursor: pointer;
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
        maxWidth={BASE_MAX_WIDTH}
        margin="auto"
      >
        {data.map(({ title, subtitle, image }, i) => (
          <Box
            mb={{ _: i === data.length - 1 ? '0' : 'base', md: '0' }}
            display="flex"
          >
            <StyledCard boxShadow={i === 0 ? 'l' : 'base'}>
              <Image mb="2rem" source={image} aspectRatio={16 / 9} />

              <Box px="s">
                <Box as="a" href="#" textDecoration="none">
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Button
                      onClick={() => {
                        trackEvent({
                          category: 'External Landing Page',
                          action: `It All Starts Here - Action`,
                          label: `${title} - Button`,
                        });
                      }}
                      bg="secondary"
                      as="h2"
                      m="0"
                      mb="0.25rem"
                    >
                      {title}
                    </Button>
                    {/* <Icon name="angleRight" size={32} /> */}
                  </Box>
                </Box>
                <Box as="p" fontSize="1.35rem" lineHeight="1.65rem" mt="s">
                  {subtitle}
                </Box>
              </Box>
            </StyledCard>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const LifeToTheFullest = ({ variant }) => {
  const data = [
    {
      title: 'Know God personally',
      subtitle:
        'You can know Jesus on a personal level. See how a relationship with Him changes your life for the better.',
      image: '/external-home-1.png',
    },
    {
      title: 'Grow in your relationships',
      subtitle:
        "You weren't meant to do life alone. Find friends and build stronger relationships with those you love.",
      image: 'external-home-2.png',
    },
    {
      title: 'Discover your purpose',
      subtitle:
        "You're here for a reason. Find out who God created you to be and learn how to live life on purpose.",
      image: 'external-home-3.png',
    },
    {
      title: 'Impact your world',
      subtitle:
        'A life lived contributing your talents, gifts and passion for your world, and a life that others are inspired to emulate.',
      image: 'external-home-4.png',
    },
  ];

  const mask = [1, 3, 2, 1];

  if (variant === 2) {
    return (
      <Box
        display={{ md: 'grid' }}
        gridTemplateColumns="1fr 1fr"
        gridTemplateRows="1fr 1fr"
        gridGap="0.5rem"
        gridTemplateAreas={`
    ". ."
    ". ."`}
        p="0.5rem"
        bg="neutrals.100"
      >
        {data.map(({ title, subtitle }, i) => (
          <Box
            px="xxl"
            pt="xxl"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
            textAlign="center"
            bg="white"
          >
            <Box mb="xl">
              <Box as="h1" fontSize="40px" color="black">
                {title}
              </Box>
              <Box as="span" fontSize="21px">
                {subtitle}
              </Box>
            </Box>
            <Image
              mask={`/shape-mask-${mask[i]}.png`}
              source={placeholderImage()}
              maxWidth="400px"
            />
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <Box
      mx="auto"
      p="base"
      pt="l"
      maxWidth={1500}
      fontSize={{ _: '1.2rem', md: '1.7rem' }}
    >
      {data.map(({ title, subtitle, image }, i) => (
        <Box
          display={{ _: 'block', md: 'grid' }}
          gridTemplateColumns={i % 2 === 0 ? '1fr 1.618fr' : '1.618fr 1fr'}
          gridTemplateRows="1fr"
          gridGap="1em 1em"
          gridTemplateAreas={i % 2 === 0 ? `"img content"` : `"content img"`}
          my="l"
        >
          <Image
            // mask={`/shape-mask-${mask[i]}.png`}
            source={image}
            maxWidth="400px"
            gridArea="img"
            my="base"
          />

          <Box
            gridArea="content"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            my="base"
          >
            <Box as="h1" color="black">
              {`${i + 1}. ${title}`}
            </Box>
            <Box as="p">{subtitle}</Box>
          </Box>

          <Box
            as="hr"
            display={{ md: 'none' }}
            my="l"
            height="1px"
            border="none"
            backgroundColor="neutrals.200"
          />
        </Box>
      ))}
    </Box>
  );
};

export default function HeroLandingPage(props = {}) {
  const modalDispatch = useModalDispatch();

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
      heroSummary="A church that wants to help you do more than just get by."
      backgroundVideo="/external-landing/home-background-vid.mp4"
      actions={[
        {
          title: 'Start Now',
          url: '#start-here',
        },
        // {
        //   title: 'I attend here',
        //   url: '#login',
        // },
      ]}
    >
      {/* Value Stack */}
      <ValueStack
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
          backgroundPosition: '30px 0px',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box
          as="h1"
          fontSize={{ _: '', md: '3rem' }}
          display="flex"
          color="black"
        >
          Life is
          <Box
            ml="xs"
            mb="s"
            minWidth={{ _: 200, md: 320 }}
            borderBottom="2px solid"
          >
            <Typewriter
              words={['complicated', 'confusing', 'difficult', 'crazy']}
              loop={0} //infinite loops
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </Box>
          .
        </Box>
        <Box as="h2" mb={0} fontWeight="normal">
          But we want to help you live life to the fullest.
        </Box>
        <Box as="h2">And here's how.</Box>
      </Box>

      {/* Life to the Fullest Blocks */}
      <Box
        style={{
          backgroundImage: 'url(/background-blob-white.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        py="xxl"
      >
        <LifeToTheFullest variant={1} />
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
          backgroundPosition: 'right, top left, bottom left',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <StartHere />
      </Box>

      {/* Church isn’t just a building you walk in to */}
      <Box px="base" py={BASE_VERITCAL_PADDING} bg="white">
        <Box
          fontSize={{ _: '1.2rem', md: '1.5rem' }}
          maxWidth={BASE_MAX_WIDTH}
          mx="auto"
        >
          <ContentBlock
            title="Church isn’t just a building you walk in to,
          but a family you can belong to."
            htmlContent="We’ve helped tens of thousands of people grab hold of
          their vision for getting the most out of their life, their
          family, and for their future – by equipping them with
          direction, resources, coaching, and encouragement to
          discover their purpose through a deeper relationship with
          Christ. What we’ve done for them, we want to do for you."
            image={
              'https://cloudfront.christfellowship.church/GetImage.ashx?guid=8b846fd4-ee88-4a24-b07f-af5a2924b369'
            }
            contentLayout="RIGHT"
            imageRatio="3by4"
            actions={[
              {
                title: 'Read More',
                relatedNode: {
                  url: '/about',
                },
              },
            ]}
          />
        </Box>
      </Box>

      {/* Stay in the Know */}
      <Box px="base" py={BASE_VERITCAL_PADDING} bg="neutrals.100">
        <Box mx="auto" maxWidth={1200}>
          <CollectionPreview
            title="Stay in the Know"
            contentId="UniversalContentItem:021a93e4715936dcecd0bc57898d6fa5"
          />
        </Box>
      </Box>

      {/* Latest Messages */}
      <Box px="base" py={BASE_VERITCAL_PADDING} bg="white">
        <Box mx="auto" maxWidth={1200}>
          <CollectionPreview
            title="Latest Messages"
            contentId="UniversalContentItem:47a5a31f61ac5a4fb65576d0d47564e0"
          />
        </Box>
      </Box>
    </HeroLanding>
  );
}
