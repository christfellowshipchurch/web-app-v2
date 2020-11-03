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
      <Box mb="xxl">
        <Box as="h2" mb="l">
          Take Church Into Your Week
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
          gridColumnGap="base"
          mb="xxl"
        >
          <Card coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=00d4e794-1da0-486a-a0e6-5a66dd6b54c7">
            <Box as="h3">The Journey</Box>
            <Box as="p" color="neutrals.600" fontSize="s">
              Your first step to getting connected here at Christ Fellowship.
            </Box>
          </Card>
          <Card coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=3684e077-82fc-4ccf-917c-778a86c48b8f">
            <Box as="h3">Night of Prayer &amp; Worship</Box>
            <Box as="p" color="neutrals.600" fontSize="s">
              Praying for our nation, our leaders, and our communities.
            </Box>
          </Card>
        </Box>
      </Box>
      <Card
        height="450px"
        mb="l"
        coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=bbdd5259-eb46-4a28-a3e7-c30e2b5ef28d"
        coverImageOverlay={true}
        coverImageContent={() => (
          <Box color="white">
            <Box as="h2" mb="xs">
              CFKids
            </Box>
            <Box as="p">
              Resources that help you grow and develop your kids.
            </Box>
          </Box>
        )}
      />
      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gridColumnGap="base"
        mb="xxl"
      >
        <Card coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=a4207d94-1a32-41ee-b483-e274a38780b0">
          <Box as="h3">CFStudents</Box>
          <Box as="p" color="neutrals.600" fontSize="s">
            Being a student can be tough, but it doesn’t have to be. We can
            help.
          </Box>
        </Card>
        <Card coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=b1bd5a9b-d663-432d-a2f8-dc3b75f751c6">
          <Box as="h3">CF Young Adults</Box>
          <Box as="p" color="neutrals.600" fontSize="s">
            You don’t have to navigate adulthood alone.
          </Box>
        </Card>
        <Card coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=0dbbe729-6f17-46c1-a560-c2aa7e56c381">
          <Box as="h3">CF Married People</Box>
          <Box as="p" color="neutrals.600" fontSize="s">
            Are you ready to have some serious fun in your marriage?
          </Box>
        </Card>
      </Box>
      <Box mb="xxl">
        <Box as="h2" mb="l">
          Popular Now
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
          gridColumnGap="base"
          mb="xxl"
        >
          <Card coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=f6aa4f00-5bdb-4e64-a01b-e9401017ca01">
            <Box as="h3">Undivided | Week 1</Box>
            <Box as="p" color="neutrals.600" fontSize="s">
              Everyone is talking about it.
            </Box>
          </Card>
          <Card
            coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=b00cfff7-b585-43cd-9000-d9f6ab50f697"
            coverImageLabel="Keep Talking"
          >
            <Box as="h3">Undivided | Week 1</Box>
            <Box as="p" color="neutrals.600" fontSize="s">
              The weekend doesn't have to end. Keep Talking with this week's
              guide.
            </Box>
          </Card>
          <Card coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=1236f2b7-1882-4e40-829a-22ba1785c2be">
            <Box as="h3">Turn Your Worry Into Worship</Box>
            <Box as="p" color="neutrals.600" fontSize="s">
              Get encouraged with this playlist on Spotify, Apple Music, and
              YouTube.
            </Box>
          </Card>
        </Box>
      </Box>
    </Layout>
  );
}
