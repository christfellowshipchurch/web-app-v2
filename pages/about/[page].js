import { useRouter } from 'next/router';

import { GET_CONTENT_ITEM } from 'hooks/useContentItem';
import {
  CampusFilter,
  EventCallout,
  EventsCallout,
  Layout,
  MainPhotoHeader,
  MarketingHeadline,
} from 'components';
import { getChannelId, getChildrenByType, getIdSuffix, getItemId } from 'utils';
import IDS from 'config/ids';
import { initializeApollo } from 'lib/apolloClient';
import { CardGrid, Longform, Section, theme } from 'ui-kit';
import { GET_CONTENT_CHANNEL } from 'hooks/useContentChannel';
import { Info } from 'phosphor-react';

export default function Page({ data, submenuLinks }) {
  const router = useRouter();

  const generalChildren = getChildrenByType(
    data.childContentItemsConnection?.edges,
    IDS.GENERAL
  );

  const links = submenuLinks.filter(
    ({ node: link }) =>
      link.isFeatured && getIdSuffix(link.id) !== router.query.page
  );

  return (
    <Layout title={`About - ${data.title}`} bg="bg_alt">
      <MainPhotoHeader
        src={data.coverImage?.sources?.[0].uri || ''}
        title={data.title}
        subtitle={data.subtitle}
        summary={data.summary}
      />
      {links.length ? (
        <Section>
          <EventsCallout
            title="About Long Hollow"
            icon={
              <Info
                size={24}
                style={{
                  color: theme.colors.neutrals[900],
                  opacity: '60%',
                  marginRight: theme.space.xxs,
                }}
              />
            }
          >
            {links.splice(0, 4).map(({ node: link }) => (
              <EventCallout
                key={link.id}
                title={link.title}
                description={link.subtitle}
                imageSrc={link.coverImage?.sources?.[0]?.uri}
                onClick={() => router.push(`/about/${getIdSuffix(link.id)}`)}
              />
            ))}
          </EventsCallout>
        </Section>
      ) : null}
      {data.htmlContent && (
        <Section>
          <Longform
            px="xxl"
            py="xl"
            dangerouslySetInnerHTML={{ __html: data.htmlContent }}
          />
        </Section>
      )}
      {generalChildren.length ? (
        <Section>
          <CampusFilter
            px="xxl"
            py="xl"
            filterWidth="200px"
            data={generalChildren}
          >
            {({ filteredData }) => (
              <CardGrid columns="1">
                {filteredData.map(({ node }, i) => (
                  <MarketingHeadline
                    key={node.id}
                    image={{
                      src: node.coverImage?.sources?.[0]?.uri,
                    }}
                    justify={i % 2 === 0 ? 'left' : 'right'}
                    title={node.title}
                    description={node.summary}
                    actions={
                      node.featureFeed?.features?.length
                        ? [
                            {
                              label: node.featureFeed?.features[0].action.title,
                              onClick: () => {
                                router.push(
                                  node.featureFeed?.features[0].action
                                    .relatedNode.url
                                );
                              },
                            },
                          ]
                        : []
                    }
                  />
                ))}
              </CardGrid>
            )}
          </CampusFilter>
        </Section>
      ) : null}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();

  try {
    const pageResponse = await apolloClient.query({
      query: GET_CONTENT_ITEM,
      variables: {
        itemId: getItemId(context.params.page),
      },
    });

    const submenuLinks = await apolloClient.query({
      query: GET_CONTENT_CHANNEL,
      variables: {
        itemId: getChannelId(IDS.ABOUT_PAGES),
      },
    });

    return {
      props: {
        initialApolloState: apolloClient.cache.extract(),
        data: pageResponse?.data?.node,
        submenuLinks:
          submenuLinks?.data?.node?.childContentItemsConnection?.edges,
      },
    };
  } catch (e) {
    return {
      redirect: { destination: '/about', permanent: false },
    };
  }
}
