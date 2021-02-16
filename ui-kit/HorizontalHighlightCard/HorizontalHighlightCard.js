import React from 'react';
import PropTypes from 'prop-types';

import { systemPropTypes } from 'ui-kit';
import Styled from 'ui-kit/DefaultCard';

const HorizontalHighlightCard = (props = {}) => {
  let height = 0;

  // specifies card height based on type
  if (!!props.type) {
    switch (props.type) {
      case 'HIGHLIGHT_SMALL':
        height = 250;
        break;
      case 'HIGHLIGHT_MEDIUM':
        height = 450;
        break;
      default:
        height = 450;
        break;
    }
  }

  return (
    <Styled
      {...props}
      // Overriding the default props from DefaultCard
      // so that the component only uses the coverImage props
      coverImageDescription={
        props.coverImageDescription
          ? props.coverImageDescription
          : props.description
      }
      coverImageTitle={
        props.coverImageTitle ? props.coverImageTitle : props.title
      }
      description={null}
      height={{ _: '250px', md: height }}
      title={null}
      display="block"
      cardSize={'s'}
    />
  );
};

HorizontalHighlightCard.propTypes = {
  ...systemPropTypes,
  type: PropTypes.string,
};

HorizontalHighlightCard.defaultProps = {
  type: 'default',
};

export default HorizontalHighlightCard;
