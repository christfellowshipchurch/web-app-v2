import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { Box, Heading, systemPropTypes } from 'ui-kit';
import { ClientSideComponent, Dropdowns } from 'components';
import Styled from './Nav.styles';
import { useModalDispatch } from 'providers/ModalProvider';
import { useCurrentUser } from 'hooks';

function getMenuItem(menuItem) {
  switch (menuItem) {
    case 'about':
      return Dropdowns.About;
    case 'next-steps':
      return Dropdowns.NextSteps;
    case 'connect':
      return Dropdowns.Connect;
    case 'search':
      return Dropdowns.Search;
    default:
      return null;
  }
}

function Nav(props = {}) {
  const router = useRouter();
  const [hoveredItem, setHoveredItem] = useState(null);
  const modalDispatch = useModalDispatch();
  const { authenticated } = useCurrentUser();

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
                  callData={props.callData}
                  id={action.id}
                  selected={action.action === router.pathname}
                  hovered={action.id === hoveredItem}
                  onClick={
                    typeof action.action === 'string'
                      ? () => {
                          if (hoveredItem === action.id) {
                            router.push(action.action);
                          }
                        }
                      : () => action.action?.({ modalDispatch, router, authenticated })
                  }
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
  let content = props.data.call;
  if (typeof content === 'function') {
    content = content(props.callData);
  }
  const hasDropdown = getMenuItem(props.id);

  return (
    <Styled.QuickAction
      mt="s"
      mb={hasDropdown ? '0' : '14px'}
      pt="21px"
      pb={hasDropdown ? '35px' : '21px'}
      px="s"
      hovered={props.hovered}
      selected={props.selected}
      onClick={props.onClick}
    >
      <Heading variant="base" color="fg">
        {content}
      </Heading>
    </Styled.QuickAction>
  );
}

Nav.propTypes = {
  ...systemPropTypes,
  data: PropTypes.object,
  callData: PropTypes.object,
};

export default Nav;
