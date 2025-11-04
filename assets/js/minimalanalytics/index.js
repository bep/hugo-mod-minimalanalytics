// Minimal Analytics - Privacy-focused page view tracking
(function() {
    'use strict';

    // Configuration
    const config = {
        endpoint: window.minimalAnalyticsEndpoint || '/api/analytics',
        debug: window.minimalAnalyticsDebug || false
    };

    // Log helper
    function log(...args) {
        if (config.debug) {
            console.log('[MinimalAnalytics]', ...args);
        }
    }

    // Get page data
    function getPageData() {
        return {
            url: window.location.pathname,
            referrer: document.referrer || '',
            timestamp: new Date().toISOString(),
            language: navigator.language,
            screen: {
                width: window.screen.width,
                height: window.screen.height
            }
        };
    }

    // Send analytics data
    function sendAnalytics(data) {
        if (!config.endpoint) {
            log('No endpoint configured, skipping analytics');
            return;
        }

        log('Sending analytics:', data);

        // Use sendBeacon if available for better reliability
        if (navigator.sendBeacon) {
            const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
            const sent = navigator.sendBeacon(config.endpoint, blob);
            
            // If sendBeacon fails, fallback to fetch
            if (!sent) {
                log('sendBeacon failed, falling back to fetch');
                sendViaFetch(data);
            }
        } else {
            // Fallback to fetch
            sendViaFetch(data);
        }
    }

    // Send via fetch API
    function sendViaFetch(data) {
        fetch(config.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            keepalive: true
        }).catch(err => {
            log('Error sending analytics:', err);
        });
    }

    // Track page view
    function trackPageView() {
        const data = getPageData();
        sendAnalytics({
            type: 'pageview',
            ...data
        });
    }

    // Initialize on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', trackPageView);
    } else {
        trackPageView();
    }

    // Export API for custom events
    window.minimalAnalytics = {
        track: function(eventName, eventData) {
            const data = getPageData();
            sendAnalytics({
                type: 'event',
                event: eventName,
                data: eventData || {},
                ...data
            });
        }
    };

    log('Minimal Analytics initialized');
})();
