import Head from 'next/head';
import parseHtml from 'html-react-parser';
import { Layout } from 'components';
import { Box } from 'ui-kit';
import { useAnalytics } from 'providers/AnalyticsProvider';
import { useEffect } from 'react';

export default function TimelinePage(props) {
  const analytics = useAnalytics();
  useEffect(() => {
    analytics.page({
      contentCategory: 'Information',
      mediaType: 'Information',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box bg="black" overflow="none">
      <Head>{parseHtml(props?.headContent)}</Head>
      <Layout>
        <div dangerouslySetInnerHTML={{ __html: props?.bodyContent }} />
      </Layout>
    </Box>
  );
}

export async function getStaticProps(ctx) {
  // Import modules in here that aren't needed in the component
  const cheerio = await import(`cheerio`);
  const axios = (await import(`axios`)).default;

  // Fetch HTML
  let res = await axios('https://timeline-template-0e445e.webflow.io/').catch(
    err => {
      console.error(err);
    }
  );
  const html = res.data;

  // Parse HTML with Cheerio
  const $ = cheerio.load(html);
  const bodyContent = $(`body`).html();
  const headContent = $(`head`).html();

  // Send HTML to component via props
  return {
    props: {
      bodyContent,
      headContent,
    },
  };
}
