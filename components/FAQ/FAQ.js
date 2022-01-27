import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Button, Divider, HtmlRenderer, systemPropTypes } from 'ui-kit';
import Styled from './FAQ.styles';
import faqData from './faqData';

function FAQ(props = {}) {
  const [display, setDisplay] = useState('none');

  return (
    <Styled id="faq" {...props}>
      <Box mb="xl" pr="l">
        <Box as="h2" fontSize={32} color="neutrals.300" mb="base">
          FAQ
        </Box>
        <Box as="h4" color="tertiary" fontStyle="italic" mb={0}>
          Have additional questions?
        </Box>
        <Box fontWeight="bold" mb="base" maxWidth={450}>
          Someone from our team is happy to answer any of your questions!
        </Box>
        <Box as="a">Contact Us</Box>
      </Box>
      <Box>
        {props?.data?.map((n, i) => (
          <Box display={i > 1 ? display : null}>
            <Box as="h3" color="secondary" fontStyle="italic">
              {n.title}
            </Box>
            <HtmlRenderer htmlContent={n.description} />
            <Divider my="base" />
          </Box>
        ))}
        <Box width="100%" textAlign="center">
          <Button
            onClick={() => {
              setDisplay(display ? null : 'none');
              window.location = '#faq';
            }}
            mx="auto"
            variant="link"
          >
            {`See ${display === 'none' ? 'More' : 'Less'}`}
          </Button>
        </Box>
      </Box>
    </Styled>
  );
}

FAQ.propTypes = {
  ...systemPropTypes,
  data: PropTypes.array,
};

FAQ.defaultProps = {
  data: faqData,
};

export default FAQ;
