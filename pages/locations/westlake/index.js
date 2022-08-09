import React from 'react';
import PropTypes from 'prop-types';
import { FAQ, HeroLanding, Layout } from 'components';
import { Box, Button, CardCarousel, ContentBlock, Image } from 'ui-kit';
import faqData from 'components/FAQ/faqData';

const Westlake = props => {
  return (
    <Layout
      contentMaxWidth={'100vw'}
      contentHorizontalPadding={'0'}
      contentVerticalPadding={'0'}
      transparentHeader
    >
      <HeroLanding
        heroTitle="Get the most out of life."
        heroSummary="A church, coming to Westlake, that wants to help you live the life you were created for."
        backgroundVideo="/external-landing/external-bg-vid.mp4"
        actions={[
          {
            title: 'Learn More',
            url: '#learn-more',
          },
        ]}
      ></HeroLanding>
      <Box px="base" py="l" bg="white">
        <Box mt={{ _: '-0.5rem', md: 'base' }} mx="auto" maxWidth={800}>
          <ContentBlock
            title="Welcome to Westlake!"
            htmlContent="When the initial plans for the city of Westlake were being finalized, we knew that we wanted to be a part of this new community. In 2019, we purchased 13 acres to be the future site of Christ Fellowship Westlake, and in December 2022, we will officially open the doors as we welcome both our new neighbors and longtime family home. 
            </br></br>
            But we’re not just building a building. We’re building a place for all generations to live the life they were created to live—and it all starts here! We can’t wait to welcome you and your family to Christ Fellowship Westlake, launching this December. 
            </br></br>
            - Pastors Todd & Julie Mullins"
            videos={[
              { sources: [{ uri: '/external-landing/external-bg-vid.mp4' }] },
            ]}
            actions={[
              { title: 'Sign Up to Receive Updates' },
              { title: 'Join the Launch Team' },
            ]}
          />
        </Box>
      </Box>
      <Box px="base" py="l" bg="primary">
        <Box
          mt={{ _: '-0.5rem', md: 'base' }}
          mx="auto"
          maxWidth={800}
          textAlign="center"
        >
          <Box as="h2" color="white">
            Service Times: 8am, 10:30am, 11:45am
          </Box>
          <Box as="h2" color="white">
            Address: 11111 Abc St. West Palm Beach, FL, 33407
          </Box>
          <Box my="l">
            <Button bg="secondary" variant="white" mr="l">
              Set a Reminder
            </Button>
            <Button bg="secondary" variant="white">
              Invite a Friend
            </Button>
          </Box>
          <Box as="h3" color="white">
            Can’t wait for___? Join us online.{' '}
          </Box>
        </Box>
      </Box>
      <Box px="base" py="l" bg="white">
        <Box mt={{ _: '-0.5rem', md: 'base' }} mx="auto" maxWidth={800}>
          <ContentBlock
            title="Join the launch team!"
            htmlContent="Want to be a part of creating a place and a space for people to discover what’s here? Join the Christ Fellowship Westlake Launch Team!"
            image="/find-a-location.jpg"
            imageRatio="16by9"
            actions={[{ title: 'Join Us!' }]}
          />
        </Box>
      </Box>
      <Box px="base" py="xl">
        <Box mt={{ _: '-0.5rem', md: 'base' }} mx="auto" maxWidth={900}>
          <CardCarousel cardsDisplayed={3}>
            {props?.carouselPhotos?.map(photo => {
              return (
                <Box mx="s">
                  <Image aspectRatio="3by4" source={photo} />
                </Box>
              );
            })}
          </CardCarousel>
        </Box>
      </Box>
      <Box px="base" py="l" bg="white">
        <Box mt={{ _: '-0.5rem', md: 'base' }} mx="auto" maxWidth={800}>
          <ContentBlock
            title="Hear what others are saying!"
            htmlContent={`"I can't wait for this campus launch!"`}
            image="/find-a-location.jpg"
            imageRatio="4by3"
            actions={[
              { title: 'Sign Up to Receive Updates' },
              { title: 'Join the Launch Team' },
            ]}
            contentLayout="right"
          />
        </Box>
      </Box>
      <Box px="base" py="xl" width="100%">
        <Box mx="auto" maxWidth={1200}>
          <FAQ data={faqData('Palm Beach Gardens')} />
        </Box>
      </Box>
    </Layout>
  );
};

Westlake.defaultProps = {
  carouselPhotos: [
    '/discover-whats-here.jpeg',
    '/external-landing/new-here-1.jpeg',
    '/external-landing/new-here-2.png',
    '/external-landing/new-here-3.jpeg',
  ],
};

Westlake.propTypes = {
  carouselPhotos: PropTypes.array,
};

export default Westlake;
