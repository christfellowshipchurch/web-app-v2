import { Layout } from 'components';
import DropdownAbout from 'components/Dropdowns/DropdownAbout';
import { Section } from 'ui-kit';

export default function About({ dropdownData }) {
  return (
    <Layout title="About" dropdownData={dropdownData}>
      <Section>
        <DropdownAbout hideShadow />
      </Section>
    </Layout>
  );
}
