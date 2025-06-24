# Mixpanel Analytics Integration

This document outlines the Mixpanel analytics integration for the ZetaChain documentation site, including setup, configuration, and usage examples.

## Overview

The docs site now uses [Mixpanel](https://mixpanel.com/) to track user interactions, engagement patterns, and behavior analytics. This integration provides insights into:

- **User Engagement**: Page views, time spent, scroll depth, return visits
- **Navigation Patterns**: How users navigate through different sections
- **Content Interaction**: Button clicks, link clicks, code copying
- **User Preferences**: Theme toggles, narrative choices, keyboard shortcuts
- **Performance Metrics**: Search queries, document downloads

## Setup

### Environment Configuration

Add your Mixpanel project token to your environment variables:

```env
NEXT_PUBLIC_MIXPANEL_TOKEN=your_mixpanel_project_token
```

The integration respects the `NEXT_PUBLIC_VERCEL_ENV` variable for environment-specific configuration:
- **Production**: Full tracking enabled
- **Preview/Development**: Debug mode enabled with console logging

### Initialization

Mixpanel is automatically initialized in the main `AppComponent` when a valid token is provided. The service:

1. Initializes with environment-appropriate settings
2. Sets up automatic page view tracking
3. Identifies returning users and tracks visit patterns
4. Respects user privacy settings (Do Not Track)

## Key Events Tracked

### Navigation Events

| Event | Description | Properties |
|-------|-------------|------------|
| `Page Viewed` | User visits a page | `page_name`, `page_path`, `section` |
| `Navigation Card Link Clicked` | User clicks navigation cards | `title`, `href`, `link_type`, `section` |
| `Link Clicked` | User clicks any tracked link | `link_text`, `link_url`, `link_type` |
| `Navigation` | User navigates between sections | `from_section`, `to_section` |

### User Interaction Events

| Event | Description | Properties |
|-------|-------------|------------|
| `Button Clicked` | User clicks tracked buttons | `button_text`, `button_location` |
| `Code Copied` | User copies code snippets | `code_language`, `code_length`, `success` |
| `Theme Toggle` | User switches themes | `new_theme`, `previous_theme` |
| `Keyboard Shortcut Used` | User uses keyboard shortcuts | `shortcut`, `action` |

### Engagement Events

| Event | Description | Properties |
|-------|-------------|------------|
| `Search Query` | User performs search | `search_query`, `results_count` |
| `Document Downloaded` | User downloads documents | `document_name`, `document_type` |
| `User Engagement` | Scroll depth, time tracking | `engagement_type`, `value` |
| `Return Visit` | User returns to site | `days_since_last_visit`, `is_frequent_visitor` |

### Custom Events

| Event | Description | Properties |
|-------|-------------|------------|
| `Narrative Choice` | User selects narrative paths | `narrative`, `choice` |

## Usage Examples

### Basic Event Tracking

```typescript
import { useMixpanel } from '~/hooks/useMixpanel';

const MyComponent = () => {
  const { trackButtonClick, trackEvent } = useMixpanel();

  const handleClick = () => {
    trackButtonClick('Get Started', 'Hero Section', {
      custom_property: 'value'
    });
  };

  return <button onClick={handleClick}>Get Started</button>;
};
```

### Page View Tracking

```typescript
import { useMixpanel } from '~/hooks/useMixpanel';

const MyPage = () => {
  const { trackPageView } = useMixpanel();

  useEffect(() => {
    trackPageView('Custom Page Name', {
      page_category: 'documentation',
      content_type: 'tutorial'
    });
  }, []);

  return <div>Page content</div>;
};
```

### User Identification

```typescript
import { useMixpanel } from '~/hooks/useMixpanel';

const AuthComponent = () => {
  const { identify, setUserProperties } = useMixpanel();

  const handleLogin = (user) => {
    identify(user.id);
    setUserProperties({
      $name: user.name,
      $email: user.email,
      user_type: 'developer',
      preferred_section: 'developers'
    });
  };

  return <button onClick={handleLogin}>Login</button>;
};
```

## Available Tracking Methods

The `useMixpanel` hook provides the following methods:

### Core Methods
- `trackEvent(eventName, properties?)` - Track custom events
- `identify(userId)` - Identify user
- `setUserProperties(properties)` - Set user properties
- `alias(userId)` - Alias user ID
- `reset()` - Reset user session

### Specialized Methods
- `trackPageView(pageName?, properties?)` - Track page views
- `trackButtonClick(buttonText, buttonLocation, properties?)` - Track button clicks
- `trackLinkClick(linkText, linkUrl, linkType?, properties?)` - Track link clicks
- `trackNavigation(fromSection, toSection, properties?)` - Track navigation
- `trackSearchQuery(query, resultsCount?, properties?)` - Track searches
- `trackCodeCopy(codeLanguage, codeSnippet, properties?)` - Track code copying
- `trackDocumentDownload(documentName, documentType, properties?)` - Track downloads
- `trackUserEngagement(engagementType, value, properties?)` - Track engagement
- `trackNarrativeChoice(narrative, choice, properties?)` - Track narrative choices
- `trackReturnVisit(daysSinceLastVisit, properties?)` - Track return visits
- `trackThemeToggle(newTheme, properties?)` - Track theme changes

## Data Privacy

The integration includes privacy-conscious features:

- **Do Not Track**: Respects browser DNT settings
- **Local Storage**: Uses localStorage for session persistence
- **Opt-out**: Users can opt out of tracking
- **Data Minimization**: Only collects necessary analytics data
- **No PII**: Avoids collecting personally identifiable information by default

## User Properties

The system automatically tracks:

- `first_visit_date` - When user first visited
- `last_visit_date` - When user last visited
- `user_type` - User classification (developer, node_operator, user, visitor)
- `preferred_section` - Most visited section
- `docs_version` - Documentation version
- UTM parameters for marketing attribution

## Development & Testing

### Debug Mode

In development/preview environments, debug mode is enabled, providing:
- Console logging of all events
- Detailed error messages
- Event validation

### Testing Events

You can test events in your browser console:

```javascript
// Access the global mixpanel service
window.mixpanel.track('Test Event', { test: true });
```

## Mixpanel Dashboard

### Key Metrics to Monitor

1. **User Engagement**
   - Daily/Monthly Active Users
   - Session Duration
   - Page Views per Session
   - Return Visit Frequency

2. **Content Performance**
   - Most Viewed Pages
   - Navigation Patterns
   - Code Copying Frequency
   - Search Queries

3. **User Journey**
   - Entry Points
   - Drop-off Points
   - Conversion Funnels
   - User Flow Analysis

4. **Feature Usage**
   - Theme Toggle Usage
   - Keyboard Shortcut Usage
   - Document Downloads
   - Narrative Choices

### Recommended Dashboards

1. **Content Performance Dashboard**
   - Page views by section
   - Time spent on pages
   - Most copied code snippets
   - Search query analysis

2. **User Behavior Dashboard**
   - Navigation patterns
   - Return user analysis
   - Engagement depth
   - Feature adoption

3. **Technical Metrics Dashboard**
   - Page load performance
   - Error rates
   - Browser/device analytics
   - Geographic distribution

## Troubleshooting

### Common Issues

1. **Events Not Appearing**
   - Check that `NEXT_PUBLIC_MIXPANEL_TOKEN` is set
   - Verify token is valid in Mixpanel project
   - Check browser console for errors

2. **Development Mode Issues**
   - Ensure you're testing in the correct environment
   - Check that debug mode is enabled
   - Look for console warnings

3. **User Identification Issues**
   - Verify `identify()` is called after user login
   - Check that user properties are being set correctly
   - Ensure proper session management

### Debug Commands

```javascript
// Check if Mixpanel is initialized
console.log(window.mixpanel.get_property('$lib_version'));

// Test a simple event
window.mixpanel.track('Debug Test', { timestamp: new Date() });

// Check user properties
console.log(window.mixpanel.get_property('user_type'));
```

## Performance Considerations

- Events are batched automatically for performance
- Large code snippets are summarized (length/lines tracked, not full content)
- User properties are cached locally to reduce API calls
- Non-blocking implementation won't affect page load times

## Future Enhancements

Potential areas for expansion:

1. **A/B Testing Integration**
2. **Cohort Analysis**
3. **Custom Funnels**
4. **Real-time Alerts**
5. **Advanced Segmentation**
6. **Integration with other analytics tools**

## Support

For questions about the Mixpanel integration:

1. Check this documentation first
2. Review the source code in `src/lib/analytics/mixpanel.ts`
3. Test using the `useMixpanel` hook examples
4. Check the Mixpanel project dashboard for data validation

Remember to always test analytics implementations thoroughly before deploying to production!