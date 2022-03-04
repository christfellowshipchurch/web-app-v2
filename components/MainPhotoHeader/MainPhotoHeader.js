import { EventCallout, EventsCallout } from 'components';
import { useRouter } from 'next/router';
import { Info } from 'phosphor-react';
import PropTypes from 'prop-types';
import React from 'react';
import { useTheme } from 'styled-components';
import { Heading, Section } from 'ui-kit';
import { getSlugFromURL } from 'utils';
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
  bgBlurred,
  imageProps = {},
  events,
  ...props
} = {}) {
  const theme = useTheme();
  const router = useRouter();
  const _backgroundSrc = backgroundSrc || src;
  return (
    <Styled.Container {...props}>
      {backdrop && <Styled.Backdrop src={_backgroundSrc} />}
      {backdrop && <Styled.BackdropOverlay bg="bg_alt" blurred={bgBlurred} />}
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
      {events?.length ? (
        <Section contentProps={{ p: '0 !important' }}>
          <EventsCallout
            mx={{ _: 0, lg: 'xl' }}
            mb={{ _: 'l', lg: `-${theme.space.xl}` }}
            mt={{ lg: `-${theme.space.xxl}` }}
            title="News & Events"
            icon={
              <Info
                size={24}
                style={{
                  color: theme.colors.neutrals[900],
                  opacity: '60%',
                  marginRight: theme.space.xxs,
                }}
              />
            }
          >
            {events.map(link => (
              <EventCallout
                key={link.id}
                title={link.title}
                description={link.subtitle}
                imageSrc={link.coverImage?.sources?.[0]?.uri}
                onClick={() =>
                  router.push(`/${getSlugFromURL(link?.sharing?.url)}`)
                }
              />
            ))}
          </EventsCallout>
        </Section>
      ) : null}
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
