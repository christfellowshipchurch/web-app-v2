import { Layout, MainPhotoHeader } from 'components';
import { initializeApollo } from 'lib/apolloClient';
import { GET_MEDIA_CONTENT_ITEM } from 'hooks/useMediaContentItem';
import VideoPlayer from 'components/VideoPlayer/VideoJSPlayer';
import { Heading, Section } from 'ui-kit';
import { getMetaData } from 'utils';

function getItemId(id) {
  return `MediaContentItem:${id}`;
}

export default function Item({ item }) {
  const src = item.videos?.[0]?.sources?.[0]?.uri;

  return (
    <Layout meta={getMetaData(item)}>
      {!src ? <MainPhotoHeader src={item.coverImage?.sources?.[0]?.uri} showImage={false} overlay="" /> : null}
      <Section mb="xl" px={{ _: 'l', md: 'xxl' }}>
        {src ? (
          <VideoPlayer
            my="l"
            src={src}
            poster={item?.coverImage?.sources?.[0]?.uri}
          />
        ) : null}
        <Heading variant="h2" fontWeight="800" mb="m">
          {item.title}
        </Heading>
        <Heading variant="h4" fontWeight="500" mb="m">
          {item.summary}
        </Heading>
      </Section>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();

  const itemResponse = await apolloClient.query({
    query: GET_MEDIA_CONTENT_ITEM,
    variables: {
      itemId: getItemId(context.params.id),
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      item: itemResponse?.data?.node,
    },
  };
}
