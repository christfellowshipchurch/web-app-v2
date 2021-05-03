import React from 'react';
import PropTypes from 'prop-types';

// import { Video } from 'components';
import { Box, Button, Image, systemPropTypes } from 'ui-kit';
import { htmlToReactParser, getUrlFromRelatedNode } from 'utils';
import { CustomLink } from 'components';

import Styled from './ContentBlock.styles';
import toLower from 'lodash/toLower';

function ContentBlock(props = {}) {
  const horizontalLayout =
    toLower(props.contentLayout) === 'left' ||
    toLower(props.contentLayout) === 'right';

  /**
   * todo : We eventually want to add the Video.js componenet to the Media wrapper
   */

  return (
    <Styled.Container gridLayout={props.contentLayout} {...props}>
      {(props.image || props.image !== '') && (
        <Styled.Media>
          <Image
            maxWidth={horizontalLayout ? '500px' : '800px'}
            source={props.image}
            aspectRatio={props.imageRatio}
          />
        </Styled.Media>
      )}
      <Styled.Content textAlign={horizontalLayout ? 'flex-start' : 'center'}>
        {(props.title || props.subtitle) && (
          <>
            <Styled.Subtitle>{props.subtitle}</Styled.Subtitle>
            <Styled.Title>{props.title}</Styled.Title>
          </>
        )}
        <Box>{htmlToReactParser.parse(props.htmlContent)}</Box>

        {props?.actions && props?.actions?.length > 0 && (
          <Box my="base" flexDirection="column" display="flex">
            {props?.actions.map((action, i) => (
              <CustomLink
                as="a"
                href={getUrlFromRelatedNode(action?.relatedNode)}
                Component={Button}
                variant={i === 0 ? 'primary' : 'secondary'}
                my="xs"
                // onClick={e => onPressActionItem(e, heroCard)}
              >
                {action?.title}
              </CustomLink>
            ))}
          </Box>
        )}
      </Styled.Content>
    </Styled.Container>
  );
}

ContentBlock.propTypes = {
  ...systemPropTypes,
  callToAction: PropTypes.object,
  className: PropTypes.string,
  contentLayout: PropTypes.oneOf(['DEFAULT', 'INVERTED', 'LEFT', 'RIGHT']),
  grouped: PropTypes.bool,
  hideTitle: PropTypes.bool,
  htmlContent: PropTypes.string,
  imageAlt: PropTypes.string,
  imageRatio: PropTypes.string,
  images: PropTypes.array,
  openLinksInNewTab: PropTypes.bool,
  secondaryCallToAction: PropTypes.object,
  subtitle: PropTypes.string,
  textAlignment: PropTypes.string,
  title: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'dark']),
  videos: PropTypes.array,
  withAnimation: PropTypes.bool,
};

ContentBlock.defaultProps = {
  image: '',
};

export default ContentBlock;
