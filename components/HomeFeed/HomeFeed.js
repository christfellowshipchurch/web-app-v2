import React from 'react';
import PropTypes from 'prop-types';
import flatten from 'lodash/flatten';

import { ContentFeedProvider } from 'providers';
import { ContentList } from 'components';
import { Button } from 'ui-kit';

const EXCLUDED_CONTENT = [
  'Feature Demos',
  'TEST',
  'Journey',
  'Journey at Palm Beach Gardens',
  'Christ Birthday Offering',
];

function HomeFeed(props = {}) {
  const actions = flatten(props.data.map(({ actions }) => actions));
  const byType = type => item => item?.action === type;

  function render(type) {
    return actions
      .filter(byType(type))
      .filter(item => !EXCLUDED_CONTENT.includes(item.title))
      .map(item => (
        <ContentFeedProvider
          key={item.id}
          Component={ContentList}
          item={item}
          options={{
            variables: {
              itemId: item?.relatedNode?.id,
              child: true,
              sibling: false,
            },
          }}
        />
      ));
  }

  return (
    <>
      {['READ_GLOBAL_CONTENT', 'VIEW_CHILDREN'].map(render)}
      <Button color="primary" mr="10px" mb="10px">
        Primary
      </Button>
      <Button color="secondary" mr="10px" size="s">
        Secondary
      </Button>
      <Button color="primary" variant="outlined" mr="10px">
        Primary Outlined
      </Button>
      <Button color="secondary" variant="outlined" mr="10px">
        Secondary Outlined
      </Button>
    </>
  );
}

HomeFeed.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default HomeFeed;
