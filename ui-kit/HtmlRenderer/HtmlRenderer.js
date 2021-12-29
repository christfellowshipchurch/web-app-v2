/**
 * HtmlRenderer.js
 *
 * Author: Caleb Panza
 * Created: Nov 08, 2021
 *
 * This component exists to wrap the `html-to-react` library in a contextual theme. This has been found to be necessary while using theme overrides.
 */

import React from 'react';
import PropTypes from 'prop-types';
import HtmlToReact from 'html-to-react';
import { htmlToReactParser } from 'utils';

import Styled from './HtmlRenderer.styles';

const isValidNode = function () {
  return true;
};

const HtmlRenderer = ({ htmlContent, customProcessing }) => {
  const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);

  const processingInstructions = [
    ...customProcessing,
    {
      // Anything else
      shouldProcessNode: function (node) {
        return true;
      },
      processNode: processNodeDefinitions.processDefaultNode,
    },
  ];
  const parsedHtmlContent = htmlToReactParser.parseWithInstructions(
    htmlContent,
    isValidNode,
    processingInstructions
  );

  return <Styled>{parsedHtmlContent}</Styled>;
};

HtmlRenderer.propTypes = {
  htmlContent: PropTypes.object.isRequired,
  customProcessing: PropTypes.array,
};
HtmlRenderer.defaultProps = {
  htmlContent: null,
  customProcessing: [],
};

export default HtmlRenderer;
