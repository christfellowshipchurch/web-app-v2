import React from 'react';
import { Box, Button } from 'ui-kit';

export const GiveButton = ({
  id,
  title,
  description,
  type,
  url,
  buttonHover,
}) => {
  return (
    <Button
      buttonHover={buttonHover}
      as="a"
      id={id}
      href={url}
      target="_blank"
      py="s"
      variant={type}
      color={type === 'primary' ? 'white' : 'black'}
      borderRadius="l"
      px="base"
      my="s"
      boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.30);"
    >
      <Box fontSize={30} fontWeight={600}>
        {title}
      </Box>
      <Box as="p" fontWeight="200" fontSize={16} lineHeight="1.2">
        {description}
      </Box>
    </Button>
  );
};
