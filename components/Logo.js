import React from 'react';
import Image from 'next/image';

function Logo(props = {}) {
  return (
    <Image src="/logo.png" alt="Christ Fellowship" width="135" height="58" />
  );
}

export default Logo;
