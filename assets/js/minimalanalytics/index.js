import { track } from 'js/ga4';
import * as params from '@params';

(function () {
	'use strict';

	if (!navigator.sendBeacon) {
		// TODO(bep) remove this when https://github.com/jahilldev/minimal-analytics/pull/57 is merged.
		console.warn('minimalanalytics: navigator.sendBeacon is not supported in this browser');
		return;
	}
	track(params.tracking_id);
	window.track = track;
})();
