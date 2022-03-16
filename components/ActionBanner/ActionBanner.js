import React from 'react';
import PropTypes from 'prop-types';
import { CustomLink } from 'components';
import { Box, Button, HtmlRenderer, ThemeMixin } from 'ui-kit';

import Styled from './ActionBanner.styles';

const ActionBanner = (props = {}) => (
  <Styled bg={props?.bannerColor} {...props}>
    <HtmlRenderer htmlContent={props?.htmlContent} />
    <ThemeMixin
      theme={{
        colors: {
          primary: props?.buttonColor,
        },
      }}
    >
      <Box display="flex" flexDirection="row">
        {props.primaryButton && (
          <CustomLink
            Component={Button}
            size="s"
            ml={{ _: 0, md: 'base' }}
            px="base"
            href={props?.primaryButton?.action}
            minWidth={140}
          >
            {props?.primaryButton?.call}
          </CustomLink>
        )}
        {props?.secondaryButton && (
          <CustomLink
            Component={Button}
            size="s"
            ml="s"
            variant="secondary"
            bg="white"
            border="none"
            px="base"
            minWidth={140}
            href={props?.secondaryButton?.action}
          >
            {props?.secondaryButton?.call}
          </CustomLink>
        )}
      </Box>
    </ThemeMixin>
  </Styled>
);

ActionBanner.propTypes = {
  htmlContent: PropTypes.string,
  bannerColor: PropTypes.string,
  buttonColor: PropTypes.string,
  primaryButton: PropTypes.shape({
    call: PropTypes.string,
    action: PropTypes.string,
  }),
  secondaryButton: PropTypes.shape({
    call: PropTypes.string,
    action: PropTypes.string,
  }),
};

ActionBanner.defaultProps = {
  htmlContent:
    '<i>Come check out whats going on at Christ Fellowship this <b>weekend</b>!!!</i>',
  bannerColor: 'primary',
  buttonColor: '#004f71',
  primaryButton: {
    call: 'Sign Up',
    action: '#testing',
  },
  secondaryButton: {
    call: 'Learn More',
    action: '#testing',
  },
};

export default ActionBanner;
