import { ArrowCircleRight } from 'phosphor-react';
import { useRouter } from 'next/router';
import { Photo } from 'components';
import Dropdowns from './Dropdowns.styles';
import { Box, CardGrid, Heading, Loader, theme } from 'ui-kit';
import { getIdSuffix } from 'utils';

export default function PageDropdown({
  featuredItems = [],
  nonFeaturedItems = [],
  baseRoute,
  loading,
  ...props
}) {
  const router = useRouter();

  const hasNonFeaturedItems = Boolean(nonFeaturedItems.length);

  const numColumns =
    Math.ceil(featuredItems.length / 2) + Number(hasNonFeaturedItems);

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
            md: `repeat(${numColumns > 2 ? 2 : numColumns}, 1fr)`,
            lg: `repeat(${numColumns > 3 ? 3 : numColumns}, 1fr)`,
            xl: `repeat(${numColumns > 4 ? 4 : numColumns}, 1fr)`,
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
                              <Heading
                                fontWeight="600"
                                variant="h2"
                                color="white"
                              >
                                {item.title}
                              </Heading>
                            }
                            overlay={{
                              color: theme.colors.almost_black,
                              opacity: '30%',
                            }}
                            onClick={() =>
                              router.push(
                                `${baseRoute}/${getIdSuffix(item.id)}`
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
                    router.push(`${baseRoute}/${getIdSuffix(item.id)}`)
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
                  <ArrowCircleRight size="32" color="white" />
                </Dropdowns.NonFeaturedItem>
              ))}
            </Box>
          ) : null}
        </CardGrid>
      )}
    </Dropdowns.Container>
  );
}
