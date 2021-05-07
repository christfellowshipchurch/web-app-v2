import { themeGet } from '@styled-system/theme-get';
import { GET_STAFF_MEMBER } from 'hooks/useStaffMember';
import { Layout, MainPhotoHeader } from 'components';
import { Box, Heading, Longform, Section, Image } from 'ui-kit';
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
        <Box display={{md: 'block', lg: "flex"}} mt={{_: 'l'}} alignItems="column">
          <Box flex="1" display="flex" justifyContent="center">
            <ProfileImage src={data?.photo?.uri} /> 
          </Box>
          <Box flex="1" pt="xl" pb="m" display="flex" flexDirection="column" alignItems={{ _: "center", lg: 'flex-start'}}>
            {(data.campus?.name) && (
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
          <Longform
            px="xxl"
            pt="m"
            pb="l"
            dangerouslySetInnerHTML={{ __html: data.htmlContent }}
          />
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
