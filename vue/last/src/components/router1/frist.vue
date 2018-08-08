<template>
    
     <section>
            <ul class="uls">
       <router-link tag="li" to="/fruits">水果</router-link>
       <router-link tag="li" to="/vegetables">蔬菜</router-link>
       <router-link tag="li" to="/foods">轻食</router-link>
       <router-link tag="li" to="/grain">粮油</router-link>
       <router-link tag="li" to="/dairy">乳品</router-link>
    </ul>
    <router-view></router-view>
        </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>