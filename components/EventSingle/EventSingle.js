import React from 'react';
import PropTypes from 'prop-types';

import { Box, Loader } from 'ui-kit';
import { ContentLayout, Share } from 'components';

import EventGroupings from './EventGroupings';

function EventSingle(props = {}) {
  if (props.loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        width="100%"
        minHeight="50vh"
      >
        <Loader />
      </Box>
    );
  }

  const author = props?.data?.author;
  const coverImage = props?.data?.coverImage;
  const schedule = props?.data?.schedule;
  const summary = props?.data?.summary;
  const title = props?.data?.title;
  const coverImageUri = coverImage?.sources[0]?.uri;
  const authorName = author
    ? `${author.firstName} ${author.lastName}`
    : undefined;

  return (
    <ContentLayout
      mode={props.data.mode}
      title={props.data.title}
      seoMetaTags={{
        title: `${title} - Christ Fellowship Church`,
        description: schedule?.friendlyScheduleText || summary,
        image: coverImageUri,
        author: authorName,
        url: typeof window !== 'undefined' ? window.location.href : undefined,
      }}
      summary={props.data.summary}
      coverImage={props.data?.coverImage?.sources[0]?.uri}
      renderC={() => (
        <Box justifySelf="flex-end">
          <Share title={props.data.title} shareTitle="Invite" />
        </Box>
      )}
      htmlContent={props.data.htmlContent}
      features={props?.data?.featureFeed?.features}
      renderContentE={() => props.data && <EventGroupings data={props.data} />}
    />
  );
}

EventSingle.propTypes = {
  data: PropTypes.any,
  loading: PropTypes.bool,
};

EventSingle.defaultProps = {
  loading: true,
};

export default EventSingle;
