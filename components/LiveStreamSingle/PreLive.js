import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import { parseLiveStreamDates } from 'utils';
import { ContentLayout } from 'components';
import { Cell } from 'ui-kit';

function PreLive(props = {}) {
  const parsed = parseLiveStreamDates(props.data);
  let startsIn = parsed?.startDate
    ? formatDistanceToNow(parsed.startDate)
    : null;

  return (
    <Cell px="base" pt={{ _: 'l', lg: 'xl' }}>
      <ContentLayout
        title={props.data?.relatedNode?.title}
        summary={`Starts in ${startsIn}`}
        coverImage={props.data?.relatedNode?.coverImage?.sources[0]?.uri}
      />
    </Cell>
  );
}

PreLive.propTypes = {
  data: PropTypes.object,
};

export default PreLive;
