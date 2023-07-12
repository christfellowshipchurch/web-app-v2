import { shareMessaging } from './shareUtils.js';

describe('shareMessaging', () => {
  it('returns the default messaging for SMS from the Share Button', async () => {
    let ShareButtonSettings = shareMessaging({
      title: 'Testing',
      url: 'www.test.com',
    });
    expect(ShareButtonSettings?.sms).toBe(
      'I thought you might be interested in this article from Christ Fellowship: www.test.com'
    );
  });

  it('returns alternate messaging for SMS from the Share button', async () => {
    let testMessage = {
      sms: 'Testing a different SMS message for the Share Button',
    };
    let ShareButtonMessage = shareMessaging({
      title: 'Testing',
      shareMessages: testMessage,
      url: 'www.test.com',
    });
    expect(ShareButtonMessage.sms).toBe(
      'Testing a different SMS message for the Share Button'
    );
  });
});

/**
 * todo : need to find way to properly mock 'window.open' with the `handleSocialShare` method for proper testing.
 */
// describe('handleSocialShare util for Share.js', () => {
//     let windowSpy;

//     beforeEach(() => {
//       windowSpy = jest.spyOn(window, 'window', 'get');
//     });

//     afterEach(() => {
//       windowSpy.mockRestore();
//     });

//   it('returns the requested `twitter` social media link.', async () => {
//     let shareType = 'twitter';
//     let testMessage = {
//       twitter: 'testing twitter',
//     };
//     handleSocialShare({ shareType: shareType, shareMessages: testMessage });

//     expect(window.location.href).toEqual('https://example.com');
//   });
// });
