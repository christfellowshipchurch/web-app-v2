import React from 'react';
import { Box, Button } from 'ui-kit';

import Styled from './EasterLocationSearch.styles';

function LocationHeader({
  handleSubmit,
  setAddress,
  getCoordinates,
  refetch,
  setLocationActive,
}) {
  return (
    <Box
      position="relative"
      display="flex"
      justifyContent={{ _: 'center', lg: 'center' }}
      alignItems={{ _: 'center', sm: 'center' }}
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
              <Box as="h1" fontSize="3.5rem">
                TIMES & LOCATIONS
              </Box>
              <Box as="h4">
                We have Easter and Good Friday services all over South Florida.
                Find a location near you and pick a service that works for you!
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                width={{ _: '80%', md: '60%', lg: '60%' }}
                color="red"
                mx="auto"
                mt={{ _: 'base', md: '' }}
                mb={{ _: 'base', md: 'l' }}
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
                {/* <Box
                  as="a"
                  color="#3B7DD9"
                  fontStyle="italic"
                  fontWeight="bold"
                  mt="s"
                  href="/easter-2024-espanol"
                >
                  ¿Buscas un servicio de Pascua en español?
                </Box> */}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LocationHeader;
