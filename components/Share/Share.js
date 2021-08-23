import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

import { Box, Menu, List, Button, Icon } from 'ui-kit';

const Share = props => {
  const _isNotBrowser =
    typeof window === 'undefined' || typeof document === 'undefined';

  if (_isNotBrowser) return null;

  const defaultShareMessages = {
    faceBook: `Check out this article Christ Fellowship Church!`,
    twitter: `${props.title} at Christ Fellowship Church`,
    email: {
      subject: `${props.title} - Christ Fellowship Church`,
      body: `I thought you might be interested in this article from Christ Fellowship: ${document.URL} \n\n`,
    },
    sms: `I thought you might be interested in this article from Christ Fellowship: ${document.URL}`,
  };

  const messages = {
    ...defaultShareMessages,
    ...props.shareMessages,
  };

  const handleSocialShare = shareType => {
    const url = document.URL;

    switch (shareType) {
      case 'twitter':
        window.open(
          'http://twitter.com/share?url=' +
            encodeURIComponent(url) +
            '&text=' +
            encodeURIComponent(messages.twitter),
          '',
          'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
        );
        break;
      case 'facebook':
        window.open(
          'http://facebook.com/sharer/sharer.php?u=' +
            encodeURIComponent(url) +
            '&t=' +
            encodeURIComponent(messages.faceBook),
          '',
          'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
        );
        break;
      case 'email':
        window.open(
          `mailto:?subject=${encodeURIComponent(
            messages.email.subject
          )}&body=${encodeURIComponent(messages.email.body)}`
        );
        break;
      case 'sms':
        window.open(`sms://?&body=${encodeURI(messages.sms)}`);
        break;
      default:
        break;
    }
  };

  return (
    <Menu
      space="0"
      side={{ lg: 'right' }}
      renderTrigger={({ toggle }) => (
        <Button id={uniqueId('share-')} onClick={toggle} display="flex">
          <Icon name="share" mr="xs" />
          {props.shareTitle}
        </Button>
      )}
      display="inline-flex"
      {...props}
    >
      <List py="xs" space="0">
        <Box as="li">
          <Menu.Link
            onClick={() => handleSocialShare('facebook')}
            px="base"
            py="xs"
          >
            <Icon name="facebook" mr="s" />
            Facebook
          </Menu.Link>
        </Box>
        <Box as="li">
          <Menu.Link
            onClick={() => handleSocialShare('twitter')}
            px="base"
            py="xs"
          >
            <Icon name="twitter" mr="s" />
            Twitter
          </Menu.Link>
        </Box>
        <Box as="li">
          <Menu.Link
            onClick={() => handleSocialShare('email')}
            px="base"
            py="xs"
          >
            <Icon name="envelope" mr="s" />
            Email
          </Menu.Link>
        </Box>
        <Box as="li">
          <Menu.Link
            onClick={() => handleSocialShare('sms')}
            display={{ md: 'none' }}
            px="base"
            py="xs"
          >
            <Icon name="phone" mr="s" />
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
