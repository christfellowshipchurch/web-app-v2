import { Box, Cell, utils } from 'ui-kit';
import { Layout } from 'components';
import { htmlToReactParser } from 'utils';

import { html } from '../lib/release-consent';

export default function ReleaseConsent() {
  return (
    <Layout title="Release Consent">
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 'l', lg: 'xl' }}
      >
        <Box mb="base" textAlign="center">
          <Box as="h1">
            Participant Release, Consent & Waiver of Liability for Minors
          </Box>
          <Box as="i">Last Updated: January 13, 2026</Box>
        </Box>
        <Box>
          <style>{`
          p {
              margin-bottom: 1.5rem;
            }
            h3 {
              margin-top: 1.5rem;
            }
            ul {
              margin-bottom: 1.5rem;
            }
            li {
              margin-left: 2rem;
            }
          `}</style>
          {htmlToReactParser.parse(html)}
        </Box>
      </Cell>
    </Layout>
  );
}
