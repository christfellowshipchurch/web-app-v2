import { Box, Text } from 'ui-kit';
import PropTypes from 'prop-types';
import Styled from './EventsCallout.styles';

function EventsCallout({ icon, title, ...props } = {}) {
  return (
    <Styled floater>
      <Box display="flex" alignItems="center" mb="m">
        {icon}
        <Text color="neutrals.900" opacity="60%" variant="h4" fontWeight="600">
          {title}
        </Text>
      </Box>
      {props.children}
    </Styled>
  );
}

EventsCallout.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
};

export default EventsCallout;
