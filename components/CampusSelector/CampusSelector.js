import { useCampuses } from 'hooks';
import { Box, Loader, Select } from 'ui-kit';

export default function CampusSelector({ onChange, selected, ...props }) {
  const { loading, campuses } = useCampuses();
  const selectedCampus = selected || campuses?.[0] || {};

  if (loading) {
    return <Loader />;
  }
  return (
    <Box {...props}>
      <Select
        onChange={event =>
          onChange(campuses.find(campus => campus.id === event.target.value))
        }
      >
        {campuses.map(campus => (
          <Select.Option
            value={campus.id}
            selected={selectedCampus.id === campus.id}
          >
            {campus.name}
          </Select.Option>
        ))}
      </Select>
    </Box>
  );
}
