import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import getURLFromType from 'utils/getURLFromType.js';
import LargeImage from 'components/LargeImage';

function Hit(props) {
  const router = useRouter();
  const url = getURLFromType(props.hit);
  return (
    <LargeImage
      action={url ? () => router.push(url) : null}
      src={props.hit.coverImage ? props.hit.coverImage.sources[0].uri : null}
      text={
        props.hit.title.length > 35
          ? props.hit.title.substring(0, 35) + '...'
          : props.hit.title
      }
      color="white"
      width={{ sm: '300px' }}
      height={{ sm: '225px' }}
      m="xs"
      size="m"
    />
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Hit;
