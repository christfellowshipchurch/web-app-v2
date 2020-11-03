import styled from 'styled-components';
import PropTypes from 'prop-types';
import { themeGet } from '@styled-system/theme-get';

import { system, propTypes } from './lib/system';

const List = styled.ul`
  list-style-type: none;

  > *:not(:last-child) {
    margin-bottom: ${props => themeGet(`space.${props.space}`)(props)};
  }

  ${system}
`;

List.propTypes = {
  ...propTypes,
  space: PropTypes.string,
};

List.defaultProps = {
  space: 's',
};

export default List;
