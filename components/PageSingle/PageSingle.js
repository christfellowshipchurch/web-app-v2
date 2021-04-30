import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { createMarkup } from 'utils';
import isEmpty from 'lodash/isEmpty';

import { Layout, NotFound, FeatureFeed } from 'components';

import { Box, Longform } from 'ui-kit';
import Styled from './PageSingle.styles';
import { propTypes } from 'ui-kit/_lib/system';

const renderBody = ({ title, summary, htmlContent, coverImage }) => {
  const hasTitle = !isEmpty(title) && !coverImage?.sources?.length;
  const hasSummary = !isEmpty(summary) && !coverImage?.sources?.length;
  const hasContent = hasTitle || hasSummary || !isEmpty(htmlContent);

  if (hasContent) {
    return (
      <Box fontSize="l" maxWidth="840px" margin="auto" py="l">
        {hasTitle && (
          <Box as="h1" textAlign="center">
            {title}
          </Box>
        )}

        {hasSummary && (
          <Box
            as="h4"
            fontStyle="italic"
            fontWeight="normal"
            textAlign="center"
          >
            {summary}
          </Box>
        )}

        {htmlContent && (
          <Longform dangerouslySetInnerHTML={createMarkup(htmlContent)} />
        )}
      </Box>
    );
  }

  return null;
};

function PageSingle(props = {}) {
  const data = props?.data;
  const loading = props?.loading || false;

  const id = data?.id;
  const title = data?.title;
  const summary = data?.summary;
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
      {coverImage?.sources?.length && (
        <Styled.Hero coverImage={coverImage?.sources[0]?.uri} title={title}>
          {!isEmpty(title) && (
            <Styled.Glass>
              <Styled.GlassContent>
                <Box as="h1">{title}</Box>
                <Box as="h4" fontStyle="italic" fontWeight="normal">
                  {summary}
                </Box>
              </Styled.GlassContent>
            </Styled.Glass>
          )}
        </Styled.Hero>
      )}

      {renderBody({ title, summary, htmlContent, coverImage })}

      {features.length && (
        <Box>
          <FeatureFeed data={features} />
        </Box>
      )}
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
