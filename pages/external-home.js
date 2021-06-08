import React from 'react';

import contentBlocks from '../lib/externalHomeData';

import { HeroLanding } from 'components';
import { ContentBlock } from 'ui-kit';

import { useModalDispatch, showModal } from 'providers/ModalProvider';

export default function HeroLandingPage(props = {}) {
  const modalDispatch = useModalDispatch();

  function handleAuthClick(event) {
    event.preventDefault();
    modalDispatch(showModal('Auth'));
  }

  return (
    <HeroLanding
      heroTitle="Looking for more out of life?"
      heroSummary="Church is a great place to start. Christ Fellowship Church is helping thousands of people every week discover there’s more to life and that it’s easier to find than you think."
      backgroundVideo="/home-background-vid.mp4"
      actions={[
        {
          title: "I'm New Here",
          url: '#new-here',
        },
        {
          title: 'I Attend CF',
          url: '',
          variant: 'secondary',
          // color: 'white',
          // borderColor: 'white',
          onClick: handleAuthClick,
        },
      ]}
    >
      {contentBlocks.map((block, i) => (
        <ContentBlock key={i} {...block} />
      ))}
    </HeroLanding>
  );
}
