import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

function Logo(props = {}) {
  const filename = `/logo${props.dark ? '-dark' : ''}.png`;
  return (
    <Image src={filename} alt="Christ Fellowship" width="135" height="42" />
  );
}

Logo.propTypes = {
  dark: PropTypes.bool,
};

Logo.defaultProps = {
  dark: false,
};

export default Logo;
