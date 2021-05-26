import { useRouter } from 'next/router';

import { Layout, MainPhotoHeader } from 'components';
import { Box, Heading, Longform, Section, Text } from 'ui-kit';
import { getMetaData } from 'utils';

export default function Page({ data, dropdownData } = {}) {
  const router = useRouter();

  if (data?.loading || router.isFallback) {
    return null;
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
          <Longform dangerouslySetInnerHTML={{ __html: data.htmlContent }} />
        </Section>
      )}
      {data.scriptures?.map(scripture => (
        <Section key={scripture.reference} mb={{ _: 'l', lg: 'xxl' }}>
          <Box mb="s" display="flex" alignItems="flex-end">
            <Heading variant="h3" fontWeight="bold" mr="xs">
              {scripture.reference}
            </Heading>
            <Heading variant="s">{scripture.version}</Heading>
          </Box>
          <Longform dangerouslySetInnerHTML={{ __html: scripture.html }} />
          <Text variant="xs">{scripture.copyright}</Text>
        </Section>
      ))}
    </Layout>
  );
}
