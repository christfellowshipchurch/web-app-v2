import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import { CustomLink } from 'components';
import { Box, HtmlRenderer, ThemeMixin } from 'ui-kit';

import Styled from './ActionBanner.styles';

import { getUrlFromRelatedNode } from 'utils';
import Color from 'color';

const ActionBanner = (props = {}) => {
  const primaryButton = get(props, 'actions[0]');
  const secondaryButton = get(props, 'actions[1]');

  return (
    <ThemeMixin
      theme={{
        colors: props?.theme?.colors ?? {},
      }}
    >
      <Styled>
        <Box>
          {props?.title && props?.title !== '' && (
            <Box as="h3" mb="2px" opacity={0.85}>
              {props?.title}
            </Box>
          )}
          <HtmlRenderer htmlContent={props?.htmlContent} />
        </Box>

        <Box display="flex" flexDirection="row">
          {primaryButton && (
            <CustomLink
              Component={Styled.PrimaryButton}
              isLight={Color(props?.theme?.colors?.secondary).isLight()}
              size="s"
              ml={{ _: 0, md: 'base' }}
              px="base"
              href={getUrlFromRelatedNode(primaryButton?.relatedNode)}
              minWidth={140}
              target="_blank"
            >
              {primaryButton?.title}
            </CustomLink>
          )}
          {secondaryButton && (
            <CustomLink
              Component={Styled.SecondaryButton}
              isLight={Color(props?.theme?.colors?.secondary).isLight()}
              size="s"
              ml="s"
              border="none"
              px="base"
              minWidth={140}
              href={getUrlFromRelatedNode(secondaryButton?.relatedNode)}
              target="_blank"
            >
              {secondaryButton?.title}
            </CustomLink>
          )}
        </Box>
      </Styled>
    </ThemeMixin>
  );
};

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

ActionBanner.defaultProps = {};

export default ActionBanner;
