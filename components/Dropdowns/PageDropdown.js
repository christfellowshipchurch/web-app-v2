import { ArrowCircleRight } from 'phosphor-react';
import { useRouter } from 'next/router';
import { Photo } from 'components';
import Dropdowns from './Dropdowns.styles';
import { Box, CardGrid, Heading, Loader } from 'ui-kit';
import { getSlugFromURL } from 'utils';
import { useTheme } from 'styled-components';

export default function PageDropdown({
  featuredItems = [],
  nonFeaturedItems = [],
  baseRoute,
  loading,
  ...props
}) {
  const router = useRouter();
  const theme = useTheme();

  const hasNonFeaturedItems = Boolean(nonFeaturedItems.length);

  const numColumns =
    Math.ceil(featuredItems.length / 2) + Number(hasNonFeaturedItems);

  const mdColumns = numColumns > 1 ? (numColumns % 2 === 0 ? 2 : 3) : 1;

  return (
    <Dropdowns.Container {...props}>
      {loading ? (
        <Loader height="400px" centered />
      ) : (
        <CardGrid
          px="l"
          py="l"
          gridTemplateColumns={{
            _: 'repeat(1, 1fr)',
            md: `repeat(${mdColumns > 4 ? 4 : numColumns}, 1fr)`,
          }}
          gridColumnGap="base"
          gridRowGap={0}
        >
          {featuredItems.length
            ? [...Array(numColumns - Number(hasNonFeaturedItems)).keys()].map(
                i => {
                  const items = featuredItems.slice(i * 2, i * 2 + 2);

                  return (
                    <Box key={i} display="flex" flexDirection="column">
                      {items.map((item, i) => (
                        <Dropdowns.FeaturedItem key={item.id}>
                          <Photo
                            imageProps={{ height: '226px' }}
                            src={item.coverImage?.sources[0]?.uri}
                            inner={
                              item.showTitleOverImage && (
                                <Heading
                                  fontWeight="600"
                                  variant="h2"
                                  color="white"
                                >
                                  {item.title}
                                </Heading>
                              )
                            }
                            overlay={
                              item.showTitleOverImage
                                ? {
                                    color: theme.colors.almost_black,
                                    opacity: '30%',
                                  }
                                : undefined
                            }
                            dropShadow={false}
                            onClick={() =>
                              router.push(
                                `${baseRoute}/${getSlugFromURL(item?.sharing?.url)}`
                              )
                            }
                          />
                        </Dropdowns.FeaturedItem>
                      ))}
                    </Box>
                  );
                }
              )
            : null}
          {nonFeaturedItems.length ? (
            <Box display="flex" flexDirection="column" width="100%">
              {nonFeaturedItems.map((item, i) => (
                <Dropdowns.NonFeaturedItem
                  key={i}
                  onClick={() =>
                    router.push(`${baseRoute}/${getSlugFromURL(item?.sharing?.url)}`)
                  }
                >
                  <Heading
                    fontSize="l"
                    lineHeight="s"
                    fontWeight="500"
                    color="white"
                  >
                    {item.title}
                  </Heading>
                  <ArrowCircleRight
                    size="32"
                    color="white"
                    style={{ minWidth: '32px', marginLeft: theme.space.xs }}
                  />
                </Dropdowns.NonFeaturedItem>
              ))}
            </Box>
          ) : null}
        </CardGrid>
      )}
    </Dropdowns.Container>
  );
}
