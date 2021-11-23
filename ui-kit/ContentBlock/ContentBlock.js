import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import { Box, Button, Image, HtmlRenderer, systemPropTypes } from 'ui-kit';
import { getUrlFromRelatedNode } from 'utils';
import { CustomLink, Video } from 'components';

import Styled from './ContentBlock.styles';
import toLower from 'lodash/toLower';
function Conditional({ condition, children }) {
  return Boolean(condition) ? children : null
}

Conditional.propTypes = {
  condition: PropTypes.bool
}

function ConditionalBox({ condition, children, ...props }) {
  return Boolean(condition) ? <Box {...props}>{children}</Box> : null
}

function ContentBlock(props = {}) {
  const contentLayout = toLower(props?.contentLayout ?? "default")
  const horizontalLayout = contentLayout === 'left' || contentLayout === 'right';
  const title = props?.title;
  const subtitle = props?.subtitle;
  const htmlContent = props?.htmlContent;
  const actions = props?.actions;

  const hasTitle = !isEmpty(title);
  const hasSubtitle = !isEmpty(subtitle);
  const hasHtmlContent = !isEmpty(htmlContent);
  const hasActions = actions?.length > 0;
  const hasImage = !isEmpty(props?.image);
  const hasVideo = !isEmpty(props?.videos[0]?.sources[0]?.uri);
  const hasMedia = hasImage || hasVideo;

  return <Styled contentLayout={contentLayout}>
    {/* // MARK : Media */}
    <Conditional condition={hasMedia}>
      <Box flex={3} borderRadius="base" maxWidth={horizontalLayout ? '500px' : '800px'}>
        <Conditional condition={hasImage && !hasVideo}>
          <Image
            mask={props?.imageMask}
            source={props.image}
            aspectRatio={props.imageRatio}
            objectFit={props?.objectFit}
          />
        </Conditional>

        <Conditional condition={hasVideo}>
          <Video
            src={props?.videos[0]?.sources[0]?.uri}
            autoPlay={false}
            playsInline={true}
            poster={props?.image}
          />
        </Conditional>
      </Box>
    </Conditional>

    {/* // MARK : Content */}
    <Styled.Content contentLayout={contentLayout}>
      <ConditionalBox 
        condition={hasTitle}
        gridArea="title"
      >
        <Box as="h1">{props.title}</Box>
      </ConditionalBox>

      <ConditionalBox 
        condition={hasSubtitle}
        gridArea="subtitle"
      >
        <Box 
          as="h4" 
          color="neutrals.600" 
          textTransform="uppercase"
        >
          {props.subtitle}
        </Box>
      </ConditionalBox>

      <ConditionalBox 
        condition={hasHtmlContent}
        gridArea="htmlContent"
      >
        <HtmlRenderer htmlContent={props?.htmlContent} />
      </ConditionalBox>

      <ConditionalBox 
        condition={hasActions} my={hasTitle || hasSubtitle || hasHtmlContent ? "s" : 0}
        gridArea="actions"
        mx="-0.3125rem"
      >
        {actions.map((action, i) => (
          <CustomLink
            as="a"
            href={getUrlFromRelatedNode(action?.relatedNode)}
            Component={Button}
            variant={i === 0 ? 'primary' : 'secondary'}
            m="xs"
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
      </ConditionalBox>
    </Styled.Content>
  </Styled>;
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
  videos: [],
  actions: []
};

export default ContentBlock;
