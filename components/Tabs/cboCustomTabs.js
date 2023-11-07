import React from 'react';

import { Video } from 'components';
import { Avatar, Box } from 'ui-kit';

/**
 * Custom Tabs for Christ Birthday Offering page
 */

export const CustomTab = ({ title, image, isSelected }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        maxWidth={60}
        src={image ? image : 'https://via.placeholder.com/60'}
        border={isSelected ? `solid 3px #CB2C30` : 'none'}
        name={title}
      />
      <Box mt="s" as="h5">
        {title}
      </Box>
    </Box>
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
      title: 'Cynthia',
      image: '/christ-birthday-offering/cynthia.jpg',
    },
    tabContent: () => (
      <CustomTabContent
        wistiaId="0tftcigocv"
        summary="Hear Cynthia share in her own words how this water well built by Christ
    Fellowship will impact her life."
      />
    ),
  },
  {
    tabProps: {
      title: 'Water Trucks',
      image: '/christ-birthday-offering/water-trucks.jpg',
    },
    tabContent: () => (
      <CustomTabContent
        wistiaId="0tftcigocv"
        summary="See how WorldServe’s rapid water supply trucks transform lives through water and the Word of Jesus!"
      />
    ),
  },
  {
    tabProps: {
      title: 'Honduras Housing',
      image: '/christ-birthday-offering/honduras-housing.jpg',
    },
    tabContent: () => (
      <CustomTabContent
        wistiaId="0tftcigocv"
        summary="In 2022, our kids and students gave their Christ Birthday Offering to open additional housing at 
          Children’s Impact Network in Honduras. Hear how one of these children, Abigail, has found the love and hope of Jesus!"
      />
    ),
  },
  {
    tabProps: {
      title: 'Andre',
      image: '/christ-birthday-offering/andre.jpg',
    },
    tabContent: () => (
      <CustomTabContent
        wistiaId="0tftcigocv"
        summary="See how we showed up at just the right time to help Andre after Hurricane Idalia!"
      />
    ),
  },
  {
    tabProps: {
      title: 'Mama Susan',
      image: '/christ-birthday-offering/mama-susan.jpg',
    },
    tabContent: () => (
      <CustomTabContent
        wistiaId="0tftcigocv"
        summary="Hear from Mama Susan, one of the many moms raising a generation of world-changers through a Watoto Village!"
      />
    ),
  },
  {
    tabProps: {
      title: 'Steven',
      image: '/christ-birthday-offering/steven.jpg',
    },
    tabContent: () => (
      <CustomTabContent
        wistiaId="0tftcigocv"
        summary="Steven is just one story of how Watoto raises Africa's future leaders. Hear Steven share how Watoto equipped him at every age!"
      />
    ),
  },
];
