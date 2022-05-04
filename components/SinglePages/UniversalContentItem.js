import { gql, useQuery } from '@apollo/client';
import {
  ArticleLink,
  ArticleLinks,
  CampusFilter,
  Layout,
  MainPhotoHeader,
} from 'components';
import MarketingHeadline from 'components/MarketingHeadline';
import MetadataCallout, { getMetadataObj } from 'components/MetadataCallout';
import IDS from 'config/ids';
import { format, isSameMonth, isSameYear, parseISO } from 'date-fns';
import { useRouter } from 'next/router';
import { Box, Button, CardGrid, Heading, Longform, Section } from 'ui-kit';
import { getIdSuffix, getMetaData, getSlugFromURL } from 'utils';

export default function Page({
  data,
  relatedContent,
  campuses = [],
  dropdownData,
} = {}) {
  const router = useRouter();

  // add rock authenticated links
  const { data: authData } = useQuery(
    gql`
      {
        currentUser {
          id
          rock {
            authToken
          }
        }
      }
    `
  );
  if (authData?.currentUser?.id) {
    const token = authData.currentUser.rock.authToken;
    const html = data?.htmlContent || '';
    const authedHTML = html.replace(
      /"([^"]*my\.longhollow\.com[^"]*)"/g,
      (match, p1) => `"${p1}?rckipid=${token}"`
    );
    data.htmlContent = authedHTML;
  }

  if (data?.loading || router.isFallback) {
    return null;
  }

  const button = data?.featureFeed?.features?.[0]?.action;
  const metadata = getMetadataObj(data);
  if (!metadata.location?.name && !metadata.location?.address)
    metadata.location = null;
  // if ministry is the only one, don't show the box
  const includeMetadataCallout = Object.values({
    ...metadata,
    ministry: null,
  }).some(val => Boolean(val));
  const EVENTS_CALLOUT_CHANNEL_IDS = [
    IDS.ABOUT_PAGES,
    IDS.CHILD_LINKS,
    IDS.CONNECT_PAGES,
    IDS.GIVE_PAGES,
    IDS.NEXT_STEPS_PAGES,
    IDS.STANDALONE_PAGES,
    IDS.WATCH_PAGES,
  ];
  const showEventsCallout = EVENTS_CALLOUT_CHANNEL_IDS.includes(
    getIdSuffix(data?.parentChannel?.id)
  );

  const dates = data.dates
    ?.split(',')
    .filter(date => !!date)
    .map(date => parseISO(date));

  let dateStr;

  if (dates?.length > 1) {
    if (isSameMonth(dates[0], dates[1])) {
      dateStr = `${format(dates[0], 'MMMM d')}-${format(dates[1], 'd, y')}`;
    } else if (isSameYear(dates[0], dates[1])) {
      dateStr = `${format(dates[0], 'MMMM d')} - ${format(
        dates[1],
        'MMMM d, y'
      )}`;
    } else {
      dateStr = `${format(dates[0], 'MMMM d, y')} - ${format(
        dates[1],
        'MMMM d, y'
      )}`;
    }
  } else if (dates?.length === 1) {
    dateStr = format(dates[0], 'MMMM d, y');
  }

  const childContent = data.childContentItemsConnection?.edges;
  let links = relatedContent?.getMinistryContent?.length
    ? relatedContent.getMinistryContent
    : [];

  links = links
    .filter(
      link =>
        getSlugFromURL(link?.sharing?.url) !== router.query.page &&
        (getIdSuffix(link.parentChannel?.id) === IDS.CHANNELS.EVENTS ||
          getIdSuffix(link.parentChannel?.id) === IDS.CHANNELS.ARTICLES) &&
        link.id !== data.id
    )
    .slice(0, 4);

  return (
    <Layout meta={getMetaData(data)} bg="bg_alt" dropdownData={dropdownData}>
      <MainPhotoHeader
        src={data.coverImage?.sources?.[0].uri || ''}
        width="auto"
        overlay=""
        mb={{ _: 'l', md: 'xxl' }}
        events={links?.length && showEventsCallout ? links : null}
      />
      <Section mb={{ _: 'l' }}>
        <Box>
          {data.subtitle && (
            <Heading
              fontSize="h2"
              lineHeight="h2"
              color="fg"
              fontWeight="800"
              opacity="50%"
            >
              {data.subtitle}
            </Heading>
          )}
          {data.title && (
            <Heading
              fontSize={{ _: '30px', md: 'h1' }}
              lineHeight={{ _: '36px', md: 'h1' }}
              color="fg"
              fontWeight="800"
              textTransform="uppercase"
            >
              {data.title}
            </Heading>
          )}
          {/* Eric trying to remove pub dates from Articles {data.publishDate && isArticle && (
            <Heading
              fontSize="h3"
              lineHeight="h3"
              color="neutrals.500"
              fontWeight="800"
              textTransform="uppercase"
            >
              {format(parseISO(data.publishDate), 'MMMM do, yyyy')}
            </Heading>
          )} */}
          {dateStr && (
            <Heading
              fontSize="h3"
              lineHeight="h3"
              color="neutrals.500"
              fontWeight="800"
              textTransform="uppercase"
            >
              {dateStr}
            </Heading>
          )}
        </Box>
      </Section>
      {button && !includeMetadataCallout ? (
        <Section mb="l">
          <Button onClick={() => router.push(button.url)}>
            {button.title}
          </Button>
        </Section>
      ) : null}
      {includeMetadataCallout ? (
        <Section
          mb={{
            _: 'l',
            lg: data.htmlContent ? 'l' : 'xxl',
          }}
        >
          <MetadataCallout data={data} />
        </Section>
      ) : null}
      {data.htmlContent && (
        <Section mb={{ _: 'l', lg: 'xxl' }}>
          <Longform dangerouslySetInnerHTML={{ __html: data.htmlContent }} />
        </Section>
      )}
      {data.ctaLinks?.length ? (
        <Section mb={{ _: 'l', md: 'xxl' }}>
          <CardGrid columns="1">
            {data.ctaLinks?.map((cta, i) => (
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
      {childContent?.length ? (
        <Section>
          <CampusFilter
            mb={{ _: 'l', md: 'xxl' }}
            filterWidth="200px"
            data={childContent}
            campuses={campuses}
          >
            {({ filteredData }) => (
              <ArticleLinks>
                {filteredData.map(({ node }) => (
                  <ArticleLink
                    key={node.id}
                    imageSrc={node.coverImage?.sources?.[0]?.uri}
                    title={node.title}
                    description={node.summary}
                    urlText={node.linkText}
                    url={
                      node.linkURL || `/${getSlugFromURL(node?.sharing?.url)}`
                    }
                  />
                ))}
              </ArticleLinks>
            )}
          </CampusFilter>
        </Section>
      ) : null}
    </Layout>
  );
}
