import React from 'react';

import Styled from './Section.styles';

function Section({ children, contentProps, ...props }) {
  return (
    <Styled.Container {...props}>
      <Styled.Content {...contentProps}>{children}</Styled.Content>
    </Styled.Container>
  );
}

export default Section;
