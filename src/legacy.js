'use strict';

/**
 * So here we make sure everything is backwards compatible with the old GD SDK.
 * This is the main entry for a CDN hosted build.
 * The main entry for including the SDK as npm package is main.js.
 */
import SDK from './main';

const settings = (typeof GD_OPTIONS === 'object' && GD_OPTIONS)
    ? GD_OPTIONS
    : (typeof window.gdApi.q[0][0] === 'object' && window.gdApi.q[0][0])
        ? window.gdApi.q[0][0]
        : {};
window.gdsdk = new SDK(settings);
window.gdApi = window.gdsdk;
