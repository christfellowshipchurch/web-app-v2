import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import { Box, Icon, Loader, systemPropTypes } from 'ui-kit';
import Styled from './Button.styles';
import { useAnalytics } from 'providers/AnalyticsProvider';
import { includes, toString } from 'lodash';
import { useRouter } from 'next/router';

function childrenText(children) {
  if (Array.isArray(children)) {
    return children.map(childrenText).filter(c => typeof c === 'string');
  }

  if (typeof children === 'string') return children;

  return null;
}

function childrenIcons(children) {
  if (Array.isArray(children)) {
    return children.map(childrenIcons).filter(c => typeof c === 'string');
  }

  if (children && children?.type === Icon) {
    if (!isEmpty(children?.props?.name)) return children?.props?.name;
  }

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
            text: props?.children,
            type: 'Button',
            url: props?.href,
            category: 'Call to Action',
            subcategory: 'N/A',
            tags: 'N/A',
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
  size: PropTypes.oneOf(['xs', 's', 'l']),
  status: PropTypes.oneOf(['IDLE', 'LOADING', 'ERROR', 'SUCCESS', 'SELECTED']),
  variant: PropTypes.oneOf([
    'link',
    'primary',
    'secondary',
    'tertiary',
    'chip',
  ]),
  hoverColor: PropTypes.string,
  href: PropTypes.string,
};

Button.defaultProps = {
  status: 'IDLE',
  hoverColor: 'primaryHover',
};

const ButtonWithRef = React.forwardRef(({ onClick, href, ...props }, ref) => (
  <Button onClick={onClick} href={href} ref={ref} {...props} />
));

export default ButtonWithRef;
