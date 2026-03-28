export interface AnalyticsConfig {
  googleAnalyticsId?: string;
  plausibleDomain?: string;
  enabled: boolean;
}

export const analyticsConfig: AnalyticsConfig = {
  googleAnalyticsId: import.meta.env.VITE_GA_ID || '',
  plausibleDomain: import.meta.env.VITE_PLAUSIBLE_DOMAIN || 'plaxotin.github.io',
  enabled: import.meta.env.PROD,
};
