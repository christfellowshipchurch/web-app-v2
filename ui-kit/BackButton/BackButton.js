import React from 'react';

import { Icon } from 'ui-kit';

import Styled from './BackButton.styles';

export default function BackButton(props = {}) {
  return (
    <Styled {...props} href="#">
      <Icon name="arrowLeft" vertialAlign="middle" mr="xs" mb={3} />
      Back
    </Styled>
  );
}
