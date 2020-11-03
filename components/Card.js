import React from 'react';
import PropTypes from 'prop-types';

import { Box, Card as StyledCard } from '../styled';

function Card(props = {}) {
  const hasContent = props.title || props.description || props.children;

  return (
    <StyledCard {...props}>
      {props.coverImage ? (
        <StyledCard.Cover
          src={props.coverImage}
          hasContent={hasContent}
          overlay={props.coverImageOverlay}
        >
          <StyledCard.CoverContent position={props.coverImageContentPosition}>
            {props.coverImageTitle || props.coverImageDescription ? (
              <Box color="white">
                {props.coverImageTitle ? (
                  <Box as="h2" mb="xs">
                    {props.coverImageTitle}
                  </Box>
                ) : null}
                {props.coverImageDescription ? (
                  <Box as="p">{props.coverImageDescription}</Box>
                ) : null}
              </Box>
            ) : null}
            {props.coverImageContent ? props.coverImageContent() : null}
          </StyledCard.CoverContent>
          {props.coverImageLabel ? (
            <StyledCard.CoverLabel>
              {props.coverImageLabel}
            </StyledCard.CoverLabel>
          ) : null}
        </StyledCard.Cover>
      ) : null}
      <StyledCard.Content>
        {props.title ? <Box as="h3">{props.title}</Box> : null}
        {props.description ? (
          <Box as="p" color="neutrals.600" fontSize="s">
            {props.description}
          </Box>
        ) : null}
        {props.children ? props.children : null}
      </StyledCard.Content>
    </StyledCard>
  );
}

Card.propTypes = {
  coverImage: PropTypes.string,
  coverImageContent: PropTypes.func,
  coverImageContentPosition: PropTypes.oneOf(['bottomLeft']),
  coverImageDescription: PropTypes.string,
  coverImageLabel: PropTypes.string,
  coverImageOverlay: PropTypes.bool,
  coverImageTitle: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
};

Card.defaultProps = {
  coverImageContentPosition: 'bottomLeft',
  coverImageOverlay: false,
};

export default Card;
