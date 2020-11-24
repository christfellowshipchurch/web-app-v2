import React from 'react';
import PropTypes from 'prop-types';

import { createMarkup } from '../../utils';
import { Box, Card, Longform } from '../../ui-kit';
import { PageTitle } from '../';

function ContentLayout(props = {}) {
  function renderA() {
    if (props.coverImage) {
      return <Card coverImage={props.coverImage} height="596px" mb="l" />;
    }
    if (props.renderA) return props.renderA();
    return null;
  }

  function renderB() {
    if (props.renderB) return props.renderB();
    if (props.title || props.summary) {
      return (
        <Box>
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
        </Box>
      );
    }
    return null;
  }

  function renderC() {
    if (props.renderC) {
      return <Box justifySelf="flex-end">{props.renderC()}</Box>;
    }
    return null;
  }

  function renderD() {
    if (props.renderD) return props.renderD();
    console.log(props);
    const noContent =
      !props.contentTitleD || !props.htmlContent || props.htmlContent === '';
    if (noContent && !props.renderContentD) return null;
    return (
      <Box>
        {props.contentTitleD ? (
          <Box as="h2" fontSize="h3" mb="base">
            {props.contentTitleD}
          </Box>
        ) : null}
        {props.htmlContent && !props.renderContentD ? (
          <Card boxShadow="base">
            <Longform
              dangerouslySetInnerHTML={createMarkup(props.htmlContent)}
            />
          </Card>
        ) : (
          props.renderContentD && (
            <Card boxShadow="base">{props.renderContentD()}</Card>
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
        {props.renderContentE && (
          <Card boxShadow="base">{props.renderContentE()}</Card>
        )}
      </Box>
    );
  }

  return (
    <>
      <PageTitle title={props.title} />
      {renderA()}
      <Box
        alignItems="center"
        display="grid"
        gridTemplateColumns="70% 30%"
        mb="l"
      >
        {renderB()}
        {renderC()}
      </Box>
      <Box display="grid" gridTemplateColumns="70% 30%" gridColumnGap="l">
        {renderD()}
        {renderE()}
      </Box>
    </>
  );
}

ContentLayout.propTypes = {
  contentTitleD: PropTypes.string,
  contentTitleE: PropTypes.string,
  coverImage: PropTypes.string,
  htmlContent: PropTypes.string,
  renderA: PropTypes.func,
  renderB: PropTypes.func,
  renderC: PropTypes.func,
  renderContentD: PropTypes.func,
  renderContentE: PropTypes.func,
  renderD: PropTypes.func,
  renderE: PropTypes.func,
  title: PropTypes.string,
};

export default ContentLayout;
