import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { logout, useAuth } from '../../providers/AuthProvider';
import { useModalDispatch, showModal } from '../../providers/ModalProvider';
import {
  Avatar as UIAvatar,
  Box,
  Button,
  Icon,
  List,
  Menu,
  systemPropTypes,
} from '../../ui-kit';
import { CustomLink } from '../';
import Styled from './Nav.styles';
import { CurrentUserProvider } from '../../providers';

function Nav(props = {}) {
  const [{ authenticated }, authDispatch] = useAuth();
  const modalDispatch = useModalDispatch();

  function handleAuthClick(event) {
    event.preventDefault();
    modalDispatch(showModal('Auth'));
  }

  function handleLogoutClick(event) {
    event.preventDefault();
    authDispatch(logout());
  }

  return (
    <Styled>
      <Primary data={props.data.navigationLinks} />
      <QuickAction data={props.data.quickAction} />
      <CurrentUserProvider
        Component={Avatar}
        handleAuthClick={handleAuthClick}
      />
      <Menu
        cardContentProps={{
          p: '0',
          py: 's',
        }}
        renderTrigger={({ toggle }) => (
          <Box as="a" href="#0" onClick={toggle}>
            <Icon name="menu" color="fg" />
            <Box as="span" className="srt">
              Menu
            </Box>
          </Box>
        )}
        side="right"
        menuWidth="150px"
      >
        <List space="0" textAlign="center">
          <MenuLinks data={props.data.menuLinks} />
          <Box as="li">
            {authenticated ? (
              <Menu.Link href="#0" onClick={handleLogoutClick} p="s">
                Log out
              </Menu.Link>
            ) : (
              <Menu.Link href="#0" onClick={handleAuthClick} p="s">
                Sign in
              </Menu.Link>
            )}
          </Box>
        </List>
      </Menu>
    </Styled>
  );
}

function Avatar(props = {}) {
  const currentUser = props?.currentUser;
  const name = `${currentUser?.profile?.firstName} ${currentUser?.profile?.lastName}`;
  const src = currentUser?.profile?.photo?.uri;

  if (currentUser) {
    return (
      <CustomLink
        href="/profile"
        Component={UIAvatar}
        as={Image}
        name={name}
        src={src}
        height="45px"
        width="45px"
      />
    );
  }

  return (
    <Box as="a" href="#0" onClick={props.handleAuthClick}>
      <UIAvatar as={Image} name={name} src={src} height="45px" width="45px" />
    </Box>
  );
}

function Primary(props = {}) {
  const router = useRouter();
  const isActive = action => router.pathname === action;

  return props.data.map((item, idx) => (
    <CustomLink
      key={idx}
      href={item.action}
      Component={Styled.Link}
      data-state={isActive(item.action) ? 'active' : 'inactive'}
      data-testid="nav-link"
    >
      {item.call}
    </CustomLink>
  ));
}

function QuickAction(props = {}) {
  return (
    <Button as="a" href={props.data.action}>
      {props.data.call}
    </Button>
  );
}

function MenuLinks(props = {}) {
  return props.data.map((item, idx) => (
    <Box key={idx} as="li">
      <CustomLink href={item.action} Component={Menu.Link} p="s">
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
