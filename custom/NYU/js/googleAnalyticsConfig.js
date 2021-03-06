const outboundTrackingId = process.env.NODE_ENV === 'production' ? 'UA-55461631-19' : 'UA-55461631-25';
const outboundGTM = process.env.NODE_ENV === 'production' ? 'GTM-KBMBJL7' : 'GTM-T7VDTKV';

export default Object.freeze({
  name: 'googleAnalyticsConfig',
  config: [
    {
      trackingId: "UA-55461631-22",
    },
    {
      externalScriptURL: null,
      inlineScript: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${outboundGTM}');
      `,
      target: 'head',
    },
    {
      trackingId: outboundTrackingId,
      target: 'body',
    },
  ]
});
