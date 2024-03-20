import React from 'react';

import {
  FAQ,
  HeroFeature,
  Layout,
  GiveWithPushpay,
  WistiaPlayer,
} from 'components';
import { Box, Button, HtmlRenderer, Icon } from 'ui-kit';
import faqData from 'components/FAQ/faqData';

export default function Give() {
  const callToAction = [
    {
      title: 'GIVE NOW',
      link: '#give',
    },
  ];
  const carouselCards = [
    {
      wistiaId: 'kpga7mn5cj',
      image:
        'https://embed-ssl.wistia.com/deliveries/8a1ca2f5766877dc513d1b80b373d0e3.jpg',
    },
    {
      wistiaId: 'dbukx4kdmk',
      image:
        'https://embed-ssl.wistia.com/deliveries/f82aa181462b90aeebb32438efd8d0ee.jpg',
    },
  ];
  const giveImpactData = [
    {
      icon: 'campus',
      title: 'Church Operations',
      htmlContent: `<div style="color: black; margin-bottom: 20px; font-weight: bold;">From maintaining our facilities, supporting our staff, and carrying out various ministries effectively, we’re able to bring the love and message of Jesus to our region.</div>`,
    },
    {
      icon: 'users',
      title: 'Weekly Ministry Offerings',
      htmlContent: `<div style="color: black; margin-bottom: 20px; font-weight: bold;">We have ministry offerings for the entire family all throughout the week to help people grow in community and in their relationship with God.</div>`,
    },
    {
      icon: 'handshake',
      title: 'Local and Global Missions',
      htmlContent: `<div style="color: black; margin-bottom: 20px; font-weight: bold;">Through service projects, trips, and supporting our partners, we’re able to serve others at their point of need and share the love of Jesus in tangible ways.</div>`,
    },
    {
      icon: 'computer',
      title: 'Digital Resources',
      htmlContent: `<div style="color: black; font-weight: bold;">With weekly live online services and other digital resources like online groups and classes, and free articles and devotionals, people can grow in their faith from anywhere. </div>`,
    },
  ];
  const otherWaysToGiveData = [
    {
      icon: 'envelope-open-dollar',
      title: 'Give Cash or Check',
      htmlContent: `<div style="color: black; font-style: italic;">Give at any <a href="/locations" color: #004F71;">Christ Fellowship location</a> or mail to: <br/><br/>
      Christ Fellowship Church Contributions <br/>
      5343 Northlake Blvd.Palm Beach Gardens, FL 33418</div>`,
    },
    {
      icon: 'plus',
      title: 'Stocks, Bonds, Crypto & other Assets',
      htmlContent: `<div style="color: black; font-style: italic;">To give by stock, bond, or crypto currency please <a href="#contact-us??" style="color: #004F71;">contact us.</a></div>`,
    },
  ];
  const tithingOfferingCards = [
    {
      title: 'Tithing',
      subtitle: 'TRUSTING GOD WITH YOUR FINANCES.',
      htmlContent: `Tithing is a biblical principle that means the tenth. The first tenth, which belongs to God, is Holy and set apart for Him. When we bring our tithe to God, it means that we trust and acknowledge that He’s the giver of every good thing in our lives. Tithing isn’t as much about finances as it is about faith. It’s not about what God wants from you but what He has for you.<br/><br/> In <span style="font-weight: bold;">Malachi 3:10</span>, the Bible says we can test this promise. When we bring our first and best back to God, He promises to bless the rest of our resources so that we could be a blessing toward others.<br/><br/> Is tithing new for you? Take the <a href="https://rock.gocf.org/310challenge">Malachi 3:10 Challenge</a> today!`,
    },
    {
      title: 'Offerings',
      subtitle: 'GIVING BEYOND THE TITHE.',
      htmlContent: `As Pastor Todd has shared, "We're never more like Jesus than when we serve and give." In scripture, we're told that God so loved the world that He gave. Our offerings go beyond the obedience of the tithe; they are a reflection of a life marked by generosity. We believe generosity has a divine purpose connected to it, which is why we invite our church family to give beyond the tithe in one of these ways throughout the year. <br/><br/>Learn more about two special offerings we do each year: <a href="#???">Heart for the House and Christ Birthday Offering.</a>`,
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

      {/* Wistia Carouse */}
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

      {/* Rock Content #2 */}

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
