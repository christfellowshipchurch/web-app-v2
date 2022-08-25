import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Icon } from 'ui-kit';

import Styled from './NavMenu.styles';
import { SignIn, GetHelp } from './navComponents';
function NavigationMenu(props = {}) {
  const { mainMenuLinks, subMenuLinks, additionalLinks } = props?.data;

  console.log({ props });

  return (
    <Styled>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <Box as="h1" mb={0} color="secondary">
            Let's Get Started!
          </Box>
          <SignIn />
        </Box>
        <Button
          a="a"
          href="https://www.youtube.com/c/ChristFellowshipWelcomeHome"
          target="_blank"
          variant="secondary"
          size="s"
          mr="l"
        >
          Join Us Online
        </Button>
      </Box>
      <Box display="flex" mt="base">
        {/* Main Menu */}
        <Styled.NavColumn>
          <Styled.NavLink href="/discover" mb="s">
            <Icon name="search" size={24} />
          </Styled.NavLink>
          {mainMenuLinks &&
            mainMenuLinks.map(link => (
              <Styled.NavLink href={link.action}>{link.call}</Styled.NavLink>
            ))}
        </Styled.NavColumn>

        <Styled.VerticalDivider mr="l" />

        {/* I'm Looking To */}
        <Styled.NavColumn>
          <Styled.SpecialHeader>I'm looking to...</Styled.SpecialHeader>
          {subMenuLinks &&
            subMenuLinks.map(link => (
              <Styled.NavLink href={link.action}>{link.call}</Styled.NavLink>
            ))}
        </Styled.NavColumn>

        {/* Other Links */}
        <Styled.NavColumn>
          {additionalLinks &&
            additionalLinks
              .filter((links, i) => i <= 1)
              .map(links => (
                <>
                  <Styled.SubNavLinkHeader href={links.headerLink?.action}>
                    {links.headerLink?.call}
                  </Styled.SubNavLinkHeader>
                  {links?.subLinks &&
                    links?.subLinks?.map((link, i) => (
                      <Styled.SubNavLink
                        mb={i === links?.subLinks?.length - 1 && 'base'}
                        href={link?.action}
                      >
                        {link?.call}
                      </Styled.SubNavLink>
                    ))}
                </>
              ))}
        </Styled.NavColumn>
        <Styled.NavColumn>
          {additionalLinks[2] && (
            <>
              <Styled.SubNavLinkHeader
                href={additionalLinks[2].headerLink?.action}
              >
                {additionalLinks[2].headerLink?.call}
              </Styled.SubNavLinkHeader>
              {additionalLinks[2]?.subLinks &&
                additionalLinks[2]?.subLinks?.map(link => (
                  <Styled.SubNavLink href={link?.action}>
                    {link?.call}
                  </Styled.SubNavLink>
                ))}
            </>
          )}
        </Styled.NavColumn>
        <Styled.NavColumn>
          {additionalLinks[3] && (
            <>
              <Styled.SubNavLinkHeader
                href={additionalLinks[3]?.headerLink?.action}
              >
                {additionalLinks[3].headerLink?.call}
              </Styled.SubNavLinkHeader>
              {additionalLinks[3]?.subLinks &&
                additionalLinks[3]?.subLinks?.map(link => (
                  <Styled.SubNavLink href={link?.action}>
                    {link?.call}
                  </Styled.SubNavLink>
                ))}
            </>
          )}
        </Styled.NavColumn>
      </Box>
      <GetHelp />
    </Styled>
  );
}

NavigationMenu.propTypes = {
  data: PropTypes.shape({
    mainMenuLinks: PropTypes.array,
    subMenuLinks: PropTypes.array,
    additionalLinks: PropTypes.array,
  }),
};

NavigationMenu.defaultProps = {
  data: {},
};

export default NavigationMenu;
