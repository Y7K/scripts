import Vue from 'vue';
import * as config from 'config';
//import VueIl8n from 'vue-i18n';
import Vuex from 'vuex';


Vue.config.silent = !config.APP_DEBUG;
Vue.config.devtools = config.APP_DEBUG;

// Change vue delimiters, to use vue in twig and blade tempaltes.
// This doesn't change the delimiters in .vue files
Vue.mixin({delimiters: ['${', '}']});

// Init Localisation

// Init the Router
// Vue.mixin({ router })
// Vue.use(VueIl8n);
// Vue.config.lang = 'en';
// Vue.locale('en', require('locales/en').default);

// Init the Vuex Store
// Vue.mixin({ store })
