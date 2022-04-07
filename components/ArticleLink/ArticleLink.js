import PropTypes from 'prop-types';
import { ArrowRight } from 'phosphor-react';

import { Text, theme } from 'ui-kit';
import Link from 'next/link';

import Styled from './ArticleLink.styles';
import { splitString } from 'utils';
import { useRouter } from 'next/router';

function ArticleLink({
  title,
  color,
  description,
  url,
  urlText,
  imageSrc,
  imageProps,
  ...props
}) {
  const router = useRouter();
  return (
    <Styled.Container {...props}>
      <Styled.ImageContainer flex={{ lg: '1 0 50%' }} {...imageProps}>
        <Styled.Image
          rounded
          src={imageSrc}
          float="right"
          onClick={url ? () => router.push(url) : null}
        />
      </Styled.ImageContainer>
      <Styled.TextContainer>
        <Text fontWeight="700" variant="s">
          {title}
        </Text>
        <Text
          fontWeight="400"
          variant="s"
          css={`
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            // https://caniuse.com/css-line-clamp
          `}
        >
          {splitString(description)}
        </Text>
        {url && urlText ? (
          <Link href={url}>
            <a
              style={{
                display: 'flex',
                textDecoration: 'none',
                alignItems: 'center',
                marginTop: theme.space.xxs,
              }}
            >
              <Text
                fontWeight="600"
                variant="s"
                color={color}
                mr="4px"
                style={{ whiteSpace: 'nowrap' }}
              >
                {urlText}
              </Text>
              <ArrowRight
                alt={title}
                weight="bold"
                size={18}
                color={theme.colors[color]}
              />
            </a>
          </Link>
        ) : null}
      </Styled.TextContainer>
    </Styled.Container>
  );
}

ArticleLink.defaultProps = {
  color: 'primary',
};

ArticleLink.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  urlText: PropTypes.string,
  imageSrc: PropTypes.string,
  color: PropTypes.string,
};

export default ArticleLink;
