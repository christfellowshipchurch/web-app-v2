import { Quote } from 'components';
import PropTypes from 'prop-types';
import { Box, Button, CardGrid, Heading, Text } from 'ui-kit';
import { parseNewlines } from 'utils';
import { StyledImage, StyledQuote } from './MarketingHeadline.styles';

function MarketingHeadline({
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
  let sideContent;
  if (imageSrc) {
    sideContent = <StyledImage src={imageSrc} rounded justify={justify} />;
  } else if (quote) {
    // TODO - add quote component
    sideContent = (
      <StyledQuote>
        <Quote />
      </StyledQuote>
    );
  }
  const buttons = actions?.length ? (
    <Box display="flex" mt="l">
      {actions.map(({ variant, color, onClick, label }, i) => (
        <Button variant={variant} color={color} onClick={onClick}>
          {label}
        </Button>
      ))}
    </Box>
  ) : null;
  return (
    <CardGrid
      my="xl"
      gridColumnGap="xl"
      columns={sideContent ? '2' : '1'}
      minColumns="1"
      breakpoint="lg"
      alignItems="center"
    >
      {justify === 'left' && sideContent}
      <Box
        display="flex"
        flexDirection="column"
        alignItems={justify === 'left' ? 'flex-start' : 'flex-end'}
        textAlign={justify}
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
            width={sideContent ? '85%' : '66%'}
            whiteSpace="pre"
          >
            {parseNewlines(description)}
          </Text>
        )}
        {details && (
          <Text
            variant="xs"
            color="neutrals.900"
            opacity="30%"
            width="66%"
            mt="m"
          >
            {parseNewlines(details)}
          </Text>
        )}
        {buttons}
      </Box>
      {justify === 'right' && sideContent}
    </CardGrid>
  );
}

MarketingHeadline.defaultProps = {
  justify: 'left',
  actions: [],
};

MarketingHeadline.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.node,
  description: PropTypes.string,
  details: PropTypes.string,
  justify: PropTypes.oneOf(['left', 'right']),
  buttonLabel: PropTypes.string,
  onClick: PropTypes.func,
  buttonColor: PropTypes.string,
  buttonVariant: PropTypes.string,
  actions: PropTypes.shape({
    variant: PropTypes.string,
    color: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
  }),
  quote: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    attribution: PropTypes.string,
    action: PropTypes.func,
    actionLabel: PropTypes.string,
    avatar: PropTypes.string,
  }),
  supertitle: PropTypes.string,
};

export default MarketingHeadline;
