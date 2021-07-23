import { useRouter } from 'next/router';
import { format, isSameMonth, isSameYear, parseISO } from 'date-fns';

import { Layout, MainPhotoHeader } from 'components';
import { Box, Button, CardGrid, Heading, Longform, Section } from 'ui-kit';
import { getIdSuffix, getMetaData } from 'utils';
import IDS from 'config/ids';
import MetadataCallout, { getMetadataObj } from 'components/MetadataCallout';
import MarketingHeadline from 'components/MarketingHeadline';

export default function Page({ data, dropdownData } = {}) {
  const router = useRouter();

  if (data?.loading || router.isFallback) {
    return null;
  }

  const button = data?.featureFeed?.features?.[0]?.action;
  const metadata = getMetadataObj(data);
  if (!metadata.location?.name && !metadata.location?.address)
    metadata.location = null;
  const includeMetadataCallout = Object.values(metadata).some(val =>
    Boolean(val)
  );
  const isArticle =
    getIdSuffix(data?.parentChannel?.id) === IDS.CHANNELS.ARTICLES;
  const isVolunteerPositions =
    getIdSuffix(data?.parentChannel?.id) === IDS.CHANNELS.VOLUNTEER_POSITIONS;

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

  return (
    <Layout meta={getMetaData(data)} bg="bg_alt" dropdownData={dropdownData}>
      <MainPhotoHeader
        src={data.coverImage?.sources?.[0].uri || ''}
        width="auto"
        overlay=""
        mb={{ _: 'l', md: 'xxl' }}
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
              fontSize="h1"
              lineHeight="h1"
              color="fg"
              fontWeight="800"
              textTransform="uppercase"
            >
              {data.title}
            </Heading>
          )}
          {isVolunteerPositions && data.ministry && (
            <Heading
              fontSize="h3"
              lineHeight="h3"
              color="fg"
              fontWeight="800"
              opacity="60%"
            >
              {data.ministry}
            </Heading>
          )}
          {data.publishDate && isArticle && (
            <Heading
              fontSize="h5"
              lineHeight="h5"
              color="fg"
              fontWeight="800"
              textTransform="uppercase"
            >
              {`Published: ${format(parseISO(data.publishDate), 'MMMM d, y')}`}
            </Heading>
          )}
          {dateStr && (
            <Heading
              fontSize="h5"
              lineHeight="h5"
              color="fg"
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
    </Layout>
  );
}
