import { isString, get } from 'lodash';

/**
 * Removes the typed prefix from an Apollos global ID.
 * @param {String} string
 * @returns String
 * @example
 * stripPrefix("SomeType:abc123");
 * // --> "abc123"
 */
export function stripPrefix(string) {
  if (!isString(string)) {
    return undefined;
  }

  return string.split(':')[1];
}

/**
 * Maps an AuthenticatedUser or Person from our API to a format suitable
 * for use in Chat context.
 * @param user An `AuthenticatedUser` or `Person` type
 * @returns Object
 */
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
