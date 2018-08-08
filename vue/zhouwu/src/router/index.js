import Vue from 'vue'
import Router from 'vue-router'
import music from "../components/music.vue"
import top from "../components/top.vue"
console.log(music)
Vue.use(Router)
export default new Router({
    routes: [{
        path: "/music",
        component: music
    }, {
        path: "/top",
        component: top
    }]
})