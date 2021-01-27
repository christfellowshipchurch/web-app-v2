import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { useState } from 'react';

import { Box } from 'ui-kit';

import { StyledContainer, StyledText } from './Carousel.styles';

function Carousel({
  labels,
  color,
  children,
  showSides,
  showArrows,
  ...props
}) {
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      overflowX="hidden"
      {...props}
    >
      <Box display="flex" alignItems="center" flexWrap="nowrap" my="xl">
        {labels.map((label, i) => {
          const text = (
            <StyledText
              key={i}
              variant="s"
              backgroundColor={selectedItem === i ? color : 'transparent'}
              color={selectedItem === i ? 'white' : 'black'}
              onClick={() => setSelectedItem(i)}
            >
              {label}
            </StyledText>
          );
          if (i === 0) {
            return text;
          }

          return (
            <Fragment key={i}>
              <Box width="40px" />
              {text}
            </Fragment>
          );
        })}
      </Box>
      <Box
        overflowX="hidden"
        position="relative"
        width="100%"
        style={{ transform: 'height 600ms linear' }}
      >
        {children.map((child, i) => {
          return (
            <StyledContainer key={i} index={i} selected={selectedItem}>
              <Box display="flex" justifyContent="center">
                {child}
              </Box>
            </StyledContainer>
          );
        })}
        {/* Used to determine height of carousel */}
        <Box display="flex" style={{ visibility: 'hidden' }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

Carousel.defaultProps = {
  color: 'primary',
};

Carousel.propTypes = {
  showArrows: PropTypes.bool,
  showSides: PropTypes.bool,
  labels: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string,
};

export default Carousel;
