<template>
    <div class="main">
        <dl v-for="(list,index) in lists" :key="index">
                <router-link tag="dt" :to="{path:'/detail',query:{'id':index,'name':list.name}}" >
            <img v-bind:src="list.img" alt="">
            </router-link>
                <dd>
                    <h6 v-text="list.title"></h6>
                    <p v-text="list.spans"></p>
                    <span v-text="list.examine"></span>
                    <div class="bot">
                         <p><span v-text="list.price"></span><span v-text="list.maxprice"></span></p>
                        <p><span class="spana" @click="rendu(index)">-</span><span v-text="list.count"></span><span class="spana"  @click="mine(index)" >+</span></p>
                    </div>
                </dd>
        </dl>
    </div>
</template>

<script>
import axios from "axios"
    export default {
        name:'',
        data(){
            return{
                lists:[]  
            }
        },
        mounted(){
            this.getList()
        },
        methods:{
            getList(){
                axios.get('http://localhost:8080/api').then(res=>{
                    this.lists=res.data.vegetables
                })
            },
            mine(index){
                this.lists[index].count++
            },
            rendu(index){
                if(this.lists[index].count<=0)return;
                this.lists[index].count--
            }
        }
        
        

    }
</script>

<style scoped>

</style>