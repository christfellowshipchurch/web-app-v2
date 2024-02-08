import CustomLink from 'components/CustomLink';
import { Box, Button, HorizontalHighlightCard, HtmlRenderer } from 'ui-kit';
import { getThereFirstCards, imageCards } from './getThereFirstData';
import Styled from './getThereFirstComponents.styles';
import Video from 'components/Video';

export const RaceToTheNextGen = () => {
  return (
    <Box
      py="xl"
      px="base"
      backgroundImage="linear-gradient(to right, #2E8A93, #0D264F)"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box
        color="white"
        textAlign="center"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box as="h1" maxWidth={820} mb={{ _: 'base', md: 'l' }}>
          In the race to the heart of the next generation,
          <br />
          <Box as="span" textDecoration="underline">
            the first one there wins.
          </Box>
        </Box>
        <Box maxWidth={860}>
          In a world where young people are being robbed of their purpose and
          identity like never before, our church needs a new battle strategy.
          That’s why we have a vision to{' '}
          <Box as="span" fontWeight="bold" textDecoration="underline">
            get there first.
          </Box>{' '}
          We are dedicated to share the love and message of Jesus with the next
          generation before culture tries to convince them otherwise. Our goal
          is that kids, students, and young adults would know how much God loves
          them and has a plan and a purpose for their lives.
        </Box>
      </Box>
      {/* Video */}
      <Box
        boxShadow="l"
        borderRadius="base"
        mx="auto"
        my="base"
        overflow="hidden"
      >
        <Video
          width={{ _: 350, sm: 400, md: 600, lg: 800 }}
          wistiaId={'acwh7blcn4'}
        />
      </Box>
      <Button mt={{ _: 'base', md: 'l' }} href="#testing">
        JOIN THE RACE
      </Button>
    </Box>
  );
};

export const GettingThereFirst = () => {
  return (
    <Box py="xl">
      <Box
        as="h1"
        color="secondary"
        textAlign="center"
        mx={{ _: 'base', md: 'auto' }}
      >
        How We Are Getting There First in 2024
      </Box>
      <Box
        as="p"
        fontSize="16px"
        maxWidth={780}
        textAlign="center"
        mx={{ _: 'base', md: 'auto' }}
        mt="base"
      >
        We’re committed to do more than ever before to reach the next
        generation. That means creating more spaces and places for kids,
        students, and young adults to discover their purpose and learn about the
        love of Jesus.
      </Box>

      {/* Cards */}
      <Styled.GetThereFirstCardsContainer>
        {getThereFirstCards?.map((card, index) => (
          <Styled.GetThereFirstCards ml="base" mr={index === 2 ? 'base' : 0}>
            <Box
              minWidth={{ _: 340, md: 300 }}
              textAlign="center"
              mx={{ _: 's', md: 'base' }}
              mt="base"
              pt="s"
            >
              <Box as="h3" textAlign="center" mx="auto" maxWidth={{ lg: 220 }}>
                {card?.title}
              </Box>
              <Box mt="base" mx="base">
                <HtmlRenderer htmlContent={card?.description} />
              </Box>
            </Box>
            {/* CTA Buttons */}
            {card?.cta?.map((cta, index) => (
              <Button
                bg="transparent"
                border="solid 2px white"
                href={cta?.action}
                fontSize="15px"
                mt={index === 0 ? 'base' : 's'}
                mx="auto"
                maxWidth="260px"
                mb={index !== 0 ? { _: 'base' } : '0px'}
              >
                {cta?.title}
              </Button>
            ))}
          </Styled.GetThereFirstCards>
        ))}
      </Styled.GetThereFirstCardsContainer>
    </Box>
  );
};

export const Resources = () => {
  return (
    <Box py="xl">
      <Box
        px={{ _: 's', md: 0 }}
        mx={{ _: 0, md: 'auto' }}
        maxWidth={{ _: 'auto', md: '95vw' }}
      >
        <Box>
          <Box
            as="h1"
            mb="s"
            mx={{ _: 's', md: 'auto' }}
            fontSize="2rem"
            textAlign="center"
            color="secondary"
          >
            A church for every generation.
          </Box>
          <Box textAlign="center">
            Learn about what Christ Fellowship has to offer for all of the kids,
            students, and young adults in your life.
          </Box>
        </Box>
        <Styled.ImageCardsContainer>
          {imageCards?.map((card, i) => (
            <CustomLink
              as="a"
              width={{ _: '80vw', md: 230, lg: 240 }}
              height={230}
              mobileHeight="80vw"
              mx="s"
              mb="base"
              href={card?.link}
              key={i}
              Component={HorizontalHighlightCard}
              coverImage={`/get-there-first/${card?.img}`}
              coverImageOverlay={true}
              title={card?.title}
              description={card?.description}
              type={'Default'}
            />
          ))}
        </Styled.ImageCardsContainer>
      </Box>
    </Box>
  );
};
