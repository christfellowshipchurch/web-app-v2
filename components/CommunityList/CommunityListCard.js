import { DefaultCard } from 'ui-kit';
import { transformImageUrl } from 'utils';

export default function CommunityListCard(props = {}) {
  // Note: Safe assumption that `props.src` is an image from our own
  // API and Cloudinary setup... so append transform parameters to optimize.
  const coverImage = transformImageUrl(props.coverImage, { w: 768 });

  return <DefaultCard {...props} coverImage={coverImage} />;
}
