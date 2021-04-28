import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { createMarkup } from 'utils';

import {
  ContentLayout,
  SEO,
  Header,
  Footer,
  Layout,
  NotFound,
} from 'components';

import { Box, Longform } from 'ui-kit';
import Styled from './PageSingle.styles';
import { propTypes } from 'ui-kit/_lib/system';

function PageSingle(props = {}) {
  const data = props?.data;
  const loading = props?.loading || false;

  const id = data?.id;
  const title = data?.title;
  const summmary = data?.summmary;
  const htmlContent = data?.htmlContent;
  const coverImage = data?.coverImage?.sources[0]?.uri;
  const features = data?.featureFeed?.features;

  // note : this means that there is not a valid page found on the API, so we'll render the 404 message
  if (!loading && !id) {
    return <NotFound />;
  }

  return (
    <Layout
      title={title}
      contentMaxWidth={'100vw'}
      contentHorizontalPadding={'0'}
      contentVerticalPadding={'0'}
    >
      {props?.data?.coverImage && (
        <Styled.Hero coverImage={coverImage} title={title}></Styled.Hero>
      )}

      <ContentLayout
        summary={summmary}
        renderA={() => {
          return (
            props?.data?.title && (
              <Box fontSize="l" maxWidth="840px" margin="auto">
                <Box as="h1" textAlign="center">
                  {props?.data?.title}
                </Box>
                <Box as="p">{summmary}</Box>
                {props?.data?.htmlContent && (
                  <Longform
                    dangerouslySetInnerHTML={createMarkup(htmlContent)}
                  />
                )}
              </Box>
            )
          );
        }}
        features={features}
      />
    </Layout>
  );
}

PageSingle.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    summmary: PropTypes.string,
    htmlContent: PropTypes.string,
    coverImage: PropTypes.shape({
      sources: PropTypes.arrayOf(
        PropTypes.shape({
          uri: PropTypes.string,
        })
      ),
    }),
    featureFeed: PropTypes.shape({
      id: PropTypes.string,
      features: PropTypes.array,
    }),
  }),
};

export default PageSingle;
