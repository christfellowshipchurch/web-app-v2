import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { Box, Button, Divider, HtmlRenderer, systemPropTypes } from 'ui-kit';
import Styled from './FAQ.styles';
import colors from 'ui-kit/_config/colors';

function FAQ(props = {}) {
  const [display, setDisplay] = useState('none');

  /**
   * note : This is a custom scroll position setup for the Location Pages so it properly scrolls back to the FAQ section when pressing the See Less button. We may want to revisit how we determine the scroll position so its more dynamic.
   */

  return (
    <SCThemeProvider
      theme={{ colors: { ...colors?.light, ...props?.customTheme } }}
    >
      <Styled id="faq" {...props}>
        <Box
          mb={!props?.fullWidth ? 'xl' : 'base'}
          pr="l"
          mt={props?.fullWidth && { md: 's' }}
        >
          <Box
            as="h2"
            fontSize={32}
            color="neutrals.300"
            mb={props?.fullWidth ? 's' : 'base'}
          >
            FAQ
          </Box>
          {props?.showDescription && (
            <>
              <Box as="h4" color="tertiary" fontStyle="italic" mb={0}>
                Have additional questions?
              </Box>
              <Box fontWeight="bold" mb="base" maxWidth={450}>
                Someone from our team is happy to answer any of your questions!
              </Box>
              <Box
                as="a"
                href="https://rock.gocf.org/contactus"
                target="_blank"
              >
                Contact Us
              </Box>
            </>
          )}
        </Box>
        <Box>
          {props?.data?.map((n, i) => (
            <Box
              key={i}
              display={props?.displayAll ? null : i > 1 ? display : null}
            >
              <Box as="h3" color="secondary" fontStyle={'italic'}>
                {n.title}
              </Box>
              <HtmlRenderer htmlContent={n.description} />
              <Divider my="base" />
            </Box>
          ))}
          {!props?.displayAll && (
            <Box width="100%" textAlign="center">
              <Button
                onClick={() => {
                  window.scrollTo({
                    behavior: 'smooth',
                  });
                  setDisplay(display ? null : 'none');
                }}
                mx="auto"
                variant="link"
              >
                {`See ${display === 'none' ? 'More' : 'Less'}`}
              </Button>
            </Box>
          )}
        </Box>
      </Styled>
    </SCThemeProvider>
  );
}

FAQ.propTypes = {
  ...systemPropTypes,
  data: PropTypes.array,
  displayAll: PropTypes.bool,
  showDescription: PropTypes.bool,
};

FAQ.defaultProps = {
  data: [],
  displayAll: false,
  showDescription: true,
  customTheme: colors?.light,
};

export default FAQ;
