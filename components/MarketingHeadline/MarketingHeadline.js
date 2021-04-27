import { Photo } from 'components';
import PropTypes from 'prop-types';
import { Box, Heading, Text } from 'ui-kit';
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
    sideContent = (
      <Photo
        justifySelf={justify === 'left' ? 'flex-end' : 'flex-start'}
        flex="1 0 50%"
        px={{ _: 0, lg: 's' }}
        pb={{ _: 's', lg: 0 }}
        width="100%"
        {...image}
      />
    );
  }
  const buttons = actions?.length ? (
    <Box
      display="flex"
      width="100%"
      justifyContent={{ _: 'center', lg: justify === 'right' ? 'flex-end' : 'flex-start'}}
      flexWrap="wrap"
      mt="s"
    >
      {actions.map(({ variant, color, onClick, label = 'Go' }, i) => (
        <StyledButton
          key={i}
          color={color}
          variant={variant}
          onClick={onClick}
          mr={{ _: 's', lg: justify === 'left' && 's'}}
          ml={{ _: 's', lg: justify === 'right' && 's'}}
          mt={{ _: 's', 'lg': 0 }}
        >
          {label}
        </StyledButton>
      ))}
    </Box>
  ) : null;
  return (
    <Box
      display="flex"
      breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
      alignItems="center"
      justifyItems={justify || 'left'}
      flexDirection={
        justify === 'left'
          ? { _: 'column', lg: 'row' }
          : { _: 'column-reverse', lg: 'row' }
      }
      {...props}
    >
      {justify === 'left' && sideContent}
      <Box
        display="flex"
        flexDirection="column"
        alignItems={{ _: 'center', lg: justify === 'right' ? 'flex-end' : 'flex-start' }}
        textAlign={justify}
        flex="1 0 50%"
        px={{ _: 0, lg: 's' }}
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
        {title &&
          (typeof title === 'string' ? (
            <Heading color="neutrals.900" variant="h2" fontWeight="800">
              {title}
            </Heading>
          ) : (
            <Box display="flex" mb="xs" alignItems="baseline">
              {title}
            </Box>
          ))}
        {description && (
          <Text
            variant="s"
            color="neutrals.900"
            opacity="60%"
            width={sideContent ? '85%' : '66%'}
            whiteSpace="pre"
            mt="xs"
            textAlign={{ _: 'center', lg: 'left' }}
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
            mt="xs"
          >
            {splitString(details)}
          </Text>
        )}
        {buttons}
      </Box>
      {justify === 'right' && sideContent}
    </Box>
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
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
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
