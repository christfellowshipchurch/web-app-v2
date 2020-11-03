import styled from 'styled-components';

import { system, propTypes } from './lib/system';

const Box = styled.div`
  ${system}
`;

Box.propTypes = {
  ...propTypes,
};

export default Box;
