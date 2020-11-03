import styled from 'styled-components';

import { rem } from '../utils';
import { system, propTypes } from './lib/system';

const DEFAULT_MAX_WIDTH = rem('1100px');

const Cell = styled.div`
  margin-left: auto;
  margin-right: auto;

  ${system}
`;

Cell.propTypes = {
  ...propTypes,
};

Cell.defaultProps = {
  maxWidth: DEFAULT_MAX_WIDTH,
};

export default Cell;
