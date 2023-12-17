type EventNames = Gtag.EventNames | "submit_form" | "signup_view";

type EventParams =
  | Gtag.EventParams
  | {
      step?: string;
    };

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url: URL) => {
  if (GA_TRACKING_ID) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = (action: EventNames, params: EventParams) => {
  window.gtag("event", action, {
    ...params,
  });
};
