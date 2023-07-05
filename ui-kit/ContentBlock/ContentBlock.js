import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import kebabCase from 'lodash/kebabCase';

import {
  Box,
  Button,
  Icon,
  Image,
  HtmlRenderer,
  systemPropTypes,
} from 'ui-kit';
import { getUrlFromRelatedNode } from 'utils';
import { CustomLink, Video } from 'components';

import Styled from './ContentBlock.styles';
import toLower from 'lodash/toLower';
function Conditional({ condition, children }) {
  return Boolean(condition) ? children : null;
}

Conditional.propTypes = {
  condition: PropTypes.bool,
};

function ConditionalBox({ condition, children, ...props }) {
  return Boolean(condition) ? <Box {...props}>{children}</Box> : null;
}

function ContentBlock(props = {}) {
  const id = props?.id;
  const contentLayout = toLower(props?.contentLayout ?? 'default');
  const horizontalLayout =
    contentLayout === 'left' || contentLayout === 'right';
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

  const idRegex = /\D/g;
  const containerId = hasTitle ? kebabCase(title) : id?.replace(idRegex, '');

  return (
    <Styled id={containerId} contentLayout={contentLayout}>
      {/* // MARK : Media */}
      <Conditional condition={hasMedia}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="base"
          maxWidth={horizontalLayout ? '500px' : '800px'}
        >
          <Conditional condition={hasImage && !hasVideo}>
            <Image
              altText={title || 'Christ Fellowship Church'}
              mask={props?.imageMask}
              source={props.image}
              aspectRatio={props.imageRatio}
              objectFit={props?.objectFit}
            />
          </Conditional>

          <Conditional condition={hasVideo}>
            <Video
              // for some reason width and height are not responding correctly in this component so we must set them manually here
              height="auto"
              width={
                horizontalLayout
                  ? { _: 350, md: 400, lg: 520 }
                  : { _: 350, md: 600, lg: 800 }
              }
              src={props?.videos[0]?.sources[0]?.uri}
              autoPlay={false}
              playsInline={true}
              poster={props?.image}
              // all videos will defatult to 16:9 aspect ratio keeping sizing consistent
              aspectRatio="16/9"
            />
          </Conditional>
        </Box>
      </Conditional>

      {/* // MARK : Content */}
      <Box
        flex={4}
        flexDirection="column"
        display="flex"
        gridRowGap="0.15rem"
        textAlign={horizontalLayout ? 'left' : 'center'}
        pt={hasMedia && horizontalLayout ? 'base' : '0'}
      >
        <ConditionalBox condition={hasTitle} order={horizontalLayout ? 1 : 0}>
          <Box as="h1" color={props?.titleColor}>
            {props.title}
            <CustomLink
              as="a"
              ml="xs"
              href={`#${containerId}`}
              opacity="0.5"
              color="primary"
              Component={Icon}
              name="link"
              size="16"
            />
          </Box>
        </ConditionalBox>

        <ConditionalBox
          condition={hasSubtitle}
          order={horizontalLayout ? 0 : 1}
        >
          <Box as="h4" color="neutrals.600" textTransform="uppercase">
            {props.subtitle}
          </Box>
        </ConditionalBox>

        <ConditionalBox condition={hasHtmlContent} order={2}>
          <HtmlRenderer htmlContent={props?.htmlContent} />
        </ConditionalBox>

        <ConditionalBox
          condition={hasActions}
          my={hasTitle || hasSubtitle || hasHtmlContent ? 's' : 0}
          order={3}
          mx="-0.3125rem"
        >
          {actions.map((action, i) => (
            <CustomLink
              key={i}
              as="a"
              href={getUrlFromRelatedNode(action?.relatedNode)}
              Component={Button}
              variant={i === 0 ? 'primary' : 'secondary'}
              m="xs"
              textTransform="capitalize!important"
              target={action?.newTab && '_blank'}
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
      </Box>
    </Styled>
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
  videos: [],
  actions: [],
};

export default ContentBlock;
