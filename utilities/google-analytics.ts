import Router from 'next/router';
import ReactGA from 'react-ga';

const GOOGLE_ANALYTICS_PROPERTY = 'UA-55491347-1';

const trackPage = (url) => {
  ReactGA.set({ url });
  ReactGA.pageview(url);
};

export const initializeGoogleAnalytics = () => {
  ReactGA.initialize(GOOGLE_ANALYTICS_PROPERTY);

  if (typeof window !== 'undefined') {
    trackPage(window.location.pathname);
  }
  Router.events.on('routeChangeComplete', (url) => trackPage(url));
};
