import { useCampus } from 'hooks';
import React, { useEffect, useState } from 'react';

import { Box, Button, Divider, HtmlRenderer, Loader, Modal } from 'ui-kit';
function EasterLocationsModal(props = {}) {
  const [campusAddress, setCampusAddress] = useState(
    '5343 Northlake Blvd, Palm Beach Gardens, FL 33418'
  );
  const { campus, loading } = useCampus({
    variables: {
      campusName: props?.data?.name,
    },
  });
  useEffect(() => {
    setCampusAddress(
      [
        campus?.street1,
        campus?.city,
        campus?.state,
        campus?.postalCode?.substring(0, 5),
      ].join(', ')
    );
  }, [campus]);

  return (
    <Modal width="90vw" maxWidth="900px" {...props}>
      {!loading ? (
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
            {props?.data?.name !== 'Trinity' && props?.data?.name !== 'Online'
              ? props?.data?.name
              : props?.data?.name !== 'Trinity'
              ? 'Online - Christ Fellowship Everywhere'
              : 'Trinity in Palm Beach Gardens'}
          </Box>
          {campusAddress && (
            <Box
              as="a"
              color="#3B7DD9"
              fontSize={24}
              textDecoration="underline"
              href={campus?.mapLink}
            >
              {campusAddress && props?.data?.name !== 'Online' && campusAddress}
            </Box>
          )}
          <Box
            display="flex"
            flexDirection={{ _: 'column', md: 'row' }}
            justifyContent="space-between"
          >
            <Box color="#353535" mt="l" maxWidth={{ _: '80%', md: '30%' }}>
              <Box>
                <Box>
                  <Box
                    fontFamily="retroica"
                    fontSize={22}
                    textDecoration="underline"
                  >
                    GOOD FRIDAY
                  </Box>
                  <Box fontWeight="bold" fontSize={20} mb="xs">
                    Friday, March 29
                  </Box>
                  <HtmlRenderer
                    fontSize={18}
                    htmlContent={
                      props?.data?.goodFridayServices[0]?.timeDescription
                    }
                  />
                </Box>
                <Box>
                  <Box
                    fontFamily="retroica"
                    fontSize={22}
                    textDecoration="underline"
                    mt="l"
                  >
                    EASTER
                  </Box>
                  {/* MAP DATA*/}
                  {props?.data?.easterServices.map((service, i) => {
                    return (
                      <Box mt={i !== 0 ? 's' : 0}>
                        <Box fontWeight="bold" fontSize={21} mb="xs">
                          {service?.day}
                        </Box>
                        <HtmlRenderer
                          fontSize={18}
                          htmlContent={service?.times}
                        />
                      </Box>
                    );
                  })}
                </Box>
                <Box mt="base" fontSize={12}>
                  {props?.data?.extraInfo &&
                    props?.data?.extraInfo.map((info, i) => {
                      return <HtmlRenderer htmlContent={info} />;
                    })}
                  {props?.data?.name === 'Online' && (
                    <Button
                      fontSize={18}
                      bg="#D65025"
                      px="l"
                      border="1px solid #000"
                      borderRadius={50}
                      href="/online-link"
                    >
                      Join Online
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
            {/* Right Half */}
            <Box
              ml={{ md: 'base' }}
              mt="l"
              borderRadius="8px"
              border="1px solid rgba(85, 83, 82, 0.5)"
              minWidth={{ md: 350 }}
              display="flex"
              alignItems="center"
            >
              <Box mx="base" my="base" width="100%">
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Box fontSize={{ _: 18, md: 24 }} fontWeight="bold">
                    Don’t Miss Service
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    mt="s"
                    color="#818181"
                    fontSize={14}
                    fontWeight="bold"
                  >
                    <Box minWidth="70%">Date</Box>
                    <Box minWidth="30%">Time</Box>
                  </Box>
                  {/* Select Date and Time Section - MISSING */}
                  <Button
                    mt="s"
                    bg="#3B7DD9"
                    border="1px solid #000"
                    borderRadius="50px"
                  >
                    Add to Calendar
                  </Button>

                  <Divider mt="base" />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Box fontSize={{ _: 18, md: 24 }} fontWeight="bold" mt="base">
                    Invite A Friend
                  </Box>
                  <Box mt="s" color="#818181" fontSize={14} fontWeight="bold">
                    Pick your message
                  </Box>
                  {/* Select Message Section - MISSING*/}
                  <Button
                    mt="s"
                    bg="#FFEC7F"
                    color="black"
                    border="1px solid #000"
                    borderRadius="50px"
                  >
                    Send a Text Message
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          padding="xxl"
        >
          <Loader />
        </Box>
      )}
    </Modal>
  );
}

EasterLocationsModal.propTypes = {
  // ...Modal.propTypes,
};

EasterLocationsModal.defaultProps = {};

export default EasterLocationsModal;
