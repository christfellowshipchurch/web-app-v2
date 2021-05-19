import IDS from 'config/ids';
import useContentChannel from 'hooks/useContentChannel';
import { useRouter } from 'next/router';
import { Section } from 'ui-kit';
import { getSlugFromURL } from 'utils';
import HorizontalRow from './HorizontalRow';

const ConnectTiles = props => {
  const router = useRouter();
  const { content, loading } = useContentChannel({
    variables: {
      itemId: `ContentChannel:${IDS.CONNECT_PAGES}`,
    },
  });

  if (loading || !content.edges) {
    return null;
  }

  const featuredItems = content.edges
    .filter(({ node }) => node.isFeatured)
    .map(({ node }) => node);

  return featuredItems.length ? (
    <Section backgroundColor="neutrals.800">
      <HorizontalRow
        py={{ _: 'l', lg: 'xxl' }}
        width="100%"
        imageProps={{
          height: '226px',
        }}
        items={featuredItems.map(item => ({
          src: item.coverImage?.sources?.[0]?.uri,
          title: item?.showTitleOverImage && item?.title,
          action: () =>
            router.push(`/connect/${getSlugFromURL(item?.sharing?.url)}`),
        }))}
        {...props}
      />
    </Section>
  ) : null;
};

export default ConnectTiles;
