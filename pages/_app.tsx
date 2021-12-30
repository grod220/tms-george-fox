import React from 'react';
import '../public/global-styles.css';
import Navigation from '../components/navigation';
import Head from 'next/head';
import * as Sentry from '@sentry/browser';
import App from 'next/app';
import { initializeGoogleAnalytics } from '../utilities/google-analytics';

Sentry.init({ dsn: 'https://37c553e6cb9c4d7b91443519ccd448a9@sentry.io/1514998' });

initializeGoogleAnalytics();

export default class MyApp extends App {
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    Sentry.withScope((scope) => {
      (Object.keys(errorInfo) as (keyof typeof errorInfo)[]).forEach((key) => {
        scope.setExtra(key, errorInfo[key]);
      });
      if (process.env.NODE_ENV === 'production') {
        Sentry.captureException(error);
      }
    });
    super.componentDidCatch?.(error, errorInfo);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <Navigation />
        <Component {...pageProps} />
      </>
    );
  }
}
