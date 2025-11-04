import { track } from 'js/ga4';
import * as params from '@params';

(function () {
	'use strict';
	track(params.tracking_id);
	window.track = track;
})();
