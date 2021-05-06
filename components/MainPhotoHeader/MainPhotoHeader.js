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
  showImage = true,
  showTitleOverImage = true,
  primaryButton,
  secondaryButton,
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
        { showImage && <Styled.Image
          as="img"
          src={src}
          name="main-photo-header"
          backdrop={backdrop}
          rounded
          {...imageProps}
        />}
        {showTitleOverImage && overlay && (
          <Styled.ImageOverlay background={overlay} backdrop={backdrop} />
        )}
        {(showTitleOverImage && (subtitle || title || summary)) && (
          <Styled.TextPosition>
            <Styled.TextContainer display={'flex'} justifyContent={justifyText}>
              {subtitle && (
                <Heading
                  color={{ _: 'fg', lg: 'white' }}
                  variant="h2"
                  opacity="80%"
                  fontWeight="800"
                  textAlign="left"
                  fontSize="h3"
                  maxWidth={{ lg: '440px' }}
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
                  fontSize="60px"
                  lineHeight="1"
                  maxWidth={{ lg: '440px' }}
                >
                  {title}
                </Heading>
              )}
              {summary && (
                <Heading
                  color={{ _: 'fg', lg: 'neutrals.100' }}
                  variant="h5"
                  maxWidth={{ lg: '28%' }}
                  mt={{ _: 'm', lg: 'xs' }}
                  opacity="60%"
                  textAlign="left"
                >
                  {summary}
                </Heading>
              )}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginTop: '32px',
                }}
              >
                {primaryButton}
                {secondaryButton}
              </div>
            </Styled.TextContainer>
          </Styled.TextPosition>
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
