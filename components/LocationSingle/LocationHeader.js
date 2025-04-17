import React from 'react';
import PropTypes from 'prop-types';

import { Box, Button, Divider } from 'ui-kit';
import Styled from './LocationSingle.styles';
import { showModal, useModalDispatch } from 'providers/ModalProvider';
import { useCurrentBreakpoint, useActionBanner } from 'hooks';

const LocationHeader = (props = {}) => {
  const { actionBanner } = useActionBanner();
  const modalDispatch = useModalDispatch();
  let currentBreakpoint = useCurrentBreakpoint();

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
      <Box height={{ _: '90vh', sm: 500, md: 600, lg: 700 }}>
        <Styled.VideoCover
          mx="auto"
          src={
            currentBreakpoint.isSmall
              ? props?.backgroundVideo?.mobile ||
                props?.backgroundVideo?.desktop
              : props?.backgroundVideo?.desktop
          }
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
          height={{ _: isBanner ? '65vh' : '80vh', sm: 'auto' }}
          display={{ _: 'flex', sm: 'block' }}
          flexDirection="column"
          justifyContent="space-between"
          maxWidth={
            props?.title !== 'Christ Fellowship Everywhere'
              ? { _: 600, md: 750, lg: 900 }
              : null
          }
        >
          <Box>
            <Box
              as="h1"
              fontSize={{ _: 40, md: 48, lg: 60 }}
              color="white"
              textShadow="4px 4px 4px rgb(0 0 0 / 30%)"
              mt="l"
              maxWidth={
                props?.title !== 'Christ Fellowship Everywhere'
                  ? { _: 500, md: 600, lg: 750 }
                  : null
              }
            >
              {props?.title}
            </Box>
            <Box
              fontSize={{ _: 24, md: 24, lg: 30 }}
              color="white"
              textShadow="4px 4px 4px rgb(0 0 0 / 30%)"
              mt={{ _: 10, sm: 0, md: 8, lg: 8 }}
            >
              {props?.subtitle}
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection={{ _: 'column', sm: 'column-reverse' }}
            gap={'1rem'}
            maxWidth={{ _: 500, md: 600, lg: 750 }}
            mt={props?.subtitle ? { _: 0, md: -15, lg: -15 } : null}
          >
            <Box
              display="flex"
              justifyContent={{ _: 'space-between', sm: 'flex-start' }}
            >
              {/* Set a Reminder -- HIDING FOR EASTER 2025 */}
              {/* <Button
                as="a"
                id={props?.primaryButton?.id}
                href={props?.primaryButton?.action}
                onClick={() =>
                  modalDispatch(
                    showModal(props?.primaryButton?.modal, {
                      defaultCampus: props?.name,
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
              </Button> */}
              <Button
                as="a"
                onClick={() =>
                  modalDispatch(showModal(props?.secondaryButton?.modal))
                }
                id="service-times"
                mt="s"
                variant="tertiary"
                ml={{ _: 'xs', md: 0 }}
                width={{ _: '100%', sm: 'auto' }}
                fontSize={{ _: '0.75rem', md: '1rem' }}
                px={{ _: '6px', sm: '1.25rem' }}
              >
                {props?.secondaryButton?.call}
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
  subtitle: PropTypes.string,
  primaryButton: PropTypes.shape({
    id: PropTypes.string,
    call: PropTypes.string,
    action: PropTypes.string,
    newTab: PropTypes.bool,
  }),
  secondaryButton: PropTypes.shape({
    call: PropTypes.string,
    action: PropTypes.string,
    newTab: PropTypes.bool,
  }),
  backgroundVideo: PropTypes.shape({
    mobile: PropTypes.string,
    desktop: PropTypes.string,
  }),
  videoBackgroundImage: PropTypes.string,
};

LocationHeader.defaultProps = {
  title: 'Palm Beach Gardens',
  subtitle:
    'A church that wants to help you live the life you were created for.',
  primaryButton: {
    id: 'join-us',
    call: 'Join Us Sunday',
    action: '#service-times',
    newTab: false,
  },
  secondaryButton: {
    call: 'Get Connected',
    modal: 'ConnectCardModal',
    newTab: true,
  },
  backgroundVideo: {
    mobile: '/location-pages/gardens-mobile.mp4',
    desktop: '/location-pages/gardens-desktop.mp4',
  },
  videoBackgroundImage: '/location-pages/gardens-desktop.mp4',
};

export default LocationHeader;
