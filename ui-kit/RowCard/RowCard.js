import React from 'react';
import PropTypes from 'prop-types';

import { Divider, systemPropTypes } from 'ui-kit';
import { Box } from 'ui-kit';
import Styled from './RowCard.styles';

const RowCard = (props = {}) => {
  return (
    <Styled display="flex" minHeight={100} {...props}>
      <Box>
        {props.coverImage ? <Styled.RowCover src={props.coverImage} /> : null}
      </Box>
      <Styled.Content
        display="flex"
        flexDirection="column"
        justifyContent="center"
        {...props.contentProps}
      >
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
        <Divider />
      </Styled.Content>
        {props.label ? (
          <Styled.CoverLabel onHover={true}>
            {props.label}
          </Styled.CoverLabel>
        ) : null}
    </Styled>
  );
};

RowCard.propTypes = {
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

RowCard.defaultProps = {
  coverImageContentPosition: 'bottomLeft',
  coverImageOverlay: false,
};

export default RowCard;
