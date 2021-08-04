import { gql, useLazyQuery } from '@apollo/client';

export const SEARCH_CONTENT_ITEMS = gql`
  query search($query: String!, $first: Int, $after: String) {
    search(query: $query, first: $first, after: $after) {
      totalResults
      pageInfo {
        startCursor
        endCursor
      }
      edges {
        id
        cursor
        title
        summary
        coverImage {
          sources {
            uri
          }
        }

        relatedNode {
          id

          ... on Url {
            url
          }
        }
        action

        ...contentSearchResultNodeFragment
      }
    }
  }

  fragment contentSearchResultNodeFragment on ContentItemSearchResult {
    routing {
      pathname
    }
  }
`;

function useSearchContentItems(options = {}) {
  const [search, query] = useLazyQuery(SEARCH_CONTENT_ITEMS, {
    ...options,
    fetchPolicy: 'no-cache',
  });

  return [
    search,
    {
      contentItems: query?.data?.search?.edges,
      ...query,
    },
  ];
}

export default useSearchContentItems;
