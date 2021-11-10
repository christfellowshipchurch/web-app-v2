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
import { htmlToReactParser } from 'utils';

import Styled from './HtmlRenderer.styles'

const HtmlRenderer = ({ htmlContent }) => {
    return <Styled>
        {htmlToReactParser.parse(htmlContent)}
    </Styled>
};

HtmlRenderer.propTypes = {}
HtmlRenderer.defaultProps = {}

export default HtmlRenderer;