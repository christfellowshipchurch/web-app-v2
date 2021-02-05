import PropTypes from 'prop-types';
import { Box, Heading, Text } from 'ui-kit';
import { parseNewlines } from 'utils';

function FullWidthText({
  imageSrc,
  quote,
  title,
  description,
  details,
  justify,
  actions,
  supertitle,
  ...props
} = {}) {
  let alignment;
  switch (justify) {
    case 'center':
      alignment = 'center';
      break;
    case 'right':
      alignment = 'flex-end';
      break;
    case 'left':
    default:
      alignment = 'flex-start';
      break;
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems={alignment}
      textAlign={justify}
      {...props}
    >
      {supertitle && (
        <Heading
          fontSize="18px"
          lineHeight="16.2px"
          color="neutrals.900"
          opacity="30%"
          textTransform="uppercase"
          mb="s"
        >
          {supertitle}
        </Heading>
      )}
      {title && (
        <Box display="flex" mb="xs" alignItems="baseline">
          {title}
        </Box>
      )}
      {description && (
        <Text
          variant="s"
          color="neutrals.900"
          opacity="60%"
          width="100%"
          whiteSpace="pre"
        >
          {parseNewlines(description)}
        </Text>
      )}
    </Box>
  );
}

FullWidthText.defaultProps = {
  justify: 'left',
};

FullWidthText.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  justify: PropTypes.oneOf(['left', 'center', 'right']),
};

export default FullWidthText;
