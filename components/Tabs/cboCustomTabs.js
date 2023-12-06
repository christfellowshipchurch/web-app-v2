import React from 'react';

import { Video } from 'components';
import { Box } from 'ui-kit';
import styled from 'styled-components';

/**
 * Custom Tabs for Christ Birthday Offering page
 */
const CustomTabStyle = styled(Box)`
  cursor: pointer;
  transition: all 200ms ease-out;

  &:hover {
    transform: scale(1.06);
    transition: all 200ms ease-in;
  }
`;

export const CustomTab = ({ title, image, isSelected }) => {
  return (
    <CustomTabStyle
      mx={{ _: 'xs', md: 'base' }}
      my="base"
      display="flex"
      flexDirection="column"
      alignItems="center"
      width={{ _: '100px', md: 'auto' }}
    >
      {/* For some reason our Avatar and Image components are breaking something on the horiztonal scroll so I'm using a regular img tag for now */}
      <Box
        as="img"
        borderRadius="50%"
        maxWidth={60}
        alt={title}
        src={image}
        border={isSelected ? '3px solid #CB2C30' : 'none'}
      />
      <Box
        as="h5"
        textAlign="center"
        mt="s"
        color={isSelected ? '#CB2C30' : 'none'}
      >
        {title}
      </Box>
    </CustomTabStyle>
  );
};

export const CustomTabContent = ({ wistiaId, summary }) => (
  <Box mx="auto" maxWidth={600}>
    <Box
      maxWidth={{ _: 350, md: 600, lg: 800 }}
      boxShadow="l"
      borderRadius="xl"
      overflow="hidden"
      my="base"
      mx="auto"
    >
      <Video wistiaId={wistiaId} />
    </Box>
    <Box px="l">{summary}</Box>
  </Box>
);

export const customTabs = [
  {
    tabProps: {
      id: 'cynthia',
      title: 'Cynthia',
      image: '/christ-birthday-offering/cynthia.jpg',
    },
    tabContent: () => (
      <CustomTabContent
        id="cynthia"
        wistiaId="p3jjqz3cxe"
        summary="Hear Cynthia share in her own words how this water well built by Christ
    Fellowship will impact her life."
      />
    ),
  },
  {
    tabProps: {
      id: 'worldserve',
      title: 'WorldServe Water Trucks',
      image: '/christ-birthday-offering/water-trucks.jpg',
    },
    tabContent: () => (
      <CustomTabContent
        id="worldserve"
        wistiaId="97uyps7c33"
        summary="See how WorldServe’s rapid water supply trucks transform lives through water and the Word of Jesus!"
      />
    ),
  },
  {
    tabProps: {
      id: 'abigail',
      title: 'Abigail',
      image: '/christ-birthday-offering/abigail.jpg',
    },
    tabContent: () => (
      <CustomTabContent
        id="abigail"
        wistiaId="1lf2qk5a3g"
        summary="In 2022, our kids and students gave their Christ Birthday Offering to open additional housing at 
          Children’s Impact Network in Honduras. Hear how one of these children, Abigail, has found the love and hope of Jesus!"
      />
    ),
  },
  {
    tabProps: {
      id: 'andre',
      title: 'Andre',
      image: '/christ-birthday-offering/andre.jpg',
    },
    tabContent: () => (
      <CustomTabContent
        id="andre"
        wistiaId="8irbcr51vt"
        summary="See how we showed up at just the right time to help Andre after Hurricane Idalia!"
      />
    ),
  },
  {
    tabProps: {
      id: 'mama-susan',
      title: 'Mama Susan',
      image: '/christ-birthday-offering/mama-susan.jpg',
    },
    tabContent: () => (
      <CustomTabContent
        id="mama-susan"
        wistiaId="g2yh0v2jb0"
        summary="Hear from Mama Susan, one of the many moms raising a generation of world-changers through a Watoto Village!"
      />
    ),
  },
  {
    tabProps: {
      id: 'steven',
      title: 'Steven',
      image: '/christ-birthday-offering/steven.jpg',
    },
    tabContent: () => (
      <CustomTabContent
        id="steven"
        wistiaId="0cl5ypddiu"
        summary="Steven is just one story of how Watoto raises Africa's future leaders. Hear Steven share how Watoto equipped him at every age!"
      />
    ),
  },
];
