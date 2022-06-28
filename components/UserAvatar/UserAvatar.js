import React from 'react';
import PropTypes from 'prop-types';

import { normalizeUserData } from 'utils';
import { Avatar as UIAvatar } from 'ui-kit';
import { CustomLink } from 'components';

function UserAvatar(props = {}) {
  const { currentUser } = props;
  const { name, src } = normalizeUserData(currentUser);

  return (
    <CustomLink
      Component={UIAvatar}
      href="/connect"
      name={name}
      src={src}
      height={props?.size}
      width={props?.size}
      cursor="pointer"
    />
  );
}

UserAvatar.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  size: PropTypes.string,
};

UserAvatar.defaultProps = {
  size: '45px',
};

export default UserAvatar;
