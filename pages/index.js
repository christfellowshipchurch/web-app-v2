import { Layout } from '../components';
import { Box } from '../styled';

export default function Home() {
  return (
    <Layout title="Home">
      <Box
        bg="fg"
        borderRadius="base"
        color="white"
        width="1100px"
        height="450px"
        mb="xl"
        position="relative"
      >
        <Box position="absolute" bottom="l" left="l">
          <Box as="h2" mb="xs">
            We're Open!
          </Box>
          <Box as="p">All campus locations now meeting in person.</Box>
        </Box>
      </Box>
      <Box
        bg="fg"
        borderRadius="base"
        color="white"
        width="1100px"
        height="450px"
        mb="l"
        position="relative"
      >
        <Box position="absolute" bottom="l" left="l">
          <Box as="h2" mb="xs">
            Tune In Online
          </Box>
          <Box as="p">Join the live experience from wherever you are!</Box>
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gridColumnGap="base"
        mb="xxl"
      >
        <Box
          bg="white"
          borderBottomLeftRadius="base"
          borderBottomRightRadius="base"
          boxShadow="xl"
        >
          <Box
            bg="primary"
            borderTopLeftRadius="s"
            borderTopRightRadius="s"
            height="195px"
          />
          <Box p="base">
            <Box as="h3">Get Connected</Box>
            <Box as="p" color="neutrals.600" fontSize="s">
              We'd like to help you get connected at Christ Fellowship and grow
              your faith.
            </Box>
          </Box>
        </Box>
        <Box
          bg="white"
          borderBottomLeftRadius="base"
          borderBottomRightRadius="base"
          boxShadow="xl"
        >
          <Box
            bg="primary"
            borderTopLeftRadius="s"
            borderTopRightRadius="s"
            height="195px"
          />
          <Box p="base">
            <Box as="h3">Give Online</Box>
            <Box as="p" color="neutrals.600" fontSize="s">
              See what God can do through your generosity by giving easily and
              securely online.
            </Box>
          </Box>
        </Box>
        <Box
          bg="white"
          borderBottomLeftRadius="base"
          borderBottomRightRadius="base"
          boxShadow="xl"
        >
          <Box
            bg="primary"
            borderTopLeftRadius="s"
            borderTopRightRadius="s"
            height="195px"
          />
          <Box p="base">
            <Box as="h3">Watch On-Demand</Box>
            <Box as="p" color="neutrals.600" fontSize="s">
              Catch up on past messages.
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
