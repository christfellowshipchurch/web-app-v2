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
  ThemeMixin,
  utils,
  HtmlRenderer,
  Image,
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
              {props.titleIconLink ? props.titleIconLink() : null}
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
      <Box mb={{ _: 'l', md: '' }} mt={{ _: 'l', lg: '0' }}>
        {props.contentTitleD ? (
          <Box as="h2" fontSize="h3" mb="base">
            {props.contentTitleD}
          </Box>
        ) : null}
        {props.htmlContent && !props.renderContentD ? (
          <Card boxShadow="base" p={{ _: 's', md: 'base' }}>
            <Longform>
              <HtmlRenderer
                htmlContent={props?.htmlContent}
                customProcessing={[
                  {
                    //add download button for images
                    shouldProcessNode: function (node) {
                      return node.name && node.name === 'img';
                    },
                    processNode: function (node, children) {
                      return (
                        <Image
                          source={node?.attribs.src}
                          disableRatio
                          download
                        />
                      );
                    },
                  },
                ]}
              />
            </Longform>
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
    <ThemeMixin theme={props?.theme}>
      <Box backgroundColor={'bg'} color={'fg'}>
        <Cell
          as="main"
          maxWidth={props.contentMaxWidth}
          px={props.contentHorizontalPadding}
          pt={props.contentVerticalPadding}
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
            display={{ _: 'flex', lg: 'grid' }}
            gridTemplateColumns="65% 1fr"
            gridColumnGap="l"
            flexDirection="column-reverse"
          >
            {renderD()}
            {renderE()}
          </Box>
        </Cell>
      </Box>
      {props?.features && (
        <Cell
          as="main"
          maxWidth={props.contentMaxWidth}
          px={props.contentHorizontalPadding}
        >
          <FeatureFeed
            data={props?.features}
            additionalFeatures={props?.additionalFeatures}
          />
        </Cell>
      )}
    </ThemeMixin>
  );
}

ContentLayout.propTypes = {
  additionalFeatures: PropTypes.object,
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
  titleIconLink: PropTypes.func,
};

ContentLayout.defaultProps = {
  additionalFeatures: {},
  contentMaxWidth: DEFAULT_CONTENT_WIDTH,
  contentHorizontalPadding: 'base',
  contentVerticalPadding: { _: 'l', lg: 'xl' },
  seoMetaTags: {},
};

export default ContentLayout;
