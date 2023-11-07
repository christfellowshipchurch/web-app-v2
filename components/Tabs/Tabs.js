import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { upperCase } from 'lodash';

import { Box } from 'ui-kit';

function Tabs({ TabComponent, tabs, title, summary }) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Box
      display="flex"
      flexDirection="column"
      my="xl"
      mx="auto"
      textAlign="center"
      maxWidth={{ _: 390, md: 1100 }}
      width="100%"
    >
      {title && (
        <Box as="h2" color="primary">
          {title}
        </Box>
      )}
      {summary && (
        <Box as="h5" color="neutrals.500">
          {upperCase(summary)}
        </Box>
      )}
      {/* Tabs */}
      <Box
        mx="auto"
        width="100%"
        maxWidth={{ _: 390, md: 1000 }}
        mt="base"
        display="flex"
        overflow="scroll"
      >
        {tabs?.map((props, index) => (
          <Box
            flex="1"
            key={index}
            onClick={() => setSelectedTab(index)}
            // mx="base"
            pr="10px"
          >
            <TabComponent
              {...props?.tabProps}
              isSelected={index === selectedTab}
            />
          </Box>
        ))}
      </Box>
      {/* Content */}
      <Box>
        {tabs[selectedTab]?.tabContent
          ? tabs[selectedTab]?.tabContent()
          : 'Error: No tab content provided.'}
      </Box>
    </Box>
  );
}

Tabs.propTypes = {
  /**
   * optional title section
   */
  title: PropTypes.string,
  /**
   * optional summary section
   */
  summary: PropTypes.string,
  /**
   * Component that will display the tab(s)
   */
  TabComponent: PropTypes.func,
  /**
   * Data to be passed to each tab, tabProps will be passed to the TabComponent. tabContent will be rendered in the content section.
   */
  tabs: PropTypes.shape({
    tabProps: PropTypes.object,
    tabContent: PropTypes.func,
  }),
};
Tabs.defaultProps = {};

export default Tabs;
