import React from 'react';

import { Box, List, Text } from 'ui-kit';
import Styled from './Footer.styles';
import useContentChannel from 'hooks/useContentChannel';
import { getSlugFromURL } from 'utils';

export default function FooterLinks({ channelId, baseRoute, title }) {
  const { content, loading } = useContentChannel({
    variables: {
      itemId: `ContentChannel:${channelId}`,
    },
  });

  if (loading || !content.edges) {
    return null;
  }
  const featuredItems = content.edges
    .filter(({ node }) => node.isFeatured)
    .map(({ node }) => node);
  const nonFeaturedItems = content.edges
    .filter(({ node }) => !node.isFeatured)
    .map(({ node }) => node);

  const items = [...featuredItems, ...nonFeaturedItems];

  return (
    <Box>
      <Text variant="h4" color="white" fontWeight="600" mb="xs">
        {title}
      </Text>
      <List as="ul" space="xs">
        {items.map(node => (
          <Box as="li" key={node.id}>
            <Styled.Link
              href={`${baseRoute}/${getSlugFromURL(node?.sharing?.url)}`}
            >
              {node.title}
            </Styled.Link>
          </Box>
        ))}
      </List>
    </Box>
  );
}
