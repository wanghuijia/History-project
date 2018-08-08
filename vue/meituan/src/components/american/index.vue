<template>
    <div class="wrap">
    <header><i class="iconfont icon-xiangzuo"></i><h6>绿茶餐厅(北京世纪金源店)</h6></header>
    <ol class="ols">
            <li> <router-link to="/music/recom" class="link1" enter-active="bounce">推荐</router-link></li>
            <li> <router-link to="/music/toplist" class="link1">排行榜</router-link></li>
            <li> <router-link to="/music/search" class="link1">搜索</router-link></li>  
        </ol>
    <section>
        <h6><span>特价菜与满减不能同时享用，谢谢</span><i class="iconfont icon-angle-right"></i></h6>
        <div class="main">
            <div class="left">
                <ul>
               <li :class="{'active':index==0}" v-for="(list,index) in lists" :key="index" v-text="list.name" @click="send(list,index)" ></li>
                </ul>
            </div>
          
        <detail :list="list" :defaultlist="defaultlist" @updata="onUpdata"></detail>
        </div>
    </section>
   <footer>
            <span>总计数量: {{picNum}} 个</span>
            <span>总计价格: {{picSum}} 元</span>
        </footer>
    </div>
</template>

<script>
import detail from "./detail.vue"
import flex from "common/js/libs/flexible.js"
import axios from "axios"
import betterScroll from "better-scroll"
    export default {
    name: 'App',
    data(){
    return{
        lists:[],
        list:[],
        defaultlist:[],
        picNum:0,
        picSum:0
     }
},
    mounted(){
        this.getProductList()
        
         new betterScroll('.left',{
                click:true
            })
    },
    methods:{
            getProductList(){
                axios.get("http://localhost:8080/api").then(res=>{
                    this.lists=res.data.data.food_spu_tags
                    this.defaultlist=this.lists[0].spus
                    console.log(this.defaultlist)
                })
            },
            send(list,i){
                let lis=document.querySelectorAll(".left li");
                [...lis].map((itm,ind)=>{
                    itm.className=""
                    if(i==ind){
                        itm.className="active"
                    }
                });
                console.log(this.lists)
                this.list=list.spus
                this.computer();
                
            },onUpdata(){
                let temp = [];
                this.list.map(item=>{            
                        temp.push(item)   
                });
                if(temp.length == this.list.length){
                    this.checkall = true;
                }else{
                    this.checkall = false;
                }
                this.computer();
            },computer(){
                let sum = 0;
                let num = 0;
                
                this.lists.map(item=>{
                        item.spus.map(itm=>{
                        sum += itm.status  * itm.min_price;
                        num += itm.status ;
                        })
                       
                     
                })
                this.picNum = num;
                this.picSum = sum;
            }
        },
        components:{
            detail
    }
}
</script>

<style>
@import url("../../common/css/style.css");
@import url("../../common/fonts/iconfont.css");
.link2{
    color: #000;
    text-decoration: none;
    border-bottom: solid 1px #ccc;
}
/* .router-link-active {
    border-bottom: solid 2px #30C37C;
    color: #30C37C;
} */
</style>