import mixpanel from "mixpanel-browser";

import { environment } from "~/env.cjs";

export interface MixpanelEventProperties {
  [key: string]: any;
}

export interface UserProperties {
  $name?: string;
  $email?: string;
  user_type?: "developer" | "node_operator" | "user" | "visitor";
  first_visit_date?: string;
  last_visit_date?: string;
  preferred_section?: string;
  docs_version?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

class MixpanelService {
  private initialized = false;
  private isProduction = false;

  constructor() {
    this.isProduction = environment.NEXT_PUBLIC_VERCEL_ENV === "production";
  }

  init() {
    if (this.initialized || typeof window === "undefined") return;

    const token = environment.NEXT_PUBLIC_MIXPANEL_TOKEN;
    if (!token) {
      if (!this.isProduction) {
        // eslint-disable-next-line no-console
        console.warn("Mixpanel token not found");
      }
      return;
    }

    try {
      mixpanel.init(token, {
        debug: !this.isProduction,
        track_pageview: true,
        persistence: "localStorage",
        batch_requests: true,
        // Respect user privacy
        opt_out_tracking_by_default: false,
        ignore_dnt: false,
      });

      this.initialized = true;

      // Track initial page load
      this.trackPageView();

      // Set up user properties if this is a new session
      this.initializeUser();

      if (!this.isProduction) {
        // eslint-disable-next-line no-console
        console.log("Mixpanel initialized successfully");
      }
    } catch (error) {
      console.error("Failed to initialize Mixpanel:", error);
    }
  }

  private initializeUser() {
    const now = new Date().toISOString();
    const isFirstVisit = !localStorage.getItem("mixpanel_first_visit");

    if (isFirstVisit) {
      localStorage.setItem("mixpanel_first_visit", now);
      this.setUserProperties({
        first_visit_date: now,
        user_type: "visitor",
      });
    }

    this.setUserProperties({
      last_visit_date: now,
    });
  }

  track(eventName: string, properties?: MixpanelEventProperties) {
    if (!this.initialized) return;

    try {
      const enrichedProperties = {
        ...properties,
        page_url: window.location.href,
        page_path: window.location.pathname,
        timestamp: new Date().toISOString(),
        docs_version: "v2", // Update this based on your versioning
        environment: environment.NEXT_PUBLIC_VERCEL_ENV,
      };

      mixpanel.track(eventName, enrichedProperties);
    } catch (error) {
      console.error("Failed to track event:", error);
    }
  }

  identify(userId: string) {
    if (!this.initialized) return;

    try {
      mixpanel.identify(userId);
    } catch (error) {
      console.error("Failed to identify user:", error);
    }
  }

  setUserProperties(properties: UserProperties) {
    if (!this.initialized) return;

    try {
      mixpanel.people.set(properties);
    } catch (error) {
      console.error("Failed to set user properties:", error);
    }
  }

  alias(userId: string) {
    if (!this.initialized) return;

    try {
      mixpanel.alias(userId);
    } catch (error) {
      console.error("Failed to alias user:", error);
    }
  }

  reset() {
    if (!this.initialized) return;

    try {
      mixpanel.reset();
    } catch (error) {
      console.error("Failed to reset Mixpanel:", error);
    }
  }

  // Specific tracking methods for common events
  trackPageView(pageName?: string, properties?: MixpanelEventProperties) {
    const pagePath = window.location.pathname;
    const pageTitle = document.title;

    // Determine section based on path
    let section = "home";
    if (pagePath.startsWith("/developers")) section = "developers";
    else if (pagePath.startsWith("/users")) section = "users";
    else if (pagePath.startsWith("/nodes")) section = "nodes";
    else if (pagePath.startsWith("/about")) section = "about";
    else if (pagePath.startsWith("/community")) section = "community";
    else if (pagePath.startsWith("/support")) section = "support";
    else if (pagePath.startsWith("/start")) section = "getting-started";

    this.track("Page Viewed", {
      page_name: pageName || pageTitle,
      page_path: pagePath,
      section,
      ...properties,
    });
  }

  trackButtonClick(buttonText: string, buttonLocation: string, properties?: MixpanelEventProperties) {
    this.track("Button Clicked", {
      button_text: buttonText,
      button_location: buttonLocation,
      ...properties,
    });
  }

  trackLinkClick(
    linkText: string,
    linkUrl: string,
    linkType: "internal" | "external" = "internal",
    properties?: MixpanelEventProperties
  ) {
    this.track("Link Clicked", {
      link_text: linkText,
      link_url: linkUrl,
      link_type: linkType,
      ...properties,
    });
  }

  trackNavigation(fromSection: string, toSection: string, properties?: MixpanelEventProperties) {
    this.track("Navigation", {
      from_section: fromSection,
      to_section: toSection,
      navigation_type: "menu", // or "breadcrumb", "footer", etc.
      ...properties,
    });
  }

  trackSearchQuery(query: string, resultsCount?: number, properties?: MixpanelEventProperties) {
    this.track("Search Query", {
      search_query: query,
      results_count: resultsCount,
      ...properties,
    });
  }

  trackCodeCopy(codeLanguage: string, codeSnippet: string, properties?: MixpanelEventProperties) {
    this.track("Code Copied", {
      code_language: codeLanguage,
      code_length: codeSnippet.length,
      ...properties,
    });
  }

  trackDocumentDownload(documentName: string, documentType: string, properties?: MixpanelEventProperties) {
    this.track("Document Downloaded", {
      document_name: documentName,
      document_type: documentType,
      ...properties,
    });
  }

  trackUserEngagement(
    engagementType: "scroll_depth" | "time_on_page" | "interaction",
    value: number,
    properties?: MixpanelEventProperties
  ) {
    this.track("User Engagement", {
      engagement_type: engagementType,
      value,
      ...properties,
    });
  }

  trackNarrativeChoice(narrative: string, choice: string, properties?: MixpanelEventProperties) {
    this.track("Narrative Choice", {
      narrative,
      choice,
      ...properties,
    });
  }

  trackReturnVisit(daysSinceLastVisit: number, properties?: MixpanelEventProperties) {
    this.track("Return Visit", {
      days_since_last_visit: daysSinceLastVisit,
      is_frequent_visitor: daysSinceLastVisit <= 7,
      ...properties,
    });
  }

  trackThemeToggle(newTheme: "light" | "dark", properties?: MixpanelEventProperties) {
    this.track("Theme Toggle", {
      new_theme: newTheme,
      ...properties,
    });
  }

  trackKeyboardShortcut(shortcut: string, action: string, properties?: MixpanelEventProperties) {
    this.track("Keyboard Shortcut Used", {
      shortcut,
      action,
      ...properties,
    });
  }
}

// Create a singleton instance
const mixpanelService = new MixpanelService();

export { mixpanelService };
export default mixpanelService;
