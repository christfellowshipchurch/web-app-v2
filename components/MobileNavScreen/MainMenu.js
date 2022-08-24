import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Icon } from 'ui-kit';

import Styled from './NavScreen.styles';
import { GetHelp } from 'components/Modals/NavMenuModal/navComponents';
import { includes } from 'lodash';

function MainMenu(props) {
  const { mainMenuLinks, subMenuLinks } = props;

  return (
    <>
      <Styled.LinkContainer>
        {mainMenuLinks &&
          mainMenuLinks.map(link => (
            <Styled.NavLink
              color={link?.color}
              href={!includes(link?.action, '#open-sub-menu') && link.action}
              onClick={
                includes(link?.action, '#open-sub-menu')
                  ? () => props?.onChange(link?.call)
                  : null
              }
              display="flex"
              alignItems="center"
            >
              {link.call}
              {includes(link?.action, '#open-sub-menu') && (
                <Icon name="angleRight" />
              )}
            </Styled.NavLink>
          ))}
      </Styled.LinkContainer>
      <Styled.LinkContainerColored>
        <Styled.SpecialHeader>I'm looking to...</Styled.SpecialHeader>
        {subMenuLinks &&
          subMenuLinks.map(link => (
            <Styled.NavLink href={link.action} color="white">
              {link.call}
            </Styled.NavLink>
          ))}
        <Box display="flex" justifyContent="end" width="100%">
          <GetHelp color="white" />
        </Box>
      </Styled.LinkContainerColored>
    </>
  );
}

MainMenu.propTypes = {};

export default MainMenu;
