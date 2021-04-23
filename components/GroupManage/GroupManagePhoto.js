import React from 'react';
import PropTypes from 'prop-types';

import { useUpdateGroupCoverImage } from 'hooks';
import { Box, DefaultCard, Loader } from 'ui-kit';
import { CustomLink } from 'components';
import { useGroupManage, update } from 'providers/GroupManageProvider';

function GroupManagePhoto(props = {}) {
  const [{ photoStatus: status }, dispatch] = useGroupManage();
  const setStatus = s => dispatch(update({ photoStatus: s }));

  const [
    updateGroupCoverImage,
    { loading: updating },
  ] = useUpdateGroupCoverImage({
    // TODO: Update the cache instead. But this works for now.
    refetchQueries: ['getGroup'],
    onCompleted: () => setStatus('IDLE'),
  });

  function handleUpdateClick(event) {
    event.preventDefault();
    setStatus(status === 'IDLE' ? 'EDITING' : 'IDLE');
  }

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

  function render() {
    if (status === 'IDLE') {
      return (
        <Box as="a" href="#0" onClick={handleUpdateClick}>
          <Box
            as="img"
            src={props.groupData?.coverImage?.sources[0]?.uri}
            alt={`${props.groupData?.title} Photo`}
            borderRadius="base"
            boxShadow="base"
            width="100%"
          />
        </Box>
      );
    }

    if (status === 'EDITING') {
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
            display="grid"
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

    return null;
  }

  if (props.loading || updating) return <Loader />;

  const currentImage = props.groupData?.coverImage?.sources[0]?.uri;

  return (
    <>
      <Box alignItems="center" display="flex" mb="base">
        <Box as="h2" flexGrow="1" mb="0">
          Photo
        </Box>
        <CustomLink href="#0" onClick={handleUpdateClick}>
          {status === 'IDLE' ? 'Update' : 'Cancel'}
        </CustomLink>
      </Box>
      {render()}
    </>
  );
}

GroupManagePhoto.propTypes = {
  data: PropTypes.array,
  groupData: PropTypes.object,
};

export default GroupManagePhoto;
