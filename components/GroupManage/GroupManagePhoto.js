import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Box } from 'ui-kit';
import { CustomLink } from 'components';

function GroupManagePhoto(props = {}) {
  // IDLE, EDITING, SAVING
  const [status, setStatus] = useState('IDLE');

  function handleUpdateClick(event) {
    event.preventDefault();
    setStatus(status === 'IDLE' ? 'SAVING' : 'IDLE');
  }

  function handleUpdateImageClick(event) {
    event.preventDefault();
    setStatus('SAVING');
    console.log('Update Image!');
  }

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
      {status === 'IDLE' ? (
        <Box as="a" href="#0" onClick={handleUpdateClick}>
          <Box
            as="img"
            src={props.data?.coverImage?.sources[0]?.uri}
            alt={`${props?.data?.title} Photo`}
            borderRadius="base"
            boxShadow="base"
            width="100%"
          />
        </Box>
      ) : (
        <Box>
          <Box
            as="h3"
            color="subdued"
            fontSize="base"
            fontWeight="normal"
            mb="s"
          >
            Select an image
          </Box>
          <Box
            display="grid"
            gridTemplateColumns="repeat(2, 50%)"
            gridColumnGap="base"
            gridRowGap="base"
          >
            <Box as="a" href="#0" onClick={handleUpdateImageClick}>
              Select Image
            </Box>
            <Box as="a" href="#0" onClick={handleUpdateImageClick}>
              Select Image
            </Box>
            <Box as="a" href="#0" onClick={handleUpdateImageClick}>
              Select Image
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

GroupManagePhoto.propTypes = {
  data: PropTypes.object,
};

export default GroupManagePhoto;
