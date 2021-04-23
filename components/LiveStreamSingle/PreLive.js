import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow, format } from 'date-fns';

import { parseLiveStreamDates } from 'utils';
import { ContentLayout } from 'components';
import { Cell } from 'ui-kit';

function PreLive(props = {}) {
  const parsed = parseLiveStreamDates(props.data);
  const startFormatted = parsed.startDate
    ? format(parsed.startDate, `EEEE, MMMM dd 'at' h:mm a`)
    : null;
  const distance = parsed?.startDate
    ? formatDistanceToNow(parsed.startDate)
    : null;

  return (
    <Cell px="base" pt={{ _: 'l', lg: 'xl' }}>
      <ContentLayout
        mode={props.data.mode}
        title={props.data?.relatedNode?.title}
        summary={`Scheduled for ${startFormatted} (${distance})`}
        coverImage={props.data?.relatedNode?.coverImage?.sources[0]?.uri}
      />
    </Cell>
  );
}

PreLive.propTypes = {
  data: PropTypes.object,
};

export default PreLive;
