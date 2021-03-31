import { Layout } from 'components';
import DropdownAbout from 'components/Dropdowns/DropdownAbout';
import { Section } from 'ui-kit';

export default function About() {
  return (
    <Layout title="About">
      <Section>
        <DropdownAbout hideShadow />
      </Section>
    </Layout>
  );
}
