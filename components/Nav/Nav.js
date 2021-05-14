import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { CurrentUserProvider } from 'providers';
import { logout, useAuth } from 'providers/AuthProvider';
import { useModalDispatch, showModal } from 'providers/ModalProvider';
import { Box, Button, Icon, List, Menu, systemPropTypes } from 'ui-kit';
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
      <QuickAction data={props.data.quickAction} />
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
      <Menu
        cardContentProps={{
          p: '0',
          py: 's',
        }}
        renderTrigger={({ toggle }) => (
          <Box as="a" textDecoration="none" href="#0" onClick={toggle}>
            <Icon name="menu" color="fg" />
            <Box as="span" p="xs" color="fg" >
              Menu
            </Box>
          </Box>
        )}
        side="right"
        menuWidth="175px"
      >
        <List py="xs" space="0">
          <Primary data={props.data.navigationLinks} />
          <MenuLinks data={props.data.menuLinks} />
          <Box as="li">
            {authenticated ? (
              <Menu.Link
                href="#0"
                onClick={handleLogoutClick}
                px="base"
                py="xs"
              >
                Log out
              </Menu.Link>
            ) : (
              <Menu.Link href="#0" onClick={handleAuthClick} px="base" py="xs">
                Sign in
              </Menu.Link>
            )}
          </Box>
        </List>
      </Menu>
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
  return (
    <Button as="a" href={props.data.action} target="_blank">
      {props.data.call}
    </Button>
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
