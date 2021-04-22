import PageDropdown from './PageDropdown';
import useContentChannel from 'hooks/useContentChannel';
import IDS from 'config/ids';

export default function DropdownNextSteps({ ...props }) {
  const { content, loading } = useContentChannel({
    variables: {
      itemId: `ContentChannel:${IDS.NEXT_STEPS_PAGES}`,
    },
  });

  if (loading) {
    return <PageDropdown loading />;
  }

  const featuredItems = content.edges
    ?.filter(({ node }) => node.isFeatured)
    ?.map(({ node }) => node);
  const nonFeaturedItems = content.edges
    ?.filter(({ node }) => !node.isFeatured)
    ?.map(({ node }) => node);

  return (
    <PageDropdown
      featuredItems={featuredItems}
      nonFeaturedItems={nonFeaturedItems}
      baseRoute="/next-steps"
      {...props}
    />
  );
}
