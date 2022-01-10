import LargeImage from 'components/LargeImage';
import { format, parseISO } from 'date-fns';
import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';
import { Box } from 'ui-kit';
import { getSlugFromURL } from 'utils';

export default function Siblings({ root }) {
  const theme = useTheme();
  const router = useRouter();

  return root.siblingContentItemsConnection?.edges?.length ? (
    <Box
      display="flex"
      my="m"
      mr={`-${theme.space.m}`}
      px={{ _: 'l', md: 'xxl' }}
      flexWrap="wrap"
      justifyContent="center"
    >
      {root.siblingContentItemsConnection.edges.map(({ node }) => (
        <LargeImage
          key={node.id}
          text={node.title}
          subtext={
            node.publishDate &&
            format(parseISO(node.publishDate), 'MMMM do, yyyy')
          }
          color="white"
          src={node.coverImage.sources?.[0].uri}
          maxWidth="300px"
          mr="m"
          mb="m"
          size="m"
          action={() => router.push(`/${getSlugFromURL(node?.sharing?.url)}`)}
        />
      ))}
    </Box>
  ) : null;
}
