import { format } from 'date-fns';

import { useLiveStreamsQuery } from 'hooks';
import { slugify, parseLiveStreamDates } from 'utils';

import { Box, CardGrid, HorizontalHighlightCard } from 'ui-kit';
import { CustomLink, Layout } from 'components';

function getDescription(liveStream) {
  const parsed = parseLiveStreamDates(liveStream);

  let startFormatted = parsed.startDate
    ? format(parsed.startDate, `EEEE, MMMM dd 'at' h:mm a`)
    : 'null';
  let endFormatted = parsed.endDate ? format(parsed.endDate, `h:mm a`) : 'null';

  if (parsed.isBefore) {
    return `${startFormatted}`;
  } else if (liveStream.isLive) {
    return `Live now until ${endFormatted}`;
  } else if (parsed.isAfter) {
    return 'Just ended';
  }
}

export default function Live() {
  const { liveStreams: liveStreamsData } = useLiveStreamsQuery();

  return (
    <Layout title="Live">
      <Box as="h1" mb="l">
        Live Events
      </Box>
      {!liveStreamsData.length && <Box as="p">No livestreams</Box>}
      {liveStreamsData.length && (
        <CardGrid columns="2" mb="xl">
          {liveStreamsData.map(liveStream => {
            return (
              <CustomLink
                key={liveStream.id}
                as="a"
                href={`/live/${slugify(liveStream.relatedNode?.title)}`}
                Component={HorizontalHighlightCard}
                coverImage={liveStream.relatedNode?.coverImage?.sources[0]?.uri}
                title={liveStream.relatedNode?.title}
                description={getDescription(liveStream)}
                coverImageOverlay={true}
                type="HIGHLIGHT_SMALL"
                live={liveStream.isLive}
              />
            );
          })}
        </CardGrid>
      )}
    </Layout>
  );
}
