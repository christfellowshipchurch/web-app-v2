import PropTypes from 'prop-types';
import { ArrowRight } from 'phosphor-react';

import { Box, Text, theme } from 'ui-kit';
import Link from 'next/link';

import { StyledImage } from './ArticleLink.styles';
import { splitString } from 'utils';

function ArticleLink({
  title,
  color,
  description,
  url,
  urlText,
  imageSrc,
  ...props
}) {
  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
        {...props}
      >
        <Box mr="l">
          <Text fontWeight="700" variant="s">
            {title}
          </Text>
          <Text fontWeight="400" variant="s">
            {splitString(description)}
          </Text>
          <Link href={url}>
            <a
              style={{
                display: 'flex',
                textDecoration: 'none',
                alignItems: 'center',
                marginTop: theme.space.xxs,
              }}
            >
              <Text fontWeight="600" variant="s" color={color} mr="4px">
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
        </Box>
        <StyledImage rounded src={imageSrc} />
      </Box>
    </Box>
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
