import Head from 'next/head';
import parseHtml from 'html-react-parser';
import axios from 'axios';
import { load } from 'cheerio';
import { Footer, Header, NotFound } from 'components';
import { Box, Loader } from 'ui-kit';
import { useAnalytics } from 'providers/AnalyticsProvider';
import { useEffect, useState } from 'react';

export default function MarriagePage(props) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const analytics = useAnalytics();

  useEffect(() => {
    const fetchWebflowPage = async () => {
      // Fetch HTML
      let res = await axios(
        'https://cfdp-marketing-site.webflow.io/married-people'
      ).catch(err => {
        console.error(err);
      });

      if (res) {
        const html = res?.data;

        // Parse HTML with Cheerio
        const $ = load(html);
        const bodyContent = $(`body`).html();
        const headContent = $(`head`).html();

        // Send HTML to component via props
        return {
          props: {
            bodyContent,
            headContent,
          },
        };
      } else {
        return null;
      }
    };

    fetchWebflowPage().then(data => {
      setData(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    analytics.page({
      contentCategory: 'Information',
      mediaType: 'Information',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data) return <NotFound />;

  return (
    <Box bg="black" overflow="none">
      <Head key="marriage">{parseHtml(data?.props?.headContent)}</Head>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: data?.props?.bodyContent }} />
      )}
      <Footer />
    </Box>
  );
}

// export async function getStaticProps(ctx) {
//   // Import modules in here that aren't needed in the component
//   const cheerio = await import(`cheerio`);
//   const axios = (await import(`axios`)).default;

//   // Fetch HTML
//   let res = await axios(
//     'https://cfdp-marketing-site.webflow.io/married-people'
//   ).catch(err => {
//     console.error(err);
//   });
//   const html = res.data;

//   // Parse HTML with Cheerio
//   const $ = cheerio.load(html);
//   const bodyContent = $(`body`).html();
//   const headContent = $(`head`).html();

//   // Send HTML to component via props
//   return {
//     props: {
//       bodyContent,
//       headContent,
//     },
//   };
// }
