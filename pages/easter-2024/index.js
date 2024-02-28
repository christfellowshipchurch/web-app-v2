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

const Easter = () => {
  return (
    <Layout>
      <Box bg="#fcfce6">
        {/* Header Section */}
        <Box
          background="url('/easter/paper-background.jpg')"
          backgroundSize="cover"
          pt="l"
        >
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
          <Box my="base" display="flex" justifyContent="center">
            <Button
              bg="#3B7DD9"
              fontSize={18}
              py="xs"
              px="base"
              borderRadius="20px"
            >
              Find A Service
            </Button>
          </Box>
        </Box>

        {/* Video/Word Carousel Section */}
        <Box my="l" py="base" position="relative">
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
            bg={{ _: 'transparent', md: 'rgba(59, 125, 217, 0.60)' }}
            top="50%"
            style={{ transform: 'translateY(-50%)' }}
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
                mx="l"
                mt="s"
                display="flex"
                alignItems="center"
                textAlign={{ _: 'center', md: 'left' }}
                width={{ _: 260, md: 'auto' }}
              >
                <Image
                  display={{ _: 'none', md: 'block' }}
                  source="/easter/easter-icon.png"
                  height={{ _: 60, lg: 80, xl: 110 }}
                  width={{ _: 100, lg: 140, xl: 200 }}
                  mr="-1rem"
                  ml={{ _: 0, md: 'xl' }}
                />
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
        <EasterLocationSearch />

        {/* Photo Carousel */}
        <PhotoCarousel
          photos={[
            '/easter/photo-carousel/photo-1.jpg',
            '/easter/photo-carousel/photo-2.jpg',
            '/easter/photo-carousel/photo-3.jpg',
            '/easter/photo-carousel/photo-4.jpg',
            '/easter/photo-carousel/photo-5.jpg',
            '/easter/photo-carousel/photo-6.jpg',
            '/easter/photo-carousel/photo-7.jpg',
            '/easter/photo-carousel/photo-8.jpg',
          ]}
        />

        {/* <Image
            display={{ _: 'none', md: 'block' }}
            source="/easter/easter-elements-1.png"
            height={{ _: 60, lg: 80, xl: 300 }}
            width={{ _: 100, lg: 140, xl: 300 }}
            mr="0rem"
            ml={{ _: 0, md: 'xl' }}
          /> */}

        {/* Kids Programming Section */}
        <Box
          py="xxl"
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
            _: "url('/easter/lines-mobile.png')",
            md: "url('/easter/lines-desktop.png')",
            xl: "url('/easter/lines-desktop-xl.png')",
          }}
        >
          <Box
            m="auto"
            maxWidth="1100px"
            p="base"
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
                    url: 'http://eepurl.com/hAk7aP',
                  },
                  target: '_blank',
                  bg: '#FF7D01',
                  borderRadius: '30px',
                  paddingLeft: '40px',
                  paddingRight: '40px',
                  mt: 's',
                },
              ]}
              contentLayout={'LEFT'}
              htmlContent={`<div>
                <p>
                  Christ Fellowship Kids seeks to lead your kids to love Jesus, love others, and love life! And Easter at Christ Fellowship is designed with your family in mind, including special programming for <b> babies-kindergarten during all Good Friday services and babies-elementary during all Easter services.<b> 
                </p>
              </div>
            `}
              image={'easter/special-kids-programming.png'}
              imageRatio={'12by17'}
            />
          </Box>
        </Box>

        {/* Serve Section */}
        <Box
          background="linear-gradient(0deg, rgba(59,125,217,1) 24%, rgba(138,208,194,1) 91%)"
          borderTop="3px solid black"
          borderBottom="3px solid black"
        >
          <Box
            py="xxl"
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
                      url: 'http://eepurl.com/hAk7aP',
                    },
                    target: '_blank',
                    bg: '#FFEC7F',
                    color: 'black',
                    borderRadius: '30px',
                    paddingLeft: '40px',
                    paddingRight: '40px',
                    mt: 's',
                  },
                ]}
                contentLayout={'RIGHT'}
                htmlContent={`<div>
                <p>
                You can play a part in Easter at Christ Fellowship. How you serve is up to you! From the streets to the seats—there’s a spot for everyone on the Easter Dream Team!
                </p>
              </div>
            `}
                image={'easter/dream-team-image.png'}
                imageRatio={'13by17'}
              />
            </Box>
          </Box>
        </Box>
        {/* FAQ Section Section */}
        <FAQ
          customTheme={{ secondary: '#39383A' }}
          py="l"
          mt="2.5rem !important"
          px={{ _: 's', md: 'l' }}
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
    </Layout>
  );
};

export default Easter;
