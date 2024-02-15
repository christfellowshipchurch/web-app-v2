import Box from 'ui-kit/Box';
import PropTypes from 'prop-types';

// This component is only for mobile view
const HorizontalScroll = (props = {}) => {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Box
        display="flex"
        flexDirection="row"
        overflow="auto"
        my="s"
        justifyContent="flex-start"
        {...props}
      >
        {props.children}
      </Box>
    </Box>
  );
};

HorizontalScroll.propTypes = {
  // The cards that will be displayed
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

HorizontalScroll.defaultProps = {};

export default HorizontalScroll;
