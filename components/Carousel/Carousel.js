import PropTypes from 'prop-types';
import { cloneElement, Fragment } from 'react';
import { useState } from 'react';

import { Box } from 'ui-kit';

import { StyledContent, StyledContainer, StyledText } from './Carousel.styles';

function Carousel({
  labels,
  color,
  children,
  childProps,
  showSides,
  showArrows,
  neighbors,
  contentWidth,
  contentHeight,
  onClick,
  ...props
}) {
  const [selectedItem, setSelectedItem] = useState(0);

  const _children = Array.isArray(children) ? children : [children];

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      style={{ overflowX: 'hidden' }}
      {...props}
    >
      {labels && (
        <Box display="flex" alignItems="center" flexWrap="nowrap" my="xl">
          {labels.map((label, i) => {
            const text = (
              <StyledText
                key={i}
                variant="s"
                backgroundColor={selectedItem === i ? color : 'transparent'}
                color={selectedItem === i ? 'white' : 'black'}
                onClick={() => {
                  setSelectedItem(i);
                  onClick?.(i);
                }}
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
      )}
      <StyledContent>
        {_children.map((child, i) => {
          return (
            <StyledContainer
              key={i}
              index={i}
              selected={selectedItem}
              numItems={_children.length}
              neighbors={neighbors}
              width={contentWidth}
              height={contentHeight}
              onClick={event => {
                if (selectedItem !== i) {
                  setSelectedItem(i);
                  onClick?.(i);
                }
              }}
            >
              <Box display="flex" justifyContent="center" height="100%">
                {child ? cloneElement(child, childProps(i)) : null}
              </Box>
            </StyledContainer>
          );
        })}
      </StyledContent>
    </Box>
  );
}

Carousel.defaultProps = {
  color: 'primary',
  neighbors: 'hidden',
};

Carousel.propTypes = {
  showArrows: PropTypes.bool,
  showSides: PropTypes.bool,
  labels: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string,
  neighbors: PropTypes.oneOf(['3d', 'hidden', 'flat']),
  contentHeight: PropTypes.string,
  contentWidth: PropTypes.string,
  onClick: PropTypes.func,
};

export default Carousel;
