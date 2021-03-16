import { useRouter } from 'next/router';

import useContentItem from 'hooks/useContentItem';
import { Layout, MainPhotoHeader, MarketingHeadline } from 'components';
import { Box, CardGrid } from 'ui-kit';
import { getChildrenByType } from 'utils';
import IDS from 'config/ids';

function getItemId(id) {
  return `UniversalContentItem:${id}`;
}

export default function Item() {
  const router = useRouter();
  const { page } = router.query;
  const { item, loading } = useContentItem({
    variables: { itemId: getItemId(page) },
  });

  console.log(item);

  if (loading) {
    return null;
  }

  const generalChildren = getChildrenByType(item.childContentItemsConnection, IDS.GENERAL);

  return (
    <Layout title={`About - ${item.title}`} bg="bg_alt">
      <MainPhotoHeader
        src={item.coverImage?.sources?.[0].uri || ''}
        title={item.title}
        subtitle={item.subtitle}
        summary={item.summary}
      />
      {item.htmlContent && (
        <Box
          px="xxl"
          py="xl"
          dangerouslySetInnerHTML={{ __html: item.htmlContent }}
        />
      )}
      {generalChildren.length ? (
        <CardGrid px="xxl" py="xl" columns="1">
          {generalChildren.map(({ node }, i) => (
            <MarketingHeadline
              image={{
                src: node.coverImage?.sources?.[0]?.uri,
              }}
              justify={i % 2 === 0 ? 'left' : 'right'}
              title={node.title}
              description={node.summary}
              actions={[
                {
                  label: 'Connect',
                  onClick: () => {},
                },
              ]}
            />
          ))}
        </CardGrid>
      ) : null}
    </Layout>
  );
}
