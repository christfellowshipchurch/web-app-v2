import { Layout } from 'components';
import DropdownNextSteps from 'components/Dropdowns/DropdownNextSteps';

export default function About({ dropdownData }) {
  return (
    <Layout title="Next Steps" dropdownData={dropdownData}>
      <DropdownNextSteps hideShadow {...dropdownData['next-steps']} />
    </Layout>
  );
}
