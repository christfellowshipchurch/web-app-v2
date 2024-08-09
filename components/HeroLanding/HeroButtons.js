import React from 'react';
import PropTypes from 'prop-types';

import { ClientSideComponent, CustomLink } from 'components';
import { Box, Icon } from 'ui-kit';
import { gtag } from 'lib/analytics';
import { useCurrentBreakpoint } from 'hooks';
import Styled from './HeroLanding.styles';

const HeroButtons = ({ actions, ...props }) => {
  const currentBreakpoint = useCurrentBreakpoint();

  return (
    <Styled.ButtonContainer>
      {actions.map((action, i) => (
        <ClientSideComponent key={i}>
          <CustomLink
            size="l"
            Component={Styled.Button}
            href={action.url}
            onClick={() => [
              gtag.trackEvent({
                category: `Hero Landing - ${props?.heroTitle}`,
                label: `${action.title} - Button`,
                action: action.url,
              }),
            ]}
            width={{ _: '100%', lg: '330px' }}
            my={{ _: 'xs', md: 'base' }}
            mx="xs"
            {...action}
          >
            {action.icon && (
              <Box mr="base">
                <Icon name={action.icon} size="32px" />
              </Box>
            )}
            <Box>
              {action.subtitle && (
                <Styled.ButtonSubtitle>{action.subtitle}</Styled.ButtonSubtitle>
              )}
              {action.title && (
                <Styled.ButtonTitle
                  isSubtitle={!!action.subtitle && !!action.description}
                >
                  {action.title}
                </Styled.ButtonTitle>
              )}
              {action.description && !currentBreakpoint.isSmall ? (
                <Styled.ButtonDescription>
                  {action.description}
                </Styled.ButtonDescription>
              ) : null}
            </Box>
          </CustomLink>
        </ClientSideComponent>
      ))}
    </Styled.ButtonContainer>
  );
};

HeroButtons.propTypes = {
  actions: PropTypes.array,
};

HeroButtons.defaultProps = {
  actions: [],
};

export default HeroButtons;
