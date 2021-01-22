import PropTypes from 'prop-types';
import { Box, Heading } from 'ui-kit';

function Quote({ title, text, attribution, action, actionLabel, avatar } = {}) {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width="556px"
      >
        <Heading fontSize="48px" lineHeight="72px" fontWeight="700">
          “
        </Heading>
        <Heading
          color="neutrals.900"
          fontSize="h3"
          lineHeight="34px"
          fontWeight="700"
          textAlign="center"
          px="m"
        >
          {text}
        </Heading>
        <Heading
          fontSize="48px"
          lineHeight="72px"
          fontWeight="700"
          textAlign="right"
        >
          ”
        </Heading>
      </Box>
    </Box>
  );
}

Quote.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  attribution: PropTypes.string,
  action: PropTypes.func,
  actionLabel: PropTypes.string,
  avatar: PropTypes.string,
};

export default Quote;
