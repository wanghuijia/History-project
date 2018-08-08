import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import detail from '@/components/detail'
import frist from '@/components/router1/frist.vue'
import discover from '@/components/router1/discover.vue'
import vip from '@/components/router1/vip.vue'
import shopcar from '@/components/router1/shopcar.vue'
import my from '@/components/router1/my.vue'
import fruits from '@/components/router2/fruits.vue'
import vegetables from '@/components/router2/vegetables.vue'
import foods from '@/components/router2/foods.vue'
import grain from '@/components/router2/grain.vue'
import dairy from '@/components/router2/dairy.vue'
Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
        path: '/',
        redirect: '/index'
    }, {
        path: '/index',
        redirect: '/frist',
        component: Index,
        children: [{
            path: '/frist',
            component: frist,
            redirect: '/fruits',
            children: [{
                path: '/fruits',
                component: fruits,
            }, {
                path: '/vegetables',
                component: vegetables,
            }, {
                path: '/foods',
                component: foods,
            }, {
                path: '/grain',
                component: grain,
            }, {
                path: '/dairy',
                component: dairy,
            }]
        }, {
            path: '/discover',
            component: discover
        }, {
            path: '/vip',
            component: vip
        }, {
            path: '/shopcar',
            component: shopcar
        }, {
            path: '/my',
            component: my
        }]
    }, {
        path: '/detail',
        component: detail
    }]
})