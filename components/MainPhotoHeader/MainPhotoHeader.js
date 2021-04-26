import React from 'react';
import PropTypes from 'prop-types';

import { Heading } from 'ui-kit';
import Styled from './MainPhotoHeader.styles';

function MainPhotoHeader({
  src,
  title,
  subtitle,
  summary,
  backdrop = true,
  overlay = {
    lg:
      'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);',
  },
  content,
  justifyText = 'flex-end',
  imageProps = {},
  ...props
} = {}) {
  return (
    <Styled.Container {...props}>
      {backdrop && <Styled.Backdrop src={src} />}
      {backdrop && <Styled.BackdropOverlay bg="bg_alt" opacity="0.4" />}
      <Styled.ImageContainer backdrop={backdrop}>
        <Styled.Image
          as="img"
          src={src}
          name="main-photo-header"
          backdrop={backdrop}
          rounded
          {...imageProps}
        />
        {overlay && (
          <Styled.ImageOverlay background={overlay} backdrop={backdrop} />
        )}
        {(subtitle || title || summary) && (
          <Styled.TextContainer display={'flex'} justifyContent={justifyText}>
            {subtitle && (
              <Heading
                color={{ _: 'fg', lg: 'neutrals.100' }}
                variant="h2"
                opacity="50%"
                fontWeight="800"
                textAlign="left"
                fontSize="h3"
              >
                {subtitle}
              </Heading>
            )}
            {title && (
              <Heading
                color={{ _: 'fg', lg: 'neutrals.100' }}
                fontWeight="800"
                mt={{ _: 's', lg: 'xs' }}
                textTransform="uppercase"
                textAlign="left"
                fontSize="40px"
                lineHeight="36px"
              >
                {title}
              </Heading>
            )}
            {summary && (
              <Heading
                color={{ _: 'fg', lg: 'neutrals.100' }}
                variant="h3"
                fontWeight="700"
                maxWidth={{ lg: '360px' }}
                mt={{ _: 'm', lg: 'xs' }}
                textAlign="left"
              >
                {summary}
              </Heading>
            )}
          </Styled.TextContainer>
        )}
      </Styled.ImageContainer>
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
