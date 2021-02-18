import React from 'react';

import { Box, Button, Icon, systemPropTypes, TextInput, utils } from 'ui-kit';

function SearchField(props = {}) {
  return (
    <Box as="form" onSubmit={props.handleSubmit} display="flex" {...props}>
      <Icon
        name="search"
        color="border"
        position="absolute"
        zIndex="1"
        marginLeft={utils.rem('12px')}
        size="20"
      />
      <TextInput
        id="text"
        placeholder={props.placeholder}
        onChange={props.handleChange}
        containerProps={{ flex: 1 }}
        value={props.value}
        borderTopRightRadius="0"
        borderBottomRightRadius="0"
        paddingLeft={utils.rem('38px')}
        borderRight="none"
      />
      <Button
        type="submit"
        onClick={props.handleClick}
        borderTopLeftRadius="0"
        borderBottomLeftRadius="0"
        outline="none"
      >
        {props.children}
      </Button>
    </Box>
  );
}

SearchField.propTypes = {
  ...systemPropTypes,
};

export default SearchField;
