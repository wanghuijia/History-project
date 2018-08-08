<template>
    <div>
        <img :src="`https://y.gtimg.cn/music/photo_new/T002R150x150M000${recom.mid}.jpg?max_age=2592000`" alt="">
        
    <p v-text="recom.name"></p><span v-text="recom.singername
" style="color:red"></span>
    <p v-text="recom.desc"></p>
    </div>
</template>

<script>
import { getRecommdDetail} from "api/recommd"
    export default {
        name:"",
        data(){
            return{
                recom:[]
            }
        },
        mounted(){
            this._getRecommdDetail();
        },
        methods:{
            _getRecommdDetail(){
                getRecommdDetail(this.$route.query.id).then(res => {
                    this.recom=res.data
                    console.log(res.data)
                })
            }
        }
    }
</script>

<style scoped>

</style>