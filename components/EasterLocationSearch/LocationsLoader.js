import { useGetTotalCampuses } from 'hooks';
import React from 'react';
import { CardGrid, Loader } from 'ui-kit';
import Styled from './EasterLocationSearch.styles';

const LocationsLoader = ({ props }) => {
  const { totalCampuses } = useGetTotalCampuses();
  return (
    <CardGrid
      mb="xl"
      mx={{ _: 'base', md: 'auto' }}
      px={{ _: '0', md: 'l', lg: 'xl' }}
      maxWidth={1100}
      columns={'12'}
      {...props}
    >
      {totalCampuses?.map((campus, i) => {
        return (
          <Styled.CardSpacing key={i} index={i} total={totalCampuses?.length}>
            <Styled.LocationCard>
              <Loader noLabel />
            </Styled.LocationCard>
          </Styled.CardSpacing>
        );
      })}
    </CardGrid>
  );
};

export default LocationsLoader;
