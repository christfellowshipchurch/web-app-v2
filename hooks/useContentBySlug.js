import { gql, useQuery } from '@apollo/client';
import { UNIVERSAL_CONTENT_ITEM_FRAGMENT } from './useContentItem';
import { MEDIA_CONTENT_ITEM_FRAGMENT } from './useMediaContentItem';
import { WEEKEND_CONTENT_ITEM_FRAGMENT } from './useWeekendContentItem';
import { CONTENT_SERIES_CONTENT_ITEM_FRAGMENT } from './useMessageChannel';
import { DEVOTIONAL_CONTENT_ITEM_FRAGMENT } from './useDevotionalContentItem';

export const GET_CONTENT_BY_SLUG = gql`
  query getContentBySlug($slug: String!) {
    getContentBySlug(slug: $slug) {
      ...ContentSeriesContentItemFragment
      ...UniversalContentItemFragment
      ...DevotionalContentItemFragment
      ...MediaContentItemFragment
      ...WeekendContentItemFragment
    }
  }
  ${CONTENT_SERIES_CONTENT_ITEM_FRAGMENT}
  ${UNIVERSAL_CONTENT_ITEM_FRAGMENT}
  ${DEVOTIONAL_CONTENT_ITEM_FRAGMENT}
  ${MEDIA_CONTENT_ITEM_FRAGMENT}
  ${WEEKEND_CONTENT_ITEM_FRAGMENT}
`;

function useContentBySlug(options = {}) {
  const query = useQuery(GET_CONTENT_BY_SLUG, options);

  return {
    content: query?.data?.getContentBySlug || [],
    ...query,
  };
}

export default useContentBySlug;
