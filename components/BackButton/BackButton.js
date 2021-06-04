import React from 'react';
import { useRouter } from 'next/router';

import { Box, Icon } from 'ui-kit';

import Styled from './BackButton.styles';

export default function BackButton(props = {}) {
  const router = useRouter();

  return (
    <Styled {...props} href="#0" onClick={() => router.back()}>
      <Icon name="arrowLeft" color="fg" />
      <Box as="span" p="xs" color="fg">
        Back
      </Box>
    </Styled>
  );
}
