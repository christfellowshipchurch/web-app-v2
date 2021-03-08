import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { parseLiveStreamDates } from 'utils';
import { ContentLayout } from 'components';
import { Box } from 'ui-kit';

function PreLive(props = {}) {
  const parsed = parseLiveStreamDates(props.data);
  let startFormatted = parsed.startDate
    ? format(parsed.startDate, `EEEE, MMMM dd 'at' h:mm a`)
    : 'null';
  let endFormatted = parsed.endDate
    ? format(parsed.endDate, `EEEE, MMMM dd 'at' h:mm a`)
    : 'null';

  return (
    <>
      <ContentLayout
        title={props.data?.relatedNode?.title}
        summary="Coming Soon"
        coverImage={props.data?.relatedNode?.coverImage?.sources[0]?.uri}
        renderD={() => (
          <Box as="p">
            <b>Starts:</b> {startFormatted}
            <br />
            <b>Ends:</b> {endFormatted}
          </Box>
        )}
      />
    </>
  );
}

PreLive.propTypes = {
  data: PropTypes.object,
};

export default PreLive;
