import useCampuses from './useCampuses';
import usePreferences from './usePreferences';

// NOTE: To be replaced by an API query that combines this data for us
function useGroupFilterOptions() {
  const { campuses } = useCampuses();
  const { preferences, subPreferences } = usePreferences();

  return {
    campuses,
    preferences,
    subPreferences,
  };
}

export default useGroupFilterOptions;
