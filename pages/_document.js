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

      // Note : This is a hack to add Webflow data attributes to the HTML tag
      // let webflowDataAttributes = '';
      // if (ctx.pathname === '/one-life') {
      //   webflowDataAttributes =
      //     'data-wf-page="668fe801f1a28d6ad35222da" data-wf-site="66749aec3acbf8aa6ef9d378"';
      // }

      return {
        ...initialProps,
        // Overriding HTML tag so we can add Webflow data attributes
        //html: `<html lang="en" ${webflowDataAttributes}>${initialProps?.html}</html>`,
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
        //hard coding the One Life page data attributes
        // todo: find a better way to do this
        data-wf-page="668fe801f1a28d6ad35222da"
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
