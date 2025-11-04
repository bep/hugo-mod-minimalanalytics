# hugo-mod-minimalanalytics

A minimal, privacy-focused analytics module for Hugo sites.

## Features

- **Privacy-focused**: Does not collect user agent strings or other sensitive information
- **Lightweight**: Minimal JavaScript footprint
- **Reliable**: Uses sendBeacon API with fetch fallback for better data delivery
- **Configurable**: Easy to customize endpoint and enable debug mode
- **Custom Events**: Track custom events in addition to page views

## Installation

Add this module to your Hugo site's `config.toml` or `hugo.toml`:

```toml
[module]
  [[module.imports]]
    path = "github.com/bep/hugo-mod-minimalanalytics"
```

Then run:

```bash
hugo mod get
```

## Usage

Include the partial in your layout template (e.g., in your `baseof.html`):

```html
{{ partial "minimalanalytics.html" . }}
```

### Configuration

Configure the analytics endpoint by setting a global JavaScript variable before loading the script:

```html
<script>
  window.minimalAnalyticsEndpoint = 'https://your-analytics-server.com/api/analytics';
  window.minimalAnalyticsDebug = false; // Set to true for debug logging
</script>
{{ partial "minimalanalytics.html" . }}
```

### Custom Events

Track custom events from your JavaScript code:

```javascript
// Track a custom event
window.minimalAnalytics.track('button-click', {
  buttonId: 'signup',
  location: 'homepage'
});
```

## Data Collected

The module collects the following data for each page view or event:

- URL path (not full URL, just pathname)
- Referrer
- Timestamp
- Browser language
- Screen dimensions

## License

See [LICENSE](LICENSE) file.

