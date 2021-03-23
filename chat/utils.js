// import memoize from 'fast-memoize';
import { isString, get, isEmpty } from 'lodash';

// :: General

export function stripPrefix(string) {
  if (!isString(string)) {
    return undefined;
  }

  return string.split(':')[1];
}

// Maps a user object from our API to a format required/optimized for Chat
export function getStreamUser(user) {
  if (!user) {
    return;
  }

  let name = user?.profile
    ? `${user.profile.firstName} ${user.profile.lastName}`
    : 'Unknown Person';

  return {
    id: stripPrefix(user.id),
    name,
    image: get(user, 'profile.photo.uri', ''),
  };
}

// Memoized to allow shallow equality checks in hooks, etc.
// export const getStreamUser = memoize(_getStreamUser, {
//   serializer: user => user?.id,
// });
