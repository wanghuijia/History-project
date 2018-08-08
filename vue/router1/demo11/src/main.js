import Vue from 'vue'
import App from './App'
import router from "./router"
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from "vue-awesome-swiper"
import Element from 'element-ui'
Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: '../static/loading.gif',
})
window.EventHub = new Vue();
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(Element)
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})