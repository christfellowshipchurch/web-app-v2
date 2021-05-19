import { Layout, MainPhotoHeader } from 'components';
import { useRouter } from 'next/router';
import VideoPlayer from 'components/VideoPlayer/VideoJSPlayer';
import { Heading, Section } from 'ui-kit';
import { getMetaData } from 'utils';

export default function WeekendContentItem({ item } = {}) {
  const router = useRouter();
  if (router.isFallback) {
    return null;
  }

  const src = item.videos?.filter(({ sources }) => sources.length)[0]
    ?.sources[0].uri;

  return (
    <Layout meta={getMetaData(item)}>
      {!src ? (
        <MainPhotoHeader
          src={item.coverImage?.sources?.[0]?.uri}
          showImage={false}
          overlay=""
        />
      ) : null}
      <Section mb="xl" px={{ _: 'l', md: 'xxl' }}>
        {src ? (
          <VideoPlayer
            my="l"
            src={src}
            poster={item?.coverImage?.sources?.[0]?.uri}
          />
        ) : null}
        <Heading variant="h2" fontWeight="800" mb="m">
          {item.title}
        </Heading>
        <Heading variant="h4" fontWeight="500" mb="m">
          {item.summary}
        </Heading>
      </Section>
    </Layout>
  );
}
