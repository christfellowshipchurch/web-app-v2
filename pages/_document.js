import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      /**
       *  Note : This is a hack to add Webflow data attributes to the HTML tag
       *  In order for us to load animations and interactions from Webflow we need to pass the page ID to the HTML tag
       */
      let webflowDataAttributes = '';
      switch (ctx.pathname) {
        case '/one-life':
          webflowDataAttributes = 'data-wf-page="668fe801f1a28d6ad35222da"';
          break;
        case '/next-steps':
          webflowDataAttributes = 'data-wf-page="66d89a03d565e226f00e0083"';
          break;
        case '/cbo-2024':
          webflowDataAttributes = 'data-wf-page="672a56e11ae5618cff593ec3"';
          break;
        case '/christmas-at-cf':
          webflowDataAttributes = 'data-wf-page="6723dfd7d7fcb2c49854df47"';
          break;
        default:
          // Default case if no matching path is found
          webflowDataAttributes = '';
          break;
      }

      return {
        ...initialProps,
        // Overriding HTML tag so we can add Webflow data attributes
        html: `<html lang="en" ${webflowDataAttributes}>${initialProps?.html}</html>`,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  // Use this render method if we run into too many issues with the above method for the Webflow One Life page
  render() {
    return (
      <Html
        lang="en"
        // Webflow Site ID
        data-wf-site="66749aec3acbf8aa6ef9d378"
      >
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
