import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'ui-kit';
import { LottieViewer } from 'components';

function Logo(props = {}) {
  const filename = `/logo${props.dark ? '-dark' : ''}.png`;

  /**
   * Adding temporary Lottie animation for dark mode for Christ Fellowship 40th Anniversary
   */
  return props?.dark ? (
    <Box maxWidth={200}>
      <LottieViewer fileName="cf40-logo" />
    </Box>
  ) : (
    <Box
      as="img"
      src={filename}
      alt="Christ Fellowship"
      width="135"
      {...props}
    />
  );
}

Logo.propTypes = {
  dark: PropTypes.bool,
};

Logo.defaultProps = {
  dark: false,
};

export default Logo;
