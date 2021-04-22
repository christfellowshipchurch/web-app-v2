import PageDropdown from './PageDropdown';
import useContentChannel from 'hooks/useContentChannel';
import IDS from 'config/ids';

export default function DropdownConnect({ ...props }) {
  const { content, loading } = useContentChannel({
    variables: {
      itemId: `ContentChannel:${IDS.CONNECT_PAGES}`,
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
      baseRoute="/connect"
      {...props}
    />
  );
}
