import { useLiveStreamsQuery } from 'hooks';
import { slugify } from 'utils';

import { Box, DefaultCard } from 'ui-kit';
import { CustomLink, Layout } from 'components';

export default function Live() {
  const { liveStreams = [] } = useLiveStreamsQuery();

  return (
    <Layout title="Live">
      <Box as="h1" mb="l">
        LiveStreams
      </Box>
      <Box display="grid" gridTemplateColumns={{ __: '1fr', md: '1fr 1fr' }}>
        {!liveStreams.length && <Box as="p">No livestreams</Box>}
        {liveStreams.map(liveStream => (
          <CustomLink
            key={liveStream.id}
            as="a"
            href={`/live/${slugify(liveStream.relatedNode?.title)}`}
            Component={DefaultCard}
            coverImage={liveStream.relatedNode?.coverImage?.sources[0]?.uri}
            coverImageOverlay={true}
            coverImageTitle={liveStream.relatedNode?.title}
            coverImageDescription={liveStream.relatedNode?.summary}
            m="base"
            display="block"
            height={{ __: 256, md: 384 }}
            maxWidth={{ __: 384, md: 512 }}
          />
        ))}
      </Box>
    </Layout>
  );
}
