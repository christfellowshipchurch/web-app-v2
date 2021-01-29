import PropTypes from 'prop-types';
import { Box } from 'ui-kit';

import Styled from './Search.styles.js';

function Search({ button, ...props } = {}) {
  const { label, ..._button } = button;
  return (
    <Box position="relative" {...props}>
      <Styled.Input />
      <Styled.Button {..._button}>{label}</Styled.Button>
    </Box>
  );
}

Search.defaultProps = {
  button: {
    color: 'primary',
    label: 'Search',
    size: 's',
  },
};

Search.propTypes = {
  button: PropTypes.shape({
    color: PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.string,
  }),
};

export default Search;
