import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty'

import { Box, Icon, Loader, systemPropTypes } from 'ui-kit';
import Styled from './Button.styles';
import { useAnalytics } from 'providers/AnalyticsProvider'

function childrenText(children) {
  if (Array.isArray(children)) {
    return children
      .map(childrenText)
      .filter(c => typeof c === "string")
  }

  if (typeof children === "string") return children

  return null
}

function childrenIcons(children) {
  if (Array.isArray(children)) {
    return children
      .map(childrenIcons)
      .filter(c => typeof c === "string")
  }

  if (children && children?.type === Icon) {
    if (!isEmpty(children?.props?.name)) return children?.props?.name
  }

  return null
}
function Button(props = {}) {
  const { trackEvent, eventKeys } = useAnalytics()

  if (props.status === 'LOADING') {
    return (
      <Styled {...props}>
        <Loader noLabel={true} />
        <Box as="span">{props.children}</Box>
      </Styled>
    );
  }

  return <Styled 
    {...props} 
    onClick={(e) => {
      function handleClick() {
        if (typeof props?.onClick === "function") {
          props?.onClick(e)
        }
      }

      if (!isEmpty(props?.href)) {
        trackEvent(eventKeys.openLink, {
          text: childrenText(props?.children),
          icon: childrenIcons(props?.children),
          link: props?.href,
        }, handleClick)
      } else {
        trackEvent(eventKeys.clickButton, {
          text: childrenText(props?.children),
          icon: childrenIcons(props?.children),
        }, handleClick)
      }
    }}
  />;
}

Button.propTypes = {
  ...systemPropTypes,
  size: PropTypes.oneOf(['s', 'l']),
  status: PropTypes.oneOf(['IDLE', 'LOADING', 'ERROR', 'SUCCESS', 'SELECTED']),
  variant: PropTypes.oneOf([
    'link',
    'primary',
    'secondary',
    'tertiary',
    'chip',
  ]),
  hoverColor: PropTypes.string,
  href: PropTypes.string
};

Button.defaultProps = {
  status: 'IDLE',
  hoverColor: 'primaryHover',
};

const ButtonWithRef = React.forwardRef(
  ({ onClick, href, ...props }, ref) => <Button 
    onClick={onClick} 
    href={href}
    ref={ref}
    {...props}
  />
);

export default ButtonWithRef
