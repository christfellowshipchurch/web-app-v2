import { CampusSelector } from 'components';
import { useCurrentUser } from 'hooks';
import { useState } from 'react';
import { Box, Text } from 'ui-kit';

export default function CampusFilter({
  children,
  data,
  filterWidth,
  ...props
}) {
  const { data: userData } = useCurrentUser();
  const [campus, setCampus] = useState(userData?.currentUser?.profile?.campus);

  // We want to show the filter only if the data has campus options
  const hasCampuses = Boolean(data.find(datum => !!datum.node?.campus));

  // If the data has campus options, filter by the selected campus, otherwise show all data
  const filteredData = campus && hasCampuses
    ? data.filter(datum => datum.node?.campus?.id === campus?.id) : data;

  return (
    <Box {...props}>
      {hasCampuses ? (
        <Box mb="m">
          <Text>Select Campus</Text>
          <CampusSelector
            onChange={_campus => setCampus(_campus)}
            selected={campus}
            width={filterWidth}
          />
        </Box>
      ) : null}
      {children({ campus, data, filteredData })}
    </Box>
  );
}
