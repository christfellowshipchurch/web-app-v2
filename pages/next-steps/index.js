import { Layout } from 'components';
import DropdownNextSteps from 'components/Dropdowns/DropdownNextSteps';
import { Section } from 'ui-kit';

export default function About({ dropdownData }) {
  return (
    <Layout title="Next Steps" dropdownData={dropdownData}>
      <Section>
        <DropdownNextSteps hideShadow />
      </Section>
    </Layout>
  );
}
