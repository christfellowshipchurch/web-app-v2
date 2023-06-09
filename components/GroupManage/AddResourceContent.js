import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useGroupManage, update } from 'providers/GroupManageProvider';
import { useUpdateGroupResourceContentItem } from 'hooks';
import { Box, Button, Loader, Select } from 'ui-kit';

function AddResourceContent({ data, loading, currentResources }) {
  const [{ resourceStatus: status, groupData, message }, dispatch] =
    useGroupManage();
  const setStatus = s => dispatch(update({ resourceStatus: s }));
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [categories, setCategories] = useState({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const [updateGroupResourceContentItem] = useUpdateGroupResourceContentItem();

  useEffect(() => {
    if (!loading) {
      // Adding a delay to the loading to make sure all the data is loaded for the categories to be created
      const delay = setTimeout(() => {
        const categorizedItems = categorizeItemsByTitle(data);
        setCategories(categorizedItems);
        setIsDataLoaded(true);
      }, 1500);

      return () => clearTimeout(delay);
    }
  }, [data, loading]);

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
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
            {Object.keys(categories).map(category => (
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
              categories[selectedCategory].map(item => (
                <Select.Option
                  key={item.node.id}
                  value={item.node.id}
                  disabled={currentResources?.includes(item.node.id)}
                >
                  {item.node.title}
                </Select.Option>
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
  currentResources: PropTypes.arrayOf(PropTypes.string),
};

export default AddResourceContent;

// Helper function to categorize items based on words before the "|" symbol in the "title" attribute
function categorizeItemsByTitle(data) {
  const categories = {};

  data.forEach(({ node }) => {
    const titleParts = node.title.split('|');
    const categoryName = titleParts.length > 1 ? titleParts[0].trim() : 'Other';

    if (!categories[categoryName]) {
      categories[categoryName] = [];
    }

    categories[categoryName].push({ node });
  });

  return categories;
}
