import { Card, Layout } from '../components';
import { Box } from '../styled';

export default function Home() {
  return (
    <Layout title="Home">
      <Card
        height="450px"
        mb="xl"
        coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=16673f3d-f08f-44b8-80d2-02c4ecc89426"
        coverImageOverlay={true}
        coverImageContent={() => (
          <Box color="white">
            <Box as="h2" mb="xs">
              We're Open!
            </Box>
            <Box as="p">All campus locations now meeting in person.</Box>
          </Box>
        )}
      />
      <Card
        height="450px"
        mb="l"
        coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=a8c4e5f5-0f4f-47fe-a3f7-3121d1e9127f"
        coverImageOverlay={true}
        coverImageContent={() => (
          <Box color="white">
            <Box as="h2" mb="xs">
              Tune In Online
            </Box>
            <Box as="p">Join the live experience from wherever you are!</Box>
          </Box>
        )}
      />
      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gridColumnGap="base"
        mb="xxl"
      >
        <Card coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=85d6dc6e-d4e3-4ec2-a115-eec45fdaf5f3">
          <Box as="h3">Get Connected</Box>
          <Box as="p" color="neutrals.600" fontSize="s">
            We'd like to help you get connected at Christ Fellowship and grow
            your faith.
          </Box>
        </Card>
        <Card coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=53ed21c4-932c-4ba4-8ffd-c87c4cb4f801">
          <Box as="h3">Give Online</Box>
          <Box as="p" color="neutrals.600" fontSize="s">
            See what God can do through your generosity by giving easily and
            securely online.
          </Box>
        </Card>
        <Card coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=7bcce7b7-2096-4624-a71c-fabb07cafab4">
          <Box as="h3">Watch On-Demand</Box>
          <Box as="p" color="neutrals.600" fontSize="s">
            Catch up on past messages.
          </Box>
        </Card>
      </Box>
    </Layout>
  );
}
