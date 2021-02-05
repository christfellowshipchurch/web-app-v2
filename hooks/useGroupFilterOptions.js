import useCampuses from './useCampuses';
import useGroupPreferences from './useGroupPreferences';

// NOTE: To be replaced by an API query that combines this data for us
function useGroupFilterOptions() {
  const { campuses } = useCampuses();
  const { preferences, subPreferences } = useGroupPreferences();

  return {
    campuses,
    preferences,
    subPreferences,
  };
}

export default useGroupFilterOptions;
