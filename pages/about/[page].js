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
import { getChannelId, getIdSuffix, getItemId, getMetaData } from 'utils';
import IDS from 'config/ids';
import { initializeApollo } from 'lib/apolloClient';
import { CardGrid, Longform, Section, theme } from 'ui-kit';
import { GET_CONTENT_CHANNEL } from 'hooks/useContentChannel';
import { Info } from 'phosphor-react';

export default function Page({ data, submenuLinks }) {
  const router = useRouter();

  const links = submenuLinks.filter(
    ({ node: link }) =>
      link.isFeatured && getIdSuffix(link.id) !== router.query.page
  );

  const childContent = data.childContentItemsConnection?.edges;
  const ctaLinks = data.ctaLinks;

  return (
    <Layout meta={getMetaData(data)} bg="bg_alt">
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
            {links.slice(0, 4).map(({ node: link }) => (
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
      {childContent?.length ? (
        <Section>
          <CampusFilter
            px="xxl"
            py="xl"
            filterWidth="200px"
            data={childContent}
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
                      node.linkText
                        ? [
                            {
                              label: node.linkText,
                              onClick: () => {
                                router.push(
                                  node.linkURL ||
                                    `/page/${getIdSuffix(node.id)}`
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
      {ctaLinks.length ? (
        <Section bg="rgba(142, 142, 147, 0.12)">
          <CardGrid px="xxl" py="xl" columns="1">
            {ctaLinks?.map((cta, i) => (
              <MarketingHeadline
                key={i}
                image={{
                  src: cta.image?.sources?.[0]?.uri,
                }}
                justify={i % 2 === 0 ? 'left' : 'right'}
                title={cta.title}
                description={cta.body}
                actions={[
                  {
                    label: cta.buttonText,
                    onClick: () => router.push(cta.buttonLink),
                  },
                ]}
              />
            ))}
          </CardGrid>
        </Section>
      ) : null}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();

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
}
