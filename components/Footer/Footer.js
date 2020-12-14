import React from 'react';

import { links } from '../../config/metadata';
import { Box, Cell, Icon, List, systemPropTypes } from '../../ui-kit';
import { CustomLink, Logo } from '../';
import Styled from './Footer.styles';

function Footer(props = {}) {
  return (
    <Styled {...props}>
      <Box bg="fg" color="white" p={{ _: 'base', md: 'l', lg: 'xl' }}>
        <Cell>
          <Box
            display={{ lg: 'grid' }}
            gridTemplateColumns="30% repeat(3, 20%)"
            gridColumnGap="l"
          >
            <Contact />
            <Resources />
            <Connect />
            <About />
          </Box>
        </Cell>
      </Box>
      <Box bg="white" p="xl" textAlign="center">
        <Cell>
          <Copyright />
        </Cell>
      </Box>
    </Styled>
  );
}

function Contact() {
  return (
    <Box mb={{ _: 'base', lg: '0' }}>
      <Box mb="base">
        <Logo dark={true} />
      </Box>
      <Styled.Link href="tel:561-799-7600" mb="s">
        (561) 799-7600
      </Styled.Link>
      <Styled.Link href="mailto:hello@christfellowship.church">
        hello@christfellowship.church
      </Styled.Link>
    </Box>
  );
}

function Resources() {
  return (
    <Box mb={{ _: 'base', lg: '0' }}>
      <Box as="h4" fontSize="h3">
        Resources
      </Box>
      <List as="ul" space="xs">
        <Box as="li">
          <Styled.Link href={links.churchOnline}>Church Online</Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link href={links.pastMessages}>Past Messages</Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link as="a" href="#0">
            Ministry Updates
          </Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link href={links.giveOnline}>Give Online</Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link href={links.shopOnline}>Shop Online</Styled.Link>
        </Box>
      </List>
    </Box>
  );
}

function Connect() {
  return (
    <Box mb={{ _: 'base', lg: '0' }}>
      <Box as="h4" fontSize="h3">
        Connect
      </Box>
      <List as="ul" space="xs">
        <Box as="li">
          <Styled.Link href={links.connectCard}>Connect Card</Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link href={links.submitPrayerRequest}>
            Past Messages
          </Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link as="a" href="#0">
            Join Us In Prayer
          </Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link href={links.subscribeToUpdates}>
            Subscribe To Updates
          </Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link href={links.contactUs}>Contact Us</Styled.Link>
        </Box>
      </List>
    </Box>
  );
}

function About() {
  return (
    <Box>
      <Box as="h4" fontSize="h3">
        About
      </Box>
      <List as="ul" space="xs">
        <Box as="li">
          <Styled.Link href="#0">Our Leadership</Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link href={links.careerOpportunities}>
            Career Opportunities
          </Styled.Link>
        </Box>
        <Box as="li">
          <CustomLink href="/privacy-policy" Component={Styled.Link}>
            Privacy Policy
          </CustomLink>
        </Box>
        <Box as="li">
          <CustomLink href="/terms-of-use" Component={Styled.Link}>
            Terms of Use
          </CustomLink>
        </Box>
      </List>
    </Box>
  );
}

function Copyright() {
  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gridColumnGap="l"
        maxWidth="12.5rem"
        mb="base"
        mx="auto"
      >
        <Box as="a" color="primary" href={links.facebook}>
          <Icon name="facebook" size="32" />
        </Box>
        <Box as="a" color="primary" href={links.instagram}>
          <Icon name="instagram" size="32" />
        </Box>
        <Box as="a" color="primary" href={links.youtube}>
          <Icon name="youtube" size="32" />
        </Box>
      </Box>
      <Box as="p" fontSize="s">
        &copy; {new Date().getFullYear()} Christ Fellowship Church. All Rights
        Reserved
      </Box>
    </>
  );
}

Footer.propTypes = {
  ...systemPropTypes,
};

export default Footer;
