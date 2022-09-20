import React from 'react';
import PropTypes from 'prop-types';

import { systemPropTypes } from 'ui-kit';
import { Box } from 'ui-kit';
import Styled from 'ui-kit/Card/Card.styles';

const DefaultCard = (props = {}) => {
  const hasContent = props.title || props.description || props.children;

  return (
    <Styled {...props}>
      {props.coverImage ? (
        <Styled.Cover
          src={props.coverImage}
          hasContent={hasContent}
          overlay={props.coverImageOverlay}
          largeCard={props.largeCard}
          scaleCoverImage={props.scaleCoverImage}
        >
          {props.coverImageTitle ||
          props.coverImageDescription ||
          props.coverImageContent ? (
            <Styled.CoverContent
              position={props.coverImageContentPosition}
              size={props.cardSize}
            >
              {props.coverImageTitle || props.coverImageDescription ? (
                <Box color="white">
                  {props.coverImageTitle ? (
                    <Box as={props.cardSize === 's' ? 'h3' : 'h2'} mb="xs">
                      {props.coverImageTitle}
                    </Box>
                  ) : null}
                  {props.coverImageDescription ? (
                    <Styled.Description>
                      {props.coverImageDescription}
                    </Styled.Description>
                  ) : null}
                </Box>
              ) : null}
              {props.coverImageContent ? props.coverImageContent() : null}
            </Styled.CoverContent>
          ) : null}
          {props.coverImageLabel ? (
            <Styled.CoverLabel
              coverImageLabelBgColor={props.coverImageLabelBgColor}
            >
              {props.coverImageLabel}
            </Styled.CoverLabel>
          ) : null}
        </Styled.Cover>
      ) : null}
      <Styled.Content {...props.contentProps}>
        {props.title ? (
          <Box as="h3" mb={{ _: 'xs', md: 's' }}>
            {props.title}
          </Box>
        ) : null}
        {props.description ? (
          <Styled.Description color="neutrals.600" fontSize="s">
            {props.description}
          </Styled.Description>
        ) : null}
        {props.children ? props.children : null}
      </Styled.Content>
    </Styled>
  );
};

DefaultCard.propTypes = {
  ...systemPropTypes,
  contentProps: PropTypes.object,
  coverImage: PropTypes.string,
  coverImageContent: PropTypes.func,
  coverImageContentPosition: PropTypes.oneOf(['bottomLeft', 'center']),
  coverImageDescription: PropTypes.string,
  coverImageLabel: PropTypes.string,
  coverImageLabelBgColor: PropTypes.string,
  coverImageOverlay: PropTypes.bool,
  coverImageTitle: PropTypes.string,
  description: PropTypes.string,
  largeCard: PropTypes.bool,
  title: PropTypes.string,
};

DefaultCard.defaultProps = {
  coverImageContentPosition: 'bottomLeft',
  coverImageOverlay: false,
  largeCard: false,
};

export default DefaultCard;
