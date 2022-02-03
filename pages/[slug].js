import {
  ContentChannel,
  ContentSeriesContentItem,
  DevotionalContentItem,
  MediaContentItem,
  UniversalContentItem,
} from 'components/SinglePages';
import IDS from 'config/ids';
import { GET_CAMPUSES } from 'hooks/useCampuses';
import { GET_CONTENT_BY_SLUG } from 'hooks/useContentBySlug';
import { GET_MINISTRY_CONTENT } from 'hooks/useMinistryContent';
import { initializeApollo } from 'lib/apolloClient';
import { getIdSuffix, parseItemId } from 'utils';

export default function Page({
  data,
  relatedContent,
  campuses,
  type,
  dropdownData,
}) {
  switch (type) {
    case 'DevotionalContentItem':
      return <DevotionalContentItem data={data} dropdownData={dropdownData} />;
    case 'UniversalContentItem':
      return (
        <UniversalContentItem
          data={data}
          campuses={campuses}
          relatedContent={relatedContent}
          dropdownData={dropdownData}
        />
      );
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

  try {
    let pageResponse;
    pageResponse = await apolloClient.query({
      query: GET_CONTENT_BY_SLUG,
      variables: {
        slug: context.params.slug,
      },
      skip: !context.params.slug,
    });

    const campusesResponse = await apolloClient.query({
      query: GET_CAMPUSES,
    });

    const data = pageResponse?.data?.getContentBySlug;
    const itemId = data?.id;

    if (data?.redirectURL)
      return { redirect: { destination: data.redirectURL, permanent: false } };

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

      const pageData = pageResponse?.data?.getContentBySlug;
      let ministryResponse;
      if (pageData?.ministry) {
        ministryResponse = await apolloClient.query({
          query: GET_MINISTRY_CONTENT,
          variables: {
            ministry: pageData?.ministry,
          },
        });
      }

      const props = {
        initialApolloState: apolloClient.cache.extract(),
        data: pageResponse?.data?.getContentBySlug,
        campuses: campusesResponse.data?.campuses || [],
        type,
      };

      if (ministryResponse?.data) {
        props.relatedContent = ministryResponse?.data;
      }

      return { props };
    }
  } catch (e) {
    let statusCode = 400;
    if (e.graphQLErrors.find(e => e.message.includes('does not exist'))) {
      statusCode = 404;
    }

    context.res.statusCode = statusCode;
    return {
      props: {
        initialApolloState: apolloClient.cache.extract(),
        error: {
          statusCode,
          graphQLErrors: e.graphQLErrors,
        },
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
