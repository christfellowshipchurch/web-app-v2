import { Box } from 'ui-kit';

export default function GroupChat(props = {}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p="base"
      pb="xl"
    >
      <Box as="h2">Group Chat</Box>
      <Box as="p" textAlign="center" mb="l">
        Download the Christ Fellowship app to
        <br />
        chat with your group and much more.
      </Box>
      <Box display="flex" flexDirection="column" width="190px" mx="auto">
        <Box
          as="a"
          href="https://apps.apple.com/us/app/christ-fellowship-app/id785979426"
          width="100%"
          rel="noreferrer noopener"
        >
          <Box
            as="img"
            src={'/app-store.png'}
            alt="Download the Christ Fellowship app on the App Store"
            width="100%"
            {...props}
            mb="base"
          />
        </Box>
        <Box
          as="a"
          href="https://play.google.com/store/apps/details?id=com.subsplash.thechurchapp.s_BSVMPR&hl=en_US&gl=US"
          target="_blank"
          rel="noreferrer noopener"
          width="100%"
        >
          <Box
            as="img"
            src={'/play-store.png'}
            alt="Get the Christ Fellowship app on Google Play"
            width="100%"
            {...props}
          />
        </Box>
      </Box>
    </Box>
  );
}
