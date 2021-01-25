import PropTypes from 'prop-types';
import { ArrowRight } from 'phosphor-react';

import { Box, Image, Text, theme } from 'ui-kit';
import Link from 'next/link';

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
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mb="s"
      {...props}
    >
      <Box mr="l">
        <Text fontWeight="700" variant="s">
          {title}
        </Text>
        <Text fontWeight="400" variant="s">
          {description}
        </Text>
        <Link href={url}>
          <a
            style={{
              display: 'flex',
              textDecoration: 'none',
              alignItems: 'center',
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
      <Image rounded src={imageSrc} width="245px" />
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
