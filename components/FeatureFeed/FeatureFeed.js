import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ActionBarFeature from '../ActionBarFeature';
import ActionListFeature from '../ActionListFeature';
import AvatarListFeature from '../AvatarListFeature';
import ContentBlockFeature from '../ContentBlockFeature';
import ContentBlockCollection from '../ContentBlockCollection';
import HeroListFeature from '../HeroListFeature';
import HorizontalCardListFeature from '../HorizontalCardListFeature';
import VerticalCardListFeature from '../VerticalCardListFeature';
import { Box } from 'ui-kit';
import { getComponent } from 'utils';
import { isEmpty, kebabCase } from 'lodash';

const FEATURE_COMPONENTS = {
  ActionBarFeature,
  ActionListFeature,
  AvatarListFeature,
  ContentBlockFeature,
  HeroListFeature,
  HorizontalCardListFeature,
  HtmlBlockFeature: ContentBlockFeature,
  VerticalCardListFeature,
  ContentBlockCollectionFeature: ContentBlockCollection,

  // TODO: Implement all Features needed for web
  // PrayerListFeature: () => null,
  // VerticalPrayerListFeature: () => null,
  // CommentListFeature: () => null,
  // AddCommentFeature: () => null,
  // ScriptureFeature: () => null,
  // TextFeature: () => null,
  // WebviewFeature: () => null,
};

const onPressActionItem = (event, { action, relatedNode }) => {
  /**
   * note : if an action should do anything outside of linking using `<a>`, break the default and handle your logic here
   *
   * event.preventDefault();
   */
  switch (action) {
    case 'READ_CONTENT':
    case 'READ_EVENT':
    case 'OPEN_NODE':
    case 'OPEN_URL':
      return relatedNode?.url;
    case 'OPEN_AUTHENTICATED_URL':
    case 'OPEN_CHANNEL':
    default:
      break;
  }
};

// This component is created to map the features by type and send them.
const FeatureFeed = (props = {}) => {
  const error = props?.error?.toString();

  /**
   * todo : This useEffect method takes care of an anchoring bug to make sure URLs with anchors scroll down correctly. Am open to better solutions, but this was the best I could find for now. 🤷‍♂️
   */
  useEffect(() => {
    const path = window.location.hash;
    if (path && path.includes('#')) {
      setTimeout(() => {
        const id = path.replace('#', '');
        const el = window.document.getElementById(id);
        const r = el?.getBoundingClientRect();
        window.top.scroll({
          top: window.scrollY + r?.top,
          behavior: 'smooth',
        });
      }, 600);
    }
  });

  if (error && error === 'Error: Must be logged in') {
    return <Box as="h1">Please Log In to View Page</Box>;
  }

  return props.data?.map((edge, i) => {
    const Component = getComponent(edge, {
      ...FEATURE_COMPONENTS,
      ...props?.additionalFeatures,
    });

    const regex = /\D/g;

    return (
      <Box
        id={
          !isEmpty(edge?.title)
            ? kebabCase(edge?.title)
            : edge?.id?.replace(regex, '')
        }
        key={edge?.id}
        py="xl"
      >
        <Component data={edge} onPressActionItem={props?.onPressActionItem} />
      </Box>
    );
  });
};

FeatureFeed.propTypes = {
  additionalFeatures: PropTypes.object,
  data: PropTypes.arrayOf(PropTypes.object),
  onPressActionItem: PropTypes.func,
};

FeatureFeed.defaultProps = {
  additionalFeatures: {},
  onPressActionItem: onPressActionItem,
};

export default FeatureFeed;
