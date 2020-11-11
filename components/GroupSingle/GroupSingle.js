import React from 'react';
import PropTypes from 'prop-types';

import { cleanMarkup } from '../../utils';
import { PageTitle } from '../';
import { Box, Button, Card, Longform } from '../../ui-kit';

function GroupSingle(props = {}) {
  const group = props.data;

  function createMarkup(string) {
    return { __html: cleanMarkup(string) };
  }

  return (
    <>
      <PageTitle title={group.title} />
      <Card
        coverImage={group?.coverImage?.sources[0]?.uri}
        height="596px"
        mb="l"
      />
      <Box
        alignItems="center"
        display="grid"
        gridTemplateColumns="70% 30%"
        mb="l"
      >
        <Box>
          <Box as="h1" mb="0">
            {group.title}
          </Box>
          <Box as="p" fontSize="l">
            {group.schedule?.friendlyScheduleText}
          </Box>
        </Box>
        <Box justifySelf="flex-end">
          <Button>Join Meeting</Button>
        </Box>
      </Box>
      <Box display="grid" gridTemplateColumns="70% 30%" gridColumnGap="l">
        <Box>
          <Box as="h2" fontSize="h3" mb="base">
            About
          </Box>
          <Card boxShadow="base">
            {group.summary ? (
              <Longform dangerouslySetInnerHTML={createMarkup(group.summary)} />
            ) : (
              <Box as="p" color="subdued" fontStyle="italic">
                There is no description for this Group.
              </Box>
            )}
          </Card>
        </Box>
        <Box>
          <Box as="h2" fontSize="h3" mb="base">
            Schedule
          </Box>
          <Card boxShadow="base">
            <Box as="p">The schedule will go here&hellip;</Box>
          </Card>
        </Box>
      </Box>
    </>
  );
}

GroupSingle.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default GroupSingle;
