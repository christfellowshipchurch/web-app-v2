import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import { CustomLink } from 'components';
import { Box, HtmlRenderer, ThemeMixin } from 'ui-kit';

import Styled from './ActionBanner.styles';

import { getUrlFromRelatedNode } from 'utils';
import Color from 'color';

/**
 * Renders a banner with a title, content, and two buttons. Used for displaying site-wide announcements.
 */
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
          {props?.actions[0] && (
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
          {props?.actions[1] && (
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
  /**
   * Title to display in the banner.
   */
  title: PropTypes.string,
  /**
   * Content to display in the banner.
   */
  htmlContent: PropTypes.string,
  /**
   * Color of the banner.
   */
  bannerColor: PropTypes.string,
  /**
   * Color of the primary button.
   */
  buttonColor: PropTypes.string,
  /**
   * Actions to display in the banner.
   */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      relatedNode: PropTypes.shape({
        id: PropTypes.string,
        url: PropTypes.string,
      }),
    })
  ),
};

ActionBanner.defaultProps = {};

export default ActionBanner;
