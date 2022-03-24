import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import { Box, Text } from 'ui-kit';
import Styled from './EventsCallout.styles';

function EventsCallout({ icon, title, children, ...props } = {}) {
  const theme = useTheme();

  return (
    <Box
      zIndex={1}
      display="flex"
      justifyContent="right"
      position="relative"
      mb={{ _: 0, lg: 'm' }}
      {...props}
    >
      <Styled width={{ _: '100%', lg: theme.breakpoints.sm }}>
        <Box display="flex" alignItems="center" mb="m">
          {icon}
          <Text color="neutrals.900" opacity="60%" fontWeight="600">
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
