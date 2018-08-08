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
        <div class="bottom">
            <span>总计数量: {{picNum}} 个</span>
            <span>总计价格: {{picSum}} 元</span>
        </div>
    </div>
</template>

<script>
import axios from "axios"
    export default {
        name:'',
        data(){
            return{
                lists:[],picNum:0,
                picSum:0
            }
        },
        mounted(){
            this.getList()
        },
        methods:{
            getList(){
                axios.get('http://localhost:8080/api').then(res=>{
                    this.lists=res.data.fruits
                })
                this.computer()
            },
            mine(index){
                this.lists[index].count++;
                this.computer()
                let mas=document.querySelector('.bottom');
                mas.style.display='block';  
            },
            rendu(index){
                let mas=document.querySelector('.bottom');
                mas.style.display='block';
                if(this.lists[index].count<=0)return;
                this.lists[index].count--;
                this.computer()
            },
            computer(){
                let sum = 0;
                let num = 0;
                
                this.lists.map(item=>{
                      sum += item.count  * item.price;
                      num += item.count ;
                })
                this.picNum = num;
                this.picSum = sum;
            }
        }
        
        

    }
</script>

<style scoped>

</style>