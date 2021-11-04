import React from 'react';
import PropTypes from 'prop-types';

import { normalizeUserData } from 'utils';
import { Avatar as UIAvatar } from 'ui-kit';
import { CustomLink } from 'components';

function UserAvatar(props = {}) {
  const { currentUser } = props;
  const { name, src } = normalizeUserData(currentUser);

  return (
    <CustomLink href="/connect">
      <UIAvatar
        name={name}
        src={src}
        height={props?.size}
        width={props?.size}
      />
    </CustomLink>
  );
}

UserAvatar.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  size: PropTypes.number,
};

UserAvatar.defaultProps = {
  size: 45,
};

export default UserAvatar;
