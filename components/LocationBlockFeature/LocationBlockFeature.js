/**
 * LocationBlockFeature.js
 *
 * Author: Caleb Panza
 * Created: Mar 17, 2021
 *
 * Feature rendered in the Features Feed that displays a single Block of standalone content.
 */

import { CustomLink } from 'components';
import { drop } from 'lodash';
import React from 'react';

import { Box, Button, HtmlRenderer, Image } from 'ui-kit';
import { getUrlFromRelatedNode } from 'utils';

import Styled from './LocationBlockFeature.styles';

const LocationBlockFeature = props => {
  let content = props?.data;

  /**
   * todo : We want to remove Kids from the Downtown Campus, once we update the code to use the content blocks from Rock we can remove this.
   */
  if (props?.campusName === 'Downtown West Palm Beach') {
    //removes Kids content block
    content = drop(content);
  }

  return (
    <Box textAlign="center" my="l" {...props}>
      <Box mb={0} as="h2" color="secondary">
        At This Location
      </Box>
      <Styled.Container>
        {content.map(block => (
          <Styled.LocationBlock key={block.id}>
            <Image
              aspectRatio="16by9"
              source={block?.coverImage?.sources[0]?.uri}
            />
            <Box fontSize={{ _: 30, sm: 'auto' }} mt="base" as="h2">
              {block?.title}
            </Box>
            <Box
              fontSize={{ _: 20, sm: 'auto' }}
              as="h3"
              color="secondary"
              fontWeight="normal"
              fontStyle="italic"
              mb="xs"
            >
              {block?.subtitle}
            </Box>
            <HtmlRenderer htmlContent={block?.htmlContent} />
            {block?.actions.map((action, i) => (
              <CustomLink
                key={i}
                as="a"
                href={getUrlFromRelatedNode(action?.relatedNode)}
                Component={Button}
                variant="secondary"
                borderRadius="xxl"
                size="s"
                mt="base"
                textTransform="capitalize!important"
                px="base"
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
