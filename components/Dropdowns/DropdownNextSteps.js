import { ArrowRight, ArrowCircleRight, Clock, MapPin } from 'phosphor-react';
import { useRouter } from 'next/router';
import { Photo } from 'components';
import { Box, CardGrid, Heading, Text, theme } from 'ui-kit';

const links = [
  { label: 'Baptism', action: '/next-steps/baptism' },
  { label: 'Volunteer', action: '/next-steps/volunteer' },
];

export default function DropdownAbout() {
  const router = useRouter();

  return (
    <Box bg="bg" p="l">
      <CardGrid columns="3" gridColumnGap="base" mb="l">
        <Photo
          src="/about/schedule.jpeg"
          height="223px"
          inner={
            <Heading fontWeight="600" variant="h2" color="white">
              Schedule
            </Heading>
          }
          overlay={{ color: theme.colors.almost_black, opacity: '30%' }}
        />
        <Photo
          src="/about/who.jpeg"
          height="223px"
          inner={
            <Heading fontWeight="600" variant="h2" color="white">
              Who we are
            </Heading>
          }
          overlay={{ color: theme.colors.almost_black, opacity: '30%' }}
        />
        <Box
          display="flex"
          height="148px"
          flexDirection="column"
          justifyContent="space-between"
          width="100%"
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
