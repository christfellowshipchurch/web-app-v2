import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';

import { CollectionPreview, HeroLanding } from 'components';
import { Box, ContentBlock, Image, ValueStack, Button } from 'ui-kit';
import { useModalDispatch, showModal } from 'providers/ModalProvider';

import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { amplitude } from 'lib/analytics';

const BASE_MAX_WIDTH = 1200;
const BASE_VERITCAL_PADDING = 'xl';

const StartHere = () => {
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
        {data.map(({ title, subtitle, image, url }, i) => (
          <Box
            mb={{ _: i === data.length - 1 ? '0' : 'base', md: '0' }}
            display="flex"
          >
            <StyledCard boxShadow={i === 0 ? 'l' : 'base'}>
              <Image mb="2rem" source={image} aspectRatio={16 / 9} />

              <Box px="s">
                <Box as="a" href={url} textDecoration="none">
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Button
                      onClick={() => {
                        amplitude.trackEvent({
                          eventType: 'Button Click',
                          eventProperties: {
                            category:
                              'External Landing Page - It All Starts Here',
                            label: `${title} - Button`,
                            action: url,
                          },
                        });
                      }}
                      bg="secondary"
                      as="h2"
                      m="0"
                      mb="0.25rem"
                    >
                      {title}
                    </Button>
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

const LifeToTheFullest = () => {
  const data = [
    {
      title: 'Know God personally',
      subtitle:
        'You can know Jesus on a personal level. See how a relationship with Him changes your life for the better.',
      image: '/external-home-1.png',
      highlightWidth: '57%',
    },
    {
      title: 'Grow in your relationships',
      subtitle:
        "You weren't meant to do life alone. Find friends and build stronger relationships with those you love.",
      image: 'external-home-2.png',
      highlightWidth: '68%',
      shortBar: true,
    },
    {
      title: 'Discover your purpose',
      subtitle:
        "You're here for a reason. Find out who God created you to be and learn how to live life on purpose.",
      image: 'external-home-3.png',
      highlightWidth: '61%',
    },
    {
      title: 'Impact your world',
      subtitle:
        'A life lived contributing your talents, gifts and passion for your world, and a life that others are inspired to emulate.',
      image: 'external-home-4.png',
      highlightWidth: '52%',
    },
  ];

  return (
    <Box
      mx="auto"
      p="base"
      pt="l"
      maxWidth={1200}
      fontSize={{ _: '1.2rem', md: '1.7rem' }}
    >
      {data.map(({ title, subtitle, image, highlightWidth, shortBar }, i) => (
        <Box
          display={{ _: 'block', md: 'grid' }}
          gridTemplateColumns={i % 2 === 0 ? '1fr 1.618fr' : '1.618fr 1fr'}
          gridTemplateRows="1fr"
          gridGap="1em 1em"
          gridTemplateAreas={i % 2 === 0 ? `"img content"` : `"content img"`}
          my="l"
        >
          <Image source={image} maxWidth="400px" gridArea="img" my="base" />

          <Box
            gridArea="content"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            my="base"
          >
            <Box as="h1" color="black" borderRadius="xxl">
              <Box
                position="relative"
                bottom="-35px"
                height="18px"
                bg="primarySubdued"
                width={
                  !shortBar
                    ? { _: '90%', md: highlightWidth }
                    : { _: '60%', md: highlightWidth }
                }
                borderRadius="s"
                pl="s"
              />
              <Box as="p" position="relative" pl="xs">{`${
                i + 1
              }. ${title}`}</Box>
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
      heroSummary="A church that wants to help you do more than just get by."
      backgroundVideo="/external-landing/home-background-vid.mp4"
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
        },
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
          backgroundPosition: '-100px -18px',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box
          as="h1"
          mt="l"
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
        mt={{ _: 0, md: 'l' }}
        mb="l"
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
          backgroundPosition: 'right, -100px -62px, bottom left',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <StartHere />
      </Box>

      {/* Church isn’t just a building you walk in to */}
      <Box
        px="base"
        pt={BASE_VERITCAL_PADDING}
        bg="white"
        style={{
          backgroundImage: 'url(/blue-dots.png)',
          backgroundPosition: 'bottom right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box
          fontSize={{ _: '1.05rem', md: '1.5rem' }}
          maxWidth={BASE_MAX_WIDTH}
          mx="auto"
        >
          <ContentBlock
            title="Do more than just get by."
            htmlContent={
              'For the past 35 years, we’ve helped thousands of people just like you to... <br/> <br/><b> → Find people to do life with <br/>→ Break free from the pain of their past<br/> → Thrive in their marriage <br/> → Become a better parent <br/> → Experience financial freedom</b> <br/> <br/> What we’ve done for them, we want to do for you.'
            }
            image={'/do-more-external.png'}
            contentLayout="RIGHT"
            imageRatio="3by4"
            actions={[
              {
                title: 'About Us',
                relatedNode: {
                  url: '/about',
                },
                onClick: () =>
                  amplitude.trackEvent({
                    eventType: 'Button Click',
                    eventProperties: {
                      category:
                        'External Landing Page - Do more than just get by',
                      label: `About - Button`,
                      action: '/about',
                    },
                  }),
              },
            ]}
          />
        </Box>
      </Box>

      {/* Latest Messages */}
      <Box px="base" py={BASE_VERITCAL_PADDING} bg="neutrals.100">
        <Box mx="auto" maxWidth={1200}>
          <CollectionPreview
            title="Latest Messages"
            contentId="UniversalContentItem:47a5a31f61ac5a4fb65576d0d47564e0"
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

      <Box px="base" py={BASE_VERITCAL_PADDING} bg="white">
        <Box mx="auto" maxWidth={1200}>
          <ContentBlock
            title="Never miss a thing."
            actions={[
              {
                title: 'Subscribe for Updates',
                url:
                  'https://church.us11.list-manage.com/subscribe?u=76848e191018191e2e2d01d77&id=3265404466',
                mt: '-0.8rem',
              },
            ]}
          />
        </Box>
      </Box>
    </HeroLanding>
  );
}
