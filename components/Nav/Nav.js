import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { CurrentUserProvider } from 'providers';
import { logout, useAuth } from 'providers/AuthProvider';
import { useModalDispatch, showModal } from 'providers/ModalProvider';
import { Box, Button, Icon, List, Menu, systemPropTypes } from 'ui-kit';
import { ClientSideComponent, CustomLink, UserAvatar } from 'components';
import Styled from './Nav.styles';

import { amplitude } from 'lib/analytics';

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
      {authenticated ? (
        <QuickAction
          display={{ _: 'none', md: 'inline' }}
          data={props.data.quickAction}
        />
      ) : (
        [
          <Menu
            display={{ _: 'none', md: 'inline' }}
            cardContentProps={{
              p: '0',
              py: 's',
            }}
            renderTrigger={({ toggle }) => (
              <Box as="a" textDecoration="none" href="#0" onClick={toggle}>
                <Button
                  px="base"
                  size="s"
                  onClick={() =>
                    amplitude.trackEvent({
                      eventType: 'Button Click',
                      eventProperties: {
                        category: 'Navbar',
                        label: `Start Here - Button`,
                        action: `Opened Start Here dropdown`,
                      },
                    })
                  }
                >
                  Start Here
                  <Icon name="caretDown" mr={-10} ml="xs" mt={-4} mb={-6} />
                </Button>
              </Box>
            )}
            side="right"
            menuWidth="240px"
            menuMargin="s"
          >
            <List py="xs" space="0">
              <MenuLinks data={props.data.startHereLinks} />
            </List>
          </Menu>,

          <QuickAction
            variant="secondary"
            size="s"
            px="base"
            color={props?.darkMode ? 'white' : 'primary'}
            borderColor={props?.darkMode ? 'white' : 'primary'}
            hoverColor={props?.darkMode ? 'neutrals.400' : null}
            display={{ _: 'none', md: 'inline' }}
            data={props.data.quickAction}
            onClick={() =>
              amplitude.trackEvent({
                eventType: 'Button Click',
                eventProperties: {
                  category: 'Navbar',
                  label: `${props.data.quickAction.call} - Button`,
                  action: `${props.data.quickAction.action}`,
                },
              })
            }
          />,
        ]
      )}
      {/* Hide avatar for dark mode */}
      {!props.darkMode && (
        <ClientSideComponent display={{ _: 'none', md: 'block' }}>
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
              borderColor={props?.darkMode ? 'white' : 'fg'}
              borderRadius="50%"
              lineHeight="38px"
              size="45px"
              textAlign="center"
              onClick={handleAuthClick}
            >
              <Icon
                name="user"
                color={props?.darkMode ? 'white' : 'fg'}
                size="28px"
              />
              <Box as="span" className="srt">
                User
              </Box>
            </Box>
          )}
        </ClientSideComponent>
      )}
      <Menu
        cardContentProps={{
          p: '0',
          py: 's',
        }}
        renderTrigger={({ toggle }) => (
          <Box as="a" textDecoration="none" href="#0" onClick={toggle}>
            <Icon name="menu" color={props?.darkMode ? 'white' : 'fg'} />
            <Box as="span" p="xs" color={props?.darkMode ? 'white' : 'fg'}>
              Menu
            </Box>
          </Box>
        )}
        side="right"
        menuWidth="245px"
      >
        <List py="xs" space="0">
          {/* Mobile Watch Online */}
          <Box as="li" display={{ _: 'inline', md: 'none' }}>
            <ClientSideComponent>
              {authenticated && (
                <Menu.Link>
                  <Box
                    borderBottom="solid lightgrey 1px"
                    ml="s"
                    pl="s"
                    py="s"
                    mr="base"
                    mb="s"
                    display="flex"
                    alignItems="center"
                  >
                    <CurrentUserProvider
                      Component={UserAvatar}
                      handleAuthClick={handleAuthClick}
                      size={25}
                    />
                    <Box as="p" ml="xs">
                      Profile
                    </Box>
                  </Box>
                </Menu.Link>
              )}
            </ClientSideComponent>
            <Menu.Link>
              <QuickAction
                py="xs"
                variant="link"
                icon
                data={props.data.quickAction}
                onClick={() =>
                  amplitude.trackEvent({
                    eventType: 'Button Click',
                    eventProperties: {
                      category: 'Navbar',
                      label: `${props.data.quickAction.call} - Button`,
                      action: `${props.data.quickAction.action}`,
                    },
                  })
                }
              />
            </Menu.Link>
          </Box>
          <Primary data={props.data.navigationLinks} />
          <MenuLinks data={props.data.menuLinks} />
          <Box as="li">
            {authenticated ? (
              <Menu.Link
                href="#0"
                onClick={handleLogoutClick}
                px="base"
                py="xs"
                mt="10px"
                borderTop="1px solid"
                borderColor="border"
              >
                <Icon name="signOut" mr="s" size="18" />
                Sign out
              </Menu.Link>
            ) : (
              <Menu.Link
                href="#0"
                onClick={handleAuthClick}
                px="base"
                py="xs"
                mt="10px"
                borderTop="1px solid"
                borderColor="border"
              >
                <Icon name="signIn" mr="s" size="18" />
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
        <Icon name={item.icon} mr="s" size="18" />
        {item.call}
      </CustomLink>
    </Box>
  ));
}

function QuickAction(props = {}) {
  return (
    <Button {...props} as="a" href={props.data.action} target="_blank">
      {props?.icon && <Icon color="primary" name="play" mr={'s'} size="18" />}
      {props.data.call}
    </Button>
  );
}

function MenuLinks(props = {}) {
  return props.data.map((item, idx) => (
    <Box key={idx} as="li">
      <Box as="a" textDecoration="none" href={item.action} target={item.target}>
        <Menu.Link px="base" py="xs">
          <Icon name={item.icon} mr="s" size="18" />
          {item.call}
        </Menu.Link>
      </Box>
    </Box>
  ));
}

Nav.propTypes = {
  ...systemPropTypes,
  data: PropTypes.object,
  darkMode: PropTypes.bool,
};

Nav.defaultProps = {
  darkMode: false,
};

export default Nav;
