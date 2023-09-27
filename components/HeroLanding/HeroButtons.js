import React from 'react';
import PropTypes from 'prop-types';

import { CustomLink } from 'components';
import { Box, Icon } from 'ui-kit';
import { gtag } from 'lib/analytics';
import { useCurrentBreakpoint } from 'hooks';
import Styled from './HeroLanding.styles';

const HeroButtons = ({ actions, ...props }) => {
  const currentBreakpoint = useCurrentBreakpoint();
  let marginLeft;
  if (actions.length === 2 && currentBreakpoint.isSmall) {
    marginLeft = '0';
  } else if (actions.length === 2 && !currentBreakpoint.isSmall) {
    marginLeft = 'base';
  }

  return (
    <Styled.ButtonContainer>
      {actions.map((action, i) => (
        <CustomLink
          key={i}
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
          width={{ _: '100%', md: 'auto' }}
          my={{ _: 'xs', md: 'base' }}
          mr={{ _: '0', md: i > 1 ? '' : 'l' }}
          ml={marginLeft}
          {...action}
        >
          {action.icon && <Icon name={action.icon} size="32" mr="base" />}
          <Box>
            {action.subtitle && (
              <Styled.ButtonSubtitle>{action.subtitle}</Styled.ButtonSubtitle>
            )}
            {action.title && (
              <Styled.ButtonTitle>{action.title}</Styled.ButtonTitle>
            )}
            {action.description && !currentBreakpoint.isSmall ? (
              <Styled.ButtonDescription>
                {action.description}
              </Styled.ButtonDescription>
            ) : null}
          </Box>
        </CustomLink>
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
