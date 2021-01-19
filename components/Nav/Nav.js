import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { CurrentUserProvider } from 'providers';
import { logout, useAuth } from 'providers/AuthProvider';
import { useModalDispatch, showModal } from 'providers/ModalProvider';
import { Box, Button, Icon, Menu, systemPropTypes } from 'ui-kit';
import { ClientSideComponent, CustomLink, UserAvatar } from 'components';
import Styled from './Nav.styles';

function Nav(props = {}) {
  const [{ authenticated }, authDispatch] = useAuth();
  const modalDispatch = useModalDispatch();
  const router = useRouter();

  function handleAuthClick(event) {
    event.preventDefault();
    modalDispatch(showModal('Auth'));
  }

  function handleLogoutClick(event) {
    event.preventDefault();
    authDispatch(logout());
    router.reload();
  }

  return (
    <Styled>
      {props.data.quickActions.map(action => (
        <QuickAction
          data={action}
          selected={action.action === router.pathname}
        />
      ))}
      <ClientSideComponent>
        {authenticated ? (
          <CurrentUserProvider
            Component={UserAvatar}
            handleAuthClick={handleAuthClick}
          />
        ) : (
          <Box
            as="a"
            href="#0"
            display="block"
            border="2px solid"
            borderColor="fg"
            borderRadius="50%"
            lineHeight="38px"
            size="45px"
            textAlign="center"
            onClick={handleAuthClick}
          >
            <Icon name="user" color="fg" size="28px" />
            <Box as="span" className="srt">
              User
            </Box>
          </Box>
        )}
      </ClientSideComponent>
    </Styled>
  );
}

function Primary(props = {}) {
  return props.data.map((item, idx) => (
    <Box key={idx} as="li">
      <CustomLink href={item.action} Component={Menu.Link} px="base" py="xs">
        {item.call}
      </CustomLink>
    </Box>
  ));
}

function QuickAction(props = {}) {
  console.log(props.selected);
  return (
    <CustomLink
      as="a"
      Component={Menu.Link}
      href={props.data.action}
      selected={props.selected}
      fontSize="h2"
    >
      {props.data.call}
    </CustomLink>
  );
}

function MenuLinks(props = {}) {
  return props.data.map((item, idx) => (
    <Box key={idx} as="li">
      <CustomLink href={item.action} Component={Menu.Link} px="base" py="xs">
        {item.call}
      </CustomLink>
    </Box>
  ));
}

Nav.propTypes = {
  ...systemPropTypes,
  data: PropTypes.object,
};

export default Nav;
