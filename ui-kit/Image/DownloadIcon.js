import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Icon } from 'ui-kit';
import Styled from './Image.styles';

const DownloadIcon = (props = {}) => {
  const [status, setStatus] = useState("IDLE") // ACTIVE | DONE

  useEffect(() => {
    if (status === "DONE") {
      setTimeout(() => {
        setStatus("IDLE")
      }, 2500)
    }
  }, [status])

  return (
    <Styled.DownloadLink
      status={status}
      onClick={() => {
        setStatus("DONE");
      }}
      onMouseEnter={() => setStatus("ACTIVE")}
      onMouseLeave={() => {
        if (status === "DONE") return
        setStatus("IDLE")
      }}
      href={`/api/image?src=${props?.source}`}
      download
    >
      <Icon 
        name={status === "DONE" ? 'check' : 'download'}
        size={14}
        color='primary'
      />

      <Box
        as="span"
        color={"primary"}
        fontSize="0.8rem"
        fontWeight="bold"
        ml={status === "IDLE" ? "0px" : "3px"}
      >
        {status === "DONE" ? 'Downloaded' : "Download"}
      </Box>
    </Styled.DownloadLink>
  );
};

DownloadIcon.propTypes = {
  source: PropTypes.string,
};

DownloadIcon.defaultProps = {
  source: '',
};

export default DownloadIcon;
