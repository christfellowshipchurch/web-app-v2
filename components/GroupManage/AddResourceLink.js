import React from 'react';
import PropTypes from 'prop-types';

import { useGroupManage, update } from 'providers/GroupManageProvider';
import { useForm, useUpdateResourceUrl } from 'hooks';
import { Box, Button, TextInput } from 'ui-kit';

function AddResourceLink(props = {}) {
  const [{ resourceStatus: status }, dispatch] = useGroupManage();
  const setStatus = s => dispatch(update({ resourceStatus: s }));
  const [updateResourceUrl] = useUpdateResourceUrl();
  const {
    values: linkValues,
    handleChange: handleLinkChange,
    handleSubmit: handleLinkSubmit,
  } = useForm(async () => {
    const { url, title } = linkValues;

    setStatus('SAVING_LINK');

    await updateResourceUrl({
      variables: {
        url,
        title,
        groupId: props.groupId,
      },
      refetchQueries: ['getGroup'],
    });

    setStatus('IDLE');
  });
  function handleBackClick(event) {
    event.preventDefault();
    setStatus('ADD');
  }

  return (
    <Box as="form" onSubmit={handleLinkSubmit}>
      <Box mb="base">
        <TextInput label="Title" id="title" onChange={handleLinkChange} />
      </Box>
      <Box mb="base">
        <TextInput label="URL" id="url" onChange={handleLinkChange} />
      </Box>
      <Box alignItems="center" display="flex">
        <Button
          type="submit"
          status={status === 'SAVING_LINK' ? 'LOADING' : null}
        >
          Add Link
        </Button>
        <Box as="a" href="#0" onClick={handleBackClick} ml="base">
          Back
        </Box>
      </Box>
    </Box>
  );
}

AddResourceLink.propTypes = {
  groupId: PropTypes.string,
};

export default AddResourceLink;
