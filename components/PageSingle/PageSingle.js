import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import capitalize from 'lodash/capitalize';
import isEmpty from 'lodash/isEmpty';

import { Layout, NotFound, FeatureFeed } from 'components';
import { Box, CoverImage, Loader, ThemeMixin, HtmlRenderer } from 'ui-kit';
import { useAnalytics } from 'providers/AnalyticsProvider';

const renderBody = ({ title, summary, htmlContent, coverImage }) => {
  const hasTitle = !isEmpty(title) && isEmpty(coverImage);
  const hasSummary = !isEmpty(summary) && isEmpty(coverImage);
  const hasContent = hasTitle || hasSummary || !isEmpty(htmlContent);

  if (hasContent) {
    return (
      <Box fontSize="l" margin="auto" py="l" px="s">
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
        {htmlContent && <HtmlRenderer htmlContent={htmlContent} />}
      </Box>
    );
  }

  return null;
};

const formatTitleForSEO = path => {
  if (typeof path !== 'string' || isEmpty(path)) {
    return 'Christ Fellowship Church';
  }

  return path
    .replace('/', '-')
    .split('-')
    .map(w => capitalize(w))
    .filter(w => !isEmpty(w))
    .join(' ');
};

function PageSingle(props = {}) {
  //Tracking Segment Data
  const analytics = useAnalytics();
  useEffect(() => {
    const { segmentData } = props?.data;
    if (segmentData) {
      analytics.page({
        title: title,
        contentCategory: segmentData?.category,
        contentTags: segmentData?.contentTags,
        mediaType: 'Information',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const router = useRouter();
  const { asPath } = router;

  const data = props?.data;
  const loading = props?.loading;

  const id = data?.id;
  const title = data?.title;
  const summary = data?.summary;
  const htmlContent = data?.htmlContent;
  const coverImage = data?.coverImage?.sources[0]?.uri;
  const features = data?.featureFeed?.features;
  const theme = data?.theme;
  const pathname = data?.routing?.pathname;
  const actions =
    pathname === 'christ-birthday-offering'
      ? [
          {
            title: 'READ BOOK',
            relatedNode: {
              url: 'https://e.issuu.com/embed.html?d=events_2021_cbo_print_handouts_8.5x11_pages_1_&hideIssuuLogo=true&u=christfellowshipchurch',
            },
          },
        ]
      : [];

  if (loading) {
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
      theme={theme}
      title={!title || isEmpty(title) ? formatTitleForSEO(asPath) : title}
      seoMetaTags={{
        image: coverImage,
        description: summary,
      }}
      contentMaxWidth={'100vw'}
      contentHorizontalPadding={'0'}
      contentVerticalPadding={'0'}
    >
      <ThemeMixin theme={theme ?? {}}>
        {(!isEmpty(coverImage) || pathname === 'christ-birthday-offering') && (
          <CoverImage
            type={
              pathname === 'christ-birthday-offering'
                ? 'graphic-overlay'
                : 'hero-glass'
            }
            src={
              pathname === 'christ-birthday-offering'
                ? '/christ-birthday-offering/cover-image.png'
                : coverImage
            }
            title={title}
            subtitle={summary}
            actions={actions}
            alignment="left"
          />
        )}

        <Box maxWidth={1100} margin="auto" px="s">
          {renderBody({ title, summary, htmlContent, coverImage })}

          {features && features.length > 0 && (
            <Box>
              <FeatureFeed data={features} />
            </Box>
          )}
        </Box>
      </ThemeMixin>
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
