import { FAQ, Layout } from 'components';
import { Box } from 'ui-kit';
import faqData from 'components/FAQ/faqData';

const Easter = () => {
  return (
    <Layout>
      <Box px="base" bg="#fcfce6">
        {/* Header Section */}
        <Box height="600px"></Box>
        {/* Video Section Section */}
        {/* Kids Programming Section */}
        {/* Serve Section */}
        {/* FAQ Section Section */}
        <FAQ pb="l" data={faqData('Easter')} />
      </Box>
    </Layout>
  );
};

export default Easter;
