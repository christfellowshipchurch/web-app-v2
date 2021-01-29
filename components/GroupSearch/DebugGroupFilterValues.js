import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useGroupFilters } from 'providers/GroupFiltersProvider';
import { Box } from 'ui-kit';

export default function DebugFilterValues(props = {}) {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [filtersState] = useGroupFilters();

  useEffect(() => {
    if (router.query?.hasOwnProperty('debug')) {
      setVisible(true);
    }
  }, [router.query]);

  if (!visible) {
    return null;
  }

  return (
    <Box
      as="pre"
      mb="l"
      fontSize="xs"
      position="fixed"
      bottom="0"
      left="s"
      padding="base"
      paddingRight="l"
      bg="black"
      color="white"
      borderRadius="base"
      border="3px solid"
      borderColor="white"
      boxShadow="xl"
      maxWidth={400}
      overflow="scroll"
      zIndex="10"
    >
      {JSON.stringify(filtersState.values, null, 2)}
    </Box>
  );
}
