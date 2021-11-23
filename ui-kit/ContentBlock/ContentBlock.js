import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import kebabCase from 'lodash/kebabCase'

// import { Video } from 'components';
import { Box, Button, Icon, Image, HtmlRenderer, systemPropTypes } from 'ui-kit';
import { htmlToReactParser, getUrlFromRelatedNode } from 'utils';
import { CustomLink, Video } from 'components';

import Styled from './ContentBlock.styles';
import toLower from 'lodash/toLower';

function titleFlexDirection(orientation) {
  switch (orientation) {
    case 'RIGHT':
    case 'LEFT':
      return 'column-reverse';
    default:
      return 'column';
  }
}

function ContentBlock(props = {}) {
  const horizontalLayout =
    toLower(props.contentLayout) === 'left' ||
    toLower(props.contentLayout) === 'right';
  const id = props?.id;
  const title = props?.title;
  const subtitle = props?.subtitle;
  const htmlContent = props?.htmlContent;
  const actions = props?.actions;

  const hasContent =
    !isEmpty(title) ||
    !isEmpty(subtitle) ||
    !isEmpty(htmlContent) ||
    actions?.length > 0;

  const noMedia =
    !(props.image || props.image !== '') && !(props.videos?.length >= 1);
  const idRegex = /\D/g;
  const containerId = !isEmpty(title)
    ? kebabCase(title)
    : id?.replace(idRegex, '')

  return (
    <Styled.Container
      id={containerId}
      gridLayout={noMedia ? 'NO_MEDIA' : props.contentLayout}
      {...props}
    >
      {(props.image || props.image !== '') && !props?.videos?.length && (
        <Styled.Media maxWidth={horizontalLayout ? '500px' : '800px'}>
          <Image
            mask={props?.imageMask}
            source={props.image}
            aspectRatio={props.imageRatio}
            objectFit={props?.objectFit}
          />
        </Styled.Media>
      )}
      {props.videos?.length >= 1 && (
        <Styled.Media maxWidth={horizontalLayout ? '500px' : '800px'}>
          <Video
            src={props.videos[0].sources[0].uri}
            autoPlay={false}
            playsInline={true}
            poster={props?.image}
          />
        </Styled.Media>
      )}
      {hasContent && (
        <Styled.Content textAlign={horizontalLayout ? 'flex-start' : 'center'}>
          <Box mt={{ _: 'l', md: 0 }} mb={{ _: 's', md: 0 }}>
            {(title || subtitle) && (
              <Box
                display="flex"
                flexDirection={titleFlexDirection(props?.contentLayout)}
              >
                <Styled.Title>
                  {props.title}
                  <CustomLink
                    as="a"
                    ml="xs"
                    href={`#${containerId}`}
                    opacity="0.5"
                  >
                    <Icon name="link" size={16} />
                  </CustomLink>
                  
                </Styled.Title>
                <Styled.Subtitle>{props.subtitle}</Styled.Subtitle>
              </Box>
            )}
            <HtmlRenderer htmlContent={props?.htmlContent} />
          </Box>
          {actions && actions?.length > 0 && (
            <Box my="base" flexDirection="column" display="flex">
              {actions.map((action, i) => (
                <CustomLink
                  as="a"
                  href={getUrlFromRelatedNode(action?.relatedNode)}
                  Component={Button}
                  variant={i === 0 ? 'primary' : 'secondary'}
                  my="xs"
                  textTransform="capitalize!important"
                  /**
                   * todo : We want to eventually add functionality with the 'onPressActionItem' to be able to perform more actions in the future.
                   */
                  // onClick={e => onPressActionItem(e, heroCard)}
                  {...action}
                >
                  {action?.title}
                </CustomLink>
              ))}
            </Box>
          )}
        </Styled.Content>
      )}
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
  objectFit: PropTypes.string,
  openLinksInNewTab: PropTypes.bool,
  secondaryCallToAction: PropTypes.object,
  subtitle: PropTypes.string,
  textAlignment: PropTypes.string,
  title: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'dark']),
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      key: PropTypes.string,
      sources: PropTypes.arrayOf(
        PropTypes.shape({
          uri: PropTypes.string,
        })
      ),
    })
  ),
  withAnimation: PropTypes.bool,
};

ContentBlock.defaultProps = {
  image: '',
  objectFit: 'cover',
};

export default ContentBlock;
