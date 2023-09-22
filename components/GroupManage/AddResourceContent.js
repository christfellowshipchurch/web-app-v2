import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useGroupManage, update } from 'providers/GroupManageProvider';
import {
  useUpdateGroupResourceContentItem,
  useGroupResourceOptions,
  useGetTaggedItems,
} from 'hooks';
import { Box, Button, Loader, Select } from 'ui-kit';

function AddResourceContent() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const { taggedItems, refetch } = useGetTaggedItems({
    variables: { tagName: selectedCategory },
    fetchPolicy: 'cache-and-network',
  });

  const [{ resourceStatus: status, groupData, message }, dispatch] =
    useGroupManage();

  const setStatus = s => dispatch(update({ resourceStatus: s }));

  const [selectedItem, setSelectedItem] = useState('');
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const [updateGroupResourceContentItem] = useUpdateGroupResourceContentItem();

  // ** We evetually want to update the way we load all the content items for Group resources in the backround and not have to wait for them to load all at once.
  const { categories } = useGroupResourceOptions({
    variables: { tagCategory: 'group resources' },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (categories) {
      setIsDataLoaded(true);
    }
  }, [categories]);

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
    refetch();
    setSelectedItem('');
  };

  const handleItemChange = event => {
    setSelectedItem(event.target.value);
  };

  const handleSave = async event => {
    event.preventDefault();

    const noSelection = selectedCategory === '' || selectedItem === '';
    if (noSelection) {
      dispatch(
        update({ message: 'You need to select both a category and an item.' })
      );
      return;
    }

    setStatus('SAVING_CONTENT');

    await updateGroupResourceContentItem({
      variables: {
        contentItemId: selectedItem,
        groupId: groupData.id,
      },
      refetchQueries: ['getGroup'],
    });

    setStatus('IDLE');
  };

  const handleBackClick = event => {
    event.preventDefault();
    setStatus('IDLE');
  };

  return (
    <>
      {message && (
        <Box as="p" color="alert" fontSize="s" mb="base">
          {message}
        </Box>
      )}
      {isDataLoaded ? (
        <>
          <Select
            defaultValue=""
            id="categoryOption"
            name="categoryOption"
            value={selectedCategory}
            onChange={handleCategoryChange}
            mb="base"
          >
            <Select.Option value="" disabled>
              Select a Category...
            </Select.Option>
            {categories.map(category => (
              <Select.Option key={category} value={category}>
                {category}
              </Select.Option>
            ))}
          </Select>
          <Select
            defaultValue=""
            id="itemOption"
            name="itemOption"
            value={selectedItem}
            onChange={handleItemChange}
            mb="base"
            disabled={!selectedCategory}
          >
            <Select.Option value="" disabled={!selectedCategory}>
              Select an Item...
            </Select.Option>
            {selectedCategory &&
              taggedItems &&
              // MAP THE RESULTS FROM LINE 29 INSTEAD
              taggedItems.map(taggedItem => (
                <>
                  {taggedItem?.title && (
                    <Select.Option key={taggedItem.id} value={taggedItem.id}>
                      {taggedItem.title}
                    </Select.Option>
                  )}
                </>
              ))}
          </Select>
        </>
      ) : (
        <Loader pt="s" pb="base" />
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
  loading: PropTypes.bool,
  totalCount: PropTypes.number,
  currentResources: PropTypes.arrayOf(PropTypes.string),
};

export default AddResourceContent;
