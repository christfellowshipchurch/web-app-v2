import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useModalDispatch, showModal } from '../../providers/ModalProvider';
import { Box, Button, Icon, List, Menu, systemPropTypes } from '../../ui-kit';
import { CustomLink } from '../';
import Styled from './Nav.styles';

function Nav(props = {}) {
  const modalDispatch = useModalDispatch();

  function handleAuthClick(event) {
    event.preventDefault();
    modalDispatch(showModal('Auth'));
  }

  return (
    <Styled>
      <Primary data={props.data.navigationLinks} />
      <QuickAction data={props.data.quickAction} />
      <Box as="a" href="#0" onClick={handleAuthClick}>
        <Icon name="user" color="fg" size="32" />
        <Box as="span" className="srt">
          User
        </Box>
      </Box>
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
          <Box as="li">
            <CustomLink href="/events" Component={Menu.Link} p="s">
              Events
            </CustomLink>
          </Box>
          <Box as="li">
            <Menu.Link href="#0" p="s">
              Serve
            </Menu.Link>
          </Box>
          <Box as="li">
            <CustomLink href="/groups" Component={Menu.Link} p="s">
              Groups
            </CustomLink>
          </Box>
          <Box as="li">
            <Menu.Link href="#0" onClick={handleAuthClick} p="s">
              Sign in
            </Menu.Link>
          </Box>
        </List>
      </Menu>
    </Styled>
  );
}

function Primary(props = {}) {
  const router = useRouter();
  const isActive = action => router.pathname === action;

  return props.data.map((item, idx) => (
    <Link key={idx} href={item.action}>
      <Styled.Link data-state={isActive(item.action) ? 'active' : 'inactive'}>
        {item.call}
      </Styled.Link>
    </Link>
  ));
}

function QuickAction(props = {}) {
  return (
    <Button as="a" href={props.data.action}>
      {props.data.call}
    </Button>
  );
}

Nav.propTypes = {
  ...systemPropTypes,
  data: PropTypes.object,
};

export default Nav;
