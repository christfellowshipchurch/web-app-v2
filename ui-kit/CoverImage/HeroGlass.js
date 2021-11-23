/**
 * HeroGlass.js
 * 
 * Author: Caleb Panza
 * Created: Nov 23, 2021
 * 
 * Full screen cover photo with a dark glass effect for the background of the Title/Subtitle
 * 
 * todo : support for actions
 */

import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty'

import Styled from './HeroGlass.styles'

const HeroGlass = ({ src, title, subtitle }) => {
    return <Styled.Hero coverImage={src} title={title}>
        {!isEmpty(title) && (
            <Styled.Glass>
            <Styled.GlassContent>
                <Box as="h1">{title}</Box>
                <Box as="h4" fontStyle="italic" fontWeight="normal">
                    {subtitle}
                </Box>
            </Styled.GlassContent>
            </Styled.Glass>
        )}
    </Styled.Hero>
};

HeroGlass.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string
}
HeroGlass.defaultProps = {}

export default HeroGlass;