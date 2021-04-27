import { useEffect } from 'react';
import { Box, Select } from 'ui-kit';

export default function CampusSelector({
  onChange,
  selected,
  campuses,
  ...props
}) {
  useEffect(() => {
    if (!selected && campuses) {
      onChange(campuses?.[0]);
    }
  }, [campuses, selected, onChange]);

  return (
    <Box {...props}>
      <Select
        onChange={event =>
          onChange(campuses.find(campus => campus.id === event.target.value))
        }
      >
        {campuses.map(campus => (
          <Select.Option key={campus.id} value={campus.id}>
            {campus.name}
          </Select.Option>
        ))}
      </Select>
    </Box>
  );
}
