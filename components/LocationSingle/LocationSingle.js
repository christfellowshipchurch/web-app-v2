import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup } from 'utils';
import dropRight from 'lodash/dropRight';

import { ContentLayout, Layout, NotFound } from 'components';

import {
  Box,
  Button,
  Cell,
  Divider,
  Image,
  Loader,
  Longform,
  utils,
} from 'ui-kit';
import Styled from './LocationSingle.styles';

// UPDATE THIS COMPONENT

function LocationSingle(props = {}) {
  const coverImage = props?.data?.coverImage?.sources[0]?.uri;

  if (props.loading) {
    return (
      <Layout
        title="Location"
        contentMaxWidth={'100vw'}
        contentHorizontalPadding={'0'}
        contentVerticalPadding={'0'}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          width="100%"
          minHeight="50vh"
        >
          <Loader />
        </Box>
      </Layout>
    );
  }

  // note : this means that there is not a valid page found on the API, so we'll render the 404 message
  if (!props.loading && !props?.data?.id) {
    return <NotFound />;
  }

  return (
    <Layout
      title={props?.data?.title}
      contentMaxWidth={'100vw'}
      contentHorizontalPadding={'0'}
      contentVerticalPadding={'0'}
      transparentHeader
    >
      <Box
        position="relative"
        display="flex"
        justifyContent="flex-start"
        alignItems={{ _: 'end', sm: 'center' }}
      >
        <Styled.Cover
          src={coverImage}
          width="100%"
          height={{ _: '90vh', sm: 500, lg: 700 }}
          borderRadius="none"
          mx="auto"
          overlay
          mt={0}
        />
        <Box
          position="absolute"
          zIndex={1}
          mx={{ _: 'base', md: 'l' }}
          mt="xxl"
          maxWidth={700}
          mb="base"
        >
          <Box
            as="h1"
            fontSize={{ _: 43, md: 50, lg: 60 }}
            pb={{ _: 'xxl', sm: 0 }}
            mb={{ _: 'xxl', sm: 0 }}
            mr="l"
            color="white"
          >
            {dropRight(props?.data?.title, 4)}
          </Box>
          <Divider my="base" />
          <Box
            display="flex"
            justifyContent={{ _: 'center', sm: 'flex-start' }}
            mb="base"
          >
            <Button mt="s" mr={{ _: 's', md: 'base' }}>
              Join Us Sunday
            </Button>
            <Button mt="s" variant="tertiary">
              Get Connected
            </Button>
          </Box>
        </Box>
      </Box>

      <Cell maxWidth={utils.rem('1100px')} px="base">
        <ContentLayout
          renderA={() => {
            return (
              (props?.data?.summary || props?.data?.htmlContent) && (
                <Box
                  fontSize="l"
                  maxWidth="840px"
                  margin="auto"
                  textAlign="center"
                >
                  {props?.data?.htmlContent && (
                    <Longform
                      dangerouslySetInnerHTML={createMarkup(
                        props?.data?.htmlContent
                      )}
                    />
                  )}
                </Box>
              )
            );
          }}
          features={props?.data?.featureFeed?.features}
        />
      </Cell>
    </Layout>
  );
}

LocationSingle.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool,
};

LocationSingle.defaultProps = {
  loading: true,
};

export default LocationSingle;
