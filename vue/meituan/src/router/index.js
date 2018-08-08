import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/american/index'
import Detail from '@/components/american/detail'
import toplist from '@/components/top/toplist'
import search from '@/components/top/search'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: "/index",

    }, {
        path: "/index",
        component: Index,
        // children: [{
        //     path: "/index/:id",
        //     name: "detail",
        //     component: Detail
        // }]
    }, {
        path: "/music/toplist",
        component: toplist,
    }, {
        path: "/music/search",
        component: search,
    }]
})