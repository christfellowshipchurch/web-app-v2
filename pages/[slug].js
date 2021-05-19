import { parseItemId } from 'utils';
import { initializeApollo } from 'lib/apolloClient';
import { GET_CONTENT_BY_SLUG } from 'hooks/useContentBySlug';
import {
  UniversalContentItem,
  WeekendContentItem,
  ContentSeriesContentItem,
  ContentChannel,
} from 'components/SinglePages';

export default function Page({ data, type, dropdownData }) {
  switch (type) {
    case 'UniversalContentItem':
      return <UniversalContentItem data={data} dropdownData={dropdownData} />;
    case 'ContentChannel':
      return (
        <ContentChannel series={data} dropdowndropdownData={dropdownData} />
      );
    case 'ContentSeriesContentItem':
      return (
        <ContentSeriesContentItem
          item={data}
          dropdowndropdownData={dropdownData}
        />
      );
    case 'WeekendContentItem':
      return (
        <WeekendContentItem item={data} dropdowndropdownData={dropdownData} />
      );
    default:
      return null;
  }
}

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();

  let pageResponse;
  pageResponse = await apolloClient.query({
    query: GET_CONTENT_BY_SLUG,
    variables: {
      slug: context.params.slug,
    },
    skip: !context.params.slug,
  });

  const itemId = pageResponse?.data?.getContentBySlug?.id;

  if (itemId) {
    const { type } = parseItemId(itemId);

    return {
      props: {
        initialApolloState: apolloClient.cache.extract(),
        data: pageResponse?.data?.getContentBySlug,
        type,
      },
    };
  }

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      redirect: { destination: '/', permanent: false },
    },
  };
}
