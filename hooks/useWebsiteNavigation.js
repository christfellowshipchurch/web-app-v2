import { gql, useQuery } from '@apollo/client';

export const GET_WEBSITE_HEADER = gql`
  query websiteNavigation($website: String!) {
    getWebsiteNavigation(website: $website) {
      id
      images {
        sources {
          uri
        }
        name
      }
      navigationLinks {
        call
        action
      }
      quickAction {
        call
        action
      }
      menuLinks: footerLinks {
        call
        action
      }
    }
  }
`;

function useWebsiteNavigation(options) {
  const query = useQuery(GET_WEBSITE_HEADER, options);

  return {
    navigation: query?.data?.getWebsiteNavigation || [],
    ...query,
  };
}

export default useWebsiteNavigation;
