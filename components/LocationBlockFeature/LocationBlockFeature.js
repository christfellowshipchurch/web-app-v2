/**
 * LocationBlockFeature.js
 *
 * Author: Caleb Panza
 * Created: Mar 17, 2021
 *
 * Feature rendered in the Features Feed that displays a single Block of standalone content.
 */

import { CustomLink } from 'components';
import React from 'react';

import { Box, Button, HtmlRenderer, Image } from 'ui-kit';
import { getUrlFromRelatedNode } from 'utils';

import Styled from './LocationBlockFeature.styles';

const LocationBlockFeature = props => {
  const content = props?.data;

  return (
    <Box textAlign="center" my="l" {...props}>
      <Box mb={0} as="h2" color="secondary">
        {`At ${props?.title}`}
      </Box>
      <Styled.Container>
        {content.map(block => (
          <Styled.LocationBlock>
            <Image
              aspectRatio="16by9"
              source={block?.coverImage?.sources[0]?.uri}
            />
            <Box mt="s" as="h2">
              {block?.title}
            </Box>
            <Box
              as="h4"
              color="secondary"
              fontWeight="normal"
              fontStyle="italic"
            >
              {block?.subtitle}
            </Box>
            <HtmlRenderer htmlContent={block?.htmlContent} />
            {block?.actions.map((action, i) => (
              <CustomLink
                as="a"
                href={getUrlFromRelatedNode(action?.relatedNode)}
                Component={Button}
                variant="secondary"
                borderRadius="xxl"
                size="s"
                mt="s"
                textTransform="capitalize!important"
                /**
                 * todo : We want to eventually add functionality with the 'onPressActionItem' to be able to perform more actions in the future.
                 */
                // onClick={e => onPressActionItem(e, heroCard)}
                {...action}
              >
                {action?.title}
              </CustomLink>
            ))}
          </Styled.LocationBlock>
        ))}
      </Styled.Container>
    </Box>
  );
};

LocationBlockFeature.propTypes = {};
LocationBlockFeature.defaultProps = {};

export default LocationBlockFeature;
