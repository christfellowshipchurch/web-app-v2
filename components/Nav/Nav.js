import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { Box, Heading, systemPropTypes } from 'ui-kit';
import { ClientSideComponent, Dropdowns } from 'components';
import Styled from './Nav.styles';
import { useModalDispatch } from 'providers/ModalProvider';
import { useCurrentUser } from 'hooks';

export function getMenuItem(menuItem) {
  switch (menuItem) {
    case 'about':
      return Dropdowns.About;
    case 'next-steps':
      return Dropdowns.NextSteps;
    case 'connect':
      return Dropdowns.Connect;
    // case 'search':
    //   return Dropdowns.Search;
    case 'user':
      return Dropdowns.User;
    default:
      return null;
  }
}

function Nav({
  hoveredItem,
  setHoveredItem,
  active,
  setActive,
  ...props
} = {}) {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const modalDispatch = useModalDispatch();
  const { authenticated } = useCurrentUser();

  useEffect(() => {
    function handleRouteChangeStart() {
      setHoveredItem(null);
    }

    router.events.on('routeChangeStart', handleRouteChangeStart);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
    };
  }, []);

  return (
    <Styled.Nav active={active}>
      <ClientSideComponent height="100%" width="100%">
        <Styled.QuickActions active={active}>
          {props.data.quickActions.map((action, i) => {
            return (
              <Box
                key={action.id}
                // Don't show hover state on mobile
                onTouchEnd={() => {
                  setHoveredItem(null);
                  setIsMobile(true);
                }}
                onMouseEnter={() => {
                  if (isMobile) {
                    setHoveredItem(null);
                  } else {
                    setHoveredItem(action.id);
                  }
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                }}
              >
                <QuickAction
                  data={action}
                  callData={props.callData}
                  id={action.id}
                  selected={action.action === router.pathname}
                  hovered={action.id === hoveredItem}
                  onClick={() => {
                    const webAction = action.action?.web;

                    if (typeof webAction === 'string') {
                      router.push(webAction);
                    } else {
                      webAction?.({
                        modalDispatch,
                        router,
                        authenticated,
                      });
                    }
                  }}
                  onTouchEnd={() => {
                    setActive(false);
                    const mobileAction = action.action?.mobile;

                    if (typeof mobileAction === 'string') {
                      router.push(mobileAction);
                    } else {
                      mobileAction?.({
                        modalDispatch,
                        router,
                        authenticated,
                      });
                    }
                  }}
                />
              </Box>
            );
          })}
        </Styled.QuickActions>
      </ClientSideComponent>
    </Styled.Nav>
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
      hovered={props.hovered}
      selected={props.selected}
      onClick={props.onClick}
      onTouchEnd={props.onTouchEnd}
      hasDropdown={hasDropdown}
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
  active: PropTypes.bool,
};

export default Nav;
