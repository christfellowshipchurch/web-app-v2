import React from 'react';
import { useLiveStreams } from 'hooks';
import Link from 'next/link';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Text, system } from 'ui-kit';

const StyledText = styled(Text)`
  position: absolute;
  left: 20px;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    display: none;
  }

  ${system}
`;

function MobileCountdown(props) {
  const liveStreams = useLiveStreams();
  const isLive = liveStreams.liveStreams.find(ls => ls.isLive);
  if (!isLive) return null;
  return (
    <Link href="/watch">
      <StyledText
        ml="xxs"
        fontSize="xs"
        lineHeight="xs"
        fontWeight="500"
        color={'alert'}
      >
        {liveStreams.prettyCountdown}
      </StyledText>
    </Link>
  );
}

export default MobileCountdown;
