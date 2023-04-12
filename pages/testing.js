import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'components';
import { Box } from 'ui-kit';
import { WistiaPlayer, WistiaProvider } from '@wistia/react-embeds';

/**
 * note : This is a temporary testing environment for connecting to Wistia's API
 * ! : Please remove this file before creating PR.
 */

function WistiaTesting(props) {
  const [wistiaData, setWistiaData] = useState(null);

  useEffect(() => {
    async function getWistiaData() {
      const wistiaId = 'rq51y7uo7u';

      const resp = await fetch(
        `https://api.wistia.com/v1/medias/${wistiaId}.json`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer 4b5d21d0761b624ac3df14001b206be9ab70ea8c457433f2fa83d9ed490f587f`,
          },
        }
      )
        .then(resp => resp.json())
        .then(json => setWistiaData(JSON.stringify(json)));
    }

    getWistiaData();
  }, []);

  return (
    <Layout>
      <Box>Wistia testing</Box>
      {wistiaData && <Box p="xxl">{wistiaData}</Box>}

      <WistiaPlayer hashedId="rq51y7uo7u" />
    </Layout>
  );
}

WistiaTesting.propTypes = {};

export default WistiaTesting;
