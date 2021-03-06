import PropTypes from 'prop-types';

import { List, Box, Image } from 'ui-kit';
import { CustomLink } from 'components';

import { getUrlFromRelatedNode } from 'utils';
import amplitude from 'lib/amplitude';
export default function GroupResources(props = {}) {
  if (!props.resources?.length) {
    return null;
  }

  // ! TODO
  // Currently ignoring the `action` of resources, since we can
  // typically derive a URL from the `relatedNode` regardless of
  // whether it's an `OPEN_URL` or `READ_CONTENT` etc action.

  return (
    <List>
      {props.resources
        .filter(resource => resource.title || resource.relatedNode?.title)
        .map(resource => (
          <Box key={resource.relatedNode?.id} as="li">
            <CustomLink
              key={resource.relatedNode?.id}
              href={getUrlFromRelatedNode(resource.relatedNode)}
              textDecoration="none"
              target="_blank"
              onClick={() => {
                amplitude.trackEvent({
                  category: 'Group Item',
                  action: `${resource.title} - Group Resource Action`,
                  label: `${resource.title} Button`,
                });
              }}
            >
              <Box display="flex" alignItems="center">
                <Image
                  maxWidth="50px"
                  source={
                    resource.relatedNode?.coverImage?.sources[0]?.uri ||
                    '/link.png'
                  }
                  mr="base"
                />
                <Box as="h4">
                  {resource.title || resource.relatedNode?.title}
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
