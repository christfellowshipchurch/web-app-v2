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

  // Add a check that removes any results that don't have a url
  // This is a temporary fix to remove duplicate results with no url
  if (query?.data?.search?.edges) {
    query.data.search.edges = query.data.search.edges.filter(
      edge => edge.routing?.pathname
    );
  }

  console.log(query?.data?.search?.edges);

  return [
    search,
    {
      contentItems: query?.data?.search?.edges,
      ...query,
    },
  ];
}

export default useSearchContentItems;
