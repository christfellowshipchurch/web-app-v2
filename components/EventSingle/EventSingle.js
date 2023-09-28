import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Box, Loader } from 'ui-kit';
import { ContentLayout, Share } from 'components';
import ContentVideo from 'components/ContentSingle/ContentVideo';
import EventGroupings from './EventGroupings';
import { useAnalytics } from 'providers/AnalyticsProvider';

function EventSingle(props = {}) {
  const analytics = useAnalytics();

  const [currentVideo, setCurrentVideo] = useState(
    Array.isArray(props.data?.videos) ? props.data.videos[0] : null
  );

  useEffect(() => {
    analytics.page({
      contentCategory: 'Information',
      mediaType: 'Information',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (props.data?.videos?.length >= 1 && currentVideo === null) {
      setCurrentVideo(props.data.videos[0]);
    } else if (props.data?.wistiaId?.length >= 1 && currentVideo === null) {
      setCurrentVideo(props.data.wistiaId);
    }
  }, [props.data?.videos, props.data?.wistiaId, currentVideo]);

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
  const wistiaId = props?.data?.wistiaId;

  if (!currentVideo && wistiaId) {
    setCurrentVideo(props.data.wistiaId);
  }

  const eventShareMessages = {
    faceBook: `Check out ${title} happening at Christ Fellowship Church!`,
    twitter: `${title} at Christ Fellowship Church`,
    email: {
      subject: `${title} at Christ Fellowship Church`,
      body: `Check out ${title} happening at Christ Fellowship Church! I would love for you to join me. \n\n ${document?.URL}`,
    },
    sms: `Join me for ${title} at Christ Fellowship! ${document?.URL}`,
  };

  var contentLayoutVideo;
  if (wistiaId) {
    contentLayoutVideo = currentVideo?.wistiaId;
  } else {
    contentLayoutVideo = currentVideo?.sources[0]?.uri;
  }

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
        video: contentLayoutVideo,
      }}
      summary={props.data.summary}
      coverImage={currentVideo ? null : coverImageUri}
      renderA={() => (
        <ContentVideo
          title={title}
          video={wistiaId ? wistiaId : props?.data?.videos[0]}
          poster={coverImageUri}
          wistiaId={wistiaId}
        />
      )}
      renderC={() => (
        <Box justifySelf="flex-end">
          <Share
            mb={{ _: 'base' }}
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
