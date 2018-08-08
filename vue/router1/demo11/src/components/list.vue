<template>
    <div>
    1111
    <div>
        {{txt}}
        <input type="text" v-model.lazy.trim="txt">
     </div>
     <div>
         {{gender}}
         <input type="radio" value="man" v-model="gender">男
         <input type="radio" value="woman" v-model="gender">女
     </div>
    </div>
</template>

<script>
    export default {
        name:"",
        data(){
            return{
                txt:1,
                gender:null
            }
        }
    }
</script>

<style scoped>

</style>