import { Layout } from 'components';
import DropdownConnect from 'components/Dropdowns/DropdownConnect';

export default function Connect({ dropdownData }) {
  return (
    <Layout title="Connect" dropdownData={dropdownData}>
      <DropdownConnect hideShadow {...dropdownData.connect} />
    </Layout>
  );
}
