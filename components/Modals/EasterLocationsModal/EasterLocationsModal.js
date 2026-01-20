import { useCampus } from 'hooks';
import React, { useEffect, useState } from 'react';

import { Box, HtmlRenderer, Loader, Modal } from 'ui-kit';
import Styled from './EasterLocationsModal.styles';
import { useRouter } from 'next/router';
import { DontMissService, EasterModalTitle } from './additionalComponents';
import { hideModal, useModalDispatch } from 'providers/ModalProvider';
function EasterLocationsModal(props = {}) {
  const modalDispatch = useModalDispatch();
  const router = useRouter();
  const [campusAddress, setCampusAddress] = useState(
    '5343 Northlake Blvd, Palm Beach Gardens, FL 33418'
  );
  const { data } = props;
  const { name, goodFridayServices, easterServices, extraInfo } = data;
  const { campus, loading } = useCampus({
    variables: {
      campusName: name,
    },
  });
  useEffect(() => {
    setCampusAddress(
      [campus?.city, campus?.state, campus?.postalCode?.substring(0, 5)].join(
        ', '
      )
    );
  }, [campus]);

  return (
    <Modal width="90vw" maxWidth="900px" {...props}>
      {!loading ? (
        <Box color="black">
          <EasterModalTitle
            campusStreet={campus?.street1}
            campusAddress={campusAddress}
            mapLink={campus?.mapLink}
            name={name}
          />
          <Box
            display="flex"
            flexDirection={{ _: 'column', md: 'row' }}
            justifyContent="space-between"
          >
            <Box color="#353535" mt="base" maxWidth={{ _: '80%', md: '45%' }}>
              <Box>
                <Box>
                  <Styled.ServiceDayTitle>
                    {!name.includes('Español')
                      ? 'GOOD FRIDAY'
                      : 'VIERNES SANTO'}
                  </Styled.ServiceDayTitle>
                  <Box fontWeight="bold" mt="xs" fontSize={20} mb="xs">
                    {goodFridayServices[0]?.day}
                  </Box>
                  <HtmlRenderer
                    fontSize={18}
                    htmlContent={goodFridayServices[0]?.timeDescription}
                  />
                </Box>
                <Box mt="l">
                  <Styled.ServiceDayTitle>
                    {!name.includes('Español') ? 'EASTER' : 'PASCUA'}
                  </Styled.ServiceDayTitle>
                  {easterServices.map((service, i) => {
                    return (
                      <Box mt={i !== 0 ? 's' : 'xs'}>
                        <Box fontWeight="bold" fontSize={21} mb="xs">
                          {service?.day}
                        </Box>
                        <HtmlRenderer
                          fontSize={18}
                          htmlContent={service?.timeDescription}
                        />
                      </Box>
                    );
                  })}
                </Box>
                <Box mt="l" fontSize={12}>
                  {extraInfo &&
                    extraInfo.map((info, i) => {
                      let displayFlex = false;
                      let learnMore = 'Learn More >';
                      if (info.includes('6th') || info.includes('primaria')) {
                        displayFlex = true;
                        if (info.includes('primaria')) {
                          learnMore = 'Aprene Más >';
                        }
                      }
                      return (
                        <Box
                          mt={i !== 0 && 'xs'}
                          display={displayFlex && 'flex'}
                          flexDirection={{ _: 'column', md: 'row' }}
                        >
                          <HtmlRenderer htmlContent={info} />
                          {(info.includes('6th') ||
                            info.includes('primaria')) && (
                            <Box
                              as="a"
                              href="#kids-programming"
                              color=" #3B7DD9"
                              ml={{ md: 'xs' }}
                              onClick={() => {
                                modalDispatch(hideModal());
                              }}
                            >
                              {learnMore}
                            </Box>
                          )}
                        </Box>
                      );
                    })}
                  {name === 'Online' && (
                    <Styled.JoinOnlineButton
                      onClick={() => {
                        router.push(
                          'https://www.youtube.com/@ChristFellowship.Church'
                        );
                      }}
                    >
                      Join Online
                    </Styled.JoinOnlineButton>
                  )}
                </Box>
              </Box>
            </Box>
            <DontMissService
              campus={name}
              campusAddress={[campus?.street1, campusAddress].join(', ')}
              data={data}
            />
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
