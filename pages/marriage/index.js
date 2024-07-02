import Head from 'next/head';
import parseHtml from 'html-react-parser';
import { Footer, Header } from 'components';
import { Box, Button, HtmlRenderer, Image } from 'ui-kit';
import { useAnalytics } from 'providers/AnalyticsProvider';
import { useEffect } from 'react';
import { faqClick, faqData } from './utils';

export default function MarriagePage(props) {
  const analytics = useAnalytics();

  useEffect(() => {
    analytics.page({
      contentCategory: 'Information',
      mediaType: 'Information',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box overflow="none">
      <Head key="marriage">{parseHtml(props?.headContent)}</Head>
      <Header />
      <div dangerouslySetInnerHTML={{ __html: props?.bodyContent }} />
      {/* Weddings FAQ */}
      <Box p={32} display="flex" flexDirection="column" alignItems="center">
        <Box class="weddings-faqs">
          {faqData?.map((faq, i) => (
            <Box class="wedding-faq" key={i}>
              {/* Title Container*/}
              <Box
                position="relative"
                display="flex"
                cursor="pointer"
                width="100%"
                alignItems="center"
                py={8}
              >
                <Box fontSize={20} color="black">
                  {faq?.title}
                </Box>
                <Image
                  style={{ transition: 'all ease-in-out 0.25s' }}
                  id="arrow-image"
                  width={20}
                  mr="0px"
                  source="/marriage/blue-triangle.svg"
                  borderRadius={0}
                  aspectRatio="auto"
                />
                {/* Overlay for onClick */}
                <Box
                  position="absolute"
                  height="100%"
                  width="100%"
                  left={0}
                  zIndex={1}
                  onClick={e => {
                    faqClick(e.target);
                  }}
                />
              </Box>
              {/* Content */}
              <Box
                id="faq-content-container"
                maxHeight={0}
                overflow="hidden"
                style={{ transition: 'all ease-in-out 0.25s' }}
              >
                <HtmlRenderer
                  htmlContent={faq?.description}
                  fontSize="18px"
                  color="#767676"
                />
              </Box>
            </Box>
          ))}
        </Box>
        <Box mt={64}>
          <Button
            borderRadius={12}
            fontSize={20}
            boxShadow="0 4px 4px rgba(0, 0, 0, .25)"
            href="#inquiry"
          >
            Wedding Inquiry Form
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export async function getStaticProps(ctx) {
  // Import modules in here that aren't needed in the component
  const cheerio = await import(`cheerio`);
  const axios = (await import(`axios`)).default;

  // Fetch HTML
  let res = await axios(
    'https://cfdp-marketing-site.webflow.io/married-people'
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
