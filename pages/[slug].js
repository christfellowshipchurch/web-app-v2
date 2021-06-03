import { getIdSuffix, parseItemId } from 'utils';
import { initializeApollo } from 'lib/apolloClient';
import { GET_CONTENT_BY_SLUG } from 'hooks/useContentBySlug';
import {
  UniversalContentItem,
  ContentSeriesContentItem,
  ContentChannel,
  DevotionalContentItem,
  MediaContentItem,
} from 'components/SinglePages';
import IDS from 'config/ids';

export default function Page({ data, type, dropdownData }) {
  switch (type) {
    case 'DevotionalContentItem':
      return <DevotionalContentItem data={data} dropdownData={dropdownData} />;
    case 'UniversalContentItem':
      return <UniversalContentItem data={data} dropdownData={dropdownData} />;
    case 'ContentChannel':
      return <ContentChannel series={data} dropdownData={dropdownData} />;
    case 'ContentSeriesContentItem':
      return (
        <ContentSeriesContentItem item={data} dropdownData={dropdownData} />
      );
    case 'MediaContentItem':
    case 'WeekendContentItem':
      return <MediaContentItem item={data} dropdownData={dropdownData} />;
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

  const data = pageResponse?.data?.getContentBySlug;
  const itemId = data?.id;

  if (data?.parentChannel?.id) {
    const parentId = getIdSuffix(data?.parentChannel?.id);
    switch (parentId) {
      case IDS.ABOUT_PAGES:
        return {
          props: {},
          redirect: {
            destination: `/about/${context.params.slug}`,
            permanent: false,
          },
        };
      case IDS.CONNECT_PAGES:
        return {
          redirect: {
            destination: `/connect/${context.params.slug}`,
            permanent: false,
          },
        };
      case IDS.NEXT_STEPS_PAGES:
        return {
          redirect: {
            destination: `/next-steps/${context.params.slug}`,
            permanent: false,
          },
        };
      default:
        break;
    }
  }

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
