<template>
    <div>
 <header>QQ演出</header>
        <section>
            <el-carousel :interval="3000">
                <el-carousel-item v-for="(list,ind) in Imgs" :key="ind" >
                    <img :src="list.picUrl" class="img_res">
                </el-carousel-item>
            </el-carousel>
       
<!-- <swiper :options="swiperoption" ref="mySwiper" class="uls"> -->
 <!-- slides -->
 <!-- <swiper-slide v-for='list in this.Imgs' v-bind:key="list.id" class="slide" ><img :src="list.picUrl" class="img_res"></swiper-slide> -->
 <!-- Optional controls -->
 <!-- <div class="swiper-pagination"  slot="pagination"></div>
 <div class="swiper-button-prev" slot="button-prev"></div>
 <div class="swiper-button-next" slot="button-next"></div>
 <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
<!-- </swiper> -->
             <!-- <ul  class="uls">
                <li v-for='list in this.Imgs'><img :src="list.picUrl" class="img_res"></li>
        </ul>  -->
        <form><span>深圳</span><input type="text" placeholder="搜索明星、演出"><i class="iconfont icon-wode"></i></form>
        <div class="dls">
            <dl>
                <dt><i class="iconfont icon-071"></i></dt>
                <dd>演出日历</dd>
            </dl>
            <dl>
                <dt><i class="iconfont icon-08"></i></dt>
                <dd>演出日历</dd>
            </dl>
            <dl>
                <dt><i class="iconfont icon-09"></i></dt>
                <dd>演出日历</dd>
            </dl>
            <dl>
                <dt><i class="iconfont icon-17"></i></dt>
                <dd>演出日历</dd>
            </dl>
            <dl>
                <dt><i class="iconfont icon-11"></i></dt>
                <dd>演出日历</dd>
            </dl>
            <dl>
                <dt><i class="iconfont icon-12"></i></dt>
                <dd>演出日历</dd>
            </dl>
            <dl>
                <dt><i class="iconfont icon-18"></i></dt>
                <dd>演出日历</dd>
            </dl>
            <dl>
                更多  >
            </dl>
            
        </div>
        <div class="play">热门演出</div>
            <div class="bottom">
             <dl v-for='(list,index) in HotPerform' :key="index">
                <dt><img v-lazy="list.star_logo" alt=""></dt>
                <dd>
                    <h6>{{list.show_name}}<span>预定</span></h6>
                    <p><i class="iconfont icon-shizhong1"></i>{{list.show_time}}</p>
                    <p><i class="iconfont icon-dingwei1"></i>{{list.hall_name}}</p>
                    <h5>{{list.show_id}}<span>元</span></h5>
                </dd>
            </dl> 
            </div> 
        </section>
    </div>
</template>

<script>
// import navigation from 'view/include/search.vue'
import { getHotPerform } from "api/index";
import { getCarouselList } from "api/index";
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name:"",
        data(){
            return{
                HotPerform:[],
                Imgs:[],
                // swiperoption:{
                //     notNextTick: true,
                //     autoplay: 3000,
                //     effect:"coverflow",
                //     pagination:".swiper-pagination",
                //     paginationClickable :true,
                //     prevButton:'.swiper-button-prev',
                //     nextButton:'.swiper-button-next',
                // }
                // carouselList:[]
            }
        },
        mounted(){
            // this.auto();
            this._getCarousel();
            this. _getHotPerform();
           
        },  
        methods:{
        //    auto(){ 
        //         var flag=0;
        //         var uli=document.getElementsByClassName('uls')[0].getElementsByTagName('li')
                
        //     setInterval(function(){
        //         flag++;
        //             for(var i=0;i<uli.length;i++){
        //             // oli[i].className=''
        //             uli[i].style.display='none'
        //             }
        //         if(flag>uli.length-1){
        //             flag=0;
        //         }
        //         uli[flag].style.display='block'
        //     // oli[flag].className='bgs'
        //         },2000)
        //     },
            _getCarousel(){
                getCarouselList().then(res=>{
                    this.Imgs = res.data.slider;
                    console.log(res)
                })
            },
             _getHotPerform(){
                getHotPerform().then(res=>{
                    this.HotPerform=res.data.data;
                    console.log(this.HotPerform)
                    
                })
            },
 }
//         },components: {
//  swiper,
//  swiperSlide
// },
        
    }
</script>

<style>
@import url('element-ui/lib/theme-chalk/index.css');
</style>