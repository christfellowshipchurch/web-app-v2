import { Layout } from 'components';
import DropdownConnect from 'components/Dropdowns/DropdownConnect';
import { Section } from 'ui-kit';

export default function Connect() {
  return (
    <Layout title="Connect">
      <Section>
        <DropdownConnect hideShadow />
      </Section>
    </Layout>
  );
}
