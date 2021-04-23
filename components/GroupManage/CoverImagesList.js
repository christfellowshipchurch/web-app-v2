import React from 'react';
import PropTypes from 'prop-types';

import { useUpdateGroupCoverImage } from 'hooks';
import { update, useGroupManageDispatch } from 'providers/GroupManageProvider';
import { Box, DefaultCard } from 'ui-kit';

function CoverImagesList(props = {}) {
  const dispatch = useGroupManageDispatch();
  const setStatus = s => dispatch(update({ photoStatus: s }));

  const [updateGroupCoverImage] = useUpdateGroupCoverImage({
    refetchQueries: ['getGroup'],
    onCompleted: () => setStatus('IDLE'),
  });

  const handleUpdateImageClick = guid => event => {
    event.preventDefault();
    setStatus('SAVING');
    try {
      updateGroupCoverImage({
        variables: {
          imageId: guid,
          groupId: props.groupData.id,
        },
      });
    } catch (error) {
      console.log(error);
      setStatus('ERROR');
    }
  };

  const currentImage = props.groupData?.coverImage?.sources[0]?.uri;

  return (
    <Box>
      <Box
        as="h3"
        color="subdued"
        fontSize="base"
        fontWeight="normal"
        mb="base"
      >
        Select an image
      </Box>
      <Box
        display={{ lg: 'grid' }}
        gridTemplateColumns="repeat(2, 50%)"
        gridColumnGap="base"
        gridRowGap="base"
      >
        {props.data.map(coverImage => (
          <Box
            key={coverImage.guid}
            as="a"
            href="#0"
            onClick={handleUpdateImageClick(coverImage.guid)}
            display="block"
            mb={{ _: 'base', lg: '0' }}
          >
            <DefaultCard
              coverImage={coverImage.image.sources[0].uri}
              coverImageLabel={
                currentImage === coverImage.image.sources[0].uri
                  ? 'Current Image'
                  : null
              }
              height="200px"
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

CoverImagesList.propTypes = {
  data: PropTypes.array,
};

export default CoverImagesList;
