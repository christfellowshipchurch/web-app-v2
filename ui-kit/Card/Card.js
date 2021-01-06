import { systemPropTypes } from 'ui-kit';
import Styled from './Card.styles';

function Card(props = {}) {
  return <Styled {...props} />;
}

Card.propTypes = {
  ...systemPropTypes,
};

export default Card;
