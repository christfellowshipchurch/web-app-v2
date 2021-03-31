import { Box, Text } from 'ui-kit';
import PropTypes from 'prop-types';
import Styled from './EventsCallout.styles';
import { useTheme } from 'styled-components';

function EventsCallout({ icon, title, ...props } = {}) {
  const theme = useTheme();

  return (
    <Box height={theme.space.xxl} zIndex={1} position="relative">
      <Styled floater width={theme.breakpoints.sm}>
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
        {props.children}
      </Styled>
    </Box>
  );
}

EventsCallout.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
};

export default EventsCallout;
