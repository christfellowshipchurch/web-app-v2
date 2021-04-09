import { useState } from 'react';
import { Button, Box, Card, ContentBlock, List, Image, CardGrid } from 'ui-kit';
import { rem } from 'ui-kit/_utils';
import { SEO, Header, Footer } from 'components';

import Styled from './About.styles';

import { data } from './data';
import { htmlToReactParser } from 'utils';

export default function About() {
  const [active, setActive] = useState('leadership');
  return (
    <>
      <SEO title="About" />
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
            message of Jesus Christ—everyone, everyday,&nbsp;everywhere.
          </Box>
        </Styled.Hero>
        <Styled.Section>
          <Box as="h1">One Church with Many Locations</Box>
          <Box as="p" mb="xl" fontSize="l" maxWidth="840px">
            We believe that church isn’t just a building you walk in to, but a
            family you can belong to—so whether you call one of our many
            locations home or join from home, church is wherever you&nbsp;are!
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
              justifySelf="center"
              maxWidth=" 1100px"
              mb="xl"
              p="l"
            />
          ))}
        {active === 'beliefs' && (
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            justifySelf="center"
            maxWidth="1000px"
            mb="xl"
            mx="base"
          >
            {data.beliefs.map(item => (
              <Card
                alignItems="center"
                display="flex"
                flexDirection="column"
                flex={{
                  _: `0 0 calc(100% - ${rem('20px')})`,
                  sm: `0 0 calc(50% - ${rem('20px')})`,
                }}
                justifyContent="center"
                m="10px"
                px={{ _: 'l', md: 'xl' }}
                py={{ _: 'base', md: 'l' }}
                textAlign="center"
              >
                <Box as="h2">{item.title}</Box>
                <Box as="p" color="subdued" mb="base">
                  {item.subtitle}
                </Box>
                <Box as="p">{item.description}</Box>
              </Card>
            ))}
          </Box>
        )}
        {active === 'values' && (
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            justifySelf="center"
            maxWidth="900px"
            mb="xl"
            mx="base"
          >
            {data.values.map(item => (
              <Card
                alignItems="center"
                display="flex"
                flexDirection="column"
                flex={{
                  _: `0 0 calc(100% - ${rem('20px')})`,
                  sm: `0 0 calc(50% - ${rem('20px')})`,
                  lg: `0 0 calc(33.333% - ${rem('20px')})`,
                }}
                justifyContent="center"
                m="10px"
                px={{ _: 's', md: 'base' }}
                py={{ _: 'l', md: 'xl' }}
                textAlign="center"
              >
                <Box as="h2">{item.title}</Box>
                <Box as="p" color="subdued">
                  {item.description}
                </Box>
              </Card>
            ))}
          </Box>
        )}
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
