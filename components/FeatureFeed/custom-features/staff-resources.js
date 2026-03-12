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
  min-width: 200px;

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
      pr={{ _: 'none', lg: 'base' }}
      pl="base"
    >
      <Box as="h2" fontWeight="bold" color="neutrals.900" mb="base">
        Staff Resources
      </Box>

      <Box
        display="flex"
        maxWidth="1200px"
        style={{ gap: '16px', overflow: 'auto' }}
      >
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
