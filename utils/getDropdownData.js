import IDS from 'config/ids';
import { GET_CONTENT_CHANNEL } from 'hooks/useContentChannel';

function getItems(content) {
  const featuredItems = content
    ?.filter(({ node }) => node.isFeatured)
    ?.map(({ node }) => node);
  const nonFeaturedItems = content
    ?.filter(({ node }) => !node.isFeatured)
    ?.map(({ node }) => node);

  return { featuredItems, nonFeaturedItems };
}

async function getContent(apolloClient, id) {
  const content = await apolloClient.query({
    query: GET_CONTENT_CHANNEL,
    variables: {
      itemId: `ContentChannel:${id}`,
    },
  });

  return content?.data?.node?.childContentItemsConnection?.edges;
}

const getDataGenerator = apolloClient => async id => {
  const content = await getContent(apolloClient, id);
  const items = getItems(content);

  return items;
};

export default async function getDropdownData(apolloClient) {
  const getData = getDataGenerator(apolloClient);

  const about = await getData(IDS.ABOUT_PAGES);
  const connect = await getData(IDS.CONNECT_PAGES);
  const nextSteps = await getData(IDS.NEXT_STEPS_PAGES);

  return {
    about,
    connect,
    'next-steps': nextSteps,
  };
}
