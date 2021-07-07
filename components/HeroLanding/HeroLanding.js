import React from 'react';
import PropTypes from 'prop-types';

import { CustomLink, Layout } from 'components';
import { Box, Button } from 'ui-kit';

import Styled from './HeroLanding.styles';

export default function HeroLanding(props = {}) {
  return (
    <Layout darkMode>
      <Styled justifyContent={{ _: 'flex-start', md: 'center' }}>
        <Styled.BackgroundVideo
          autoPlay
          muted
          loop
          src={props?.backgroundVideo}
          type="video/mp4"
        />
        <Styled.VideoOverlay />

        <Styled.Content>
          <Styled.Title>{props?.heroTitle}</Styled.Title>
          <Styled.Summary>{props?.heroSummary}</Styled.Summary>
          {props?.actions?.map((action, i) => (
            <CustomLink
              key={i}
              Component={Button}
              href={action.url}
              my="xs"
              maxWidth={{ _: '50%', md: '30%' }}
              {...action}
            >
              {action.title}
            </CustomLink>
          ))}
        </Styled.Content>
      </Styled>
      <Box mx="auto">{props?.children}</Box>
    </Layout>
  );
}

HeroLanding.propTypes = {
  heroTitle: PropTypes.string,
  heroSummary: PropTypes.string,
  backgroundVideo: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
  actions: PropTypes.array,
};

HeroLanding.defaultProps = {
  heroTitle: '',
  heroSummary: '',
  backgroundVideo: '',
  children: null,
  actions: [],
};
