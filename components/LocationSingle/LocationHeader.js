import React from 'react';
import PropTypes from 'prop-types';

import { Box, Button, Divider } from 'ui-kit';
import Styled from './LocationSingle.styles';
import { showModal, useModalDispatch } from 'providers/ModalProvider';

const LocationHeader = (props = {}) => {
  const modalDispatch = useModalDispatch();

  return (
    <Box
      position="relative"
      display="flex"
      justifyContent={{ _: 'flex-start', lg: 'center' }}
      alignItems={{ _: 'flex-end', sm: 'center' }}
      backgroundImage="url(/external-landing/external-bg-video-frame-1.png)"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Box height={{ _: '90vh', sm: 500, md: 600, lg: 700 }}>
        <Styled.VideoCover
          mx="auto"
          src="/external-landing/external-bg-vid.mp4"
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
      >
        <Box
          height={{ _: '80vh', sm: 'auto' }}
          display={{ _: 'flex', sm: 'block' }}
          flexDirection="column"
          justifyContent="space-between"
          maxWidth={{ _: 500, md: 600, lg: 750 }}
        >
          <Box
            as="h1"
            fontSize={{ _: 32, sm: 38, md: 48, lg: 60 }}
            color="white"
            textShadow="4px 4px 4px rgb(0 0 0 / 30%)"
            mt="l"
          >
            {props?.title}
          </Box>
          <Box
            display="flex"
            flexDirection={{ _: 'column', sm: 'column-reverse' }}
            gap={'1rem'}
          >
            <Box
              display="flex"
              justifyContent={{ _: 'space-between', sm: 'flex-start' }}
            >
              <Button
                as="a"
                href={props?.primaryButton?.action}
                onClick={() =>
                  modalDispatch(
                    showModal(props?.primaryButton?.modal, {
                      defaultCampus: props?.primaryButton?.name,
                    })
                  )
                }
                target={props?.primaryButton?.newTab ? '_blank' : ''}
                mt="s"
                mr={{ _: 'xs', md: 'base' }}
                width={{ _: '100%', sm: 'auto' }}
                fontSize={{ _: '0.75rem', md: '1rem' }}
                px={{ _: '6px', sm: '1.25rem' }}
              >
                {props?.primaryButton?.call}
              </Button>
              <Button
                as="a"
                onClick={() => modalDispatch(showModal('ConnectCardModal'))}
                id="service-times"
                mt="s"
                variant="tertiary"
                ml={{ _: 'xs', md: 0 }}
                width={{ _: '100%', sm: 'auto' }}
                fontSize={{ _: '0.75rem', md: '1rem' }}
                px={{ _: '6px', sm: '1.25rem' }}
              >
                Get Connected
              </Button>
            </Box>
            <Box>
              <Divider bg="white" opacity="30%" my="l" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

LocationHeader.propTypes = {
  title: PropTypes.string,
  primaryButton: PropTypes.shape({
    call: PropTypes.string,
    action: PropTypes.string,
    newTab: PropTypes.bool,
  }),
  secondaryButton: PropTypes.shape({
    call: PropTypes.string,
    action: PropTypes.string,
    newTab: PropTypes.bool,
  }),
};

LocationHeader.defaultProps = {
  title: 'Palm Beach Gardens',
  primaryButton: {
    call: 'Join Us Sunday',
    action: '#service-times',
    newTab: false,
  },
};

export default LocationHeader;
