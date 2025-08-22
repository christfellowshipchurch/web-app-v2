import React from 'react';
import { Box, system } from 'ui-kit';
import styled from 'styled-components';
import { isEmpty, kebabCase } from 'lodash';

const StyledStaffCard = styled.img`
  display: flex;
  align-items: center;
  aspect-ratio: 4/3;
  cursor: pointer;
  border-radius: 12px;
  transition: transform 0.3s ease;
  object-fit: cover;
  flex: 1;
  min-width: 0;

  &:hover {
    transform: scale(1.01);
  }

  ${system}
`;

export default function StaffResourcesFeature({ edge, regex }) {
  return (
    <Box
      id={
        !isEmpty(edge?.title)
          ? kebabCase(edge?.title)
          : edge?.id?.replace(regex, '')
      }
      key={edge?.id}
      py="xl"
    >
      <Box as="h2" fontWeight="bold" color="neutrals.900" mb="base">
        Staff Resources
      </Box>

      <Box display="flex" style={{ gap: '16px' }} maxWidth="1200px">
        {edge?.cards?.map(card => (
          <StyledStaffCard
            key={card?.id}
            src={card?.coverImage?.sources[0]?.uri}
          />
        ))}
      </Box>
    </Box>
  );
}
