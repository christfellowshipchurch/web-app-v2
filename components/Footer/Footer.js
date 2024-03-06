import React from 'react';

import { links } from 'config/metadata';
import { Box, Cell, Icon, List, systemPropTypes } from 'ui-kit';
import { CustomLink, Logo } from 'components';
import Styled from './Footer.styles';
import { showModal, useModalDispatch } from 'providers/ModalProvider';

function Footer(props = {}) {
  return (
    <Styled {...props}>
      <Box
        bg="screen"
        color="white"
        p={{ _: 'base', md: 'l', lg: 'xl' }}
        fontSize={{ md: '12px', lg: '14px' }}
      >
        <Cell>
          <Contact
            ml={{ _: 'base', md: 0 }}
            display={{ _: 'block', md: 'none' }}
          />
          <Box
            ml={{ _: 'base', md: 0 }}
            mt={{ _: 'l', md: 0 }}
            display={{ _: 'grid', md: 'flex', lg: 'grid' }}
            gridTemplateColumns={{
              _: '35% repeat(1, 55%)',
              md: '30% repeat(4, 13%)',
            }}
            gridColumnGap="l"
          >
            <Contact display={{ _: 'none', md: 'block' }} />
            <Resources />
            <Connect />
            <About />
            <Opportunities />
          </Box>
        </Cell>
      </Box>
      <Box bg="paper" p="xl" textAlign="center">
        <Cell>
          <Copyright />
        </Cell>
      </Box>
    </Styled>
  );
}

function Contact(props = {}) {
  return (
    <Box {...props} mb={{ _: 'base', lg: '0' }}>
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
          <Styled.Link target="_blank" href={links.churchOnline}>
            Church Online
          </Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link target="_blank" href={links.iglesiaEspanol}>
            Iglesia Español
          </Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link href={links.cfApp}>App</Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link target="_blank" href={links.pastMessages}>
            Past Messages
          </Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link target="_blank" href={links.giveOnline}>
            Give
          </Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link target="_blank" href={links.shopOnline}>
            Shop
          </Styled.Link>
        </Box>
      </List>
    </Box>
  );
}

function Connect() {
  const modalDispatch = useModalDispatch();

  return (
    <Box mb={{ _: 'base', lg: '0' }}>
      <Box as="h4" fontSize="h3">
        Connect
      </Box>
      <List as="ul" space="xs">
        <Box as="li">
          <Styled.Link
            onClick={() => modalDispatch(showModal('ConnectCardModal'))}
          >
            Connect Card
          </Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link target="_blank" href={links.submitPrayerRequest}>
            Request Prayer
          </Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link target="_blank" href={links.subscribeToUpdates}>
            Subscribe To Updates
          </Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link target="_blank" href={links.contactUs}>
            Contact Us
          </Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link target="_blank" href={links.webAndAppFeedback}>
            Web & App Feedback
          </Styled.Link>
        </Box>
      </List>
    </Box>
  );
}

function About() {
  return (
    <Box mb={{ _: 'base', lg: '0' }}>
      <Box as="h4" fontSize="h3">
        About
      </Box>
      <List as="ul" space="xs">
        <Box as="li">
          <Styled.Link href="/about">Our Leadership</Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link href="/locations">Locations</Styled.Link>
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

function Opportunities() {
  return (
    <Box mb={{ _: 'base', lg: '0' }}>
      <Box as="h4" fontSize="h3">
        Opportunities
      </Box>
      <List as="ul" space="xs">
        <Box as="li">
          <Styled.Link href="/career-opportunities">Careers</Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link target="_blank" href={links.cfSeu}>
            Get Your Degree
          </Styled.Link>
        </Box>
        <Box as="li">
          <Styled.Link target="_blank" href={links.cfConf}>
            Conference
          </Styled.Link>
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
