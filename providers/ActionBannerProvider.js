import React from 'react';
import PropTypes from 'prop-types';

import { useActionBanner } from 'hooks';

function ActionBannerProvider({ Component, options, ...props }) {
  const { loading, error, actionBanner } = useActionBanner(options);

  return (
    actionBanner && (
      <Component {...actionBanner} loading={loading} error={error} {...props} />
    )
  );
}

ActionBannerProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default ActionBannerProvider;
