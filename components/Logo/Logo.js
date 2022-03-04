import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'ui-kit';

function Logo(props = {}) {
  const filename = `/logo${props.dark ? '-dark' : ''}.png`;
  return (
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
