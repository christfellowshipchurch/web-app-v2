/**
 * GraphicOverlay.js
 * 
 * Author: Caleb Panza
 * Created: Nov 23, 2021
 * 
 * Large image in the center of the screen behind a large title/subtitle.
 * 
 * Supports actions
 * 
 * Full screen background color patches the primary color of the current theme.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { getUrlFromRelatedNode, transformISODates } from 'utils';
 
import { CustomLink } from 'components'

import Box from '../Box'
import Button from '../Button'
 
const GraphicOverlay = ({ src, title, subtitle, actions, alignment }) => {
    return <Box
        textAlign="center"
    >
        <Box
            textAlign="left"
            backgroundColor="primary"
            pb={{ _: "base", md: "l"}}
            pt={{ _: "l", md: "xl"}}
            px="s"
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                position="relative"
                maxWidth="1000px"
                minHeight="60vh"
                m="auto"
            >
                <Box
                    flex="1"
                    backgroundImage={`url(${src})`}
                    backgroundRepeat="no-repeat"
                    backgroundSize="contain"
                    backgroundPosition="right center"
                >
                    <Box
                        as="h1"
                        fontSize={{ _: "3rem", md: "6rem"}}
                        color="white"
                        fontStyle="italic"
                        mb="l"
                    >
                        {title}
                    </Box>
                </Box>

                {actions.length > 0 && <Box mx="-0.312rem">
                    {actions.map(({ title, relatedNode }) => 
                        <CustomLink 
                            as="a"
                            Component={Button}
                            href={getUrlFromRelatedNode(relatedNode)}
                            variant="tertiary"
                            target="_blank"
                            mx="xs"
                        >
                            {title}
                        </CustomLink>
                    )}
                </Box>}
            </Box>
        </Box>
        <Box
            as="h2"
            my="base"
            color="neutrals.800"
        >
            {subtitle}
        </Box>
    </Box>
};
 
GraphicOverlay.propTypes = {
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
    alignment: PropTypes.oneOf(['left', 'right', 'center'])
}
GraphicOverlay.defaultProps = {
    actions: [],
    alignment: 'center'
}

export default GraphicOverlay;