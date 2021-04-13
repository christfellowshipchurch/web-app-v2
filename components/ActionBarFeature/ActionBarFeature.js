/**
 * ActionBarFeature.js
 *
 * Author: Caleb Panza
 * Created: Mar 16, 2021
 *
 * Renders the feature as a collection of Action Bars
 */

import React from 'react';
import PropTypes from 'prop-types';
import chunk from 'lodash/chunk';

import ThemeProvider from 'ui-kit/ThemeProvider';

import { ActionBar, ActionBarItem } from 'ui-kit';

const ActionBarFeature = props => {
  const id = props?.data?.id;
  const actions = props?.data?.actions || [];

  if (!Array.isArray(actions) || !actions.length) return null;

  /** This action bar looks really good with 4 items in it,
   *  but it starts to get pretty wonky after that. For right now,
   *  we're gonna put in a safety net so that if anyone puts in more
   *  than 4 items, we just create multiple bars
   */
  const chunkedActions = chunk(actions, 4);

  return (
    <>
      {chunkedActions.map((actionChunk, i) => (
        <ActionBar key={`${id}:${i}`}>
          {actionChunk.map(
            (
              { action, icon, title, theme, relatedNode, ...actionProps },
              i
            ) => (
              // <ThemeProvider key={i} themeMixin={theme}>
              <ActionBarItem
                // onPress={() => {
                //   onPressItem({
                //     action,
                //     icon,
                //     title,
                //     relatedNode,
                //     ...actionProps,
                //   });
                // }}
                {...(!icon ? {} : { icon })}
                label={title}
              />
              // </ThemeProvider>
            )
          )}
        </ActionBar>
      ))}
    </>
  );
};

ActionBarFeature.propTypes = {};
ActionBarFeature.defaultProps = {};

export default ActionBarFeature;
