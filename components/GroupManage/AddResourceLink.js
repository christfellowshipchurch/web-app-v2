import React from 'react';

import { useGroupManage, update } from 'providers/GroupManageProvider';
import { useForm, useUpdateGroupResourceUrl } from 'hooks';
import { Box, Button, TextInput } from 'ui-kit';

function AddResourceLink(props = {}) {
  const [
    { resourceStatus: status, groupData, message },
    dispatch,
  ] = useGroupManage();
  const setStatus = s => dispatch(update({ resourceStatus: s }));
  const [updateResourceUrl] = useUpdateGroupResourceUrl();

  const {
    values: linkValues,
    handleChange: handleLinkChange,
    handleSubmit: handleLinkSubmit,
  } = useForm(async () => {
    const { url, title } = linkValues;

    setStatus('SAVING_LINK');

    try {
      await updateResourceUrl({
        variables: {
          url,
          title,
          groupId: groupData.id,
        },
        refetchQueries: ['getGroup'],
      });
      setStatus('IDLE');
    } catch (error) {
      dispatch(
        update({
          message: 'Uh oh! Something went wrong.',
          resourceStatus: 'ADD_LINK',
        })
      );
    }
  });

  function handleBackClick(event) {
    event.preventDefault();
    setStatus('IDLE');
  }

  return (
    <Box as="form" onSubmit={handleLinkSubmit}>
      {message && (
        <Box as="p" color="alert" fontSize="s" mb="base">
          {message}
        </Box>
      )}
      <Box mb="base">
        <TextInput
          label="Title"
          id="title"
          required
          onChange={handleLinkChange}
        />
      </Box>
      <Box mb="base">
        <TextInput label="URL" id="url" required onChange={handleLinkChange} />
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

export default AddResourceLink;
