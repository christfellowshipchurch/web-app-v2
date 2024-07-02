import Head from 'next/head';
import parseHtml from 'html-react-parser';
import { Layout } from 'components';
import { Box, Button, HtmlRenderer, Icon } from 'ui-kit';
import { useAnalytics } from 'providers/AnalyticsProvider';
import { useEffect } from 'react';
import {
  faqData,
  webflowAccordionAnimation,
} from '../../lib/marriedPeopleData';

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
    <>
      <Head key="marriage">{parseHtml(props?.headContent)}</Head>

      <Layout title="Married People">
        {/* Webflow Content */}
        <div dangerouslySetInnerHTML={{ __html: props?.bodyContent }} />

        {/* Carousel */}

        {/* Weddings FAQ */}
        <Box mb="xxl" display="flex" flexDirection="column" alignItems="center">
          <Box class="accordion-faqs_grid">
            {faqData?.map((faq, i) => (
              <Box class="accordion-faqs_item" key={i}>
                {/* Title Container*/}
                <Box
                  position="relative"
                  display="flex"
                  cursor="pointer"
                  width="100%"
                  alignItems="center"
                  justifyContent="space-between"
                  py="s"
                >
                  <Box fontSize={20} color="black">
                    {faq?.title}
                  </Box>
                  <Icon
                    id="arrow-image"
                    name="triangle"
                    color="primary"
                    style={{ transition: 'transform ease-in-out 0.3s' }}
                  />
                  {/* Overlay for onClick */}
                  <Box
                    position="absolute"
                    height="100%"
                    width="100%"
                    left={0}
                    zIndex={1}
                    onClick={e => {
                      webflowAccordionAnimation(e.target);
                    }}
                  />
                </Box>
                {/* Content */}
                <Box
                  id="faq-content-container"
                  maxHeight={0}
                  overflow="hidden"
                  style={{ transition: 'all ease-out 0.3s' }}
                >
                  <HtmlRenderer
                    htmlContent={faq?.description}
                    fontSize="18px"
                    color="#767676"
                  />
                  {/* Bottom spacing */}
                  <Box height="1rem" />
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
              fontWeight="500"
            >
              Wedding Inquiry Form
            </Button>
          </Box>
        </Box>
      </Layout>
    </>
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
