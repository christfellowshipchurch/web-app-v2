import Head from 'next/head';
import parseHtml from 'html-react-parser';
import { Footer, Header } from 'components';
import { Box } from 'ui-kit';

export default function TimelinePage(props) {
  return (
    <Box bg="black" overflow="none">
      <Head>{parseHtml(props.headContent)}</Head>
      <Header />
      <div dangerouslySetInnerHTML={{ __html: props.bodyContent }} />
      <Footer />
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
