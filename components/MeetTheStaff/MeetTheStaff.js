import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { Box, Text } from 'ui-kit';
import { getIdSuffix } from 'utils';

import Styled, { StyledImage } from './MeetTheStaff.styles';

function MeetTheStaff({ id, name, description, src, ...props }) {
  const router = useRouter();
  return (
    <Styled>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        {...props}
      >
        <StyledImage
          rounded
          src={src}
          onClick={() => router.push(`/staff/${getIdSuffix(id)}`)}
        />
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
