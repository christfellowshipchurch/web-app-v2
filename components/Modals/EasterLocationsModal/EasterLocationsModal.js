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
  const { campus, loading } = useCampus({
    variables: {
      campusName: props?.data?.name,
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
            name={props?.data?.name}
          />
          <Box
            display="flex"
            flexDirection={{ _: 'column', md: 'row' }}
            justifyContent="space-between"
          >
            <Box color="#353535" mt="base" maxWidth={{ _: '80%', md: '45%' }}>
              <Box>
                <Box>
                  <Styled.ServiceDayTitle>GOOD FRIDAY</Styled.ServiceDayTitle>
                  <Box fontWeight="bold" fontSize={20} mb="xs">
                    {props?.data?.goodFridayServices[0]?.day}
                  </Box>
                  <HtmlRenderer
                    fontSize={18}
                    htmlContent={
                      props?.data?.goodFridayServices[0]?.timeDescription
                    }
                  />
                </Box>
                <Box mt="l">
                  <Styled.ServiceDayTitle>EASTER</Styled.ServiceDayTitle>
                  {props?.data?.easterServices.map((service, i) => {
                    return (
                      <Box mt={i !== 0 ? 's' : 0}>
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
                  {props?.data?.extraInfo &&
                    props?.data?.extraInfo.map((info, i) => {
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
                  {props?.data?.name === 'Online' && (
                    <Styled.JoinOnlineButton
                      onClick={() => {
                        router.push('/online-link');
                      }}
                    >
                      Join Online
                    </Styled.JoinOnlineButton>
                  )}
                </Box>
              </Box>
            </Box>
            <DontMissService
              campus={props?.data?.name}
              campusAddress={campusAddress}
              data={props?.data}
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