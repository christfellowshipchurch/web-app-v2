import { useState, useEffect } from 'react';
import { Button, Box, Card, ContentBlock, List } from 'ui-kit';
import { rem } from 'ui-kit/_utils';
import { Layout, VerticalCardListFeature } from 'components';
import { useRouter } from 'next/router';
import { includes } from 'lodash';

import Styled from './About.styles';

import data from 'lib/aboutData';
import { htmlToReactParser } from 'utils';
import { useAnalytics } from 'providers/AnalyticsProvider';

export default function About() {
  const [active, setActive] = useState('leadership');
  const router = useRouter();
  const analytics = useAnalytics();

  useEffect(() => {
    const { asPath } = router;
    const lastOfPath = asPath.substring(7);

    //track pageload for Segment
    analytics.page({
      mediaType: 'Information',
    });

    if (includes(asPath, lastOfPath)) {
      setActive(lastOfPath || 'leadership');
      router.push({
        pathname: '/about',
        hash: lastOfPath,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout
      title="About Us"
      seoMetaTags={{
        description:
          'Christ Fellowship is a church in South Florida with a passion to help you know God and grow in your relationships so that you can discover your purpose and impact the world. We believe that church isn’t just a building you walk into, but a family you can belong to—so whether you call one of our many locations home or join from home, church is wherever you are! Led by senior pastors Todd & Julie Mullins, our mission is to impact the world with the love and message of Jesus Christ—everyone, everyday, everywhere.',
      }}
    >
      <Styled.Hero>
        <Box as="h1">About Christ Fellowship</Box>
        <Box as="p" fontSize="l" maxWidth="840px">
          Christ Fellowship is a church in South Florida with a passion to help
          you know God and grow in your relationships so that you can discover
          your purpose and impact the world. We believe that church isn’t just a
          building you walk into, but a family you can belong to—so whether you
          call one of our many locations home or join from home, church is
          wherever you are! Led by senior pastors Todd & Julie Mullins, God has
          given us a vision to lead a radical transformation for Jesus Christ in
          this region and beyond. Everyone, Everyday, Everywhere.
        </Box>
      </Styled.Hero>
      <Styled.Section>
        <Box as="h1">One Church with Many Locations</Box>
        <Box as="p" fontSize="l" maxWidth="840px">
          We believe that church isn’t just a building you walk into, but a
          family you can belong to—so whether you call one of our many locations
          home or join from home, church is wherever you&nbsp;are!
        </Box>
      </Styled.Section>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100vw"
      >
        <List
          display="flex"
          py="l"
          space="0"
          justifySelf="center"
          alignItems="center"
        >
          <Box as="li">
            <Button
              id="leadership"
              variant="link"
              active={active === 'leadership'}
              onClick={() => setActive('leadership')}
            >
              Leadership
            </Button>
          </Box>
          <Box as="li">
            <Button
              id="beliefs"
              variant="link"
              active={active === 'beliefs'}
              onClick={() => setActive('beliefs')}
            >
              Our Beliefs
            </Button>
          </Box>
          <Box as="li">
            <Button
              id="values"
              variant="link"
              active={active === 'values'}
              onClick={() => setActive('values')}
            >
              Our Values
            </Button>
          </Box>
          <Box as="li">
            <Button
              id="history"
              variant="link"
              active={active === 'history'}
              onClick={() => setActive('history')}
            >
              Our History
            </Button>
          </Box>
        </List>
        {active === 'leadership' && (
          <Box m="auto" maxWidth="1000px" p="base">
            {data.leadership.map((item, i) => (
              <Box my="xl">
                <ContentBlock {...item} key={i} />
              </Box>
            ))}
            <VerticalCardListFeature data={data.teachingTeam} />
            <Box
              fontStyle="italic"
              fontWeight="bold"
              m="xl"
              textAlign={'center'}
            >
              Discover our campus pastors through our{' '}
              <Box as="a" href="/locations">
                campus location pages.
              </Box>{' '}
            </Box>
          </Box>
        )}
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
                  md: `0 0 calc(50% - ${rem('20px')})`,
                }}
                justifyContent="center"
                m="10px"
                p="l"
                textAlign="center"
              >
                <Box as="h2">{item.title}</Box>
                <Box as="p" color="secondary" mb="base">
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
                <Box as="p" color="secondary">
                  {item.description}
                </Box>
              </Card>
            ))}
          </Box>
        )}
        {active === 'history' && (
          <Box
            px={{ _: 'l', md: '0' }}
            pb="xl"
            maxWidth="800px"
            justifySelf="center"
          >
            <Box as="h1" textAlign="center">
              Our History
            </Box>
            <Box>{htmlToReactParser.parse(data.history)}</Box>
          </Box>
        )}
      </Box>
    </Layout>
  );
}
