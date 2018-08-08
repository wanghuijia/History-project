<template>
    <div>
       <router-link tag="p" to="/index">返回</router-link>
        <dl>
            <dt>
                
                <img v-bind:src="data.img" alt="">
            </dt>
                <dd>
                    <h6 v-text="data.title"></h6>
                    <p v-text="data.spans"></p>
                    <span v-text="data.examine"></span>
                    <div class="bot">
                        <p><span v-text="data.price"></span><span v-text="data.maxprice"></span></p>
                    </div>
                </dd>
        </dl>
    </div>
</template>

<script>
import axios from "axios"
    export default {
       
        name:"",
        data(){
           return{
        data:[]
           }
        },
        mounted(){
                  this.getData()      
        },
        methods:{
            getData(){
                  
                    axios.get("http://localhost:8080/api")
                    .then(res=>{
                          let ids=this.$route.query.id;
                        let names=this.$route.query.name;
                       this.data=res.data[names][ids]
                       console.log(ids)
                       
                    })
                },
        }
    }
</script>

<style scoped>

</style>