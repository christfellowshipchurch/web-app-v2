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
              hasContent={hasContent || props?.hasContent}
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
          {props?.coverImageLabel ? (
            <Styled.CoverLoading>
              <Styled.CoverLabelLoading />
            </Styled.CoverLoading>
          ) : null}
        </Styled.Loading>
      )}
    </>
  );
};

DefaultCard.propTypes = {
  ...systemPropTypes,
  contentProps: PropTypes.object,
  /**
   * Image for the Card
   */
  coverImage: PropTypes.string,
  /**
   * Function that returns the content for the image? - not used
   */
  coverImageContent: PropTypes.func,
  /**
   * Position of the content over the image - not really used
   */
  coverImageContentPosition: PropTypes.oneOf(['bottomLeft', 'center']),
  coverImageDescription: PropTypes.string,
  coverImageLabel: PropTypes.string,
  /**
   * Background color for the label on the corner of the image
   */
  coverImageLabelBgColor: PropTypes.string,
  /**
   * If true the image will have an overlay that darkens it, but only if there is content ON the image (coverImageTitle || coverImageDescription)
   */
  coverImageOverlay: PropTypes.bool,
  /**
   * Title for the image that covers the entire card
   */
  coverImageTitle: PropTypes.string,
  /**
   * If true the card with have more height
   */
  largeCard: PropTypes.bool,
  /**
   * The tile under the image - not title when image covers entire card (/discover cards)
   */
  title: PropTypes.string,
  /**
   * Description for the image under the title
   */
  description: PropTypes.string,
  loading: PropTypes.bool,
};

DefaultCard.defaultProps = {
  coverImageContentPosition: 'bottomLeft',
  coverImageOverlay: false,
  largeCard: false,
  loading: false,
};

export default DefaultCard;
