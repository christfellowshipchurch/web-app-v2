import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useForm, useUpdateResourceUrl } from 'hooks';
import { Box, Button, List, TextInput } from 'ui-kit';
import { CustomLink } from 'components';

function GroupManageResources(props = {}) {
  // IDLE, ADD, ADD_LINK, ADD_CONTENT, SAVING_LINK, SAVING_CONTENT
  const [status, setStatus] = useState('IDLE');
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
        groupId: props.data.id,
      },
      refetchQueries: ['getGroup'],
    });

    setStatus('IDLE');
  });

  function handleAddClick(event) {
    event.preventDefault();
    setStatus(status === 'IDLE' ? 'ADD' : 'IDLE');
  }

  function handleAddLinkClick(event) {
    event.preventDefault();
    setStatus('ADD_LINK');
  }

  function handleAddContentClick(event) {
    event.preventDefault();
    setStatus('ADD_CONTENT');
  }

  function handleBackClick(event) {
    event.preventDefault();
    setStatus('ADD');
  }

  function render() {
    if (status === 'IDLE') {
      return (
        <List>
          {props?.data?.resources.map((resource, idx) => (
            <Box as="li" key={idx}>
              <Box as="b" fontWeight="bold">
                {resource?.title}
              </Box>
              {resource?.relatedNode.url ? (
                <Box
                  as="span"
                  color="subdued"
                  display="block"
                  fontSize="s"
                  // TODO: This shouldn't be an inline style.
                  style={{ wordBreak: 'break-word' }}
                >
                  {resource?.relatedNode.url}
                </Box>
              ) : null}
            </Box>
          ))}
        </List>
      );
    }

    if (status === 'ADD') {
      return (
        <Box
          display="grid"
          gridTemplateColumns="repeat(2, 50%)"
          gridColumnGap="l"
        >
          <Button
            variant="secondary"
            onClick={handleAddLinkClick}
            display="block"
          >
            Add URL
          </Button>
          <Button
            variant="secondary"
            onClick={handleAddContentClick}
            display="block"
          >
            Add Study
          </Button>
        </Box>
      );
    }

    if (status === 'ADD_LINK') {
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

    if (status === 'ADD_CONTENT') {
      return <Box as="p">Add content!</Box>;
    }

    return null;
  }

  return (
    <>
      <Box alignItems="center" display="flex" mb="base">
        <Box as="h2" flexGrow="1" mb="0">
          Resources
        </Box>
        <CustomLink href="#0" onClick={handleAddClick}>
          {status === 'IDLE' ? 'Add' : 'Cancel'}
        </CustomLink>
      </Box>
      {render()}
    </>
  );
}

GroupManageResources.propTypes = {
  data: PropTypes.object,
};

export default GroupManageResources;
