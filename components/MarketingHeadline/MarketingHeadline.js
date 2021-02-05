import { Photo } from 'components';
import PropTypes from 'prop-types';
import { Box, CardGrid, Heading, Text } from 'ui-kit';
import { splitString } from 'utils';
import { StyledButton } from './MarketingHeadline.styles';

function MarketingHeadline({
  image,
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
  if (image) {
    sideContent = <Photo {...image} />;
  }
  const buttons = actions?.length ? (
    <Box
      display="flex"
      mt="l"
      width="100%"
      justifyContent={justify === 'right' ? 'flex-end' : 'flex-start'}
    >
      {actions.map(({ variant, color, onClick, label }, i) => (
        <StyledButton
          key={i}
          color={color}
          variant={variant}
          onClick={onClick}
          mr={justify === 'left' && 's'}
          ml={justify === 'right' && 's'}
        >
          {label}
        </StyledButton>
      ))}
    </Box>
  ) : null;
  return (
    <CardGrid
      gridColumnGap="xl"
      columns={sideContent ? '2' : '1'}
      breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
      alignItems="center"
      justifyItems={justify || 'left'}
      {...props}
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
            {splitString(description)}
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
            {splitString(details)}
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
  image: PropTypes.shape({
    src: PropTypes.string,
    overlay: PropTypes.object,
    inner: PropTypes.node,
    hover: PropTypes.bool,
  }),
  title: PropTypes.node,
  description: PropTypes.string,
  details: PropTypes.string,
  justify: PropTypes.oneOf(['left', 'right']),
  buttonLabel: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonVariant: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      variant: PropTypes.string,
      color: PropTypes.string,
      label: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
  supertitle: PropTypes.string,
};

export default MarketingHeadline;
