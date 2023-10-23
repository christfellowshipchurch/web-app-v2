import React from 'react';
import PropTypes from 'prop-types';

import { Box, Loader, systemPropTypes } from 'ui-kit';
import Styled from './Button.styles';
import { useAnalytics } from 'providers/AnalyticsProvider';
import { useRouter } from 'next/router';

function childrenText(children) {
  if (Array.isArray(children)) {
    return children.map(childrenText).filter(c => typeof c === 'string');
  }

  if (typeof children === 'string') return children;

  return null;
}
function Button(props = {}) {
  const analytics = useAnalytics();
  const router = useRouter();
  let isFunction = null;

  if (props?.onClick) {
    isFunction = 'Triggers Function';
  }

  if (props.status === 'LOADING') {
    return (
      <Styled {...props}>
        <Loader noLabel={true} />
        <Box as="span">{props.children}</Box>
      </Styled>
    );
  }

  return (
    <Styled
      {...props}
      onClick={e => {
        function handleClick() {
          if (typeof props?.onClick === 'function') {
            props?.onClick(e);
          }
        }
        analytics.track({
          event: 'CTA Click',
          properties: {
            destination: isFunction || props?.href || 'N/A',
            location: router?.asPath || 'N/A',
            text: props?.call || childrenText(props?.children),
            url: props?.href,
            site_exit: props?.target && props?.target === '_blank',
          },
        });

        handleClick();
      }}
    />
  );
}

Button.propTypes = {
  ...systemPropTypes,
  /**
   * The text of the button
   */
  children: PropTypes.string,
  /**
   * The size of the button
   */
  size: PropTypes.oneOf(['xs', 's', 'l']),
  /**
   * The status of the button
   */
  status: PropTypes.oneOf(['IDLE', 'LOADING', 'ERROR', 'SUCCESS', 'SELECTED']),
  /**
   * The variant or style of the button
   */
  variant: PropTypes.oneOf([
    'link',
    'primary',
    'secondary',
    'tertiary',
    'chip',
  ]),
  /**
   * The URL to navigate to when the button is clicked, specified as a string
   */
  href: PropTypes.string,
};

Button.defaultProps = {
  status: 'IDLE',
};

export default Button;
