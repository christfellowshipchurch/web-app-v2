import React from 'react';
import PropTypes from 'prop-types';

import { Carousel, MainPhotoHeader } from 'components';
import { Box, Heading, Text } from 'ui-kit';
import VideoPlayer from 'components/VideoPlayer';

function HomeFeed(props = {}) {
  const videoPlayers = [
    {
      src: 'https://player.vimeo.com/video/504118986',
      title: 'INTRO',
    },
    {
      src: 'https://player.vimeo.com/video/160532499',
      title: 'GOOD NEWS',
    },
    {
      src: 'https://player.vimeo.com/video/485173775',
      title: 'EVERYONE',
    },
    {
      src: 'https://player.vimeo.com/video/457496548',
      title: 'GOD',
    },
  ];
  return (
    <>
      <MainPhotoHeader
        src="https://s3-alpha-sig.figma.com/img/7c6e/6ecd/be76f176bb348ac07aa36e836250027f?Expires=1612742400&Signature=JmBv6MGtG4RTwmtkxO84zF0o7ogYwR~hm2VczDi4J1IPFp7qlsDH7JSQUqZ1JH6ICty5J5LkJLae1SbrtA6sgymJUOqTRjlPccBlbfGhP25dMzHEl3fzrxY-Cw-25FxR--MHdMS~96c352X6nrdzgai-dcruYnmu3a1ZDCQK3V0E5fXNR6ClgJOqkjvN3ljpySeSWKocHrMjbbYn7AaQ1XcQocCd4ayxCXfI03zRzt3GqB8jOBMtazQv5hm9VbLbIPuPwOR03TnkRe~v2REb7cUSlLRlANoDreKIPk4Wzcn34Xe7Qf1ywaIzCmqMVvIFtB4PLNWEPkpgEzlg6~Rbjg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        overlay="linear-gradient(89.49deg, #1c1617 -16.61%, rgba(28, 22, 23, 0) 99.62%)"
        content={
          <>
            <Box
              position="absolute"
              top="0"
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
              width="100%"
            >
              <Carousel neighbors="3d" contentWidth="681px" pl="100px">
                {videoPlayers.map((vp, i) => (
                  <VideoPlayer key={i} {...vp} />
                ))}
              </Carousel>
            </Box>
            <Box
              position="absolute"
              ml="xl"
              top="0"
              maxWidth="576px"
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              style={{ pointerEvents: 'none' }}
            >
              <Heading
                color="neutrals.100"
                opacity="33%"
                fontWeight="400"
                fontSize="18px"
                lineHeight="16.2px"
                textTransform="uppercase"
                mb="16px"
              >
                Highlights From
              </Heading>
              <Heading
                color="white"
                fontSize="86px"
                lineHeight="77.4px"
                fontWeight="800"
                textTransform="uppercase"
                mb="16px"
              >
                Waiting to enjoy God.
              </Heading>
              <Text
                color="neutrals.100"
                opacity="60%"
                maxWidth="297px"
                fontSize="18px"
                lineHeight="22.5px"
                mb="4px"
              >
                God is never in a rush to do anything, so we need to wait to
                enjoy Him.
              </Text>
              <Text
                color="neutrals.100"
                opacity="33%"
                maxWidth="297px"
                fontSize="14px"
                lineHeight="17.5px"
              >
                Last Sunday | November 19, 2020
              </Text>
            </Box>
          </>
        }
      />
    </>
  );
}

HomeFeed.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default HomeFeed;
