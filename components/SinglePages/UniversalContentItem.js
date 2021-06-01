import { useRouter } from 'next/router';

import { Layout, MainPhotoHeader } from 'components';
import { Box, Button, Heading, Longform, Section } from 'ui-kit';
import { getIdSuffix, getMetaData } from 'utils';
import IDS from 'config/ids';
import MetadataCallout from 'components/MetadataCallout';

export default function Page({ data, dropdownData } = {}) {
  const router = useRouter();

  if (data?.loading || router.isFallback) {
    return null;
  }

  const isEvent = getIdSuffix(data?.parentChannel?.id) === IDS.CHANNELS.EVENTS;

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
        </Box>
      </Section>
      {data.htmlContent && (
        <Section mb={{ _: 'l', lg: 'xxl' }}>
          {isEvent ? (
            <MetadataCallout data={data} />
          ) : (
            <Longform dangerouslySetInnerHTML={{ __html: data.htmlContent }} />
          )}
        </Section>
      )}
      {data.ctaLinks?.length ? (
        <Section mb={{ _: 'l', lg: 'xxl' }}>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            {data.ctaLinks?.map((cta, i) => (
              <Button
                key={i}
                onClick={() => router.push(cta.buttonLink)}
                m="xs"
              >
                {cta.buttonText}
              </Button>
            ))}
          </Box>
        </Section>
      ) : null}
    </Layout>
  );
}
