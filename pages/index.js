import { initializeApollo } from '../config/apolloClient';
import { GET_WEBSITE_HEADER } from '../hooks/useWebsiteNavigation';
import { Box, Card } from '../ui-kit';
import { Layout } from '../components';

export default function Home() {
  return (
    <Layout title="Home">
      <Card
        height="450px"
        mb="xl"
        coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=16673f3d-f08f-44b8-80d2-02c4ecc89426"
        coverImageOverlay={true}
        coverImageTitle="We're Open!"
        coverImageDescription="All campus locations now meeting in person."
      />
      <Card
        height="450px"
        mb="l"
        coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=a8c4e5f5-0f4f-47fe-a3f7-3121d1e9127f"
        coverImageOverlay={true}
        coverImageTitle="Tune In Online"
        coverImageDescription="Join the live experience from wherever you are!"
      />
      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gridColumnGap="base"
        mb="xxl"
      >
        <Card
          coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=85d6dc6e-d4e3-4ec2-a115-eec45fdaf5f3"
          title="Get Connected"
          description="We'd like to help you get connected at Christ Fellowship and grow your faith."
        />
        <Card
          coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=53ed21c4-932c-4ba4-8ffd-c87c4cb4f801"
          title="Give Online"
          description="See what God can do through your generosity by giving easily and securely online."
        />
        <Card
          coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=7bcce7b7-2096-4624-a71c-fabb07cafab4"
          title="Watch On-Demand"
          description="Catch up on past messages."
        />
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
          <Card
            coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=00d4e794-1da0-486a-a0e6-5a66dd6b54c7"
            title="The Journey"
            description="Your first step to getting connected here at Christ Fellowship."
          />
          <Card
            coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=3684e077-82fc-4ccf-917c-778a86c48b8f"
            title="Night of Prayer &amp; Worship"
            description="Praying for our nation, our leaders, and our communities."
          />
        </Box>
      </Box>
      <Card
        height="450px"
        mb="l"
        coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=bbdd5259-eb46-4a28-a3e7-c30e2b5ef28d"
        coverImageOverlay={true}
        coverImageTitle="CFKids"
        coverImageDescription="Resources that help you grow and develop your kids."
      />
      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gridColumnGap="base"
        mb="xxl"
      >
        <Card
          coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=a4207d94-1a32-41ee-b483-e274a38780b0"
          title="CFStudents"
          description="Being a student can be tough, but it doesn’t have to be. We can help."
        />
        <Card
          coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=b1bd5a9b-d663-432d-a2f8-dc3b75f751c6"
          title="CF Young Adults"
          description="You don’t have to navigate adulthood alone."
        />
        <Card
          coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=0dbbe729-6f17-46c1-a560-c2aa7e56c381"
          title="CF Married People"
          description="Are you ready to have some serious fun in your marriage?"
        />
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
          <Card
            coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=f6aa4f00-5bdb-4e64-a01b-e9401017ca01"
            title="Undivided | Week 1"
            description="Everyone is talking about it."
          />
          <Card
            coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=b00cfff7-b585-43cd-9000-d9f6ab50f697"
            coverImageLabel="Keep Talking"
            title="Undivided | Week 1"
            description="The weekend doesn't have to end. Keep Talking with this week's guide."
          />
          <Card
            coverImage="https://cloudfront.christfellowship.church/GetImage.ashx?guid=1236f2b7-1882-4e40-829a-22ba1785c2be"
            title="Turn Your Worry Into Worship"
            description="Get encouraged with this playlist on Spotify, Apple Music, and YouTube."
          />
        </Box>
      </Box>
    </Layout>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_WEBSITE_HEADER,
    variables: { website: process.env.NEXT_PUBLIC_WEBSITE_KEY },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
