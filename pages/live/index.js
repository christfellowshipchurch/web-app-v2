import { format } from 'date-fns';

import { useLiveStreamsQuery } from 'hooks';
import { slugify, parseLiveStreamDates } from 'utils';

import { Box, CardGrid, Cell, DefaultCard, Loader, utils } from 'ui-kit';
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

export default function Live(props = {}) {
  const { liveStreams: liveStreamsData, loading } = useLiveStreamsQuery();

  return (
    <Layout title="Live">
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 'l', lg: 'xl' }}
      >
        <Box as="h1" mb="l">
          Live Events
        </Box>

        {loading && (
          <Box display="flex" justifyContent="center" pt="xl">
            <Loader />
          </Box>
        )}
        {!loading && !liveStreamsData.length && (
          <Box as="p">No livestreams scheduled</Box>
        )}
        {liveStreamsData.length > 0 && (
          <CardGrid columns="2" mb="xl">
            {liveStreamsData.map(liveStream => {
              return (
                <CustomLink
                  key={liveStream.id}
                  as="a"
                  href={`/live/${slugify(liveStream.relatedNode?.title)}`}
                  Component={DefaultCard}
                  coverImage={
                    liveStream.relatedNode?.coverImage?.sources[0]?.uri
                  }
                  title={liveStream.relatedNode?.title}
                  description={getDescription(liveStream)}
                  coverImageLabel={liveStream.isLive ? 'Live' : null}
                  coverImageLabelBgColor={liveStream.isLive ? 'live' : null}
                />
              );
            })}
          </CardGrid>
        )}
      </Cell>
    </Layout>
  );
}
