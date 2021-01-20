import React from 'react';
import PropTypes from 'prop-types';

import { Box, Icon, Image, Text } from 'ui-kit';
import Link from 'next/link';

function ArticleLink({ title, description, url, urlText, imageSrc }) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Text fontWeight="700" variant="s">
          {title}
        </Text>
        <Text fontWeight="400" variant="s">
          {description}
        </Text>
        <Link href={url}>
          <a style={{ display: 'flex', textDecoration: 'none' }}>
            <Text
              fontWeight="600"
              variant="s"
              color="primary"
              display="inline"
              mr="4px"
            >
              {urlText}
            </Text>
            <Icon
              name="arrowRight"
              alt={title}
              viewBox="0 0 18 19"
              width="18px"
              height="19px"
              stroke="primary"
              strokeWidth={2}
            />
          </a>
        </Link>
      </Box>
      <Image rounded src={imageSrc} />
    </Box>
  );
}

ArticleLink.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  urlText: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default ArticleLink;
