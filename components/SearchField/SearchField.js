import React from 'react';

import { Box, Button, Icon, systemPropTypes, TextInput, utils } from 'ui-kit';

import Styled from './SearchField.styles';

function SearchField(props = {}) {
  return (
    <Box
      as="form"
      onSubmit={props.handleSubmit}
      display="flex"
      alignItems="center"
      position="relative"
      bg="white"
      borderRadius="xxl"
      width="100%"
      {...props}
    >
      <TextInput
        id="text"
        placeholder={props.placeholder}
        onChange={props.handleChange}
        containerProps={{ flex: 1 }}
        value={props.value}
        border="none"
        mx="base"
        mb={0}
      />
      {props.value !== '' && props.handleClear && (
        <Styled.ClearButton onClick={props.handleClear}>
          <Icon name="x" color="border" size="20" />
        </Styled.ClearButton>
      )}
      <Button
        alignItems="center"
        borderRadius="xxl"
        display="flex"
        mr="xs"
        my="xs"
        onClick={props.handleClick}
        outline="none"
        p={0}
        type="submit"
        zIndex={100}
      >
        <Icon name="search" color="white" size="20" mx="xs" my="xs" />
        {/* Todo: fix spacing for "Search" text option */}
        {/* <Box as="p" mb="none" ml="xs" mr="s">
          Search
        </Box> */}
      </Button>
    </Box>
  );
}

SearchField.propTypes = {
  ...systemPropTypes,
};

export default SearchField;
