import React from 'react';
import PropTypes from 'prop-types';

import { Card as StyledCard } from '../styled';

function Card(props = {}) {
  return (
    <StyledCard {...props}>
      {props.coverImage ? (
        <StyledCard.Cover
          src={props.coverImage}
          hasContent={props.children}
          overlay={props.coverImageOverlay}
        >
          {props.coverImageContent ? (
            <StyledCard.CoverContent position={props.coverImageContentPosition}>
              {props.coverImageContent()}
            </StyledCard.CoverContent>
          ) : null}
        </StyledCard.Cover>
      ) : null}
      {props.children ? (
        <StyledCard.Content>{props.children}</StyledCard.Content>
      ) : null}
    </StyledCard>
  );
}

Card.propTypes = {
  coverImage: PropTypes.string,
  coverImageContent: PropTypes.func,
  coverImageContentPosition: PropTypes.oneOf(['bottomLeft']),
  coverImageOverlay: PropTypes.bool,
};

Card.defaultProps = {
  coverImageContentPosition: 'bottomLeft',
  coverImageOverlay: false,
};

export default Card;
