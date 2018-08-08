<template>
     <div>
    <ul class="uls">
                <li v-for='(list,index) in this.Imgs' :key="index"><img :src="list.picUrl" class="img_res"></li>
        </ul> 
        <div class="bottom">
            
            <dl v-for='(list,index) in this.RecomList' :key="index">
                <router-link :to="{path:'/music/detail',query:{id:list.data.albummid}}" class="link2">
                <dt><img :src="`https://y.gtimg.cn/music/photo_new/T002R90x90M000${list.data.albummid}.jpg?max_age=2592000`" alt=""></dt>
                <dd>
                    <p v-text="list.data.albumname"></p>
                    <p v-for="singer in list.data.singer" v-text="singer.name"></p>
                </dd>
                 </router-link>
            </dl>
           
            
        </div>
     </div>
</template>

<script>
import betterScroll from "better-scroll"
import { getCarouselList } from "api/index";
import { getRecomList } from "api/recommd.js";
    export default {
        data(){
            return{
               Imgs:[],
               RecomList:[]
            }
        },
        mounted(){
            // new betterScroll('.ula')
            this._getCarousel();
            this.auto();
            this.__getRecom();
        },
        methods:{
             _getCarousel(){
                getCarouselList().then(res=>{
                    this.Imgs = res.data.slider;
                })
            },
            __getRecom(){
                getRecomList().then(res=>{
                this.RecomList=res.songlist
                
                })
            },
            auto(){ 
                var flag=0;
                var uli=document.getElementsByClassName('uls')[0].getElementsByTagName('li')
                
            setInterval(function(){
                flag++;
                    for(var i=0;i<uli.length;i++){
                    // oli[i].className=''
                    uli[i].style.display='none'
                    }
                if(flag>uli.length-1){
                    flag=0;
                }
                uli[flag].style.display='block'
            // oli[flag].className='bgs'
                },2000)
            },
        },
    }
</script>

<style scoped>
.link2 {
    width: 100%;
    text-decoration: none;
    display: flex;
    color: #000;
}
.link2 dl{
    width: 100%;
    
}
</style>