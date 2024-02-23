import React from 'react';

import { Box, Modal } from 'ui-kit';
function EasterLocationsModal(props = {}) {
  return (
    <Modal width="80vw" {...props}>
      <Box color="black">
        <Box display="flex" alignItems="flex-end">
          <Box as="h1" fontSize={54} mb={0}>
            EASTER
          </Box>
          <Box width={90} fontWeight="bold" fontSize={12} mb={10}>
            AT CHRIST FELLOWSHIP
          </Box>
        </Box>
        <Box as="h1" fontSize={32}>
          {props?.location}Palm Beach Gardens
        </Box>
        <Box
          as="a"
          color="#3B7DD9"
          fontSize={24}
          textDecoration="underline"
          href="/map"
        >
          {props?.address}5343 Northlake Blvd, Palm Beach Gardens, FL 33418
        </Box>
        <Box display="flex">
          <Box color="#353535" mt="l">
            <Box>
              <Box as="h3" fontSize={32} textDecoration="underline">
                Good Friday
              </Box>
              <Box as="h3" fontSize={32} textDecoration="underline" mt="l">
                Easter
              </Box>

              <Box mt="base">
                <Box color="#818181" fontStyle="italic">
                  *Spanish Translation
                </Box>
                <Box>
                  Special programming for babies – 6th grade.{' '}
                  <Box as="a" color="#3B7DD9" href="/christ-fellowship-kids">
                    Learn More {`>`}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box mt="l">
            <Box>Don’t Miss Service</Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

EasterLocationsModal.propTypes = {
  // ...Modal.propTypes,
};

EasterLocationsModal.defaultProps = {};

export default EasterLocationsModal;
