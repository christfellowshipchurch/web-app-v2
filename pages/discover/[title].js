import { useRouter } from 'next/router';
import startCase from 'lodash/startCase';

import { getUrlFromRelatedNode } from 'utils';
import { useDiscoverFilterCategoriesPreview } from 'hooks';

import { Box, DefaultCard, CardGrid, Cell, Icon, Button, utils } from 'ui-kit';
import { Layout, CustomLink } from 'components';

export default function DiscoverFilterCategoriesPreview(props) {
  const { query, back } = useRouter();
  const type = 'UniversalContentItem';
  const contentId = type.concat(':', query?.id);

  const { categoryTitle, contentItems } = useDiscoverFilterCategoriesPreview({
    variables: { id: contentId, first: 21 },
    fetchPolicy: 'cache-and-network',
  });

  return (
    <Layout title={startCase(query?.title)}>
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 'l', lg: 'xl' }}
      >
        <Box
          alignItems="center"
          display="flex"
          justifyContent="space-between"
          mb="l"
        >
          <Box as="h1" mb="0">
            {categoryTitle}
          </Box>
          <Button variant="link" onClick={() => back()} pr="0">
            <Icon name="angleLeft" /> Back
          </Button>
        </Box>
        <CardGrid columns="3" mb="xl">
          {contentItems.map(n => (
            <CustomLink
              Component={DefaultCard}
              as="a"
              boxShadow="none"
              coverImage={n?.coverImage?.sources[0]?.uri}
              description={n?.summary}
              href={getUrlFromRelatedNode(n)}
              key={n?.id}
              scaleCard={false}
              scaleCoverImage={true}
              title={n?.title}
            />
          ))}
        </CardGrid>
      </Cell>
    </Layout>
  );
}
