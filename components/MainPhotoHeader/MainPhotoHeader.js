import React from 'react';
import PropTypes from 'prop-types';

import { Heading } from 'ui-kit';
import Styled from './MainPhotoHeader.styles';

function MainPhotoHeader({
  src,
  title,
  subtitle,
  summary,
  overlay,
  content,
} = {}) {
  return (
    <Styled.Container>
      <Styled.Image as="img" src={src} name="main-photo-header" />
      {overlay && <Styled.Overlay background={overlay} />}
      <Styled.TextContainer
        display={{ _: 'none', md: content ? 'none' : 'block', xl: 'flex' }}
      >
        {subtitle && (
          <Heading
            color="neutrals.100"
            variant="h2"
            opacity="50%"
            fontWeight="800"
          >
            {subtitle}
          </Heading>
        )}
        {title && (
          <Heading
            color="neutrals.100"
            fontSize="86px"
            lineHeight="77.4px"
            fontWeight="800"
            textTransform="uppercase"
          >
            {title}
          </Heading>
        )}
        {summary && (
          <Heading
            color="neutrals.100"
            variant="h3"
            fontWeight="700"
            maxWidth="360px"
          >
            {summary}
          </Heading>
        )}
      </Styled.TextContainer>
      {content}
    </Styled.Container>
  );
}

MainPhotoHeader.propTypes = {
  src: PropTypes.string.isRequired,
  overlay: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  summary: PropTypes.string,
  content: PropTypes.node,
};

export default MainPhotoHeader;
