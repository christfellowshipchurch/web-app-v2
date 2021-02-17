import isString from 'lodash/isString';

import { DefaultCard } from 'ui-kit';

export default function CommunityListCard(props = {}) {
  // Note: Safe assumption that `props.src` is an image from our own
  // API and Cloudinary setup... so append parameters to optimize loading
  const coverImage = isString(props.coverImage)
    ? `${props.coverImage}&w=768`
    : props.coverImage;

  return <DefaultCard {...props} coverImage={coverImage} />;
}
