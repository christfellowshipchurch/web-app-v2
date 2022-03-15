/**
 * youtube.js
 * 
 * Author: Caleb Panza
 * Created: Mar 14, 2022
 * 
 * description
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ContentLayout, Layout } from 'components';
import { Box } from 'ui-kit'

const youtube = ({ }) => {
    return <Layout>
        <ContentLayout
            renderA={() => <iframe 
                width="100%"
                height="500px"
                src="https://www.youtube.com/embed/bumfVOTKPmI?widget_referrer=https://christfellowship.church&modestbranding=1" 
                title="YouTube Analytic Test" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen     
            />}
            renderContentB={() => <Box as="h1">YouTube Analytic Test</Box>}
        />
    </Layout>
};

youtube.propTypes = {}
youtube.defaultProps = {}

export default youtube;