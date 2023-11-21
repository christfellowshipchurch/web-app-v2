import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { findIndex, upperCase } from 'lodash';
import { useRouter } from 'next/router';

import { Box } from 'ui-kit';
import StyledTabContent from './Tabs.styles';

function Tabs({ TabComponent, tabs, title, summary }) {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState(0);

  // Set selected tab based on url hash
  useEffect(() => {
    const urlHash = router?.asPath.split('#')[1];
    const validAnchorId = !!tabs?.filter(
      tab => tab.tabProps?.id === urlHash
    )[0];

    if (validAnchorId) {
      const tabIndex = findIndex(tabs, tab => tab.tabProps.id === urlHash);
      setSelectedTab(tabIndex);
    }
  }, [router?.asPath, tabs]);

  return (
    <Box
      id={tabs[selectedTab]?.tabProps?.id}
      display="flex"
      flexDirection="column"
      my="xl"
      mx="auto"
      textAlign="center"
      maxWidth={{ _: 390, md: 1100 }}
      width="100%"
    >
      {title && <Box as="h1">{title}</Box>}
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
        mt="s"
        display="flex"
        overflow="scroll"
      >
        {tabs?.map((props, index) => (
          <Box
            id={`tab-${index}`}
            flex={1}
            key={index}
            onClick={() => setSelectedTab(index)}
          >
            <TabComponent
              {...props?.tabProps}
              isSelected={index === selectedTab}
            />
          </Box>
        ))}
      </Box>
      {/* Content */}
      <StyledTabContent key={selectedTab}>
        {tabs[selectedTab]?.tabContent
          ? tabs[selectedTab]?.tabContent()
          : 'Error: No tab content provided.'}
      </StyledTabContent>
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
