import {
  EasterLocationSearch,
  FAQ,
  Layout,
  PhotoCarousel,
  VerticalWordCarousel,
  VideoHeader,
} from 'components';
import { Box, Button, Image, EasterContentBlock } from 'ui-kit';
import faqData from 'components/FAQ/faqData';
import { useCurrentBreakpoint } from 'hooks';

const Easter = () => {
  const currentBreakpoint = useCurrentBreakpoint();

  return (
    <Layout>
      <Box
        background="url('/easter/paper-background.jpg')"
        backgroundSize="contain"
      >
        {/* Header Section */}
        <Box pt="l" pb="xl">
          <Image
            width={{ _: '90vw', md: 600, lg: 800 }}
            aspectRatio="auto"
            source="/easter/easter-logo.png"
          />
          <Box
            my="base"
            display="flex"
            flexDirection="column"
            alignItems="center"
            fontWeight="bold"
            mb={0}
            color="black"
          >
            <Box fontSize={{ _: 88, md: 110, lg: 124 }} lineHeight="0.7">
              EASTER
            </Box>
            <Box mt={0} fontSize={{ _: 27, md: 34, lg: 38 }}>
              AT CHRIST FELLOWSHIP
            </Box>
          </Box>
          <Box mt="base" display="flex" justifyContent="center">
            <Button
              as="a"
              bg="#3B7DD9"
              fontSize={18}
              py="xs"
              px="base"
              borderRadius="20px"
              href="#times-locations"
            >
              Find A Service Near Me
            </Button>
          </Box>
        </Box>

        {/* Video/Word Carousel Section */}
        <Box position="relative">
          <VideoHeader
            // bgOverlay="rgba(59, 125, 217, 0.50)"
            backgroundVideo={{
              desktop:
                'https://embed.wistia.com/deliveries/a77f306b26810383456d108d6a159db0.mp4',
            }}
            overlay={true}
            overlayColor="rgba(70, 113, 194, 0.4)"
            logoAspectRatio="16/9"
            backgroundImage="url(/get-there-first/banner.jpg)"
            backgroundPosition="center"
            backgroundSize="cover"
          />

          <Box
            position="absolute"
            py="l"
            pr={{ _: 0, md: '1.5rem', lg: '4.5rem', xl: '6rem' }}
            top={{ _: '20%', md: '30%', lg: '10%', xl: '10%' }}
            right={{ _: 0, md: '20%', lg: '10%', xl: '10%' }}
            color="white"
            zIndex={2}
          >
            <Box
              position="relative"
              fontSize={30}
              width={{ _: '100vw', md: 'auto' }}
              display="flex"
              flexDirection="column"
              alignItems={{ _: 'center', md: 'flex-start' }}
            >
              <Box
                ml={{ _: 0, md: 'l' }}
                textAlign={{ _: 'center', md: 'left' }}
                fontSize={{ _: 20, md: 24, lg: 26, xl: 36 }}
                fontWeight="normal"
              >
                Experience an Easter service with
              </Box>
              <Box
                ml={{ _: 0, md: 200 }}
                mt="s"
                display="flex"
                alignItems="center"
                textAlign={{ _: 'center', md: 'left' }}
                width={{ _: 260, md: 'auto' }}
              >
                <VerticalWordCarousel
                  data={[
                    'a welcoming environment',
                    'uplifting worship music',
                    'an encouraging message',
                    'outdoor activities for kids',
                    'time to connect with others',
                  ]}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Times and Locations */}
        <EasterLocationSearch additionalInfo='<span style="font-weight: bold;">Spread the word about Easter at Christ Fellowship with these easy-to-download <a href="https://rock.gocf.org/easterinvite2024"style="color: #3B7DD9; text-decoration: underline;"> invite graphics</a>.</span>' />

        {/* Kids Programming Section */}
        <Box
          id="kids-programming"
          py={{ _: 'l', xl: 'xxl' }}
          backgroundColor="#EBCD5F"
          backgroundSize={{ _: '200px', xl: '450px' }}
          backgroundPosition={{
            _: 'top -50px right -30px',
            md: 'top right 0px',
            xl: 'top -90px right -30px',
          }}
          backgroundRepeat="no-repeat"
          borderTop="3px solid black"
          backgroundImage={{
            _: '',
            md: "url('/easter/lines-desktop.png')",
            xl: "url('/easter/lines-desktop-xl.png')",
          }}
        >
          <Box
            m="auto"
            maxWidth="1100px"
            px="base"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <EasterContentBlock
              title={`Special Programming for Kids`}
              actions={[
                {
                  title: 'Find A Service',
                  border: '2px solid black',
                  relatedNode: {
                    url: '#times-locations',
                  },
                  bg: '#FF7D01',
                  borderRadius: '30px',
                  paddingLeft: '40px',
                  paddingRight: '40px',
                  mt: 's',
                },
              ]}
              contentLayout={currentBreakpoint.isSmall ? 'INVERTED' : 'LEFT'}
              htmlContent={`<div>
                <p>
                  Christ Fellowship Kids seeks to lead your kids to love Jesus, love others, and love life! And Easter at Christ Fellowship is designed with your family in mind, including special programming for  <b>babies-elementary</b> during all <b>Good Friday</b> and  <b>Easter services</b>. When you check in your child to Christ Fellowship Kids, they will enjoy a few worship songs, group time lead by caring leaders, and a lesson on the Easter story.
                </p>
              </div>
            `}
              image={
                currentBreakpoint.isSmall
                  ? '/easter/special-kids-programming-mobile.png'
                  : 'easter/special-kids-programming.png'
              }
              imageRatio={currentBreakpoint.isSmall ? '' : '12by17'}
            />
          </Box>
        </Box>

        {/* Photo Carousel */}
        <PhotoCarousel
          photos={[
            '/easter/photo-carousel/1.jpg',
            '/easter/photo-carousel/2.jpg',
            '/easter/photo-carousel/3.jpg',
            '/easter/photo-carousel/4.jpg',
            '/easter/photo-carousel/5.jpg',
            '/easter/photo-carousel/6.jpg',
            '/easter/photo-carousel/7.jpg',
            '/easter/photo-carousel/8.jpg',
            '/easter/photo-carousel/9.jpg',
            '/easter/photo-carousel/10.jpg',
            '/easter/photo-carousel/11.jpg',
            '/easter/photo-carousel/12.jpg',
            '/easter/photo-carousel/13.jpg',
            '/easter/photo-carousel/14.jpg',
            '/easter/photo-carousel/15.jpg',
            '/easter/photo-carousel/16.jpg',
          ]}
        />

        {/* Serve Section */}
        <Box
          background="linear-gradient(0deg, rgba(59,125,217,1) 24%, rgba(138,208,194,1) 91%)"
          borderTop="3px solid black"
          borderBottom="3px solid black"
        >
          <Box
            py={{ _: 'l', xl: 'xxl' }}
            backgroundImage="url(/easter/cross-equals-love.png)"
            backgroundPosition={{
              _: 'bottom right 30px',
              md: 'bottom right 100px',
            }}
            backgroundSize={{ _: 200, md: 300 }}
            backgroundRepeat="no-repeat"
          >
            <Box
              m="auto"
              mb={{ _: 'xl', md: 'xs' }}
              maxWidth="1100px"
              p="base"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <EasterContentBlock
                title={`Serve at Easter`}
                subtitle={'Join the Easter Dream Team'}
                actions={[
                  {
                    title: 'Sign Up to Serve',
                    border: '2px solid black',
                    relatedNode: {
                      url: '/events/join-easter-dream-team',
                    },
                    bg: '#FFEC7F',
                    color: 'black',
                    borderRadius: '30px',
                    paddingLeft: '40px',
                    paddingRight: '40px',
                    mt: 's',
                  },
                ]}
                contentLayout={currentBreakpoint.isSmall ? 'INVERTED' : 'RIGHT'}
                htmlContent={`<div>
                <p>
                You can play a part in Easter at Christ Fellowship. How you serve is up to you! From the streets to the seats—there’s a spot for everyone on the Easter Dream Team!
                </p>
              </div>
            `}
                image={
                  currentBreakpoint.isSmall
                    ? 'easter/dream-team-image-mobile.png'
                    : 'easter/dream-team-image.png'
                }
                imageRatio={currentBreakpoint.isSmall ? '' : '13by17'}
              />
            </Box>
          </Box>
        </Box>
        {/* FAQ Section Section */}
        <Box mx="auto" maxWidth={1200} px="base">
          <FAQ
            customTheme={{ secondary: '#39383A' }}
            py="xl"
            mt="2.5rem !important"
            data={faqData('Easter')}
            otherData={{
              title: 'FAQ',
              titleColor: 'black',
              question: 'Have additional questions?',
              description:
                '<div>Call <span style="font-weight: bold;">561-776-3380</span> to speak to someone on our team that would love to help you.</div>',
              descriptionOverride: true,
            }}
          />
        </Box>
      </Box>
    </Layout>
  );
};

export default Easter;
