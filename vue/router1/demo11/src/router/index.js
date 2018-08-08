import Vue from 'vue'
import VueRouter from "vue-router"
import Index from "view/index.vue"
import List from "view/list.vue"
import User from "view/user.vue"
import Music from "view/music/music.vue"
import Recom from "view/music/recom.vue"
import Search from "view/music/search.vue"
import Toplist from "view/music/toplist.vue"
import Detail from "view/music/detail.vue"
Vue.use(VueRouter);


let router = new VueRouter({
    routes: [{
        path: "/index",
        component: Index
    }, {
        path: "/list",
        component: List
    }, {
        path: "/user",
        component: User
    }, {
        path: "/music",
        component: Music,
        children: [{
            path: "/music/recom",
            component: Recom
        }, {
            path: "/music/detail",
            component: Detail
        }, {
            path: "/music/search",
            component: Search
        }, {
            path: "/music/toplist",
            component: Toplist
        }]
    }, ]
})
export default router;