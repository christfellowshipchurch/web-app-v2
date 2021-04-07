import React from 'react';
import PropTypes from 'prop-types';

import { Chat, ContentLayout } from 'components';
import { ChatConnectionProvider } from 'providers';
import {
  Box,
  Button,
  Card,
  CardGrid,
  Divider,
  HorizontalHighlightCard,
} from 'ui-kit';
import { CustomLink } from 'components';
import { getURLFromType } from 'utils';

import GroupDateTime from './GroupDateTime';

import Styled from './GroupSingle.styles';

function GroupSingle(props = {}) {
  console.log('props.data:', props.data);
  return (
    <ChatConnectionProvider>
      <ContentLayout
        title={props.data?.title}
        summary={props.data.schedule?.friendlyScheduleText}
        coverImage={props.data?.coverImage?.sources[0]?.uri}
        renderC={() => <Button>Join Meeting</Button>}
        renderContentD={() => (
          <Box pb="base">
            <GroupDateTime
              title={props.data?.title}
              summary={props.data?.summary}
              address={document.URL}
              dateTime={props.data?.dateTime}
              parentVideoCall={props.data?.parentVideoCall}
              videoCall={props.data?.videoCall}
            />
            <Divider mx="xl" mb="xl" />
            <Box as="h3">About</Box>
            <Box as="p">{props.data?.summary}</Box>
            <Box as="h3" mt="l" mb="base">
              Resources
            </Box>
            <CardGrid columns="2" gridRowGap={{ _: 's', md: 'base' }}>
              {props.data?.resources.map(resource => (
                <CustomLink
                  as="a"
                  key={resource?.relatedNode?.id}
                  href={getURLFromType(resource?.relatedNode)}
                  Component={HorizontalHighlightCard}
                  type="HIGHLIGHT_X_SMALL"
                  coverImage={
                    resource?.relatedNode?.coverImage?.sources[0]?.uri ||
                    '/link.png'
                  }
                  coverImageTitle={
                    resource?.title || resource?.relatedNode?.title
                  }
                  coverImageOverlay={true}
                />
              ))}
            </CardGrid>
          </Box>
        )}
        renderContentE={() => (
          <Card>
            <Styled.ChatContainer>
              <Chat
                streamChatChannel={props.data?.streamChatChannel}
                relatedNode={props.data}
                showHeader={true}
              />
            </Styled.ChatContainer>
          </Card>
        )}
      />
    </ChatConnectionProvider>
  );
}

GroupSingle.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default GroupSingle;
