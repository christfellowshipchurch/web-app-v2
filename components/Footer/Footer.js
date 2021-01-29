import React from 'react';

import { links } from 'config/metadata';
import { Box, CardGrid, List, systemPropTypes, Text, theme } from 'ui-kit';
import { Logo } from 'components';
import Styled from './Footer.styles';

function Footer(props = {}) {
  return (
    <Styled
      bg="fg"
      color="white"
      px="xl"
      pb="l"
      display="flex"
      flexDirection="column"
      {...props}
    >
      <Box mb="xs">
        <Logo dark />
      </Box>
      <Styled.Grid
        breakpoints={[{ breakpoint: 'md', columns: 1 }]}
        gridTemplateColumns="270px 1fr"
      >
        <Contact />
        <CardGrid
          breakpoints={[
            { breakpoint: 'lg', columns: 2 },
            { breakpoint: 'md', columns: 1 },
          ]}
          gridTemplateColumns="repeat(4, 1fr)"
          gridColumnGap="l"
        >
          <About />
          <NextSteps />
          <Connect />
          <QuickLinks />
        </CardGrid>
      </Styled.Grid>
    </Styled>
  );
}

function Contact() {
  return (
    <Styled.Contact>
      <Box display="flex" flexDirection="column">
        <Text variant="h4" color="neutrals.100" opacity="33%">
          Long Hollow Baptist Church
        </Text>
        <Text variant="h5" color="neutrals.100" opacity="60%">
          3031 Long Hollow Pike
        </Text>
        <Text variant="h5" color="neutrals.100" opacity="60%">
          Hendersonville, TN 37075
        </Text>
        <Styled.Link
          href="tel:615-824-4006"
          mb="s"
          fontSize={theme.fontSizes.h5}
          lineHeight={theme.lineHeights.h5}
        >
          (615) 824-4006
        </Styled.Link>
      </Box>
    </Styled.Contact>
  );
}

function About() {
  return (
    <Box>
      <Text variant="h4" color="white" fontWeight="600" mb="xs">
        About
      </Text>
      <List as="ul" space="xs">
        <Box as="li">
          <Styled.Link href={links.schedule}>Schedule</Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link href={links.ourBeliefs}>Our beliefs</Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link href={links.ourStory}>Our story</Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link href={links.ourStaff}>Meet our staff</Styled.Link>
        </Box>
      </List>
    </Box>
  );
}

function NextSteps() {
  return (
    <Box>
      <Text variant="h4" color="white" fontWeight="600" mb="xs">
        Next Steps
      </Text>
      <List as="ul" space="xs">
        <Box as="li">
          <Styled.Link href={links.join}>
            Join us (online or in-person)
          </Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link href={links.talk}>Talk to someone</Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link href={links.baptize}>Get baptized</Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link href={links.findCommunity}>Find community</Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link href={links.volunteer}>Volunteer with us</Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link href={links.missions}>Mission trips</Styled.Link>
        </Box>
      </List>
    </Box>
  );
}

function Connect() {
  return (
    <Box>
      <Text variant="h4" color="white" fontWeight="600" mb="xs">
        Connect
      </Text>
      <List as="ul" space="xs">
        <Box as="li">
          <Styled.Link href={links.preschool}>Weekday preschool</Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link href={links.kids}>Kids</Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link href={links.students}>Students</Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link href={links.youngAdults}>Young adults</Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link href={links.women}>Women</Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link href={links.recovery}>Support and recovery</Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link href={links.prayer}>Prayer</Styled.Link>
        </Box>
      </List>
    </Box>
  );
}

function QuickLinks() {
  return (
    <List as="ul" space="xs">
      <Box as="li">
        <Styled.Link
          href={links.watch}
          color={theme.colors.white}
          fontWeight="600"
          opacity="1"
        >
          Watch
        </Styled.Link>
        <Styled.Link
          href={links.search}
          color={theme.colors.white}
          fontWeight="600"
          opacity="1"
        >
          Search
        </Styled.Link>
        <Styled.Link
          href={links.give}
          color={theme.colors.white}
          fontWeight="600"
          opacity="1"
        >
          Give
        </Styled.Link>
        <Styled.Link
          href={links.profile}
          color={theme.colors.white}
          fontWeight="600"
          opacity="1"
        >
          My Profile
        </Styled.Link>
      </Box>
    </List>
  );
}

Footer.propTypes = {
  ...systemPropTypes,
};

export default Footer;
