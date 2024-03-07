import React from 'react';
import { Box, Button } from 'ui-kit';

import Styled from './EasterLocationSearch.styles';

function LocationHeader({
  title = null,
  description,
  handleSubmit,
  setAddress,
  getCoordinates,
  refetch,
  setLocationActive,
  cfeLink,
  hideSearch = false,
}) {
  return (
    <Box
      position="relative"
      display="flex"
      justifyContent={{ _: 'center', lg: 'center' }}
      alignItems={{ _: 'center', sm: 'center' }}
      mb="base"
    >
      <Box
        mx={{ _: 'base', md: 'auto', lg: 'base' }}
        width={{ _: '90%', md: '80%', lg: '90%' }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          display={{ _: 'flex', sm: 'block' }}
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <Box textAlign="center" mt={{ _: 'base', md: 'l' }}>
              {title !== null ? (
                <Box
                  as="h1"
                  mb="base"
                  fontSize={{ _: '2.5rem', md: '3.5rem' }}
                  fontFamily="retroica"
                  fontWeight="500"
                >
                  {title}
                </Box>
              ) : (
                <Box
                  display="flex"
                  flexWrap="wrap"
                  justifyContent="center"
                  alignItems="center"
                  mb="base"
                >
                  <Box
                    as="h1"
                    mb={0}
                    fontSize="3.5rem"
                    fontFamily="retroica"
                    fontWeight="500"
                  >
                    TIMES
                  </Box>
                  <Box
                    mb="s"
                    lineHeight="1"
                    mx="base"
                    fontWeight="600"
                    fontSize="3.5rem"
                  >
                    &
                  </Box>
                  <Box
                    as="h1"
                    mb={0}
                    fontSize="3.5rem"
                    fontFamily="retroica"
                    fontWeight="500"
                  >
                    LOCATIONS
                  </Box>
                </Box>
              )}
              <Box as="h4" fontWeight={{ _: 'normal', md: 'bold' }}>
                {description}
              </Box>

              {!hideSearch && (
                <Box
                  display="flex"
                  flexDirection="column"
                  width={{ _: '80%', md: '60%', lg: '60%' }}
                  color="red"
                  mx="auto"
                  mt={{ _: 'base', md: '' }}
                  mb={{ _: 'xs', md: 'l' }}
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
                    display="none"
                    onClick={() => {
                      //When users clicks search button we want to get the coordinates and refetch the campuses to get distance from location
                      getCoordinates();
                      refetch();
                      setLocationActive(true);
                    }}
                  >
                    Find a Location
                  </Button>
                  {/* TODO : Readd this section once Spanish page is complete!!! */}
                </Box>
              )}
              {cfeLink && (
                <Box
                  as="a"
                  color="#3B7DD9"
                  fontStyle="italic"
                  fontWeight="bold"
                  mt="s"
                  href="/easter-2024-espanol"
                >
                  ¿Buscas un servicio de Pascua en español?
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LocationHeader;
