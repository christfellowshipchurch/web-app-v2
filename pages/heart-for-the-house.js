import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { FAQ, Layout, Testimonials } from 'components';
import { useCurrentBreakpoint } from 'hooks';
import {
  Box,
  CoverImage,
  HtmlRenderer,
  Image,
  ThemeMixin,
  CustomLink,
} from 'ui-kit';
import { faqHeartForHouseData } from 'components/FAQ/faqData';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
`;

// padding: ${themeGet('space.s')};
// padding-bottom: ${themeGet('space.l')};

function HeartForTheHouse(props = {}) {
  const [imageSize, setImageSize] = useState('');
  const currentBreakpoint = useCurrentBreakpoint();

  const data = [
    {
      image: '/heart-for-house/statistics/9340_Statistic.png',
      subtitle: `people said "Yes" to Jesus in 2022.`,
    },
    {
      image: '/heart-for-house/statistics/2294_Statistic.png',
      subtitle:
        'people decided to make a public declaration of their faith through baptism in 2022.',
    },
    {
      image: '/heart-for-house/statistics/100K_Statistic.png',
      subtitle:
        'subscribers on YouTube—including 30,000 new subscribers in last year!',
    },
    {
      image: '/heart-for-house/statistics/2700_Statistic.png',
      subtitle:
        'people experienced Christ Fellowship Westlake at the Grand Opening in March, including 400 kids!',
    },
  ];

  //changes banner image based on screen size.
  useEffect(() => {
    switch (currentBreakpoint?.name) {
      case 'sm':
        return setImageSize('-mobile');
      case 'xl':
        return setImageSize('-large');
      default:
        return setImageSize('');
    }
  }, [currentBreakpoint]);

  return (
    <Layout>
      <ThemeMixin
        theme={{
          colors: {
            primary: '#E63E51',
            secondary: '#133156',
          },
        }}
      >
        <CoverImage
          type="hero-glass"
          src={`/heart-for-house/banners/header${imageSize}.jpg`}
        />
        <Image
          width="100%"
          aspectRatio="none"
          borderRadius="0px"
          source={`/heart-for-house/banners/year-review${
            imageSize === '-large' ? '' : imageSize
          }.jpg`}
        />

        <Box>
          <Box as="h1" py="l" color="secondary" size="16" textAlign="center">
            Year in Review
          </Box>
          <Box
            as="h4"
            color="neutrals.600"
            textAlign="center"
            textTransform="uppercase"
            mt="-2rem"
          >
            what we were able to do because of you
          </Box>
        </Box>

        <Box
          display={{ _: 'block', md: 'grid' }}
          gridTemplateColumns="1fr 1fr"
          gridTemplateRows="1fr 1fr"
          gridGap="1rem 1rem"
          gridTemplateAreas={`". ."`}
          textAlign="center"
          maxWidth="40%"
          margin="auto"
          p="l"
        >
          {data.map(({ image, subtitle }) => (
            <Box>
              <Box>
                <StyledCard>
                  <Image mb="-3rem" source={image} aspectRatio="16by9" />
                  <Box
                    as="p"
                    fontSize={{ _: '1rem', lg: '1rem' }}
                    lineHeight="1.65rem"
                    mt="l"
                  >
                    {subtitle}
                  </Box>
                </StyledCard>
              </Box>
            </Box>
          ))}
        </Box>

        <Image
          width="100%"
          aspectRatio="none"
          borderRadius="0px"
          source={`/heart-for-house/banners/vision${
            imageSize === '-large' ? '' : imageSize
          }.jpg`}
        />
        <Box py="xxl" bg="secondary">
          <Testimonials
            py="l"
            maxWidth={1200}
            m="auto"
            title='<span style="color:#FFFFFF">This is our </span><span style="color:#E63E51">heart.</span>'
            testimonies={[
              {
                name: '<p style="color:#E63E51;margin-bottom: 6px;">Alex and Melissa</p><p style="color:#E63E51;font-weight:normal"><i>Christ Fellowship Palm Beach Gardens</i></p>',
                description:
                  '<b>We can’t give enough in comparison to what God has given our family through Christ Fellowship.</b>',
                image: '/heart-for-house/heart-logo-box.png',
              },
              {
                name: '<p style="color:#E63E51;margin-bottom: 6px;">Kyle and Michelle</p><p style="color:#E63E51;font-weight:normal"><i>Christ Fellowship Young Adults</i></p>',
                description:
                  '<b>Each time I walk through the doors of Christ Fellowship on a Sunday, I immediately feel like I am at home.</b>',
                image: '/heart-for-house/heart-logo-box.png',
              },
              {
                name: '<p style="color:#E63E51;margin-bottom: 6px;">Kandice, 6 years old</p><p style="color:#E63E51;font-weight:normal"><i>Christ Fellowship Kids</i></p>',
                description:
                  '<b>I added a second piggy bank to outdo myself in giving because that’s what I’ve seen my mommy do!</b>',
                image: '/heart-for-house/heart-logo-box.png',
              },
            ]}
          />
        </Box>
        <Box px="base" py="xl" width="100%">
          <Box mx="auto" maxWidth={1200}>
            <FAQ showDescription={false} data={faqHeartForHouseData} />
          </Box>
        </Box>
        <Image
          width="100%"
          aspectRatio="none"
          borderRadius="0px"
          source={`/heart-for-house/banners/bottom-banner.png`}
        />
      </ThemeMixin>
    </Layout>
  );
}

export default HeartForTheHouse;
