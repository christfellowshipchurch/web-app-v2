import React from 'react';
import PropTypes from 'prop-types';

import { systemPropTypes } from 'ui-kit';
import { Box } from 'ui-kit';
import Styled from 'ui-kit/Card/Card.styles';

const DefaultCard = (props = {}) => {
  const hasContent = props.title || props.description || props.children;

  return (
    <>
      {!props?.loading ? (
        <Styled {...props}>
          {props.coverImage ? (
            <Styled.Cover
              src={props.coverImage}
              hasContent={hasContent}
              overlay={
                props.coverImageTitle || props.coverImageDescription
                  ? props.coverImageOverlay
                  : null
              }
              largeCard={props.largeCard}
              scaleCoverImage={props.scaleCoverImage}
            >
              {props.coverImageTitle ||
              props.coverImageDescription ||
              props.coverImageContent ? (
                <Styled.CoverContent
                  position={props.coverImageContentPosition}
                  size={props.cardSize}
                  textAlign={props.textAlign}
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
          {(props?.title || props?.description) && (
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
          )}
        </Styled>
      ) : (
        // When loading - skeleton for the cards - implemented for the locations search page
        <Styled.Loading {...props}>
          <Styled.CoverLoading>
            {props.coverImageLabel && <Styled.CoverLabelLoading />}
          </Styled.CoverLoading>
        </Styled.Loading>
      )}
    </>
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
  loading: PropTypes.bool,
};

DefaultCard.defaultProps = {
  coverImageContentPosition: 'bottomLeft',
  coverImageOverlay: false,
  largeCard: false,
  loading: false,
};

export default DefaultCard;
