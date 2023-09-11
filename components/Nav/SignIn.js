import { React, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Icon, systemPropTypes } from 'ui-kit';
import { CurrentUserProvider } from 'providers';
import { logout, useAuth } from 'providers/AuthProvider';
import { UserAvatar, ClientSideComponent } from 'components';
import { useCurrentBreakpoint } from 'hooks';
import {
  hideModal,
  useModalDispatch,
  showModal,
} from 'providers/ModalProvider';

function SignIn(props = {}) {
  const authenticated = useAuth();
  const currentBreakpoint = useCurrentBreakpoint();
  const authDispatch = useAuth();
  const modalDispatch = useModalDispatch();
  const router = useRouter();

  const [isHover, setIsHover] = useState(false);
  const [isHoverImg, setIsHoverImg] = useState(false);
  const handleMouse = () => {
    setIsHover(!isHover);
  };
  const handleMouseImg = () => {
    setIsHoverImg(!isHoverImg);
  };

  function handleAuthClick(event) {
    event.preventDefault();
    modalDispatch(showModal('Auth'));
  }

  function handleRouterReload(pathname) {
    if (pathname === '/') {
      return null;
    }
    return router.reload();
  }

  function handleLogoutClick(event) {
    event.preventDefault();
    authDispatch(logout());
    handleRouterReload(router.pathname);
    modalDispatch(hideModal());
  }

  return (
    <>
      {!currentBreakpoint.isSmall && !authenticated && (
        <Box cursor="pointer" textDecoration="none" onClick={handleAuthClick}>
          <Box
            display="flex"
            border="2px solid white"
            justifyContent="center"
            borderRadius="50%"
            size="36px"
          >
            <Icon
              name="user"
              size={20}
              color={props?.transparentMode ? 'white' : 'fg'}
            />
          </Box>
        </Box>
      )}

      <ClientSideComponent>
        {authenticated && (
          <Box
            textAlign="center"
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <CurrentUserProvider
              Component={UserAvatar}
              handleAuthClick={handleAuthClick}
              size={'40'}
              onMouseEnter={handleMouseImg}
              onMouseLeave={handleMouseImg}
              opacity={isHoverImg && '0.5'}
            />
            <Box
              as="span"
              mt="xs"
              fontSize="12px"
              cursor="pointer"
              onClick={handleLogoutClick}
              color={props?.transparentMode ? 'white' : 'fg'}
              onMouseEnter={handleMouse}
              onMouseLeave={handleMouse}
              textDecoration={isHover && 'underline'}
            >
              Sign Out
            </Box>
          </Box>
        )}
      </ClientSideComponent>
    </>
  );
}

SignIn.propTypes = {
  ...systemPropTypes,
  data: PropTypes.object,
  transparentMode: PropTypes.bool,
};

SignIn.defaultProps = {
  transparentMode: false,
};

export default SignIn;
