/**
 * CoverImage.js
 * 
 * Author: Caleb Panza
 * Created: Nov 23, 2021
 * 
 * Convenience UI component that passes props down to a specified style of a Cover Image
 * 
 * ! : This UI component should be considered to be a Beta product and may result in breaking changes
 */

import React from 'react';
import PropTypes from 'prop-types';

import HeroGlass from './HeroGlass'
import GraphicOverlay from './GraphicOverlay'

const CoverImage = ({ src, title, subtitle, actions, type }) => {
    switch (type) {
        case "graphic-overlay":
            return <GraphicOverlay
                src={src}
                title={title}
                subtitle={subtitle}
                actions={actions}
            />
        case "hero-glass":
            return <HeroGlass
                src={src}
                title={title}
                subtitle={subtitle}
            />
        default:
            return null
    }
};

CoverImage.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            action: PropTypes.string,
            relatedNode: PropTypes.shape({
                id: PropTypes.string,
            }),
        })
    ),
    src: PropTypes.string,
    type: PropTypes.oneOf(['hero-glass', 'graphic-overlay'])
}
CoverImage.defaultProps = {}

export default CoverImage;