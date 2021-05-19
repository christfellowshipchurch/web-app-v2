import { LargeImage, Layout } from 'components';
import { Box, Heading, Section } from 'ui-kit';
import { useRouter } from 'next/router';
import { getMetaData, getSlugFromURL } from 'utils';
import { useTheme } from 'styled-components';

export default function Series({ series } = {}) {
  const router = useRouter();
  const theme = useTheme();

  if (router.isFallback) {
    return null;
  }

  return (
    <Layout meta={getMetaData(series)}>
      <Section>
        <Heading
          mt="l"
          textAlign="center"
          fontWeight="800"
          fontSize="h1"
          lineHeight="h1"
        >
          {series.name}
        </Heading>
        <Box
          display="flex"
          my="m"
          mr={`-${theme.space.m}`}
          px={{ _: 'l', md: 'xxl' }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {series.childContentItemsConnection?.edges.map(({ node }) => (
            <LargeImage
              key={node.id}
              text={node.title}
              color="white"
              src={node.coverImage.sources?.[0].uri}
              height="350px"
              maxWidth="400px"
              mr="m"
              mb="m"
              action={() =>
                router.push(`/watch/${getSlugFromURL(node?.sharing?.url)}`)
              }
            />
          ))}
        </Box>
      </Section>
    </Layout>
  );
}
