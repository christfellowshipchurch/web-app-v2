import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { Box, Avatar } from 'ui-kit';
import { ContentLayout, Share } from 'components';

function ContentSingle(props = {}) {
  return (
    <ContentLayout
      title={props.data.title}
      summary={props.data.schedule?.friendlyScheduleText}
      coverImage={props.data?.coverImage?.sources[0]?.uri}
      renderC={() => (
        <Box justifySelf="flex-end" alignSelf="start">
          <Share title={props.data?.title} />
        </Box>
      )}
      contentTitleD="About"
      renderContentB={() =>
        props.data?.author?.firstName && (
          <Box display="flex" mt="base">
            <Box mr="base">
              <Avatar
                name={props.data?.author?.firstName}
                source={props.data?.author?.photo?.uri}
                height="60px"
                width="60px"
              />
            </Box>
            <Box display="flex" justifyContent="center" flexDirection="column">
              <Box
                as="h4"
                mb="0"
              >{`${props.data?.author?.firstName} ${props.data?.author?.lastName}`}</Box>
              <Box>
                {format(new Date(props.data?.publishDate), 'MMM d, yyyy')}
              </Box>
            </Box>
          </Box>
        )
      }
      htmlContent={props.data.htmlContent}
    />
  );
}

ContentSingle.propTypes = {
  data: PropTypes.array,
};

export default ContentSingle;
