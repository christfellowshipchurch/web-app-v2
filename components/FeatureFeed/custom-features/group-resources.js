import { isEmpty, kebabCase } from 'lodash';
import React from 'react';
import { Box, Icon, system } from 'ui-kit';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const StyledGroupCard = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${themeGet('space.base')};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  background-color: white;
  border-radius: ${themeGet('radii.base')};
  border: 1px solid ${themeGet('colors.neutrals.200')};

  color: ${themeGet('colors.neutrals.900')};
  font-size: ${themeGet('fontSizes.l')};
  font-weight: normal;
  font-family: ${themeGet('fonts.base')};

  &:hover {
    background-color: ${themeGet('colors.neutrals.100')};
  }

  ${system}
`;

export default function GeneralGroupResourcesFeature({ edge, regex }) {
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
        General Group Resources
      </Box>

      <Box
        display="flex"
        flexDirection={{ _: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="center"
        maxWidth="1200px"
        width="100%"
        style={{
          gap: '16px',
        }}
      >
        {edge?.cards?.map((card, index) => (
          <StyledGroupCard key={card?.id} as="a" href={card?.url || '#'}>
            <Box
              display="flex"
              alignItems="center"
              style={{ gap: '8px' }}
              fontWeight="bold"
            >
              {index === 1 && (
                <Icon name="page" size="24" color="neutrals.900" />
              )}
              {card?.title}
            </Box>
          </StyledGroupCard>
        ))}
      </Box>
    </Box>
  );
}
