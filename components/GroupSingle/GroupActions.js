import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'ui-kit';
import { CustomLink } from 'components';

// add any additional parameters to the video urls
const videoCallURLWithParameters = (videoURL, parameters) => {
  const isMSIE = /*@cc_on!@*/ false || !!document.documentMode; //eslint-disable-line spaced-comment
  let urlWithParams = videoURL;

  if (!isMSIE) {
    urlWithParams = new URL(videoURL);

    if (parameters) {
      Object.entries(parameters).map(([key, value]) =>
        urlWithParams.searchParams.set(key, value)
      );
    }

    urlWithParams = urlWithParams.href;
  }

  return urlWithParams;
};

// :: Main Component
// ------------------------
const GroupActions = ({
  userName,
  parentVideoCall,
  videoCall,
  onClickParentVideoCall,
  onClickVideoCall,
}) => {
  return (
    <>
      {parentVideoCall?.link && (
        <CustomLink
          mb="base"
          Component={Button}
          href={videoCallURLWithParameters(
            parentVideoCall?.link,
            userName
              ? {
                  uname: userName,
                }
              : null
          )}
          onClick={() => onClickParentVideoCall('parent')}
          target="_blank"
          rel="noopener noreferrer"
          width="100%"
        >
          {parentVideoCall?.labelText || `Join Meeting`}
        </CustomLink>
      )}
      {videoCall?.link ? (
        <CustomLink
          mb="base"
          Component={Button}
          href={videoCallURLWithParameters(
            videoCall?.link,
            userName
              ? {
                  uname: userName,
                }
              : null
          )}
          onClick={() => onClickVideoCall()}
          target="_blank"
          rel="noopener noreferrer"
          width="100%"
        >
          {videoCall?.label || parentVideoCall
            ? 'Join Discussion Group'
            : 'Join Meeting'}
        </CustomLink>
      ) : (
        <Button
          // allow to just checkin for in person groups
          mb="base"
          href={'#'}
          onClick={() => onClickVideoCall()}
          width="100%"
        >
          Check In
        </Button>
      )}
    </>
  );
};

GroupActions.propTypes = {
  userName: PropTypes.string,
  parentVideoCall: PropTypes.shape({
    link: PropTypes.string,
    meetingId: PropTypes.string,
    passcode: PropTypes.string,
  }),
  videoCall: PropTypes.shape({
    labelText: PropTypes.string,
    link: PropTypes.string,
    meetingId: PropTypes.string,
    passcode: PropTypes.string,
  }),
  onClickParentVideoCall: PropTypes.func,
  onClickVideoCall: PropTypes.func,
};

export default GroupActions;
