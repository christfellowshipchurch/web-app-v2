import React from 'react';
import PropTypes from 'prop-types';

import { GroupCoverImagesProvider } from 'providers';
import { useGroupManage, update } from 'providers/GroupManageProvider';
import { Box, Loader } from 'ui-kit';
import { CustomLink } from 'components';
import CoverImagesList from './CoverImagesList';

function GroupManagePhoto(props = {}) {
  const [{ photoStatus: status }, dispatch] = useGroupManage();
  const setStatus = s => dispatch(update({ photoStatus: s }));

  function handleUpdateClick(event) {
    event.preventDefault();
    setStatus(status === 'IDLE' ? 'EDITING' : 'IDLE');
  }

  function render() {
    if (status === 'IDLE') {
      return (
        <Box as="a" href="#0" onClick={handleUpdateClick}>
          <Box
            as="img"
            src={props.data?.coverImage?.sources[0]?.uri}
            alt={`${props.data?.title} Photo`}
            borderRadius="base"
            boxShadow="base"
            width="100%"
          />
        </Box>
      );
    }

    if (status === 'EDITING') {
      return (
        <GroupCoverImagesProvider
          Component={CoverImagesList}
          groupData={props.data}
        />
      );
    }

    return null;
  }

  if (props.loading) return <Loader />;

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
  data: PropTypes.object,
};

export default GroupManagePhoto;
