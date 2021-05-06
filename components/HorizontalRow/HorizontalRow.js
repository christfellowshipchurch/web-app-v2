import React from 'react';
import PropTypes from 'prop-types';
import { ArrowRight } from 'phosphor-react';

import { Box, Heading, Text, theme } from 'ui-kit';
import { Photo } from 'components';
import { noop } from 'utils';

import Styled, { StyledCardGrid, RowItem } from './HorizontalRow.styles';

function HorizontalRow({
  title,
  items,
  action,
  color,
  actionLabel,
  imageProps,
  ...props
} = {}) {
  return (
    <Styled {...props}>
      {(title || actionLabel) && (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb="base"
        >
          {title && (
            <Heading variant="h3" color="black">
              {title}
            </Heading>
          )}
          {actionLabel && (
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
          )}
        </Box>
      )}
      <StyledCardGrid>
        {items.map((item, i) => {
          return (
            <RowItem key={i}>
              <Photo
                src={item.src}
                onClick={item.action}
                rounded
                imageProps={{
                  width: '310px',
                  height: '226px',
                  objectFit: 'cover',
                  cursor: 'pointer',
                }}
                inner={
                  <Heading fontWeight="600" variant="h2" color="white">
                    {item.title}
                  </Heading>
                }
                overlay={item.title ? {
                  color: theme.colors.almost_black,
                  opacity: '30%',
                } : undefined}
                {...imageProps}
              />
            </RowItem>
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
  imageProps: PropTypes.object,
};

export default HorizontalRow;
