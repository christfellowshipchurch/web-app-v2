import Head from 'next/head';
import parseHtml from 'html-react-parser';
import { Footer, Header } from 'components';
import { useAnalytics } from 'providers/AnalyticsProvider';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function OneLifePage(props) {
  const analytics = useAnalytics();
  const router = useRouter();

  const { asPath } = router;

  useEffect(() => {
    analytics.page({
      contentCategory: 'Information',
      mediaType: 'Information',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Refresh the page if the URL contains #refresh
  useEffect(() => {
    if (asPath.includes('#refresh')) {
      window.location = '/one-life';
    }
  }, [router, asPath]);

  return (
    <>
      <Head>{parseHtml(props?.headContent)}</Head>
      <Header />
      <div dangerouslySetInnerHTML={{ __html: props?.bodyContent }} />
      <Footer />
    </>
  );
}

export async function getStaticProps(ctx) {
  // Import modules in here that aren't needed in the component
  const cheerio = await import(`cheerio`);
  const axios = (await import(`axios`)).default;

  // Fetch HTML
  let res = await axios(
    'https://cfdp-marketing-site.webflow.io/one-life'
  ).catch(err => {
    console.error(err);
  });
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
