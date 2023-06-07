import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

import { Box, Menu, List, Button, Icon } from 'ui-kit';

import { handleSocialShare, shareMessaging } from './shareUtils.js';
import useCurrentBreakpoint from 'hooks/useCurrentBreakpoint.js';

const Share = props => {
  const _isNotBrowser =
    typeof window === 'undefined' || typeof document === 'undefined';

  if (_isNotBrowser) return null;

  // If alternate shareMessages prop is passed through it will replace the default with this `shareMessaging` util method.
  const messages = shareMessaging({ ...props, url: document.URL });

  const currentBreakpoint = useCurrentBreakpoint();

  return (
    <Menu
      space="0"
      side={{ lg: 'right', ...props.side }}
      renderTrigger={({ toggle }) => (
        <Button id={uniqueId('share-')} onClick={toggle} display="flex">
          <Icon name="share" mr={{ _: '', md: 'xs' }} />
          {!currentBreakpoint.isSmall && props.shareTitle}
        </Button>
      )}
      display="inline-flex"
      {...props}
    >
      <List py="xs" space="0">
        <Box as="li">
          <Menu.Link
            onClick={() =>
              handleSocialShare({
                shareType: 'facebook',
                shareMessages: messages,
              })
            }
            px="base"
            py="xs"
          >
            <Icon name="facebook" mr="s" />
            Facebook
          </Menu.Link>
        </Box>
        <Box as="li">
          <Menu.Link
            onClick={() =>
              handleSocialShare({
                shareType: 'twitter',
                shareMessages: messages,
              })
            }
            px="base"
            py="xs"
          >
            <Icon name="twitter" mr="s" />
            Twitter
          </Menu.Link>
        </Box>
        <Box as="li">
          <Menu.Link
            onClick={() =>
              handleSocialShare({
                shareType: 'email',
                shareMessages: messages,
              })
            }
            px="base"
            py="xs"
          >
            <Icon name="envelope" mr="s" />
            Email
          </Menu.Link>
        </Box>
        <Box as="li">
          <Menu.Link
            onClick={() =>
              handleSocialShare({
                shareType: 'sms',
                shareMessages: messages,
              })
            }
            display={{ md: 'none' }}
            px="base"
            py="xs"
          >
            <Icon name="messageBubble" mr="s" />
            Message
          </Menu.Link>
        </Box>
      </List>
    </Menu>
  );
};

Share.propType = {
  shareTitle: PropTypes.string,
  shareMessages: PropTypes.shape({}),
  title: PropTypes.string.isRequired,
};

Share.defaultProps = {
  shareTitle: 'Share',
  shareMessages: {},
};

export default Share;
