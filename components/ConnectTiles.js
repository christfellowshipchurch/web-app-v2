import { useRouter } from 'next/router';
import HorizontalRow from './HorizontalRow';

const ConnectTiles = () => {
  const router = useRouter();
  return (
    <HorizontalRow
      backgroundColor="neutrals.800"
      py="186px"
      width="100%"
      items={[
        {
          src: '/home/kids.png',
          action: () => router.push('/lh-kids'),
        },
        {
          src: '/home/students.png',
          action: () => router.push('/lh-students'),
        },
        {
          src: '/home/support.png',
          action: () => router.push('/cr-support'),
        },
        {
          src: '/home/groups.png',
          action: () => router.push('/life-groups'),
        },
        {
          src: '/home/watch-parties.png',
          action: () => router.push('/watch-groups'),
        },
        {
          src: '/home/help.png',
          action: () => router.push('/get-give-help'),
        },
      ]}
    />
  );
};

export default ConnectTiles;
