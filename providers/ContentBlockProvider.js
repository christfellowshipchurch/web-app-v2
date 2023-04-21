import React from 'react';
import PropTypes from 'prop-types';

import { useContentBlockFeature } from 'hooks';
import { NotFound } from 'components';
import { Loader } from 'ui-kit';
import { includes } from 'lodash';

function ContentBlockProvider({ Component, options, ...props }) {
  const { loading, error, block } = useContentBlockFeature(options);

  /**
   * ! : Temporary fix for H4H
   * we needed content block buttons to open in new tab.
   */

  // if newTab is being passed, we set all buttons to new tab
  if (props?.newTab) {
    const actionsWithNewTab = block?.actions?.map(action => {
      return {
        ...action,
        //if button is anchor we don't want new tab
        newTab: !includes(action?.relatedNode?.url, '#'),
      };
    });
    return (
      <Component
        //override with new actions
        data={{ ...block, actions: actionsWithNewTab }}
        loading={loading}
        error={error}
        {...props}
      />
    );
  }

  if (loading) {
    return <Loader mt="xxl" mb="xxl" centered text="Loading" />;
  }

  if (!block) {
    return <NotFound layout={false} />;
  }

  return <Component data={block} loading={loading} error={error} {...props} />;
}

ContentBlockProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default ContentBlockProvider;
