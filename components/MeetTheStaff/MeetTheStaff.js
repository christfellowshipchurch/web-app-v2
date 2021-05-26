import PropTypes from 'prop-types';

import { Box, Text } from 'ui-kit';

import Styled, { StyledImage } from './MeetTheStaff.styles';

function MeetTheStaff({ name, description, src, ...props }) {
  return (
    <Styled>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        {...props}
      >
        <StyledImage rounded src={src} width="100%" />
        <Text fontWeight="700" variant="s">
          {name}
        </Text>
        <Text fontWeight="400" variant="s">
          {description}
        </Text>
      </Box>
    </Styled>
  );
}

MeetTheStaff.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
};

export default MeetTheStaff;
