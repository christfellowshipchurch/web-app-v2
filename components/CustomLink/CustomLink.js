import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function CustomLink({ Component: _Component, href, ...props }) {
  if (!_Component) {
    return (
      <Link legacyBehavior href={href}>
        <a>{props.children}</a>
      </Link>
    );
  }

  return (
    <Link href={href} passHref>
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
