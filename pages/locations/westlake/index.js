import React from 'react';
import PropTypes from 'prop-types';
import { FAQ, HeroLanding, Layout } from 'components';
import { Box, CardCarousel, ContentBlock, Image } from 'ui-kit';
import faqData from 'components/FAQ/faqData';

const Westlake = props => {
  return (
    <Layout
      contentMaxWidth={'100vw'}
      contentHorizontalPadding={'0'}
      contentVerticalPadding={'0'}
      transparentHeader
      title="Westlake | Christ Fellowship Church"
      seoMetaTags={{
        title: 'Westlake | Christ Fellowship Church',
        image: '/westlake/westlake_1.jpeg',
        description:
          'A church, coming to Westlake, that wants to help you live the life you were created for.',
      }}
    >
      <HeroLanding
        heroTitle="Get the most out of life."
        heroSummary="A church, coming to Westlake, that wants to help you live the life you were created for."
        backgroundVideo="/westlake/westlake-bg-vid.mp4"
        actions={[
          {
            title: 'Learn More',
            url: '#learn-more',
          },
        ]}
      ></HeroLanding>
      <Box px="base" py="xl" bg="white">
        <Box
          id="learn-more"
          mt={{ _: '-0.5rem', md: 'base' }}
          mx="auto"
          maxWidth={800}
        >
          <ContentBlock
            title="Welcome to Westlake!"
            htmlContent="When the initial plans for the city of Westlake were being finalized, we knew that we wanted to be a part of this new community. In 2019, we purchased 13 acres to be the future site of Christ Fellowship Westlake, and in December 2022, we will officially open the doors as we welcome both our new neighbors and longtime family home. 
            </br></br>
            But we’re not just building a building. We’re building a place for all generations to live the life they were created to live—and it all starts here! We can’t wait to welcome you and your family to Christ Fellowship Westlake, launching this December. 
            </br></br>
            - Pastors Todd & Julie Mullins"
            image="/westlake/video-thumbnail.png"
            videos={[
              {
                sources: [
                  {
                    uri: 'https://christfellow2p-a.akamaihd.net/CHRISTFELLOW/649/215/PastorsWestLakeUpdate_1.mp4',
                  },
                ],
              },
            ]}
            actions={[
              {
                title: 'Sign Up to Receive Updates',
                target: '_blank',
                relatedNode: { url: 'https://rock.gocf.org/WestlakeInterest' },
              },
              {
                title: 'Join the Launch Team',
                relatedNode: { url: '#join-the-launch' },
              },
            ]}
          />
        </Box>
      </Box>
      <Box px="base" py="l">
        <Box mt={{ _: '-0.5rem', md: 'base' }} mx="auto" maxWidth={900}>
          <ContentBlock
            title={`Upcoming Events`}
            htmlContent={`</br> Learn more about Christ Fellowship Westlake—including meeting the Campus Pastors—at an upcoming interest meeting near you! </br> </br> Sunday, October 2 | Christ Fellowship <a href="palm-beach-gardens">Palm Beach Gardens</a> in the Luncheon - Cafe Multipurpose Room. </br> </br>`}
            image="/westlake/campus_pastors.png"
            imageRatio="4by3"
            contentLayout="left"
          />
        </Box>
      </Box>
      <Box px="base" py="xxl" bg="white">
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

      {/* ---------------  NOTE: We will plan to add this section later.  ---------------- */}

      {/* <Box px="base" py="l" bg="">
        <Box
          mt={{ _: '-0.5rem', md: 'base' }}
          mx="auto"
          maxWidth={800}
          textAlign="center"
        >
          <Box as="h2" fontWeight="normal">
            <HtmlRenderer htmlContent="<b>Service Times:</b> 8am, 10:30am, 11:45am" />
          </Box>
          <Box as="h2" fontWeight="normal">
            <HtmlRenderer htmlContent="<b>Address:</b> Waters Edge Dr Westlake, FL 33470" />
          </Box>
          <Box my="l">
            <Button bg="primary" variant="white" mr="s">
              Set a Reminder
            </Button>
            <Button bg="" variant="secondary">
              Invite a Friend
            </Button>
          </Box>
          <Box as="h3" color="">
            Can’t wait for___? Join us online.{' '}
          </Box>
          <Box mt="base">
            <Box
              as="a"
              target="_blank"
              href="https://www.facebook.com/CFimpact"
              color=""
              mr="base"
            >
              <Icon name="facebook" size="32" />
            </Box>
            <Box
              as="a"
              target="_blank"
              href="https://www.instagram.com/christfellowship.church/?hl=en"
              color=""
            >
              <Icon name="instagram" size="32" />
            </Box>
          </Box>
        </Box>
      </Box> */}
      {/* -------------------------------------------------------   */}

      <Box px="base" py="l">
        <Box
          id="join-the-launch"
          mt={{ _: '-0.5rem', md: 'base' }}
          mx="auto"
          maxWidth={800}
        >
          <ContentBlock
            title="Join the launch team!"
            htmlContent={`Want to be a part of creating a place and a space for people to <a target="_blank" href="https://www.christfellowship.church/discover-whats-here">discover what’s here</a>? Join the Christ Fellowship Westlake Launch Team!`}
            image="/westlake/launch_team.jpeg"
            imageRatio="16by9"
            actions={[
              {
                title: 'Join the Launch Team',
                target: '_blank',
                relatedNode: {
                  url: 'https://rock.gocf.org/WestlakeInterest',
                },
              },
            ]}
          />
        </Box>
      </Box>
      <Box px="base" py="l" bg="white">
        <Box mt={{ _: '-0.5rem', md: 'base' }} mx="auto" maxWidth={1000}>
          <ContentBlock
            title={`“We can’t wait for Christ Fellowship Westlake"`}
            htmlContent={`“We started attending Christ Fellowship 8 years ago when we were just dating. We were goers, but we weren’t plugged in, and we knew God wanted more for our family. After building a home in Westlake, we decided to start leading groups for our new neighbors while we waited for the campus to officially launch—and we were blown away by the community that's already here and just waiting for a building! We love that Christ Fellowship gives us so many ways to hang out with our new friends, and we know that God placed us all here for a reason. We can’t wait for Christ Fellowship Westlake, and we’ll be planting the seeds until it gets here!” - Kaitlin & Josh`}
            image="/westlake/westlake-testimony.jpeg"
            imageRatio="4by3"
            actions={[
              {
                title: 'Sign Up to Receive Updates',
                target: '_blank',
                relatedNode: { url: 'https://rock.gocf.org/WestlakeInterest' },
              },
              {
                title: 'Join the Launch Team',
                relatedNode: { url: '#join-the-launch' },
              },
            ]}
            contentLayout="right"
          />
        </Box>
      </Box>
      <Box px="base" py="xl" width="100%">
        <Box mx="auto" maxWidth={1200}>
          <FAQ
            //We need to specify where the page scrolls on the See More button since it's a different from our main location pages.
            scrollPosition={{ mobile: 4300, desktop: 3800 }}
            data={faqData('Westlake')}
          />
        </Box>
      </Box>
      <Box px="base" py="l" bg="white">
        <Box mt={{ _: '-0.5rem', md: 'base' }} mx="auto" maxWidth={800}>
          <ContentBlock
            title="Experience Christ Fellowship now!"
            htmlContent={`Can’t wait until December 2022? Same here! The good news is that you can experience a Christ Fellowship service live online every Sunday or find another campus near you!`}
            image="/westlake/watch_online.jpeg"
            imageRatio="16by9"
            actions={[
              {
                title: 'Watch Online',
                target: '_blank',
                relatedNode: {
                  url: 'https://cf.church/watchonline',
                },
              },
            ]}
          />
        </Box>
      </Box>
    </Layout>
  );
};

Westlake.defaultProps = {
  carouselPhotos: [
    '/westlake/westlake_1.jpeg',
    '/westlake/westlake_2.jpeg',
    '/westlake/westlake_3.jpeg',
    '/westlake/westlake_4.jpeg',
    '/westlake/westlake_5.jpeg',
    '/westlake/westlake_6.jpeg',
    '/westlake/westlake_7.jpeg',
  ],
};

Westlake.propTypes = {
  carouselPhotos: PropTypes.array,
};

export default Westlake;
