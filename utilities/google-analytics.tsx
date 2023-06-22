import Script from 'next/script';

const PROPERTY = 'G-YPTPLBLJYM';

export const GoogleAnalytics = () => {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${PROPERTY}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${PROPERTY}');
        `}
      </Script>
    </>
  );
};
