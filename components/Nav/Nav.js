import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { useModalDispatch, showModal } from 'providers/ModalProvider';
import { Box, Icon, Menu, systemPropTypes } from 'ui-kit';
import { ClientSideComponent, CustomLink } from 'components';
import Styled from './Nav.styles';

function Nav(props = {}) {
  const modalDispatch = useModalDispatch();
  const router = useRouter();

  function handleAuthClick(event) {
    event.preventDefault();
    modalDispatch(showModal('Auth'));
  }

  return (
    <Styled>
      {props.data.quickActions.map(action => (
        <QuickAction
          key={action.action}
          data={action}
          selected={action.action === router.pathname}
        />
      ))}
      <ClientSideComponent>
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
          <Icon name="user" fill="fg" size="28px" />
          <Box as="span" className="srt">
            User
          </Box>
        </Box>
      </ClientSideComponent>
    </Styled>
  );
}

function QuickAction(props = {}) {
  return (
    <CustomLink
      as="a"
      Component={Menu.Link}
      href={props.data.action}
      selected={props.selected}
      textTransform="uppercase"
    >
      {props.data.call}
    </CustomLink>
  );
}

Nav.propTypes = {
  ...systemPropTypes,
  data: PropTypes.object,
};

export default Nav;
