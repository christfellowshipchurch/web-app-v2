import { Header } from 'components';
import PropTypes from 'prop-types';
import { Box, Heading } from 'ui-kit';
import Styled, { Gradient } from './PageSplit.styles';

function PageSplit({ title, variant, ...props } = {}) {
  return (
    <Styled>
      <Box display="flex" flexDirection="column">
        <Heading
          color="neutrals.900"
          opacity="30%"
          variant={variant}
          fontWeight="700"
          textTransform="uppercase"
        >
          {title}
        </Heading>
        <Gradient width="100%" height="4px" />
      </Box>
    </Styled>
  );
}

PageSplit.defaultProps = {
  variant: 'h3',
};

PageSplit.propTypes = {
  title: PropTypes.string,
};

export default PageSplit;
