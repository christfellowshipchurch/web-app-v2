import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup } from 'utils';
import isEmpty from 'lodash/isEmpty';

import { Layout, NotFound, FeatureFeed } from 'components';

import { Box, Loader, Longform } from 'ui-kit';
import Styled from './PageSingle.styles';

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
  const loading = props?.loading;

  const id = data?.id;
  const title = data?.title;
  const summary = data?.summary;
  const htmlContent = data?.htmlContent;
  const coverImage = data?.coverImage?.sources[0]?.uri;
  const features = data?.featureFeed?.features;

  if (true) {
    return (
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
    );
  }

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
      {!isEmpty(coverImage) && (
        <Styled.Hero coverImage={coverImage} title={title}>
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

      <Box maxWidth={1100} margin="auto" px="s">
        {isEmpty(coverImage) &&
          !isEmpty(title) &&
          renderBody({ title, summary, htmlContent, coverImage })}

        {features && features.length > 0 && (
          <Box>
            <FeatureFeed data={features} />
          </Box>
        )}
      </Box>
    </Layout>
  );
}

PageSingle.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    summary: PropTypes.string,
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

PageSingle.defaultProps = {
  loading: true,
};

export default PageSingle;
