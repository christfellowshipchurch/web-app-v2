import { Layout } from 'components';
import DropdownNextSteps from 'components/Dropdowns/DropdownNextSteps';
import { Section } from 'ui-kit';

export default function About() {
  return (
    <Layout title="About">
      <Section>
        <DropdownNextSteps hideShadow />
      </Section>
    </Layout>
  );
}
