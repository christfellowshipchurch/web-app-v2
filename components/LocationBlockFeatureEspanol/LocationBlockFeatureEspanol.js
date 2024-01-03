import { CustomLink } from 'components';
import React from 'react';

import { Box, Button, HtmlRenderer, Image } from 'ui-kit';
import { getUrlFromRelatedNode } from 'utils';

import Styled from '../LocationBlockFeature/LocationBlockFeature.styles';

const LocationBlockFeatureEspanol = props => {
  let content = props?.data;

  return (
    <Box textAlign="center" {...props}>
      <Box mt="l" mb={0} as="h2" color="secondary">
        Toda la semana
      </Box>
      <Box mt="s" mb={0} as="p" fontStyle="italic">
        <p>
          *Opciones en español disponibles.{' '}
          <strong>
            Algunos eventos se ofrecen solo en inglés o en nuestro campus de
            {props?.campusName ===
            'Christ Fellowship Español Palm Beach Gardens'
              ? ' Royal Palm Beach'
              : ' Palm Beach Gardens'}
            .
          </strong>
        </p>
      </Box>
      <Styled.Container>
        {content?.map(block => (
          <Styled.LocationBlock key={block.id} mr={{ md: 'l', lg: '0' }}>
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
                px="base"
                target={action?.new_tab && 'blank'}
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

LocationBlockFeatureEspanol.propTypes = {};
LocationBlockFeatureEspanol.defaultProps = {};

export default LocationBlockFeatureEspanol;
