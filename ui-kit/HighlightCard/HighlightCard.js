import React from 'react';
import PropTypes from 'prop-types';

import { systemPropTypes } from '..';
import { Box } from '..';
import Card from './HighLightCard.styles';

const HighlightCard = (props = {}) => {
  const hasContent = props.title || props.description || props.children;

  return (
    <Card {...props}>
    {props.coverImage ? (
      <Card.Cover
        src={props.coverImage}
        hasContent={hasContent}
        overlay={props.coverImageOverlay}
        display={{xs: 'flex'}}
      >
        <Card.CoverContent position={props.coverImageContentPosition}>
          {props.title || props.description ? (
            <Box color="white">
              {props.label ? (
                <Card.Label>{props.label}</Card.Label>
              ) : null}
              {props.title ? (
                <Box as="h2" mb="xs" mt="s">
                  {props.title}
                </Box>
              ) : null}
              {props.description ? (
                <Box as="p">{props.description}</Box>
              ) : null}
            </Box>
          ) : null}
          {props.coverImageContent ? props.coverImageContent() : null}
        </Card.CoverContent>
      </Card.Cover>
    ) : null}
  </Card>
  );
};

HighlightCard.propTypes = {
  ...systemPropTypes,
  contentProps: PropTypes.object,
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

HighlightCard.defaultProps = {
  coverImageContentPosition: 'bottomLeft',
  coverImageOverlay: false,
};

export default HighlightCard;
