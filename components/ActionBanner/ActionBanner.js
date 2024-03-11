import React from 'react';
import PropTypes from 'prop-types';

import { CustomLink } from 'components';
import { Box, HtmlRenderer, ThemeMixin } from 'ui-kit';

import Styled from './ActionBanner.styles';

import { getUrlFromRelatedNode } from 'utils';
import Color from 'color';

/**
 * Renders a banner with a title, content, and two buttons. Used for displaying site-wide announcements.
 */
const ActionBanner = ({ title, htmlContent, actions, theme }) => {
  const primaryButton = actions?.[0];
  const secondaryButton = actions?.[1];

  return (
    <ThemeMixin
      theme={{
        colors: theme?.colors ?? {},
      }}
    >
      <Styled>
        <Box>
          {title && title !== '' && (
            <Box as="h3" mb="2px" opacity={0.85}>
              {title}
            </Box>
          )}
          <HtmlRenderer htmlContent={htmlContent} />
        </Box>

        <Box display="flex" flexDirection="row">
          {primaryButton && (
            <CustomLink
              Component={Styled.PrimaryButton}
              isLight={Color(theme?.colors?.secondary).isLight()}
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
              isLight={Color(theme?.colors?.secondary).isLight()}
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
   * Color theme that sets background color of the banner(primary) and color of primary button(secondary).
   */
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      primary: PropTypes.string,
      secondary: PropTypes.string,
    }),
  }),
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
