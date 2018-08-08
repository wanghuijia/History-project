<template>
    <div class="wrap">
        <heads>QQ音乐</heads>
         <ol class="ols">
            <li> <router-link to="/music/recom" class="link1" enter-active="bounce">推荐</router-link></li>
            <li> <router-link to="/music/toplist" class="link1">排行榜</router-link></li>
            <li> <router-link to="/music/search" class="link1">搜索</router-link></li>  
        </ol>
        <section>
           
        
        <router-view></router-view>
        </section>
    </div>
</template>

<script>
import heads from "view/include/header.vue"

    export default {
         
         components:{
            heads
        }
    }
</script>

<style scoped>
@import url("../../css/music.css");
@import url("../../css/animate.css");
header{
    background: #30C37C!important;
}
</style>