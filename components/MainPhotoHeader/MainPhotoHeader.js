import React from 'react';
import PropTypes from 'prop-types';

import { Heading } from 'ui-kit';
import Styled from './MainPhotoHeader.styles';

function MainPhotoHeader({
  src,
  backgroundSrc,
  title,
  subtitle,
  summary,
  showImage,
  backdrop,
  showTitleOverImage,
  primaryButton,
  secondaryButton,
  overlay,
  content,
  justifyText,
  imageProps = {},
  ...props
} = {}) {
  const _backgroundSrc = backgroundSrc || src;
  return (
    <Styled.Container {...props}>
      {backdrop && <Styled.Backdrop src={_backgroundSrc} />}
      {backdrop && <Styled.BackdropOverlay bg="bg_alt" opacity="0.4" />}
      <Styled.ImageContainer backdrop={backdrop}>
        {showImage && (
          <Styled.Image
            as="img"
            src={src}
            name="main-photo-header"
            backdrop={backdrop}
            rounded
            {...imageProps}
          />
        )}
        {showTitleOverImage && overlay && (
          <Styled.ImageOverlay
            background={overlay}
            backdrop={backdrop}
            {...imageProps}
          />
        )}
        {showTitleOverImage && (subtitle || title || summary) && (
          <Styled.TextPosition>
            <Styled.TextContainer display={'flex'} justifyContent={justifyText}>
              {subtitle && (
                <Heading
                  color={'white'}
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
                  color={'white'}
                  fontWeight="800"
                  mt={{ _: 's', lg: 'xs' }}
                  textTransform="uppercase"
                  textAlign="left"
                  fontSize={{ _: 'h2', md: '60px' }}
                  lineHeight="1"
                  maxWidth={{ lg: '440px' }}
                >
                  {title}
                </Heading>
              )}
              {summary && (
                <Heading
                  color={'white'}
                  variant="h5"
                  maxWidth={{ lg: '28%' }}
                  mt={{ _: 'm', lg: 'xs' }}
                  opacity="60%"
                  textAlign="left"
                >
                  {summary}
                </Heading>
              )}
              {(primaryButton || secondaryButton) && (
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
              )}
            </Styled.TextContainer>
          </Styled.TextPosition>
        )}
      </Styled.ImageContainer>
      {content}
    </Styled.Container>
  );
}

MainPhotoHeader.defaultProps = {
  showImage: true,
  backdrop: true,
  showTitleOverImage: true,
  justifyText: 'flex-end',
  overlay: {
    lg:
      'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);',
  },
};

MainPhotoHeader.propTypes = {
  src: PropTypes.string,
  overlay: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  summary: PropTypes.string,
  content: PropTypes.node,
  imageProps: PropTypes.object,
};

export default MainPhotoHeader;
