import React from 'react';
import PropTypes from 'prop-types';
import { ArrowRight } from 'phosphor-react';

import { Box, Heading, Text, theme } from 'ui-kit';
import { noop } from 'utils';

import Styled, { StyledCardGrid, StyledImage } from './HorizontalRow.styles';

function HorizontalRow({ title, items, action, color, actionLabel } = {}) {
  return (
    <Styled>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="base"
      >
        <Heading variant="h3" color="black">
          {title}
        </Heading>
        <Text
          display="flex"
          alignItems="center"
          onClick={action || noop}
          color={color}
          variant="h4"
          fontWeight="600"
        >
          <Box mr="xxs">{actionLabel}</Box>
          <ArrowRight color={theme.colors[color]} weight="bold" size={18} />
        </Text>
      </Box>
      <StyledCardGrid>
        {items.map((item, i) => {
          return (
            <StyledImage key={i} src={item.src} onClick={item.action} rounded />
          );
        })}
      </StyledCardGrid>
    </Styled>
  );
}

HorizontalRow.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      action: PropTypes.func,
    })
  ),
  color: PropTypes.string,
  action: PropTypes.func,
  actionLabel: PropTypes.string,
};

export default HorizontalRow;
