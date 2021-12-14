import { useCurrentBreakpoint } from 'hooks';
import React, { useState, useEffect } from 'react';

import { Box, Button, Icon, systemPropTypes, TextInput, utils } from 'ui-kit';

import Styled from './SearchField.styles';

function SearchField(props = {}) {
  const currentBreakpoint = useCurrentBreakpoint();
  const [iconOnly, setIconOnly] = useState(!props?.children);

  useEffect(() => {
    if (!!props?.children) {
      if (!!currentBreakpoint.isSmall) {
        return setIconOnly(true);
      }
      return setIconOnly(false);
    }
  }, [currentBreakpoint]);

  return (
    <Styled.Container as="form" onSubmit={props.handleSubmit} {...props}>
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
        <Icon
          onClick={props.handleClear}
          zIndex={1}
          name="x"
          color="border"
          size="20"
          mr="s"
        />
      )}
      <Styled.SearchButton
        type="submit"
        onClick={props.handleClick}
        pl={!iconOnly ? 's' : 0}
      >
        <Icon name="search" color="white" size="22" mx="xs" my="xs" />
        {!iconOnly && (
          <Box as="p" my="xs" mr="base">
            {props?.children}
          </Box>
        )}
      </Styled.SearchButton>
    </Styled.Container>
  );
}

SearchField.propTypes = {
  ...systemPropTypes,
};

export default SearchField;
