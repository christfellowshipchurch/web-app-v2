import { Box, Text } from 'ui-kit';
import PropTypes from 'prop-types';
import Styled from './EventsCallout.styles';
import { useTheme } from 'styled-components';

function EventsCallout({ icon, title, children, ...props } = {}) {
  const theme = useTheme();

  return (
    <Box
      height={{ _: 'auto', lg: theme.space.xl }}
      zIndex={1}
      position="relative"
      {...props}
    >
      <Styled
        floater
        width={{ _: 'auto', lg: theme.breakpoints.sm }}
        position={{ _: 'initial', lg: 'absolute' }}
      >
        <Box display="flex" alignItems="center" mb="m">
          {icon}
          <Text
            color="neutrals.900"
            opacity="60%"
            variant="h4"
            fontWeight="600"
          >
            {title}
          </Text>
        </Box>
        {children}
      </Styled>
    </Box>
  );
}

EventsCallout.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
};

export default EventsCallout;
