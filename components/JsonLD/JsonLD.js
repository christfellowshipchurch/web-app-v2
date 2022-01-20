/**
 * JsonLD.js
 * 
 * Author: Caleb Panza
 * Created: Jan 20, 2022
 * 
 * Generates a JsonLD Script Tag that gets added to the Head of the website.
 * 
 * note : this should be generated Server Side, so please take that into consideration when rendering this component on a Page
 */



import React from 'react';
import PropTypes from 'prop-types';

const JsonLD = ({ schema }) => {
    const data = {
        "@context": "https://schema.org",
        ...schema
    }
    return <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
};

JsonLD.propTypes = {
    schema: PropTypes.shape({
        "@type": PropTypes.oneOf(['Thing', 'Person', 'Place', 'Organization'].isRequired)
    })
}
JsonLD.defaultProps = {
    schema: {}
}

export default JsonLD;