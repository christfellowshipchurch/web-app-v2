import { ArrowRight, ArrowCircleRight, Clock, MapPin } from 'phosphor-react';
import { useRouter } from 'next/router';
import { Photo } from 'components';
import { Box, CardGrid, Heading, Text, theme } from 'ui-kit';

const links = [
  { label: 'Our beliefs', action: '/our-beliefs' },
  { label: 'Meet our staff', action: '/our-staff' },
  { label: 'Our story', action: '/our-story' },
];

export default function DropdownAbout() {
  const router = useRouter();

  return (
    <Box bg="bg" p="l">
      <CardGrid columns="3" gridColumnGap="base" mb="l">
        <Photo
          images={[
            {
              src:
                'https://s3-alpha-sig.figma.com/img/7c6e/6ecd/be76f176bb348ac07aa36e836250027f?Expires=1613347200&Signature=GXUKO1f28VIGEwFQIG7sEdxjmXaK21Uh3z1ScL5MkaGagARcdWEM7ylGuXXmm04Aqx305zGf49DGHYvx2hbXLQ78YsMfk~el1TOwNT60dLRQcKQSz6BzGJuhAe2aHQSdK4HdzKyarHHSt1DXCB2PIv3dp7ItcKsTpUa1uFXxl7Wr4~dGFFORpK42Jc5-Xekm7OuuOuX4IeMnVxNSt5VR~kHzboy7oijb98eJYpEj5kFvt14LB4qA4l4CQ2YwMjCVrdVUV6p5eN~MxvvjrG71HM1HpBuqnEIwwkdAu5Q8ZOlygs~oO7naD2Xjt7mEia6Vfjb7jBe7wXLUeZHmizfs6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              height: '223px',
              inner: (
                <Heading fontWeight="600" variant="h2" color="white">
                  Schedule
                </Heading>
              ),
              overlay: { color: theme.colors.almost_black, opacity: '30%' },
            },
          ]}
        />
        <Photo
          images={[
            {
              src:
                'https://s3-alpha-sig.figma.com/img/71f9/baf1/416afa39e8be322ed5155e0934ef0e5a?Expires=1613347200&Signature=a9N8VJeppVW4oT7ngmJMZHQB6TTk6-sgZXA~FolBWHNimOiUUpk1JJOFUp3HAJZ5DgZ0IxVJbeeJadf1HpJN39Pl31uTaoynrj6suHJCPJ4U0KWDcIWgr2agTf0LYqsszgqqJw9JIAylQblhY10PBabeY8jGXkiz7EKM5C-0BVts3hRLOkODFraqHlKnWUqnGTbZgFKlhJhCAFB~s7HXWDNUhE1D~v3Bfs-PulTElar-GoUvMAuoHbYdu05F0Ss2mk0CVl5j7YXKMsL2JhR3-zKSmNhM68vbWQ9Sq5g11aNwy9AypC4oSJWZGB-odRR50xU~o0aODeie9t0MV0quVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              height: '223px',
              inner: (
                <Heading fontWeight="600" variant="h2" color="white">
                  Who we are
                </Heading>
              ),
              overlay: { color: theme.colors.almost_black, opacity: '30%' },
            },
          ]}
        />
        <Box
          display="flex"
          height="223px"
          flexDirection="column"
          justifyContent="space-between"
        >
          {links.map((link, i) => (
            <Box
              key={i}
              width="100%"
              bg="primary"
              borderRadius="image"
              onClick={() => router.push(link.action)}
              height="66px"
              display="flex"
              px="l"
              alignItems="center"
              justifyContent="space-between"
            >
              <Heading
                fontSize="l"
                lineHeight="h2"
                fontWeight="500"
                color="white"
              >
                {link.label}
              </Heading>
              <ArrowCircleRight size="32" color="white" />
            </Box>
          ))}
        </Box>
      </CardGrid>
      <Box display="flex">
        <Box display="flex">
          <MapPin
            color={theme.colors.primary}
            size="22"
            weight="fill"
            style={{ marginRight: theme.space.xxs }}
          />
          <Box display="flex" flexDirection="column">
            <Text variant="h5" fontWeight="500" color="fg">
              3031 Long Hollow Pike
            </Text>
            <Text variant="xs" fontWeight="600" color="fg" opacity="60%">
              Hendersonville, TN 37075
            </Text>
            <Text display="flex" variant="h5" fontWeight="500" color="primary">
              Directions
              <ArrowRight
                style={{ marginLeft: theme.space.xxs }}
                size="18"
                weight="bold"
              />
            </Text>
          </Box>
        </Box>
        <Box display="flex" ml="m">
          <Clock
            color={theme.colors.primary}
            size="22"
            weight="fill"
            style={{ marginRight: theme.space.xxs }}
          />
          <Box display="flex" flexDirection="column">
            <Text variant="h5" fontWeight="500" color="fg">
              Sunday
            </Text>
            <Text variant="xs" fontWeight="600" color="fg" opacity="60%">
              9am and 11am
            </Text>
            <Text display="flex" variant="h5" fontWeight="500" color="primary">
              Plan a visit
              <ArrowRight
                style={{ marginLeft: theme.space.xxs }}
                size="18"
                weight="bold"
              />
            </Text>
          </Box>
        </Box>
        <Box display="flex" ml="m" flexDirection="column">
          <Text variant="h5" fontWeight="500" color="fg">
            Waiting to enjoy God
          </Text>
          <Text variant="xs" fontWeight="600" color="fg" opacity="60%">
            We are Long Hollow
          </Text>
          <Text display="flex" variant="h5" fontWeight="500" color="primary">
            Learn more
            <ArrowRight
              style={{ marginLeft: theme.space.xxs }}
              size="18"
              weight="bold"
            />
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
