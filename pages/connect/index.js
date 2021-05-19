import { Layout } from 'components';
import DropdownConnect from 'components/Dropdowns/DropdownConnect';
import { Section } from 'ui-kit';

export default function Connect({ dropdownData }) {
  return (
    <Layout title="Connect" dropdownData={dropdownData}>
      <Section>
        <DropdownConnect hideShadow />
      </Section>
    </Layout>
  );
}
