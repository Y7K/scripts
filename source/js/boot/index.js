//import * as config from 'config';

// ------------------------------------------------------------------------
// Bugsnag
// ------------------------------------------------------------------------
require('boot/bugsnag');


// ------------------------------------------------------------------------
// Polyfills
// ------------------------------------------------------------------------
require('boot/polyfills');


// ------------------------------------------------------------------------
// Lodash
// ------------------------------------------------------------------------
// window._ = require('lodash');


// ------------------------------------------------------------------------
// Vue
// ------------------------------------------------------------------------
require('boot/vue');


// ------------------------------------------------------------------------
// Barba.js transitions
// ------------------------------------------------------------------------
// require('transitions');


// ------------------------------------------------------------------------
// Lazysizes
// ------------------------------------------------------------------------
// require('lazysizes');
// require('lazysizes/plugins/object-fit/ls.object-fit.min');
// require('lazysizes/plugins/parent-fit/ls.parent-fit');
// require('lazysizes/plugins/unveilhooks/ls.unveilhooks.min');


// ------------------------------------------------------------------------
// Axios
// ------------------------------------------------------------------------
window.axios = require('axios');

// axios.defaults.baseURL = config.API_PREFIX
axios.defaults.headers.common = {
    // 'Authorization': 'Bearer ' + config.API_TOKEN,
    // 'X-CSRF-TOKEN': window.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
};


// ------------------------------------------------------------------------
// Tools
// ------------------------------------------------------------------------
require('utils/keyboardFocusOutliner')();
require('utils/debugGrid')();
