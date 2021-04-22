import { useRouter } from 'next/router';

import IDS from 'config/ids';
import { GET_CONTENT_ITEM } from 'hooks/useContentItem';
import { GET_CONTENT_CHANNEL } from 'hooks/useContentChannel';
import { Layout, MainPhotoHeader } from 'components';
import { Box, Button, Heading, Longform, Section } from 'ui-kit';
import { initializeApollo } from 'lib/apolloClient';
import { getItemId, getMetaData, getIdSuffix } from 'utils';

export default function Page({ data } = {}) {
  const router = useRouter();

  if (data?.loading || router.isFallback) {
    return null;
  }

  return (
    <Layout meta={getMetaData(data)} bg="bg_alt">
      <MainPhotoHeader
        src={data.coverImage?.sources?.[0].uri || ''}
        width="auto"
        backdrop
        overlay=""
      />
      <Section>
        <Box px="xxl" pt="xl" pb="m">
          {data.subtitle && (
            <Heading
              fontSize="h2"
              lineHeight="h2"
              color="fg"
              fontWeight="800"
              opacity="50%"
            >
              {data.subtitle}
            </Heading>
          )}
          {data.title && (
            <Heading
              fontSize="h1"
              lineHeight="h1"
              color="fg"
              fontWeight="800"
              textTransform="uppercase"
            >
              {data.title}
            </Heading>
          )}
          {data.summary && (
            <Heading
              fontSize="h3"
              lineHeight="h3"
              color="fg"
              fontWeight="700"
              my="m"
            >
              {data.summary}
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
      {data.ctaLinks?.length ? (
        <Section>
          <Box px="xl" py="l">
            <Box
              px="xl"
              py="l"
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
            >
              {data.ctaLinks?.map((cta, i) => (
                <Button key={i} onClick={() => router.push(cta.buttonLink)}>
                  {cta.buttonText}
                </Button>
              ))}
            </Box>
          </Box>
        </Section>
      ) : null}
    </Layout>
  );
}

export async function getStaticProps(context) {
  const apolloClient = initializeApollo();

  const pageResponse = await apolloClient.query({
    query: GET_CONTENT_ITEM,
    variables: {
      itemId: getItemId(context.params.id),
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

const getChannelIds = mapping => {
  return Object.values(mapping).flatMap(value => {
    if (typeof value === 'object') {
      return getChannelIds(value);
    }
    return value;
  });
};

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const channelIds = getChannelIds(IDS);

  const channelResponse = await Promise.all(
    channelIds.map(id =>
      apolloClient.query({
        query: GET_CONTENT_CHANNEL,
        variables: {
          itemId: `ContentChannel:${id}`,
        },
      })
    )
  );

  const pages = channelResponse
    .flatMap(response =>
      response?.data?.node?.childContentItemsConnection?.edges?.map(
        ({ node }) => node
      )
    )
    .filter(p => !!p);

  // Get the paths we want to pre-render
  const paths = pages.map(({ id }) => ({
    params: { id: getIdSuffix(id) },
  }));

  // Fallback blocking - if a page doesn't exist we will render it on the fly and then return it.
  return { paths, fallback: 'blocking' };
}
