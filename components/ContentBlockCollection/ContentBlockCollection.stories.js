import React from 'react';

import { ContentBlockCollection } from 'components';

import testImage from '../../public/external-home-1.png' 

const config = {
  title: 'components/ContentBlockCollection',
  component: ContentBlockCollection,
  argTypes: {
    items: {
      control: { type: 'range', min: 1, max: 6, step: 1 }
    }
  }
}

function renderItems(n) {
  let arr = []

  for (var i = 0; i < n; i++) {
    arr.push(
      {
        title: '78,350',
        summary:
          'Water projects funded',
        coverImage: {sources: [{uri: testImage}]},
        highlightWidth: '100%',
        highlightWidthSmall: '10%',
      }
    )
  }

  return arr
}

const ContentBlockCollectionStory = ({ items }) => {
  return <ContentBlockCollection icons={renderItems(items)} />
}

export const Default = ContentBlockCollectionStory.bind({})

export default config

