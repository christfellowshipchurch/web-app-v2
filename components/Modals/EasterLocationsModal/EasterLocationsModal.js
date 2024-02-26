import React from 'react';

import { Box, Button, Divider, HtmlRenderer, Modal } from 'ui-kit';
function EasterLocationsModal(props = {}) {
  return (
    <Modal width="90vw" maxWidth="1100px" {...props}>
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
          {props?.data?.name !== 'Trinity'
            ? props?.data?.name
            : 'Trinity in Palm Beach Gardens'}
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
        <Box
          display="flex"
          flexDirection={{ _: 'column', md: 'row' }}
          justifyContent="space-between"
        >
          <Box color="#353535" mt="l" maxWidth={{ _: '80%', md: '30%' }}>
            <Box>
              <Box>
                <Box fontSize={32} textDecoration="underline">
                  Good Friday
                </Box>
                <Box fontWeight="bold" fontSize={21} mb="xs">
                  Friday, March 29
                </Box>
                <HtmlRenderer
                  fontSize={18}
                  htmlContent={props?.data?.goodFridayServices[0]?.times}
                />
              </Box>
              <Box>
                <Box fontSize={32} textDecoration="underline" mt="l">
                  Easter
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
              </Box>
            </Box>
          </Box>
          {/* Right Half */}
          <Box
            ml={{ md: 'base' }}
            mt="l"
            borderRadius="8px"
            border="1px solid black"
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
                {/* <Select
                  defaultValue={eventGroupings[0]?.name}
                  id="campusSelect"
                  mb={selectedGroup?.instances?.length > 0 ? 'base' : '0'}
                  name="campusSelect"
                  onChange={handleChange}
                >
                  <Select.Option value="" disabled={true}>
                    Hey! Come with me to Easter at Christ Felowship
                  </Select.Option>
                  {eventGroupings?.map(({ name }) => {
                    return (
                      <Select.Option key={name} value={name}>
                        {name}
                      </Select.Option>
                    );
                  })}
                </Select> */}
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
    </Modal>
  );
}

EasterLocationsModal.propTypes = {
  // ...Modal.propTypes,
};

EasterLocationsModal.defaultProps = {};

export default EasterLocationsModal;
