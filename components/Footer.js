import React from 'react';

import { links } from '../config/metadata';
import { Box, Cell, Icon, List } from '../ui-kit';
import { Logo } from '../components';
import { Footer as StyledFooter } from '../styled';

function Footer(props = {}) {
  return (
    <StyledFooter>
      <Box bg="fg" color="white" p="xl">
        <Cell>
          <Box
            display="grid"
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
    </StyledFooter>
  );
}

function Contact() {
  return (
    <Box>
      <Box mb="base">
        <Logo dark={true} />
      </Box>
      <StyledFooter.Link href="tel:561-799-7600" mb="s">
        (561) 799-7600
      </StyledFooter.Link>
      <StyledFooter.Link href="mailto:hello@christfellowship.church">
        hello@christfellowship.church
      </StyledFooter.Link>
    </Box>
  );
}

function Resources() {
  return (
    <Box>
      <Box as="h4" fontSize="h3">
        Resources
      </Box>
      <List as="ul" space="xs">
        <Box as="li">
          <StyledFooter.Link href={links.churchOnline}>
            Church Online
          </StyledFooter.Link>
        </Box>
        <Box as="li">
          <StyledFooter.Link href={links.pastMessages}>
            Past Messages
          </StyledFooter.Link>
        </Box>
        <Box as="li">
          <StyledFooter.Link as="a" href="#0">
            Ministry Updates
          </StyledFooter.Link>
        </Box>
        <Box as="li">
          <StyledFooter.Link href={links.giveOnline}>
            Give Online
          </StyledFooter.Link>
        </Box>
        <Box as="li">
          <StyledFooter.Link href={links.shopOnline}>
            Shop Online
          </StyledFooter.Link>
        </Box>
      </List>
    </Box>
  );
}

function Connect() {
  return (
    <Box>
      <Box as="h4" fontSize="h3">
        Connect
      </Box>
      <List as="ul" space="xs">
        <Box as="li">
          <StyledFooter.Link href={links.connectCard}>
            Connect Card
          </StyledFooter.Link>
        </Box>
        <Box as="li">
          <StyledFooter.Link href={links.submitPrayerRequest}>
            Past Messages
          </StyledFooter.Link>
        </Box>
        <Box as="li">
          <StyledFooter.Link as="a" href="#0">
            Join Us In Prayer
          </StyledFooter.Link>
        </Box>
        <Box as="li">
          <StyledFooter.Link href={links.subscribeToUpdates}>
            Subscribe To Updates
          </StyledFooter.Link>
        </Box>
        <Box as="li">
          <StyledFooter.Link href={links.contactUs}>
            Contact Us
          </StyledFooter.Link>
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
          <StyledFooter.Link href="#0">Our Leadership</StyledFooter.Link>
        </Box>
        <Box as="li">
          <StyledFooter.Link href={links.careerOpportunities}>
            Career Opportunities
          </StyledFooter.Link>
        </Box>
        <Box as="li">
          <StyledFooter.Link as="a" href="#0">
            Privacy Policy
          </StyledFooter.Link>
        </Box>
        <Box as="li">
          <StyledFooter.Link href="#0">Terms of Use</StyledFooter.Link>
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

export default Footer;
