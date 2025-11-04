(function () {
	'use strict';

	// Configuration
	const config = {
		debug: window.minimalAnalyticsDebug || false,
	};

	// Log helper
	function log(...args) {
		if (config.debug) {
			console.log('[MinimalAnalytics]', ...args);
		}
	}

	log('Minimal Analytics initialized');
})();
