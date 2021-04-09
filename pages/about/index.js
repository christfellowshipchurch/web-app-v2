import { useState } from 'react';
import { Button, Box, ContentBlock, List, Image } from 'ui-kit';
import { SEO, Header, Footer } from 'components';

import Styled from './About.styles';

import data from './data';
import { htmlToReactParser } from 'utils';

export default function About() {
  const [active, setActive] = useState('leadership');
  return (
    <>
      <SEO title="Community" />
      <Box display="grid" gridTemplateRows="auto 1fr auto" height="100vh">
        <Header />
        <Styled.Hero>
          <Box as="h1">About Christ Fellowship</Box>
          <Box as="p" fontSize="l" maxWidth="840px">
            Christ Fellowship is a church in South Florida with a passion to
            help you know God and grow in your relationships so that you can
            discover your purpose and impact the world. We believe that church
            isn’t just a building you walk in to, but a family you can belong
            to—so whether you call one of our many locations home or join from
            home, church is wherever you are! Led by senior pastors Todd & Julie
            Mullins, our mission is to impact the world with the love and
            message of Jesus Christ—everyone, everyday, everywhere.
          </Box>
        </Styled.Hero>
        <Styled.Section>
          <Box as="h1">One Church with Many Locations</Box>
          <Box as="p" mb="xl" fontSize="l" maxWidth="840px">
            We believe that church isn’t just a building you walk in to, but a
            family you can belong to—so whether you call one of our many
            locations home or join from home, church is wherever you are!
          </Box>
          <Image
            maxWidth="800px"
            source={'Christ-Fellowship-Church-Locations.jpeg'}
          />
        </Styled.Section>
        <List display="flex" py="l" space="0" justifySelf="center">
          <Box as="li">
            <Button variant="link" onClick={() => setActive('leadership')}>
              Leadership
            </Button>
          </Box>
          <Box as="li">
            <Button variant="link" onClick={() => setActive('beliefs')}>
              Our Beliefs
            </Button>
          </Box>
          <Box as="li">
            <Button variant="link" onClick={() => setActive('values')}>
              Our Values
            </Button>
          </Box>
          <Box as="li">
            <Button variant="link" onClick={() => setActive('history')}>
              Our History
            </Button>
          </Box>
        </List>
        {active === 'leadership' &&
          data.leadership.map(item => (
            <ContentBlock
              {...item}
              maxWidth=" 1100px"
              justifySelf="center"
              p="l"
            />
          ))}
        {active === 'history' && (
          <Box pb="xl" maxWidth="800px" justifySelf="center">
            <Box as="h1" textAlign="center">
              Our History
            </Box>
            <Box>{htmlToReactParser.parse(data.history)}</Box>
          </Box>
        )}
        <Footer />
      </Box>
    </>
  );
}
