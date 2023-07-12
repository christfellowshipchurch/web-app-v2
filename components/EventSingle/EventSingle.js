import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Box, Loader } from 'ui-kit';
import { ContentLayout, Share } from 'components';

import EventGroupings from './EventGroupings';
import { useAnalytics } from 'providers/AnalyticsProvider';

function EventSingle(props = {}) {
  const analytics = useAnalytics();

  useEffect(() => {
    analytics.page({
      contentCategory: 'Information',
      mediaType: 'Information',
    });
  }, [analytics]);

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
  const featureFeed = props?.data?.featureFeed;
  const schedule = props?.data?.schedule;
  const summary = props?.data?.summary;
  const title = props?.data?.title;
  const coverImageUri = coverImage?.sources[0]?.uri;
  const authorName = author
    ? `${author.firstName} ${author.lastName}`
    : undefined;

  const eventShareMessages = {
    faceBook: `Check out ${title} happening at Christ Fellowship Church!`,
    twitter: `${title} at Christ Fellowship Church`,
    email: {
      subject: `${title} at Christ Fellowship Church`,
      body: `Check out ${title} happening at Christ Fellowship Church! I would love for you to join me. \n\n ${document?.URL}`,
    },
    sms: `Join me for ${title} at Christ Fellowship! ${document?.URL}`,
  };

  return (
    <ContentLayout
      theme={props?.data?.theme ?? {}}
      mode={props.data.mode}
      title={props.data.title}
      seoMetaTags={{
        title,
        description: schedule?.friendlyScheduleText || summary,
        image: coverImageUri,
        author: authorName,
        url: typeof window !== 'undefined' ? window.location.href : undefined,
      }}
      summary={props.data.summary}
      coverImage={props.data?.coverImage?.sources[0]?.uri}
      renderC={() => (
        <Box justifySelf="flex-end">
          <Share
            title={props.data.title}
            shareTitle="Invite"
            shareMessages={eventShareMessages}
          />
        </Box>
      )}
      htmlContent={props.data.htmlContent}
      features={featureFeed?.features}
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
