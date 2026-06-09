const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
const GA_MEASUREMENT_ID_PATTERN = /^G-[A-Z0-9]+$/;

let hasReportedConfigurationError = false;

type GtagCommand = "config" | "event" | "js";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: GtagCommand, target: string | Date, config?: Record<string, unknown>) => void;
  }
}

function getMeasurementId() {
  if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID_PATTERN.test(GA_MEASUREMENT_ID)) {
    return GA_MEASUREMENT_ID;
  }

  if (!hasReportedConfigurationError) {
    const reason = GA_MEASUREMENT_ID
      ? `has an invalid value: "${GA_MEASUREMENT_ID}"`
      : "is not set";

    console.error(
      `[analytics] VITE_GA_MEASUREMENT_ID ${reason}. Google Analytics is disabled.`,
    );
    hasReportedConfigurationError = true;
  }

  return null;
}

function isDebugModeEnabled() {
  if (typeof window === "undefined") return false;

  const debugParameter = new URLSearchParams(window.location.search).get(
    "ga_debug",
  );

  if (debugParameter === "1") {
    window.sessionStorage.setItem("ga_debug", "1");
  } else if (debugParameter === "0") {
    window.sessionStorage.removeItem("ga_debug");
  }

  return (
    import.meta.env.DEV || window.sessionStorage.getItem("ga_debug") === "1"
  );
}

export function initGoogleAnalytics() {
  if (typeof window === "undefined") return false;

  const measurementId = getMeasurementId();
  if (!measurementId) return false;
  if (window.gtag) return true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.addEventListener("error", () => {
    console.error(
      "[analytics] Google Analytics failed to load. Check content blockers and the site's Content Security Policy.",
    );
  });
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag(...args) {
    window.dataLayer?.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false });

  return true;
}

export function trackPageView(path: string) {
  const measurementId = getMeasurementId();
  if (!measurementId || !window.gtag) return;

  const debugMode = isDebugModeEnabled();

  window.gtag("event", "page_view", {
    debug_mode: debugMode,
    send_to: measurementId,
    page_location: window.location.href,
    page_title: document.title,
    page_path: path,
  });

  if (debugMode) {
    console.info(`[analytics] page_view queued for ${path}`);
  }
}
