import PropTypes from 'prop-types';

import { initializeApollo } from 'lib/apolloClient';
import { slugify } from 'utils';
import { LiveStreamProvider } from 'providers';
import { GET_LIVE_STREAM } from 'hooks/useLiveStream';
import { GET_LIVE_STREAMS } from 'hooks/useLiveStreamsQuery';
import { Layout, LiveStreamSingle } from 'components';

export default function LiveStream(props) {
  return (
    <Layout
      title={props.liveStreamTitle}
      contentMaxWidth="100%"
      contentVerticalPadding="0"
      contentHorizontalPadding="0"
    >
      <LiveStreamProvider
        Component={LiveStreamSingle}
        options={{ liveStreamId: props.liveStreamId }}
      />
    </Layout>
  );
}

LiveStream.propTypes = {
  liveStreamId: PropTypes.string.isRequired,
};

// export async function getStaticProps(context) {
//   const apolloClient = initializeApollo();
//   const title = context.params.title;

//   const query = await apolloClient.query({ query: GET_LIVE_STREAMS });
//   const liveStreams = query.data?.liveStreams || [];

//   const matchedLiveStream = liveStreams.find(
//     liveStream => slugify(liveStream.relatedNode?.title) === title
//   );

//   if (matchedLiveStream) {
//     await apolloClient.query({
//       query: GET_LIVE_STREAM,
//       variables: {
//         id: matchedLiveStream.id,
//       },
//     });
//   }

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//       liveStreamId: matchedLiveStream.id,
//       liveStreamTitle: matchedLiveStream.relatedNode?.title,
//     },
//     revalidate: 1,
//   };
// }

// export async function getStaticPaths() {
//   const apolloClient = initializeApollo();

//   const query = await apolloClient.query({ query: GET_LIVE_STREAMS });
//   const liveStreams = query.data?.liveStreams || [];

//   const paths = liveStreams.map(liveStream => ({
//     params: { title: slugify(liveStream.relatedNode.title) },
//   }));

//   return { paths, fallback: false };
// }
