import { GET_STAFF_MEMBER } from 'hooks/useStaffMember';
import { Layout, MainPhotoHeader } from 'components';
import { Box, Heading, Longform, Section } from 'ui-kit';
import { initializeApollo } from 'lib/apolloClient';
import { getStaffId, getMetaData } from 'utils';

export default function Page({ data }) {

  return (
    <Layout meta={getMetaData(data)} bg="bg_alt">
      <MainPhotoHeader
        src={data.photo?.uri || ''}
        mt="xl"
        mx="xl"
        width="auto"
        imageProps={{ objectFit: 'contain', maxHeight: '40vh' }}
      />
      <Section>
        <Box px="xxl" pt="xl" pb="m">
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
              my="m"
            >
              {data.position}
            </Heading>
          )}
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
