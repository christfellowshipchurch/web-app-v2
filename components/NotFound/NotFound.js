import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'ui-kit';
import { Layout, SearchField } from 'components';
import { useRouter } from 'next/router';
import { useForm } from 'hooks';
import { kebabCase } from 'lodash';

const NotFound = (props = {}) => {
  const router = useRouter();
  const { values, handleSubmit, handleChange, reset } = useForm();
  function handleClearAllClick(event) {
    event.preventDefault();
    reset();
  }

  const links = [
    { title: 'Visit our homepage.', link: '/' },
    {
      title: 'Find a Christ Fellowship location near you.',
      link: '/locations',
    },
    { title: 'Sign up for a Group or Class.', link: '/groups' },
    { title: 'Discover more about our Ministries.', link: '/discover' },
    { title: 'Learn more about Christ Fellowship.', link: '/about' },
    { title: 'Get connected.', link: '/it-all-starts-here' },
    { title: 'Give online.', link: '/give' },
    { title: 'See upcoming events.', link: '/events' },
  ];
  return (
    <Layout title="404 Not Found">
      <Box mt="xl" textAlign="center">
        <Box
          as="img"
          alt="Error Image"
          width="100%"
          // mx="base"
          maxWidth={750}
          src="/error.png"
          margin="auto"
        />
        <Box mx="auto" maxWidth={{ _: 320, md: 700, xl: 1100 }}>
          <Box as="h1" mt="l">
            Hmm. We can’t seem to find that page.
          </Box>
          <Box as="p" fontSize="l" mb="xxl">
            Let’s see if we can help you find what you’re looking for!
          </Box>
        </Box>
        {/* Search Bar */}
        <Box mx={{ _: 'base', md: 'auto' }} maxWidth={1100}>
          <Box mx={{ md: 'l' }}>
            <SearchField
              handleChange={handleChange}
              handleClear={handleClearAllClick}
              handleClick={e =>
                router.push({
                  pathname: '/discover',
                  query: {
                    c: '',
                    s: kebabCase(values.text),
                  },
                })
              }
              handleSubmit={handleSubmit}
              mb="base"
              placeholder="Search..."
              value={values.text || ''}
            >
              Search
            </SearchField>
          </Box>
        </Box>
        <Box px="base" my="xl" textAlign="left">
          <Box mx={{ _: 'base', md: 'auto' }} mt="l" mb="base" width="350px">
            <Box as="h4">Here are some of our most visited pages</Box>
            <Box as="ul" ml="base" mt="s" color="primary" fontWeight="600">
              {links.map((link, index) => (
                <Box as="li" mb="s" key={index}>
                  <Box
                    as="a"
                    style={{ listStyleType: 'circle' }}
                    href={link?.link}
                  >
                    {link?.title}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

NotFound.propTypes = {
  layout: PropTypes.bool,
};

NotFound.defaultProps = {
  layout: true,
};

export default NotFound;
