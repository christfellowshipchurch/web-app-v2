import React from 'react';
import PropTypes from 'prop-types';

import { CustomLink } from 'components';
import { Box, Button, Icon } from 'ui-kit';
import { gtag } from 'lib/analytics';
import { useCurrentBreakpoint } from 'hooks';
import Styled from './HeroLanding.styles';

const HeroButton = ({ actions, iconNames, ...props }) => {
  const currentBreakpoint = useCurrentBreakpoint();
  let marginLeft;
  if (actions.length === 2 && currentBreakpoint.isSmall) {
    marginLeft = '0';
  } else if (actions.length === 2 && !currentBreakpoint.isSmall) {
    marginLeft = 'l';
  }
  return (
    <Styled.ButtonContainer>
      {actions.map((action, i) => (
        <CustomLink
          key={i}
          size="l"
          Component={Button}
          onClick={() => [
            gtag.trackEvent({
              category: `Hero Landing - ${props?.heroTitle}`,
              label: `${action.title} - Button`,
              action: action.url,
            }),
          ]}
          width={{ _: '100%', md: 'auto' }}
          href={action.url}
          my={{ _: 'xs', md: 'base' }}
          mr={{ _: '0', md: i > 1 ? '' : 's' }}
          ml={marginLeft}
          backgroundColor="rgba(0, 114, 188, 0.40)"
          borderRadius="100px"
          py="s"
          px="base"
          lineHeight="1"
          display="flex"
          flexDirection="row"
          {...action}
        >
          <Box>
            {action.subtitle && (
              <Box color="tertiary" fontSize="11px" py="0" textAlign="left">
                {action.subtitle}
              </Box>
            )}
            {action.title && (
              <Box fontSize="18px" py="xs" px="b" textAlign="left">
                {action.title}
              </Box>
            )}
            {action.description && !currentBreakpoint.isSmall ? (
              <Box color="neutrals.100" fontSize="13px" py="0" textAlign="left">
                {action.description}
              </Box>
            ) : null}
          </Box>
          <Icon name={action.iconName} size="32" ml="s" />
        </CustomLink>
      ))}
    </Styled.ButtonContainer>
  );
};

HeroButton.propTypes = {
  actions: PropTypes.array,
};

HeroButton.defaultProps = {
  actions: [],
};

export default HeroButton;
