import React from 'react';
import PropTypes from 'prop-types';

import { createMarkup } from 'utils';
import { SEO, FeatureFeed } from 'components';
import {
  Box,
  Card,
  Cell,
  DefaultCard,
  Longform,
  ThemeProvider,
  utils,
} from 'ui-kit';

const DEFAULT_CONTENT_WIDTH = utils.rem('1100px');

function ContentLayout(props = {}) {
  function renderA() {
    if (props.coverImage) {
      return (
        <DefaultCard
          coverImage={props.coverImage}
          height={{ _: '298px', md: '596px' }}
          mb="l"
        />
      );
    }
    if (props.renderA) return props.renderA();
    return null;
  }

  function renderB() {
    if (props.renderB) return props.renderB();
    if (props.title || props.summary || props.renderContentB) {
      return (
        <Box mb={{ _: 'base', md: '' }}>
          {props.title ? (
            <Box as="h1" mb="0">
              {props.title}
            </Box>
          ) : null}
          {props.summary ? (
            <Box as="p" fontSize="l">
              {props.summary}
            </Box>
          ) : null}
          {props.renderContentB ? props.renderContentB() : null}
        </Box>
      );
    }
    return null;
  }

  function renderC() {
    if (props.renderC) {
      return props.renderC();
    }

    return null;
  }

  function renderD() {
    if (props.renderD) return props.renderD();
    const noContent = !props.htmlContent || props.htmlContent === '';
    if (noContent && !props.renderContentD) return null;
    return (
      <Box mb={{ _: 'l', md: '' }}>
        {props.contentTitleD ? (
          <Box as="h2" fontSize="h3" mb="base">
            {props.contentTitleD}
          </Box>
        ) : null}
        {props.htmlContent && !props.renderContentD ? (
          <Card boxShadow="base" p={{ _: 's', md: 'base' }}>
            <Longform
              dangerouslySetInnerHTML={createMarkup(props.htmlContent)}
            />
          </Card>
        ) : (
          props.renderContentD && (
            <Card boxShadow="base" p={{ _: 's', md: 'base' }}>
              {props.renderContentD()}
            </Card>
          )
        )}
      </Box>
    );
  }

  function renderE() {
    if (props.renderE) return props.renderE();
    const noContent = !props.contentTitleE && !props.renderContentE;
    if (noContent) return null;
    return (
      <Box>
        {props.contentTitleE ? (
          <Box as="h2" fontSize="h3" mb="base">
            {props.contentTitleE}
          </Box>
        ) : null}
        {props.renderContentE && props.renderContentE()}
      </Box>
    );
  }

  return (
    <ThemeProvider mode={props.mode}>
      <Box backgroundColor={'bg'} color={'fg'}>
        <Cell
          as="main"
          maxWidth={props.contentMaxWidth}
          px={props.contentHorizontalPadding}
          py={props.contentVerticalPadding}
        >
          <SEO title={props.title} {...props.seoMetaTags} />
          {renderA()}
          <Box
            alignItems="center"
            display={{ lg: 'grid' }}
            gridTemplateColumns="70% 30%"
            mb="l"
          >
            {renderB()}
            {renderC()}
          </Box>
          <Box
            display={{ lg: 'grid' }}
            gridTemplateColumns="65% 1fr"
            gridColumnGap="l"
          >
            {renderD()}
            {renderE()}
          </Box>
        </Cell>
      </Box>
      {props?.features && (
        <Box>
          <FeatureFeed data={props?.features} />
        </Box>
      )}
    </ThemeProvider>
  );
}

ContentLayout.propTypes = {
  contentTitleD: PropTypes.string,
  contentTitleE: PropTypes.string,
  coverImage: PropTypes.string,
  htmlContent: PropTypes.string,
  mode: PropTypes.string,
  renderA: PropTypes.func,
  renderB: PropTypes.func,
  renderC: PropTypes.func,
  renderContentB: PropTypes.func,
  renderContentD: PropTypes.func,
  renderContentE: PropTypes.func,
  renderD: PropTypes.func,
  renderE: PropTypes.func,
  seo: PropTypes.object,
  title: PropTypes.string,
};

ContentLayout.defaultProps = {
  seoMetaTags: {},
  contentMaxWidth: DEFAULT_CONTENT_WIDTH,
  contentHorizontalPadding: 'base',
  contentVerticalPadding: { _: 'l', lg: 'xl' },
};

export default ContentLayout;
