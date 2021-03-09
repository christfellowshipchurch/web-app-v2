import { format } from 'date-fns';

import { useLiveStreamsQuery } from 'hooks';
import { slugify, parseLiveStreamDates } from 'utils';

import { Box, DefaultCard } from 'ui-kit';
import { CustomLink, Layout } from 'components';

function getDescription(liveStream) {
  const parsed = parseLiveStreamDates(liveStream);

  let startFormatted = parsed.startDate
    ? format(parsed.startDate, `EEE M/dd 'from' h:mm a`)
    : 'null';

  let endFormatted = parsed.endDate ? format(parsed.endDate, `h:mm a`) : 'null';
  let status;

  if (parsed.isBefore) {
    status = 'Upcoming';
  } else if (liveStream.isLive) {
    status = 'LIVE';
  } else if (parsed.isAfter) {
    status = 'After';
  }

  return `DATE: ${startFormatted} – ${endFormatted} (${status})`;
}

export default function Live() {
  const { liveStreams: liveStreamsData } = useLiveStreamsQuery();

  return (
    <Layout title="Live">
      <Box as="h1" mb="l">
        LiveStreams
      </Box>
      <Box display="grid" gridTemplateColumns={{ __: '1fr', md: '1fr 1fr' }}>
        {!liveStreamsData.length && <Box as="p">No livestreams</Box>}
        {liveStreamsData.length &&
          liveStreamsData.map(liveStream => {
            return (
              <CustomLink
                key={liveStream.id}
                as="a"
                href={`/live/${slugify(liveStream.relatedNode?.title)}`}
                Component={DefaultCard}
                coverImage={liveStream.relatedNode?.coverImage?.sources[0]?.uri}
                coverImageOverlay={true}
                coverImageTitle={liveStream.relatedNode?.title}
                coverImageDescription={getDescription(liveStream)}
                m="base"
                display="block"
                height={{ __: 256, md: 384 }}
                maxWidth={{ __: 384, md: 512 }}
              />
            );
          })}
      </Box>
    </Layout>
  );
}
