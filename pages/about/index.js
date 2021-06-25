import { Layout } from 'components';
import DropdownAbout from 'components/Dropdowns/DropdownAbout';

export default function About({ dropdownData }) {
  return (
    <Layout title="About" dropdownData={dropdownData}>
      <DropdownAbout hideShadow {...dropdownData.about} />
    </Layout>
  );
}
