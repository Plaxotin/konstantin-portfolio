import { useEffect } from 'react';
import { analyticsConfig } from './config';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    plausible: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

export function Analytics() {
  useEffect(() => {
    if (!analyticsConfig.enabled) return;

    if (analyticsConfig.googleAnalyticsId) {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.googleAnalyticsId}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      };
      window.gtag('js', new Date());
      window.gtag('config', analyticsConfig.googleAnalyticsId, {
        page_path: window.location.pathname,
      });
    }

    if (analyticsConfig.plausibleDomain) {
      const script = document.createElement('script');
      script.src = 'https://plausible.io/js/script.js';
      script.defer = true;
      script.setAttribute('data-domain', analyticsConfig.plausibleDomain);
      document.head.appendChild(script);
    }
  }, []);

  return null;
}

export function trackEvent(eventName: string, properties?: Record<string, string>) {
  if (!analyticsConfig.enabled) return;

  if (analyticsConfig.googleAnalyticsId && window.gtag) {
    window.gtag('event', eventName, properties);
  }

  if (analyticsConfig.plausibleDomain && window.plausible) {
    window.plausible(eventName, { props: properties });
  }
}

export function trackPageView(path: string) {
  if (!analyticsConfig.enabled) return;

  if (analyticsConfig.googleAnalyticsId && window.gtag) {
    window.gtag('config', analyticsConfig.googleAnalyticsId, {
      page_path: path,
    });
  }
}
