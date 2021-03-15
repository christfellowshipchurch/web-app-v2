import { ArrowCircleRight } from 'phosphor-react';
import { useRouter } from 'next/router';
import { Photo } from 'components';
import { NonFeaturedItem } from './Dropdowns.styles';
import { Box, CardGrid, Heading, t, theme } from 'ui-kit';

export default function PageDropdown({ featuredItems, nonFeaturedItems }) {
  const router = useRouter();

  const numColumns = Math.ceil(featuredItems.length / 2) + 1;

  return (
    <Box bg="bg" p="l">
      <CardGrid columns={numColumns} gridColumnGap="base" mb="l" height="450px">
        {numColumns > 1 ?? [...Array(numColumns - 1).keys()].map(i => {
          const items = featuredItems.length >= i * 3 ? featuredItems.slice(i * 2, i * 3) : [featuredItems[i * 2]];
          return (
            <Box display="flex" flexDirection="column">
              {items.map((item, i) => (
                <Photo
                  key={item.node.id}
                  src={item.node.coverImage?.sources[0]?.uri}
                  inner={
                    <Heading fontWeight="600" variant="h2" color="white">{item.node.title}</Heading>
                  }
                  overlay={{ color: theme.colors.almost_black, opacity: '30%' }}
                />
              ))}
            </Box>
          );
        })}
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
        >
          {nonFeaturedItems.map((item, i) => (
            <NonFeaturedItem
              key={i}
              onClick={() => router.push(item.uri)}
            >
              <Heading
                fontSize="l"
                lineHeight="h2"
                fontWeight="500"
                color="white"
              >
                {item.title}
              </Heading>
              <ArrowCircleRight size="32" color="white" />
            </NonFeaturedItem>
          ))}
        </Box>
      </CardGrid>
    </Box>
  );
}
