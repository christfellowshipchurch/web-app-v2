import { FAQ, Layout } from 'components';
import { Box, Button, Image } from 'ui-kit';
import faqData from 'components/FAQ/faqData';

const Easter = () => {
  return (
    <Layout>
      <Box bg="#fcfce6">
        {/* Header Section */}
        <Box pt="l">
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
        {/* Video Section */}
        <Box my="l" py="base" position="relative">
          <Image
            width="100%"
            height={620}
            borderRadius={0}
            source="/easter/video-holder.jpg"
          />
          <Box
            position="absolute"
            // width={{ _: '80%', md: 'auto' }}
            py="l"
            pr="6rem"
            bg="rgba(59, 125, 217, 0.67)"
            top="50%"
            style={{ transform: 'translateY(-50%)' }}
            color="white"
          >
            <Box ml="l" fontSize={24}>
              Come enjoy an Easter service with
            </Box>
            <Box mx="l" mt="s" display="flex" alignItems="center">
              <Image
                source="/easter/easter-icon-1.png"
                height={60}
                width={100}
                mr={0}
                ml="xl"
              />
              <Box as="h2" fontSize={42}>
                a welcoming atmosphere
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Kids Programming Section */}
        {/* Serve Section */}
        {/* FAQ Section Section */}
        <FAQ
          customTheme={{ secondary: '#39383A' }}
          py="l"
          mt="2.5rem !important"
          px={{ _: 0, md: 'l' }}
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
