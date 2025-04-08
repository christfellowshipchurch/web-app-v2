import React from 'react';
import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react';

import { Box, CardGrid, List, systemPropTypes, Text, theme } from 'ui-kit';
import { Logo } from 'components';
import Styled from './Footer.styles';
import IDS from 'config/ids';
import FooterLinks from './FooterLinks';

function Footer(props = {}) {
  return (
    <Styled {...props}>
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
          <FooterLinks
            channelId={IDS.ABOUT_PAGES}
            baseRoute="/about"
            title="About"
          />
          <FooterLinks
            channelId={IDS.NEXT_STEPS_PAGES}
            baseRoute="/next-steps"
            title="Next Steps"
          />
          <FooterLinks
            channelId={IDS.CONNECT_PAGES}
            baseRoute="/connect"
            title="Connect"
          />
          <QuickLinks />
        </CardGrid>
      </Styled.Grid>
    </Styled>
  );
}

function Contact() {
  return (
    <Styled.Contact>
      <Box mb="xs">
        <Logo dark justifyContent={{ xs: 'center', lg: 'flex-start' }} />
      </Box>
      <Box display="flex" flexDirection="column">
        <Text variant="h4" color="neutrals.100" opacity="33%">
          Long Hollow Church
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
      <Box mb="m" display="flex" flexDirection="column">
        <Text variant="h4" color="neutrals.100" opacity="33%">
          Long Hollow Gallatin
        </Text>
        <Text variant="h5" color="neutrals.100" opacity="60%">
          1200 Hartsville Pike
        </Text>
        <Text variant="h5" color="neutrals.100" opacity="60%">
          Gallatin, TN 37066
        </Text>
      </Box>
      <Box display="flex" flexDirection="column">
        <Box>
          <a href="https://www.facebook.com/longhollow">
            <FacebookLogo
              size="32"
              color={theme.colors.neutrals[100]}
              style={{ opacity: '60%', marginRight: theme.space.s }}
              weight="fill"
            />
          </a>
          <a href="https://twitter.com/longhollow">
            <TwitterLogo
              size="32"
              color={theme.colors.neutrals[100]}
              style={{ opacity: '60%', marginRight: theme.space.s }}
              weight="fill"
            />
          </a>
          <a href="https://www.instagram.com/longhollow/">
            <InstagramLogo
              size="32"
              color={theme.colors.neutrals[100]}
              style={{ opacity: '60%' }}
              weight="fill"
            />
          </a>
        </Box>
      </Box>
    </Styled.Contact>
  );
}

function QuickLinks() {
  return (
    <List as="ul" space="xs">
      <Box as="li">
        <Styled.Link
          href={'/watch'}
          color={theme.colors.white}
          fontWeight="600"
          opacity="1"
        >
          Watch
        </Styled.Link>
        <Styled.Link
          href={'/serve'}
          color={theme.colors.white}
          fontWeight="600"
          opacity="1"
        >
          Search
        </Styled.Link>
        <Styled.Link
          href={'/online-giving'}
          color={theme.colors.white}
          fontWeight="600"
          opacity="1"
        >
          Give
        </Styled.Link>
        <Styled.Link
          href={'https://my.longhollow.com/page/673?returnurl=%252fMyAccount'}
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
