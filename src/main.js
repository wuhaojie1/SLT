import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import lang from './static/lang/index.js';
import localStorage from './static/js/localStorage.js';
import './assets/css/common.css';
import echarts from 'echarts';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from './static/js/axios';
import VideoPlayer from 'vue-video-player';
import store from './store.js';
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


Vue.use(VueI18n);
Vue.use(VideoPlayer)


const i18n = new VueI18n({
    // locale: localStorage.get('langMsg') ? localStorage.get('langMsg').name : 'zh-CN',
    locale: 'zh-CN',
    messages: {
        'zh-CN': lang.cn,
        "ko-KR": lang.kr,
    },
    silentTranslationWarn: true,
})
Vue.config.productionTip = false
Vue.prototype._i18n = i18n
Vue.prototype.$echarts = echarts
Vue.prototype.axios = axios;
Vue.prototype.localStorage = localStorage;
Vue.use(ElementUI);



const setHtmlFontSize = () => {

    const htmlDom = document.getElementsByTagName('html')[0];

    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    // console.log(document.documentElement.clientWidth)
    // console.log(document.body.clientWidth)

    // if (htmlWidth >= 1920) {
    //     // htmlWidth = 1920;
    //     htmlDom.style.fontSize = `${(htmlWidth / 1920)}px`;
    // }
    if (htmlWidth <= 750) {
        // htmlWidth = 750;
        htmlDom.style.fontSize = `${(htmlWidth / 750)}px`;
    } else {
        htmlDom.style.fontSize = `${(htmlWidth / 1920)}px`;
    }
    //1rem = 1px
    // htmlDom.style.fontSize = `${(htmlWidth / 1920)}px`;
};
window.onresize = setHtmlFontSize;
setHtmlFontSize();

new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
