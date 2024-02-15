import Box from 'ui-kit/Box';
import PropTypes from 'prop-types';

const HorizontalScroll = (props = {}) => {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Box
        display="flex"
        flexDirection="row"
        overflow="auto"
        my={{ _: 's', md: 'base' }}
        justifyContent={
          props?.cardsCount <= 3
            ? { _: 'flex-start', md: 'center' }
            : 'flex-start'
        }
        {...props}
      >
        {props.children}
      </Box>
    </Box>
  );
};

HorizontalScroll.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

HorizontalScroll.defaultProps = {};

export default HorizontalScroll;
