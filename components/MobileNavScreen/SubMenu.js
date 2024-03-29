import React from 'react';
import { Box, Icon } from 'ui-kit';

import Styled from './NavScreen.styles';

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
              color={link.color}
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
