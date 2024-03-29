import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { ClientSideComponent, Layout } from 'components';
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

  useEffect(() => {
    setLoading(true);
    if (router?.query?.title) {
      setChannelId(router?.query?.title);
      setLoading(false);
    }
  }, [router]);

  return (
    <Layout>
      <ClientSideComponent>
        {!loading && channelId ? (
          <>
            <link
              rel="stylesheet"
              href={`https://fast.wistia.com/embed/channel/project/${channelId}/font.css`}
            />
            <div
              class={`wistia_channel wistia_async_${channelId} mode=inline`}
            ></div>
          </>
        ) : (
          <Box width="100%" p="xxl" display="flex" justifyContent="center">
            <Loader />
          </Box>
        )}
      </ClientSideComponent>
    </Layout>
  );
}
