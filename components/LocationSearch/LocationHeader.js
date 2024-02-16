import React from 'react';
import { Box, Button, Icon } from 'ui-kit';

import Styled from './LocationSearch.styles';
import { useActionBanner, useCurrentBreakpoint } from 'hooks';

function LocationHeader({
  handleSubmit,
  setAddress,
  getCoordinates,
  refetch,
  searchScroll,
  searchCurrentLocation,
  locationActive,
  setLocationActive,
}) {
  const currentBreakpoint = useCurrentBreakpoint();
  // checks for banner to adjust title height
  const { actionBanner } = useActionBanner();
  const isBanner = !!actionBanner;

  return (
    <Box
      position="relative"
      display="flex"
      justifyContent={{ _: 'center', lg: 'center' }}
      alignItems={{ _: 'center', sm: 'center' }}
      backgroundPosition="center"
      backgroundSize="cover"
      mb={{ _: 'base', md: 'l', lg: 'xl' }}
    >
      <Box height={{ _: '65vh', md: '50vh', lg: '80vh' }}>
        <Styled.VideoCover
          mx="auto"
          src={'/location-pages/locations-bg-vid.mp4'}
          autoPlay
          muted
          loop
          playsInline
          type="video/mp4"
        />
      </Box>
      <Styled.VideoOverlay />
      <Box
        mx={{ _: 'base', md: 'auto', lg: 'base' }}
        width={{ _: '90%', md: '80%', lg: '90%' }}
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
          <Styled.ContentBox>
            <Box textAlign="center" mt={{ _: 'base', md: 'l' }} maxWidth={900}>
              <Styled.TitleBox>
                Christ Fellowship Church Locations
              </Styled.TitleBox>
              <Styled.SubtitleBox width={{ _: '100%', md: '560px' }}>
                {currentBreakpoint.isSmall ? (
                  <Box>
                    We are one church with many locations across South Florida
                    and online.
                  </Box>
                ) : (
                  <Box>
                    Christ Fellowship is one church with many locations across
                    South Florida, and online—wherever you are!
                  </Box>
                )}
              </Styled.SubtitleBox>

              <Box
                display="flex"
                flexDirection="column"
                width={{ _: '80%', md: '60%', lg: '60%' }}
                color="red"
                mx="auto"
                mt={{ _: 'base', md: '' }}
                as="form"
                onSubmit={handleSubmit}
              >
                <Box display="flex" justifyContent="space-between">
                  <Styled.LocationInput
                    containerProps={{ width: '100%' }}
                    placeholder="Enter zip code here"
                    onChange={e => setAddress(e.target.value)}
                  />
                </Box>
                <Button
                  size="s"
                  maxWidth="200px"
                  minWidth="160px"
                  width={{ _: '70%', md: '60%', lg: '50%' }}
                  borderRadius="6px"
                  mx="auto"
                  fontSize={{ _: '16px', md: '18px' }}
                  mb={{ _: 'l', lg: 'base' }}
                  onClick={() => {
                    //When users clicks search button we want to get the coordinates and refetch the campuses to get distance from location
                    getCoordinates();
                    refetch();
                    searchScroll();
                    setLocationActive(true);
                  }}
                >
                  Find a Location
                </Button>
                <Box
                  mt={{ _: 0, md: 'base' }}
                  mb={locationActive && { _: 'base', md: 'l' }}
                >
                  <Styled.CurrentLocation
                    onClick={() => {
                      //When users clicks search button we want to get their coordinates and refetch the campuses to get distance from location
                      searchCurrentLocation();
                    }}
                  >
                    Use my current location
                  </Styled.CurrentLocation>
                  <Icon
                    color="white"
                    size={{ _: 18, md: 22 }}
                    name="locationArrow"
                  />
                </Box>
                {/* Hydration Error with this? */}
                {!locationActive && (
                  <Box
                    fontSize="14px"
                    fontStyle="italic"
                    color="danger"
                    mt="xs"
                    mb={{ _: 'base', md: 'l' }}
                  >
                    Enable Location Access & Try Again.
                  </Box>
                )}
              </Box>
            </Box>
          </Styled.ContentBox>
        </Box>
      </Box>
    </Box>
  );
}

export default LocationHeader;
