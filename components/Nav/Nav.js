import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { Box, Heading, systemPropTypes } from 'ui-kit';
import { ClientSideComponent, Dropdowns } from 'components';
import Styled from './Nav.styles';

function getMenuItem(menuItem) {
  switch (menuItem) {
    case 'about':
      return Dropdowns.About;
    case 'next-steps':
      return Dropdowns.NextSteps;
    case 'connect':
      return Dropdowns.Connect;
    case 'watch':
      return Dropdowns.Watch;
    case 'search':
      return Dropdowns.Search;
    case 'user':
      return Dropdowns.User;
    default:
      return null;
  }
}

function Nav(props = {}) {
  const router = useRouter();
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <Styled px="s">
      <ClientSideComponent height="100%">
        <Styled.QuickActions>
          {props.data.quickActions.map(action => {
            const Component = getMenuItem(action.id);
            return (
              <Box
                key={action.action}
                // Don't show hover state on mobile
                onTouchEnd={() => {
                  setHoveredItem(action.id);
                }}
                onMouseEnter={() => {
                  if (action.id === hoveredItem) {
                    setHoveredItem(null);
                  } else {
                    setHoveredItem(action.id);
                  }
                }}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <QuickAction
                  data={action}
                  id={action.id}
                  selected={action.action === router.pathname}
                  hovered={action.id === hoveredItem}
                  onClick={() => {
                    if (hoveredItem === action.id) {
                      router.push(action.action);
                    }
                  }}
                />
                {Component && (
                  <Box
                    display={action.id === hoveredItem ? 'block' : 'none'}
                    width="100%"
                    position="absolute"
                    top="90px"
                    left="0"
                    zIndex="999"
                  >
                    <Component />
                  </Box>
                )}
              </Box>
            );
          })}
        </Styled.QuickActions>
      </ClientSideComponent>
    </Styled>
  );
}

function QuickAction(props = {}) {
  return (
    <Styled.QuickAction
      mt="s"
      pt="21px"
      pb="35px"
      px="s"
      hovered={props.hovered}
      selected={props.selected}
    >
      <Heading variant="base" color="fg">
        {props.data.call}
      </Heading>
    </Styled.QuickAction>
  );
}

Nav.propTypes = {
  ...systemPropTypes,
  data: PropTypes.object,
};

export default Nav;
