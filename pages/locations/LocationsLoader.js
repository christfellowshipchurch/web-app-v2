import { CustomLink } from 'components';
import { useGetTotalCampuses } from 'hooks';
import React from 'react';
import { CardGrid, HorizontalHighlightCard } from 'ui-kit';

const LocationsLoader = ({ props }) => {
  const { totalCampuses } = useGetTotalCampuses(); // to know how many cards to map

  return (
    <CardGrid
      mb="xl"
      mx={{ _: 'base', md: 'auto' }}
      px={{ _: '0', md: 'l', lg: 'xl' }}
      maxWidth={1100}
      {...props}
    >
      {totalCampuses?.map((campus, i) => {
        return (
          // Change to new component - skeleton
          <CustomLink
            as="a"
            boxShadow="none"
            href=""
            Component={HorizontalHighlightCard}
            label={'true'}
            coverImageLabelBgColor="black"
            coverImageOverlay={true}
            type="HIGHLIGHT_SMALL"
            mobileHeight="150px"
            loading={true}
          />
        );
      })}
    </CardGrid>
  );
};

export default LocationsLoader;