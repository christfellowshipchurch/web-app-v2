import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useGroupManage, update } from 'providers/GroupManageProvider';
import {
  useUpdateGroupResourceContentItem,
  useGetTags,
  useGetTaggedItems,
} from 'hooks';
import { Box, Button, Loader, Select } from 'ui-kit';

function existingResources(groupData) {
  if (!groupData) {
    return [];
  }

  return groupData.resources.map(resource => resource.title);
}
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
  const [resources, setResources] = useState([]); // [resource1, resource2, ...
  const [updateGroupResourceContentItem] = useUpdateGroupResourceContentItem();

  const { categories } = useGetTags({
    variables: { tagCategory: 'group resources' },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (categories) {
      setIsDataLoaded(true);
    }
    setResources(existingResources(groupData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
    setIsDataLoaded(false);
    refetch();
    setIsDataLoaded(true); // Maybe?
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
              <Select.Option key={category.name} value={category.name}>
                {category.name}
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
              taggedItems.map(taggedItem => (
                <>
                  {taggedItem?.title &&
                    !resources.includes(taggedItem.title) && (
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
