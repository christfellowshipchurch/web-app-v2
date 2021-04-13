import PropTypes from 'prop-types';

import { CardGrid, HorizontalHighlightCard } from 'ui-kit';
import { CustomLink } from 'components';

import { getURLFromType } from 'utils';
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
    <CardGrid columns="1" gridRowGap={{ _: 's', md: 'base' }}>
      {props.resources.map(resource => (
        <CustomLink
          as="a"
          key={resource.relatedNode?.id}
          href={getURLFromType(resource.relatedNode)}
          Component={HorizontalHighlightCard}
          type="HIGHLIGHT_X_SMALL"
          coverImage={
            resource.relatedNode?.coverImage?.sources[0]?.uri || '/link.png'
          }
          coverImageTitle={resource.title || resource.relatedNode?.title}
          coverImageOverlay={true}
          onClick={() => {
            amplitude.trackEvent({
              category: 'Group Item',
              action: `${resource.title} - Group Resource Action`,
              label: `${resource.title} Button`,
            });
          }}
        />
      ))}
    </CardGrid>
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
