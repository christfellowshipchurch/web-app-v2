import React from 'react';

import {
  FAQ,
  HeroFeature,
  Layout,
  GiveWithPushpay,
  WistiaPlayer,
  CardGridFeature,
} from 'components';
import { Box, Button, HtmlRenderer, Icon } from 'ui-kit';
import faqData from 'components/FAQ/faqData';
import { FeatureProvider } from 'providers';
import {
  otherWaysToGiveData,
  tithingOfferingCards,
  giveImpactData,
  carouselCards,
  financialImprovementId,
  moreGivingOpportunitiesId,
} from '../../lib/giveData';

export default function Give() {
  const callToAction = [
    {
      title: 'GIVE NOW',
      link: '#give',
    },
  ];

  return (
    <Layout title="Give">
      {/* Hero */}
      <Box
        mb="l"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <HeroFeature
          backgroundImage="/give-background.jpg"
          title="Your Giving Makes an Impact"
          description="When you give, you’re a part of making a difference in the lives of people right here in our region and around the world."
          cta={callToAction}
        />
        <Box mt="l" textAlign="center" maxWidth="580px">
          <Box>
            <Box as="h1" mt="base" mb="base">
              Why We Give
            </Box>
            <Box mt="s" mb={{ _: 'base', md: 0 }} mx={{ _: 's', md: 0 }}>
              <Box
                display="inline"
                fontWeight="bold"
                textDecoration="underline"
              >
                We give because God is a giver.
              </Box>{' '}
              His very heart and nature, as shown throughout Scripture, is
              generosity. Because we’re created in His image, we’re most like
              Him when we give and steward all that He has entrusted to us. When
              we give, it positions us to be the hands and feet of Jesus in our
              region and beyond.
            </Box>
          </Box>
          <Button
            as="a"
            href="#what-the-bible-says"
            my="l"
            fontWeight="normal"
            fontSize="s"
          >
            LEARN MORE
          </Button>
        </Box>
      </Box>

      {/* Pushpay */}
      <Box id="give">
        <Box id="give">
          <GiveWithPushpay
            title="Give Online"
            subtitle="Give safely and securely online to Christ Fellowship Church. Give a one-time gift or set up a recurring gift."
            buttonColor="primary"
            amountColor="white"
            backgroundImage="url(/give/give-pushpay-background.png)"
            buttonLink="https://pushpay.com/g/christfellowship"
            otherOnlineOptions
          />
        </Box>
      </Box>

      {/* Ways to Give */}
      <Box
        py="l"
        id="ways-to-give"
        bg="#DAEAF1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box as="h1" mt="base" color="#004F71">
          Other Ways to Give
        </Box>
        <Box mt="l" width={{ md: '80%' }} pb={{ md: 'base' }}>
          <Box
            display="flex"
            justifyContent={{ _: 'center', md: 'space-around' }}
            alignItems={{ _: 'center', md: 'flex-start' }}
            flexDirection={{ _: 'column', md: 'row' }}
            pb="l"
          >
            {otherWaysToGiveData?.map((card, index) => (
              <Box
                textAlign="center"
                display="flex"
                mt={index !== 0 ? { _: 'l', md: 0 } : 0}
                ml={index !== 0 && { md: 'base' }}
                mr={index === 0 && { md: 'base' }}
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                maxWidth={{ _: '90vw', md: 430 }}
                width={{ _: '90vw', md: '45vw' }}
                color="#004F71"
              >
                <Icon
                  width="80px"
                  height="80px"
                  name={card?.icon}
                  mt={index !== 0 && { _: 'base', md: 0 }}
                  mb="s"
                />
                <Box
                  as="h2"
                  width="320px"
                  mt={{ _: 'base', md: 'l' }}
                  mb="base"
                  color="black"
                >
                  {card?.title}
                </Box>
                <HtmlRenderer htmlContent={card?.htmlContent} />
              </Box>
            ))}
          </Box>
          <Box py="l" textAlign="center" mx={{ _: 'base', md: 0 }}>
            For help setting up electronic giving or other giving questions,{' '}
            <Box display="inline" color="#004F71" fontWeight="bold">
              please call 561-776-3380.
            </Box>
          </Box>
        </Box>
      </Box>

      {/* What Does the Bible Say About Giving */}
      <Box
        mt="l"
        id="what-the-bible-says"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box mb={{ _: 'base', md: 'l' }} textAlign="center" maxWidth="1000px">
          <Box as="h1" mt="base" color="#004F71">
            What Does the Bible Say About Giving?
          </Box>
          <Box mx="base" mt="base" fontStyle="italic">
            “Remember this: Whoever sows sparingly will also reap sparingly, and
            whoever sows generously will also reap generously. Each of you
            should give what you have decided in your heart to give, not
            reluctantly or under compulsion, for God loves a cheerful giver. And
            God is able to bless you abundantly, so that in all things at all
            times, having all that you need, you will abound in every good
            work.” <br />
            <br />
          </Box>
          <Box fontWeight="bold">2 Corinthians 9:6-8</Box>
        </Box>
        <Box
          mt="l"
          display="flex"
          flexDirection={{ _: 'column', md: 'row' }}
          mb="base"
        >
          {tithingOfferingCards?.map((card, index) => (
            <Box
              maxWidth={{ _: '90vw', md: 510 }}
              width={{ _: '90vw', md: '45vw' }}
              id={index}
              mt={index !== 0 ? { _: 'l', md: 0 } : 0}
              ml={index !== 0 && { md: 'base' }}
              mr={index === 0 && { md: 'base' }}
              p="base"
              borderRadius="l"
              boxShadow="0px 8px 20px -5px rgba(0, 0, 0, 0.36)"
            >
              <Box textAlign="center">
                <Box as="h2" color="black">
                  {card?.title}
                </Box>
                <Box mb="base" color="#9C9C9D" fontWeight="bold">
                  {card?.subtitle}
                </Box>
                <HtmlRenderer htmlContent={card?.htmlContent} />
              </Box>
            </Box>
          ))}
        </Box>
        <Button
          as="a"
          mt="l"
          mb={{ _: 'base', md: 'l' }}
          fontWeight="normal"
          fontSize="s"
          href="#give"
        >
          GIVE NOW
        </Button>
      </Box>

      {/* Wistia Carousel */}
      <Box
        id="impact"
        py="l"
        display="flex"
        flexDirection="column"
        alignItems={{ _: 'flex-start', md: 'center' }}
      >
        <Box
          as="h1"
          fontSize={{ _: 28, md: 40 }}
          my="base"
          color="#0092BC"
          maxWidth={{ md: 800 }}
          mx={{ _: 's', md: 0 }}
          textAlign="center"
        >
          When you give, you’re impacting others with the love and message of
          Jesus Christ.
        </Box>
        {/* Carousel */}
        <Box
          display="flex"
          justifyContent={{ md: 'center' }}
          width="100%"
          overflow="auto"
          py="l"
        >
          {carouselCards?.map((card, index) => (
            <Box
              minWidth={{ _: '80vw', md: 0 }}
              maxWidth={{ _: '80vw', md: 450, lg: 500 }}
              width={{ _: '80vw', md: '45vw' }}
              boxShadow="xl"
              borderRadius="base"
              overflow="auto"
              mr={
                index === 0
                  ? { md: 'base' }
                  : index === carouselCards.length - 1
                  ? { _: 'base', md: 0 }
                  : 0
              }
              ml={{ _: 'base', md: index !== 0 ? 'base' : 0 }}
            >
              <WistiaPlayer
                videoId={card?.wistiaId}
                wrapper={`wistia-player-container-${index}`}
              />
            </Box>
          ))}
        </Box>
        <Box
          display="flex"
          justifyContent={{ _: 'center', md: 'center', xl: 'space-between' }}
          alignItems={{ _: 'center', md: 'flex-start' }}
          flexDirection={{ _: 'column', md: 'row' }}
          flexWrap="wrap"
          mt="base"
          pb="l"
          mx="auto"
        >
          {giveImpactData?.map((card, index) => (
            <Box textAlign="center">
              <Box
                height={{ _: 'auto', md: '340px' }}
                textAlign="center"
                display="flex"
                mt={index !== 0 ? { _: 'l', md: 0 } : 0}
                ml={index !== 0 && { md: 'l' }}
                mr={index === 0 && { md: 'l' }}
                alignItems="center"
                justifyContent="space-between"
                flexDirection="column"
                mx={{ md: 's' }}
                width={{ _: '80vw', md: 260 }}
                color="#818181"
              >
                <Box>
                  <Icon
                    width="80px"
                    height="80px"
                    name={card?.icon}
                    mt={index !== 0 && { _: 'base', md: 0 }}
                    mb="s"
                  />
                  <Box as="h2" mt={{ _: 'base', md: 'l' }} mb="base">
                    {card?.title}
                  </Box>
                </Box>
                <HtmlRenderer htmlContent={card?.htmlContent} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Rock Content #1 */}
      <Box maxWidth={1100} mx="auto" my="l" py="l">
        <FeatureProvider
          Component={CardGridFeature}
          customCardSize={'HIGHLIGHT_MEDIUM'}
          horizontalScroll={false}
          titleOverride
          dataOverride={{
            title:
              '<div style="color: #004F71; font-size: 2.25rem; font-weight: bold;"> More Opportunities to Give</div>',
          }}
          options={{
            variables: {
              id: moreGivingOpportunitiesId,
            },
          }}
        />
      </Box>

      {/* Rock Content #2 */}
      <Box bg="secondary" py="xl">
        <Box maxWidth={1100} mx="auto" my="base">
          <FeatureProvider
            Component={CardGridFeature}
            customCardSize={'HIGHLIGHT_MEDIUM'}
            horizontalScroll={false}
            titleOverride
            dataOverride={{
              title:
                '<div style="color: white; font-size: 2.25rem; font-weight: bold;"> Looking to Improve Your Finances?</div>',
              subtitle:
                '<div style=" margin-top: 5px; color: white; font-size: 1rem; font-weight: bold;"> CLASSES & OTHER RESOURCES</div>',
            }}
            options={{
              variables: {
                id: financialImprovementId,
              },
            }}
          />
          <Button
            as="a"
            mt="l"
            display="flex"
            mx="auto"
            width="fit-content"
            href=""
            bg="white"
            color="primary"
            border="2px solid"
          >
            SEE ALL
          </Button>
        </Box>
      </Box>

      {/* FAQ Section */}
      <Box mx="auto" maxWidth={1200} px="base">
        <FAQ
          customTheme={{ secondary: '#39383A' }}
          py="xl"
          mt="2.5rem !important"
          data={faqData('Give')}
          otherData={{
            title: 'FAQ',
            question: 'Have additional questions?',
            description:
              '<div>Call <span style="font-weight: bold;">561-776-3380</span> to speak to someone on our team that would love to help you.</div>',
            descriptionOverride: true,
          }}
        />
      </Box>
    </Layout>
  );
}
