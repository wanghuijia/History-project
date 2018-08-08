<template>
    <div class="wrap">
        <headers></headers>
        
       <section>
           <router-view></router-view>
       </section>
        <footer>
            <router-link tag="dl" to="/frist">
                <dt><i class="iconfont icon-shouye"></i></dt>
                <dd>首页</dd>
            </router-link>
            <router-link tag="dl" to="/vip">
                <dt><i class="iconfont icon-dazhongdianping"></i></dt>
                <dd>会员</dd>
            </router-link>
            <router-link tag="dl" to="/discover">
                <dt><i class="iconfont icon-faxiandingdan"></i></dt>
                <dd>发现</dd>
            </router-link>
            <router-link tag="dl" to="/shopcar">
                <dt><i class="iconfont icon-gouwuche"></i></dt>
                <dd>购物车</dd>
            </router-link>
            <router-link tag="dl" to="/my">
                <dt><i class="iconfont icon-wode"></i></dt>
                <dd>我的</dd>
            </router-link>
        </footer>
    </div>
</template>

<script>
import flex from '@/common/js/libs/flexible.js'
import axios from "axios"
import headers from "@/components/header.vue"
    export default {
        name:"",
        data(){
            return{

            }
        },mounted(){

        },methods:{

        },components:{
            headers
            
        }
    }
</script>

<style>
@import url("../common/css/style.css");
@import url("../common/fonts/iconfont.css");
</style>