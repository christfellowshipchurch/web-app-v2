import { useCurrentBreakpoint } from 'hooks';
import React, { useState, useEffect } from 'react';

import { Box, Icon, systemPropTypes, TextInput } from 'ui-kit';

import Styled from './SearchField.styles';
function SearchField(props = {}) {
  const currentBreakpoint = useCurrentBreakpoint();
  const [iconOnly, setIconOnly] = useState(!props?.children);

  //Only show icon on mobile display for Search Button
  useEffect(() => {
    if (!!props?.children) {
      if (!!currentBreakpoint.isSmall) {
        return setIconOnly(true);
      }
      return setIconOnly(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentBreakpoint]);

  // Default placeholder for group search that adjusts to mobile
  const defaultPlaceholder = currentBreakpoint.isSmall
    ? 'Search for a group...'
    : "Search for a group name, class, study, or activity you're interested in...";

  return (
    <Styled.Container as="form" onSubmit={props.handleSubmit} {...props}>
      <TextInput
        id="text"
        placeholder={
          props.placeholder ? props?.placeholder : defaultPlaceholder
        }
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
