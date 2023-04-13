import Document, { Html, Head, Main, NextScript } from "next/document";
import { SITE_NAME, HOME_OG_IMAGE_URL, BASE_PATH } from "../lib/constants";
// import Script from "next/script"
// import { GTM_ID } from "../lib/gtm";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        
          {/* <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
            }}
          /> */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="shortcut icon" href="/images/ssclogosymbol.png" />

          {/* General Meta */}        
          <meta property="og:url" content={BASE_PATH} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={SITE_NAME}/>
          <meta name="description" content={`We specialize in adventure, nature and culture tours across the little-known Northeast region of India. | ${SITE_NAME}.`}/>
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
          <meta property="og:image:height" content="205"/>
          <meta property="og:image:width" content="300"/>
          <meta property="og:description" content={`Sapphire skin & aesthetics clinic is the place where science meets beauty. Pamper yourself in luxury at our state-of-the art clinic, where each individual is given personal attention, safest treatments and utmost discretion. | ${SITE_NAME}.`}/>
          <meta name="keywords" content="dermatologist near me, skin doctor near me, skin specialist near me, skin doctor, skin clinic near me, skin specialist, pediatric dermatologist near me, dermatology consultants, best skin doctor near me, skin care clinic near me, cosmetic dermatology, skin care clinic, the skin clinic, dermatology specialists, best skin specialist near me, derma clinic near me, skin dr near me, dermatologist for hair loss, skin dermatologist, acne dermatologist near me, skin dr, skin care doctor, skincare clinic, dermatology and aesthetics, dermatologist mole removal"/>

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:title" content="The Sapphire Clinics"/>
          <meta name="twitter:site" content={BASE_PATH} />
          <meta name="twitter:creator" content="@mogsishere" />
        </Head>
        {/* <!-- Google Tag Manager (noscript) --> */}
        {/* <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript> */}
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
