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
import isEmpty from 'lodash/isEmpty';
import { htmlToReactParser } from 'utils';

import Styled from './HtmlRenderer.styles';
import ImgTag from './tags/Img';

const isValidNode = function () {
  return true;
};

const defaultProcessing = [
  {
    //add download button for images
    shouldProcessNode: function (node) {
      return node?.name && node?.name === 'img' && !isEmpty(node?.attribs?.src);
    },
    processNode: function (node, children) {
      return <ImgTag source={node?.attribs?.src} disableRatio />;
    },
  },
];

const HtmlRenderer = ({ htmlContent, customProcessing }) => {
  const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);

  const processingInstructions = [
    ...defaultProcessing,
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
  htmlContent: PropTypes.string.isRequired,
  customProcessing: PropTypes.array,
};

HtmlRenderer.defaultProps = {
  htmlContent: '',
  customProcessing: [],
};

export default HtmlRenderer;
