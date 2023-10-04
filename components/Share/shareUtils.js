export const handleSocialShare = ({ shareType, shareMessages }) => {
  const url = document.URL;

  switch (shareType) {
    case 'twitter':
      window.open(
        'http://twitter.com/share?url=' +
          encodeURIComponent(url) +
          '&text=' +
          encodeURIComponent(shareMessages.twitter),
        '',
        'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
      );
      break;
    case 'facebook':
      window.open(
        'http://facebook.com/sharer/sharer.php?u=' +
          encodeURIComponent(url) +
          '&t=' +
          encodeURIComponent(shareMessages.faceBook),
        '',
        'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
      );
      break;
    case 'email':
      window.open(
        `mailto:?subject=${encodeURIComponent(
          shareMessages.email.subject
        )}&body=${encodeURIComponent(shareMessages.email.body)}`
      );
      break;
    case 'sms':
      window.open(`sms://?&body=${encodeURI(shareMessages.sms)}`);
      break;
    default:
      break;
  }
};

export const shareMessaging = ({ title, shareMessages, url }) => {
  const defaultShareMessages = {
    title: `Christ Fellowship Church`,
    faceBook: `Check out this article from Christ Fellowship Church!`,
    twitter: `${title} at Christ Fellowship Church`,
    email: {
      subject: `${title} - Christ Fellowship Church`,
      body: `I thought you might be interested in this article from Christ Fellowship: ${url} \n\n`,
    },
    sms: `I thought you might be interested in this article from Christ Fellowship: ${url}`,
  };
  const messages = {
    ...defaultShareMessages,
    ...shareMessages,
  };
  return messages;
};
