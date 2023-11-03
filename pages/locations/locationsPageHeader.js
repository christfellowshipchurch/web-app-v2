import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'ui-kit';
import Styled from './LocationsPageHeader.styles';
import { useCurrentBreakpoint, useActionBanner } from 'hooks';

const LocationsPageHeader = (props = {}) => {
  const { actionBanner } = useActionBanner();
  let currentBreakpoint = useCurrentBreakpoint();

  // checks for banner to adjust title height
  const isBanner = !!actionBanner;

  return (
    <Box
      position="relative"
      display="flex"
      justifyContent={{ _: 'flex-start', lg: 'center' }}
      alignItems={{ _: 'flex-end', sm: 'center' }}
      backgroundImage={`url(${props?.videoBackgroundImage})`}
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Box height={{ _: 300, md: 400, lg: 500 }}>
        <Styled.VideoCover
          mx="auto"
          src={
            currentBreakpoint.isSmall
              ? props?.backgroundVideo?.mobile
              : props?.backgroundVideo?.desktop
          }
          autoPlay
          muted
          loop
          playsInline
          type="video/mp4"
        />
      </Box>
      <Styled.VideoOverlay />
      <Box
        position="absolute"
        mx="base"
        width={{ _: 'auto', md: '90%' }}
        maxWidth={1200}
        zIndex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          height={{ _: isBanner ? '65vh' : '80vh', sm: 'auto' }}
          display={{ _: 'flex', sm: 'block' }}
          flexDirection="column"
          justifyContent="space-between"
        >
          <Styled.TitleBox>{props?.title}</Styled.TitleBox>
        </Box>
      </Box>
    </Box>
  );
};

LocationsPageHeader.propTypes = {
  title: PropTypes.string,
  backgroundVideo: PropTypes.shape({
    mobile: PropTypes.string,
    desktop: PropTypes.string,
  }),
  videoBackgroundImage: PropTypes.string,
};

LocationsPageHeader.defaultProps = {
  title: 'Christ Fellowship Church Locations',
  backgroundVideo: {
    mobile: '/location-pages/gardens-mobile.mp4',
    desktop: '/location-pages/gardens-desktop.mp4',
  },
  videoBackgroundImage: '/location-pages/gardens-desktop.mp4',
};

export default LocationsPageHeader;
