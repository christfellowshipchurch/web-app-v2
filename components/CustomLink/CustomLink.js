import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Box } from 'ui-kit';
function CustomLink({ Component: _Component, href, ...props }) {
  if (!_Component) {
    return (
      // Next 13 doesn't support a tags as children of Link comoonent so we need to add legacyBehavior prop
      <Link legacyBehavior href={href} passHref={true}>
        <Box as="a" cursor="pointer" textDecoration="none" {...props}>
          {props.children}
        </Box>
      </Link>
    );
  }

  return (
    // Next 13 doesn't support a tags as children of Link component so we need to add legacyBehavior prop
    <Link legacyBehavior href={href} passHref>
      <WrappedComponent Component={_Component} {...props} />
    </Link>
  );
}

const WrappedComponent = React.forwardRef(({ Component, ...props }, ref) => (
  <Component {...props} />
));

CustomLink.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default CustomLink;
