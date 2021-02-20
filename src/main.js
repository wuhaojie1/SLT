import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import lang from './static/lang/index.js';
import datastorage from './static/js/datastorage.js';

Vue.use(VueI18n);
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: datastorage.getSync({key:'langMsg'}) ? datastorage.getSync({key:'langMsg'}).name : 'en-US',
  messages: {
    'en-US': lang.en,
    'zh-CN': lang.cn,
    "ko-KR":lang.kr,
    'ja_JP':lang.jp
  },
  silentTranslationWarn: true,
})
Vue.prototype._i18n = i18n

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
