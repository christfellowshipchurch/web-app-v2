import React from 'react';
import PropTypes from 'prop-types';

import { useModalDispatch, showModal } from 'providers/ModalProvider';

import { Box, Button, Icon, systemPropTypes } from 'ui-kit';
import Styled from './Nav.styles';
import { useCurrentBreakpoint } from 'hooks';

import SignIn from './SignIn';
import ClientSideComponent from 'components/ClientSideComponent';
function Nav(props = {}) {
  const modalDispatch = useModalDispatch();
  const currentBreakpoint = useCurrentBreakpoint();

  /**
   * todo : Update the handleRouterReload to take a list a specific pages that need to be reloaded after logging as user out. To skip the rest of the pages and continue to reduce the amount of unnecessary reloads.
   */

  return (
    <Styled>
      <QuickAction
        variant="secondary"
        size="s"
        px="base"
        mr="base"
        color={props?.transparentMode ? 'white' : 'primary'}
        borderColor={props?.transparentMode ? 'white' : 'primary'}
        hoverColor={props?.transparentMode ? 'neutrals.400' : null}
        display={{ _: 'none', md: 'inline' }}
        call="Join Us Online"
        action="https://cf.church/watchonline"
      />

      <Box
        as="a"
        href="/discover"
        display={{ _: 'none', md: 'inline' }}
        mr="base"
      >
        <Icon
          name="search"
          color={props?.transparentMode ? 'white' : 'neutrals.800'}
        />
      </Box>

      <Box
        cursor="pointer"
        textDecoration="none"
        onClick={
          currentBreakpoint.isSmall
            ? props?.showMobileNav
            : () => modalDispatch(showModal('NavMenu'))
        }
        mr="s"
      >
        <Icon name="menu" color={props?.transparentMode ? 'white' : 'fg'} />
        <Box as="span" p="xs" color={props?.transparentMode ? 'white' : 'fg'}>
          Menu
        </Box>
      </Box>

      {/* SignIn/SignOut Icon External Home Page*/}
      <ClientSideComponent>
        <SignIn transparentMode={props.transparentMode}></SignIn>
      </ClientSideComponent>
    </Styled>
  );
}

function QuickAction(props = {}) {
  return (
    <Button {...props} as="a" href={props.action} target="_blank">
      {props?.icon && <Icon color="primary" name="play" mr={'s'} size="18" />}
      {props.call}
    </Button>
  );
}
Nav.propTypes = {
  ...systemPropTypes,
  data: PropTypes.object,
  transparentMode: PropTypes.bool,
};

Nav.defaultProps = {
  transparentMode: false,
};

export default Nav;
