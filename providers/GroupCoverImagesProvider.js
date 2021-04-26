import React from 'react';
import PropTypes from 'prop-types';

import { useGroupCoverImages } from 'hooks';

function GroupCoverImagesProvider({ Component, options, ...props }) {
  const { loading, error, coverImages } = useGroupCoverImages(options);
  return (
    <Component data={coverImages} loading={loading} error={error} {...props} />
  );
}

GroupCoverImagesProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default GroupCoverImagesProvider;
