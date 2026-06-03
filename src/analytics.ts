const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

type GtagCommand = "config" | "js";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: GtagCommand, target: string | Date, config?: Record<string, unknown>) => void;
  }
}

export function initGoogleAnalytics() {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || window.gtag) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag(...args) {
    window.dataLayer?.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
}

export function trackPageView(path: string) {
  if (!GA_MEASUREMENT_ID || !window.gtag) {
    return;
  }

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: path,
  });
}
