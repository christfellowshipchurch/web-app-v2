import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'ui-kit';
import Styled from './LocationsPageHeader.styles';
import { useActionBanner } from 'hooks';

const LocationsPageHeader = (props = {}) => {
  const { actionBanner } = useActionBanner();

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
      <Box height={{ _: '40vh', md: '50vh', lg: '80vh' }}>
        <Styled.VideoCover
          mx="auto"
          src={props.backgroundVideo}
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
        width="90%"
        maxWidth={1200}
        zIndex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          height={{ _: isBanner ? '65vh' : 'auto', sm: 'auto' }}
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
