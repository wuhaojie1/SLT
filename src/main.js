import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import lang from './static/lang/index.js';
import datastorage from './static/js/datastorage.js';
import './assets/css/common.css';
import echarts from 'echarts';
import ElementUI from 'element-ui';


Vue.use(VueI18n);
Vue.config.productionTip = false
Vue.prototype._i18n = i18n
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)

const i18n = new VueI18n({
    locale: datastorage.getSync({key: 'langMsg'}) ? datastorage.getSync({key: 'langMsg'}).name : 'en-US',
    messages: {
        'en-US': lang.en,
        'zh-CN': lang.cn,
        "ko-KR": lang.kr,
        'ja_JP': lang.jp
    },
    silentTranslationWarn: true,
})

const setHtmlFontSize = () => {

    const htmlDom = document.getElementsByTagName('html')[0];

    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    // console.log(document.documentElement.clientWidth)
    // console.log(document.body.clientWidth)

    if (htmlWidth >= 1920) {
        htmlWidth = 1920;
    }
    if (htmlWidth <= 320) {
        htmlWidth = 320;
    }
    //1rem = 1px
    htmlDom.style.fontSize = `${(htmlWidth / 1920)}px`;
};
window.onresize = setHtmlFontSize;
setHtmlFontSize();

new Vue({
    i18n,
    router,
    render: h => h(App)
}).$mount('#app')
