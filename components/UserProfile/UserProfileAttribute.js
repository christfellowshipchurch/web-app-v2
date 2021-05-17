import React from 'react';
import PropTypes from 'prop-types';

import { Box, Card } from 'ui-kit';
import Styled from './UserProfile.styles';

function UserProfileAttribute(props = {}) {
  return (
    <Card boxShadow="base" p="base">
      <Box as="h2" color="subdued" fontSize="s" fontWeight="bold">
        {props.title}
      </Box>
      <Styled.AttributeValue>
        {`${props.data}${props.data}` || (
          <Box as="span" color="subdued" fontSize="s" fontStyle="italic">
            No {props.label} specified
          </Box>
        )}
      </Styled.AttributeValue>
    </Card>
  );
}

UserProfileAttribute.propTypes = {
  data: PropTypes.string,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default UserProfileAttribute;
