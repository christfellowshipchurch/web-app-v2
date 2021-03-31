import React from 'react';
import PropTypes from 'prop-types';

import { Box, RowCard } from 'ui-kit';

/**
 * todo : Component still needs to be completed, this is just a temporary solution to render data from AvatarListFeature
 */

function AvatarListFeature(props = {}) {
  const people = props?.data?.people;

  return people.map((profile, i) => (
    <Box key={i} maxWidth={400}>
      <RowCard
        coverImage={profile?.photo?.uri}
        title={`${profile?.firstName} ${profile?.lastName}`}
        description={profile?.campus?.name}
        marginBottom="l"
      />
    </Box>
  ));
}

AvatarListFeature.propTypes = {
  data: PropTypes.object,
};

export default AvatarListFeature;
