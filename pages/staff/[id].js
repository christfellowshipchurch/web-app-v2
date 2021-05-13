import { themeGet } from '@styled-system/theme-get';
import { FacebookLogo, InstagramLogo, TwitterLogo, Rss } from 'phosphor-react';
import { GET_STAFF_MEMBER } from 'hooks/useStaffMember';
import { Layout } from 'components';
import { Box, Heading, Longform, Section, Image, theme } from 'ui-kit';
import { initializeApollo } from 'lib/apolloClient';
import { getStaffId, getMetaData } from 'utils';
import styled from 'styled-components';

const ProfileImage = styled(Image)`
  filter: drop-shadow(0px 20px 48px rgba(0, 0, 0, 0.25));
  border-radius: ${themeGet('radii.image')};
`;

export default function Page({ data }) {
  return (
    <Layout meta={getMetaData(data)} bg="bg_alt">
      <Section>
        <Box mt={{ _: 'l' }} px="l">
          <ProfileImage width="400px" src={data?.photo?.uri} />
          <Box pt="xl" pb="m">
            {data.campus?.name && (
              <Heading
                fontSize="h2"
                lineHeight="h2"
                color="fg"
                fontWeight="800"
                opacity="50%"
              >
                {data.campus?.name}
              </Heading>
            )}
            {data.firstName && data.lastName && (
              <Heading
                fontSize="h1"
                lineHeight="h1"
                color="fg"
                fontWeight="800"
                textTransform="uppercase"
              >
                {`${data.firstName} ${data.lastName}`}
              </Heading>
            )}
            {data.position && (
              <Heading
                fontSize="h3"
                lineHeight="h3"
                color="fg"
                fontWeight="700"
                // my="m"
              >
                {data.position}
              </Heading>
            )}
          </Box>
        </Box>
      </Section>
      {data.htmlContent && (
        <Section>
          <Box pt="m" pb="l" px="l">
            <Longform dangerouslySetInnerHTML={{ __html: data.htmlContent }} />
          </Box>
        </Section>
      )}
      {(data.facebook || data.twitter || data.instagram || data.website) && (
        <Section>
          <Box pb="l" px="l" display="flex" width="400px">
            {data.facebook && (
              <Box flex="1">
                <a href={`"${data.facebook}"`}>
                  <FacebookLogo
                    size="48"
                    style={{ opacity: '60%', marginRight: theme.space.s }}
                    weight="fill"
                  />
                </a>
              </Box>
            )}
            {data.twitter && (
              <Box flex="1">
                <a href={`"${data.twitter}"`}>
                  <TwitterLogo
                    size="48"
                    style={{ opacity: '60%', marginRight: theme.space.s }}
                    weight="fill"
                  />
                </a>
              </Box>
            )}
            {data.instagram && (
              <Box flex="1">
                <a href={`"${data.instagram}"`}>
                  <InstagramLogo
                    size="48"
                    style={{ opacity: '60%' }}
                    weight="fill"
                  />
                </a>
              </Box>
            )}
            {data.website && (
              <Box flex="1">
                <a href={`"${data.website}"`}>
                  <Rss size="48" style={{ opacity: '60%' }} weight="fill" />
                </a>
              </Box>
            )}
          </Box>
        </Section>
      )}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();

  const pageResponse = await apolloClient.query({
    query: GET_STAFF_MEMBER,
    variables: {
      staffId: getStaffId(context.params.id),
    },
    skip: !context.params.id,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      data: pageResponse?.data?.node,
    },
  };
}
