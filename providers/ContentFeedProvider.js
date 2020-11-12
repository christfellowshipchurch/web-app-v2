import React from 'react';
import PropTypes from 'prop-types';

import { useContentFeed } from '../hooks';

function ContentFeedProvider({ Component, options, ...props }) {
  const { loading, error, content } = useContentFeed(options);
  return (
    <Component data={content} loading={loading} error={error} {...props} />
  );
}

ContentFeedProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default ContentFeedProvider;
