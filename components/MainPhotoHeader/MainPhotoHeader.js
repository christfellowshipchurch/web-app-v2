import React from 'react';
import PropTypes from 'prop-types';

import { Heading } from 'ui-kit';
import Styled from './MainPhotoHeader.styles';

function MainPhotoHeader({
  src,
  title,
  subtitle,
  summary,
  overlay = {
    _: 'rgba(0, 0, 0, 0.7)',
    lg:
      'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);',
  },
  content,
  justifyText="flex-end",
  imageProps = {},
  ...props
} = {}) {
  return (
    <Styled.Container {...props}>
      <Styled.Image
        as="img"
        src={src}
        name="main-photo-header"
        {...imageProps}
      />
      {overlay && <Styled.Overlay background={overlay} />}
      <Styled.TextContainer display={'flex'} justifyContent={justifyText}>
        {subtitle && (
          <Heading
            color="neutrals.100"
            variant="h2"
            opacity="50%"
            fontWeight="800"
            textAlign="left"
            fontSize={{ _: 'h3', lg: 'h2' }}
          >
            {subtitle}
          </Heading>
        )}
        {title && (
          <Heading
            color="neutrals.100"
            fontWeight="800"
            textTransform="uppercase"
            textAlign="left"
            fontSize={{ _: '40px', lg: '86px' }}
            lineHeight={{ _: '36px', lg: '77.4px' }}
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
            textAlign="left"
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
  imageProps: PropTypes.object,
};

export default MainPhotoHeader;
