import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { Layout } from 'components';
import { Box, Loader } from 'ui-kit';

/**
 *  Wistia Channel Embed
 *  This component grabs the Wistia Channel id from the url and uses it for the Wistia Embbed code snippet to view a Wistia Channel from our site.
 * @returns Wistia Embedded Channel
 */

export default function WistiaChannel(props = {}) {
  const [channelId, setChannelId] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { query } = router;
  const { title } = query;

  useEffect(() => {
    setLoading(true);
    if (title) {
      setChannelId(title);
      setLoading(false);
    }
  }, [router]);

  /**
   * todo : I don't know why, but adding the snippet twice somehow fixed the loading states for Wistia embed 🤔
   */
  return (
    <Layout>
      {!loading && channelId ? (
        <>
          <script
            src="https://fast.wistia.com/assets/external/channel.js"
            async
          ></script>
          <link
            rel="stylesheet"
            href={`https://fast.wistia.com/embed/channel/project/${channelId}/font.css`}
          />
          <div
            class={`wistia_channel wistia_async_${channelId} mode=inline`}
          ></div>
        </>
      ) : (
        <Box width="100%" p="l" textAlign="center">
          <Loader />
        </Box>
      )}
      <>
        <script
          src="https://fast.wistia.com/assets/external/channel.js"
          async
        ></script>
        <link
          rel="stylesheet"
          href={`https://fast.wistia.com/embed/channel/project/${channelId}/font.css`}
        />
        <div
          class={`wistia_channel wistia_async_${channelId} mode=inline`}
        ></div>
      </>
    </Layout>
  );
}
