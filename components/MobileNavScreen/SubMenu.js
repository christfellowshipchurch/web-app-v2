import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Icon } from 'ui-kit';

import Styled from './NavScreen.styles';
import navData from 'config/mobile-nav-links';
import { GetHelp } from 'components/Modals/NavMenuModal/navComponents';
import { includes } from 'lodash';

function SubMenu(props) {
  const { links, title } = props;

  return (
    <>
      <Styled.LinkContainer>
        <Box
          as="h1"
          display="flex"
          alignItems="center"
          ml="-1.8rem"
          color="black"
          mb="base"
          onClick={props?.goBack}
        >
          <Icon name="angleLeft" size={30} />
          {title}
        </Box>
        {links &&
          links.map(link => (
            <Styled.SubNavLink
              href={link.action}
              display="flex"
              alignItems="center"
            >
              {link.call}
            </Styled.SubNavLink>
          ))}
      </Styled.LinkContainer>
    </>
  );
}

SubMenu.propTypes = {};

export default SubMenu;
