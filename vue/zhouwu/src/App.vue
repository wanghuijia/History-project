<template>
    <div class="wrap">
        <header>
            <img src="./img/log.jpg" alt="">
            <p>
                <a href="#">登录</a>
                <i class="iconfont icon-gouwuche" @click="prev"></i>
            </p>
        </header>
        <ol class="top">
            <li>
                <router-link to="/top">选择</router-link>
                <h6>商品分类</h6>
            </li>
            <li>我的心愿单</li>
            <li>Z秒杀</li>
        </ol>
         
        <section>
            <form action="" id="form">
                <input type="text" id="ipt" placeholder="搜索">
                <img src="./img/serch.jpg" alt="">
            </form>
           <ul class="uls">
                 <li v-for='list in this.lists' >
                        <img v-bind:src="list.img" alt="">
            </li>
           
            </ul>
             <ol>
            <li class="bgs"></li>
            <li></li>
            <li></li>
            <li></li>
           <router-view></router-view>
        </ol>
            
            <div class="main">
                <router-link to="/music"><img src="./img/main.jpg" alt=""></router-link>
                
            </div>
        </section>
        
    </div>
</template>

<script>
import flex from "./js/libs/flexible.js"
import axios from "axios"
    export default {
        name: 'app',
        data() {
            return {
                title: "真棒！",
                lists: [],
            }
        },
        mounted(){
            this.getProductList()
            this.auto();
        },
        methods:{
            getProductList(){
                axios.get("http://localhost:8080/api").then(res=>{
                    this.lists=res.data;
                    // console.log(this.lists);
                    
                })
            },
            prev(){
               
            },
            auto(){ 
                var flag=0;
                var uli=document.getElementsByTagName('ul')[0].getElementsByTagName('li')
                var oli=document.getElementsByTagName('section')[0].getElementsByTagName('ol')[0].getElementsByTagName('li')
                console.log(uli)
                console.log(oli)
            setInterval(function(){
                flag++;
                
                    for(var i=0;i<uli.length;i++){
                    oli[i].className=''
                    uli[i].style.display='none'
                    }
                
                if(flag>uli.length-1){
                    flag=0;
                }
                uli[flag].style.display='block'
                // console.log(oli[flag].className)
            oli[flag].className='bgs'


    },2000)
            }

        }
    }
    
</script>

<style>
    @import url('./css/style.css');
    @import url('./fonts/iconfont.css');
</style>
