/**
 * These are custom informational comoponents for the Location Single - Campus Info component.
 */

import React from 'react';
import { Box, Icon } from 'ui-kit';
import { showModal, useModalDispatch } from 'providers/ModalProvider';
import { whatToExpectVideos } from '../../../../lib/locationData';
import { StyledDivider } from './WeekdaySchedules';

const TrinityButtons = () => {
  const modalDispatch = useModalDispatch();

  return [
    <Box ml="base" display={{ _: 'none', md: 'flex' }} my="l">
      <Box>
        <Box as="h3" pr="xl" color="secondary" maxWidth={200}>
          What to Expect
        </Box>
      </Box>
      <Box flex="2">
        <Box mb="s">
          Here at Christ Fellowship Church Trinity in Palm Beach Gardens, you
          can expect to experience church services with uplifting worship music,
          encouraging messages from our pastors, special programming for your
          family, and opportunities for you to find people to do life with all
          throughout the week. This community location in Palm Beach Gardens is
          everything you love about Christ Fellowship in a smaller church
          setting, with even more regional events offered just down the street
          at our Palm Beach Gardens location.
        </Box>
        <Box
          as="a"
          onClick={() =>
            modalDispatch(
              showModal('Video', {
                step: 0,
                wistiaId: whatToExpectVideos['trinity'],
                title: 'What to Expect',
              })
            )
          }
          mt="s"
          width="fit-content"
          fontStyle="italic"
          textDecoration="underline"
          cursor="pointer"
          mx="auto"
        >
          See what to expect here!
          <Icon ml="s" name="play" size="24" variant="secondary" />
        </Box>
      </Box>
    </Box>,
  ];
};

const TrinityMobileButtons = () => {
  const modalDispatch = useModalDispatch();

  return [
    <Box
      ml="base"
      display={{ _: 'flex', md: 'none' }}
      flexDirection="column"
      alignItems="center"
      mt="base"
      mb={{ _: '0px', md: 'base' }}
      pb="l"
    >
      <StyledDivider display={{ _: 'none', md: 'flex' }} width="100%" />
      <Box>
        <Box as="h3" color="secondary" maxWidth={200}>
          What to Expect
        </Box>
      </Box>
      <Box flex="2">
        <Box mb="s" mr="base" textAlign="center">
          Here at Christ Fellowship Church Trinity in Palm Beach Gardens, you
          can expect to experience church services with uplifting worship music,
          encouraging messages from our pastors, special programming for your
          family, and opportunities for you to find people to do life with all
          throughout the week. This community location in Palm Beach Gardens is
          everything you love about Christ Fellowship in a smaller church
          setting, with even more regional events offered just down the street
          at our Palm Beach Gardens location.
        </Box>
      </Box>
      <Box
        as="a"
        onClick={() =>
          modalDispatch(
            showModal('Video', {
              step: 0,
              wistiaId: whatToExpectVideos['trinity'],
              title: 'What to Expect',
            })
          )
        }
        mt="s"
        display="flex"
        alignItems="center"
        width="fit-content"
        fontStyle="italic"
        textDecoration="underline"
        cursor="pointer"
        mx="auto"
      >
        See what to expect here!
        <Icon ml="s" name="play" size="24" variant="secondary" />
      </Box>
    </Box>,
  ];
};

export { TrinityButtons, TrinityMobileButtons };
