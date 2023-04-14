import React, { useEffect, useState } from 'react';

import { FAQ, Layout, Testimonials } from 'components';
import { useCurrentBreakpoint } from 'hooks';
import { Box, CoverImage, HtmlRenderer, Image, ThemeMixin } from 'ui-kit';
import { faqHeartForHouseData } from 'components/FAQ/faqData';

function HeartForTheHouse(props = {}) {
  const [imageSize, setImageSize] = useState('');
  const currentBreakpoint = useCurrentBreakpoint();

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
