import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'ui-kit';
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
  checkInCompleted,
}) => {
  return (
    <>
      {parentVideoCall?.link && (
        <Button
          mb="base"
          Component={Button}
          onClick={() => {
            const href = videoCallURLWithParameters(
              parentVideoCall?.link,
              userName
                ? {
                    uname: userName,
                  }
                : null
            )

            if (href) {
              onClickParentVideoCall('parent');
              window.open(href);
            }
          }}
          width="100%"
        >
          {parentVideoCall?.labelText || `Join Meeting`}
        </Button>
      )}
      {videoCall?.link ? (
        <Button
          mb="base"
          Component={Button}
          onClick={() => {
            const href = videoCallURLWithParameters(
              videoCall?.link,
              userName
                ? {
                    uname: userName,
                  }
                : null
            )

            if (href) {
              onClickVideoCall();
              window.open(href);
            }
          }}
          width="100%"
        >
          {videoCall?.label || parentVideoCall
            ? 'Join Discussion Group'
            : 'Join Meeting'}
        </Button>
      ) : (
        <Button
          // allow to just checkin for in person groups
          mb="base"
          href={'#'}
          onClick={() => onClickVideoCall()}
          width="100%"
          disabled={checkInCompleted}
        >
          {checkInCompleted ? 'Checked In' : 'Check In'}
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
