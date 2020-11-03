import styled from 'styled-components';

import { system, propTypes } from './lib/system';

const Icon = styled.div`
  align-self: center;
  display: inline-flex;
  vertical-align: middle;

  ${system}
`;

Icon.propTypes = {
  ...propTypes,
};

export default Icon;
