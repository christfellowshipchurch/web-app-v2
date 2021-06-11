import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useGroupManage, update } from 'providers/GroupManageProvider';
import { useUpdateGroupResourceContentItem } from 'hooks';
import { Box, Button, Loader, Select } from 'ui-kit';

function AddResourceContent(props = {}) {
  const [
    { resourceStatus: status, groupData, message },
    dispatch,
  ] = useGroupManage();
  const setStatus = s => dispatch(update({ resourceStatus: s }));
  const [selection, setSelection] = useState('');

  const [updateGroupResourceContentItem] = useUpdateGroupResourceContentItem();

  function handleChange(event) {
    setSelection(event.target.value);
  }

  async function handleSave(event) {
    event.preventDefault();

    const noSelection = selection === '';
    if (noSelection) {
      dispatch(
        update({
          message: `You need to select an item in the menu.`,
        })
      );
      return;
    }

    setStatus('SAVING_CONTENT');

    await updateGroupResourceContentItem({
      variables: {
        contentItemId: selection,
        groupId: groupData.id,
      },
      refetchQueries: ['getGroup'],
    });

    setStatus('IDLE');
  }

  function handleBackClick(event) {
    event.preventDefault();
    setStatus('IDLE');
  }

  return (
    <>
      {message && (
        <Box as="p" color="alert" fontSize="s" mb="base">
          {message}
        </Box>
      )}
      {props.loading ? (
        <Loader pt="s" pb="base" />
      ) : (
        <Select
          defaultValue=""
          id="contentOption"
          name="contentOption"
          onChange={handleChange}
          mb="base"
        >
          <Select.Option value="" disabled={true}>
            Select...
          </Select.Option>
          {props.data?.map(item => {
            return (
              <Select.Option
                key={item.node.id}
                value={item.node.id}
                disabled={props.currentResources?.find(
                  resourceId => item.node.id === resourceId
                )}
              >
                {item.node.title}
              </Select.Option>
            );
          })}
        </Select>
      )}
      <Box alignItems="center" display="flex">
        <Button
          onClick={handleSave}
          status={status === 'SAVING_CONTENT' ? 'LOADING' : null}
        >
          Add Content
        </Button>
        <Box as="a" href="#0" onClick={handleBackClick} ml="base">
          Back
        </Box>
      </Box>
    </>
  );
}

AddResourceContent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      cursor: PropTypes.string,
      node: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
      }),
    })
  ),
};

export default AddResourceContent;
