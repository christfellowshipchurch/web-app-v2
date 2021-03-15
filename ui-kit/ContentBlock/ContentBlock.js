import React from 'react';
import PropTypes from 'prop-types';

import { Video } from 'components';
import { Box, Image, systemPropTypes } from 'ui-kit';
import { htmlToReactParser } from 'utils';

import Styled from './ContentBlock.styles';

function ContentBlock(props = {}) {
  const mediaType = props.videos;

  const horizontalLayout =
    props.contentLayout === 'left' || props.contentLayout === 'right';

  return (
    <Styled.Container gridLayout={props.contentLayout}>
      <Styled.Media>
        {props.video ? (
          <Video src={props.video} />
        ) : (
          <Image
            maxWidth="800px"
            source={props.image}
            aspectRatio={props.imageRatio}
          />
        )}
      </Styled.Media>
      <Styled.Content textAlign={horizontalLayout ? 'flex-start' : 'center'}>
        <Styled.Subtitle>{props.subtitle}</Styled.Subtitle>
        <Styled.Title>{props.title}</Styled.Title>
        <Box>{htmlToReactParser.parse(props.htmlContent)}</Box>
      </Styled.Content>
    </Styled.Container>
  );
}

ContentBlock.propTypes = {
  ...systemPropTypes,
  callToAction: PropTypes.object,
  className: PropTypes.string,
  contentLayout: PropTypes.oneOf(['default', 'inverted', 'left', 'right']),
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
  image: 'https://source.unsplash.com/random/1000x1000',
};

export default ContentBlock;
