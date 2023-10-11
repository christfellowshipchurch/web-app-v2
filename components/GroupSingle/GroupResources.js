import PropTypes from 'prop-types';

import { List, Box, Image } from 'ui-kit';
import { CustomLink } from 'components';

import { getUrlFromRelatedNode } from 'utils';
export default function GroupResources(props = {}) {
  if (!props.resources?.length) {
    return null;
  }

  // ! TODO
  // Currently ignoring the `action` of resources, since we can
  // typically derive a URL from the `relatedNode` regardless of
  // whether it's an `OPEN_URL` or `READ_CONTENT` etc action.

  // Sort resources by title
  const sortedResources = [...props.resources].sort((a, b) => {
    const titleA = a.title || a.relatedNode?.title;
    const titleB = b.title || b.relatedNode?.title;

    if (titleA < titleB) {
      return -1;
    }

    if (titleA > titleB) {
      return 1;
    }

    return 0;
  });

  return (
    <List>
      {sortedResources.map(sortedResource => (
        <Box key={sortedResource.relatedNode?.id} as="li" display="flex">
          <CustomLink
            key={sortedResource.relatedNode?.id}
            href={getUrlFromRelatedNode(sortedResource.relatedNode)}
            textDecoration="none"
            target="_blank"
          >
            <Box display="flex" alignItems="center">
              <Image
                maxWidth="50px"
                source={
                  sortedResource.relatedNode?.coverImage?.sources[0]?.uri ||
                  '/link.png'
                }
                mr="base"
              />
              <Box as="h4">
                {sortedResource.title || sortedResource.relatedNode?.title}
              </Box>
            </Box>
          </CustomLink>
        </Box>
      ))}
    </List>
  );
}

GroupResources.propTypes = {
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      action: PropTypes.string,
      relatedNode: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        coverImage: PropTypes.shape({
          sources: PropTypes.arrayOf(
            PropTypes.shape({
              uri: PropTypes.string,
            })
          ),
        }),
      }),
    })
  ),
};

GroupResources.defaultProps = {
  resources: [],
};
