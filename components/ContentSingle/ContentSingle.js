import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { Box, Avatar } from 'ui-kit';
import { ContentLayout, Share } from 'components';

function ContentSingle(props = {}) {
  const {
    __typename,
    author,
    coverImage,
    htmlContent,
    publishDate,
    schedule,
    summary,
    title,
  } = props.data;

  const coverImageUri = coverImage?.sources[0]?.uri;
  const authorName = author
    ? `${author?.firstName} ${author?.lastName}`
    : undefined;

  return (
    <ContentLayout
      title={title}
      seo={{
        description: summary || schedule?.friendlyScheduleText,
        image: coverImageUri,
        author: authorName,
      }}
      summary={summary || schedule?.friendlyScheduleText}
      coverImage={coverImageUri}
      renderC={() => (
        <Box justifySelf="flex-end" alignSelf="start">
          <Share title={title} />
        </Box>
      )}
      contentTitleD={__typename === 'EventContentItem' ? 'About' : null}
      renderContentB={() =>
        author && (
          <Box display="flex" mt="base">
            <Box mr="base">
              <Avatar
                name={author.firstName}
                source={author.photo?.uri}
                height="60px"
                width="60px"
              />
            </Box>
            <Box display="flex" justifyContent="center" flexDirection="column">
              <Box as="h4" mb="0">
                {authorName}
              </Box>
              <Box>{format(new Date(publishDate), 'MMMM d, yyyy')}</Box>
            </Box>
          </Box>
        )
      }
      htmlContent={htmlContent}
    />
  );
}

ContentSingle.propTypes = {
  data: PropTypes.object,
};

export default ContentSingle;
