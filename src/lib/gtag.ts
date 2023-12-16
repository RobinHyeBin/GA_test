type EventNames = Gtag.EventNames | "submit_form" | "signup_view";

type EventParams =
  | Gtag.EventParams
  | {
      step?: number;
    };

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  window.gtag("config", GA_TRACKING_ID as string, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (action: EventNames, params: EventParams) => {
  window.gtag("event", action, {
    ...params,
  });
};
