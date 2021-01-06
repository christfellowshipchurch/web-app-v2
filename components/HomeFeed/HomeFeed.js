import React from 'react';
import PropTypes from 'prop-types';
import flatten from 'lodash/flatten';

import { ContentFeedProvider } from 'providers';
import { ContentList } from 'components';

const EXCLUDED_CONTENT = [
  'Feature Demos',
  'TEST',
  'Journey',
  'Journey at Palm Beach Gardens',
  'Christ Birthday Offering',
];

function HomeFeed(props = {}) {
  const actions = flatten(props.data.map(({ actions }) => actions));
  const byType = type => item => item.action === type;

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
      {render('READ_GLOBAL_CONTENT')}
      {render('VIEW_CHILDREN')}
    </>
  );
}

HomeFeed.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default HomeFeed;
