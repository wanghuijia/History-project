<template>
    <div>
        <p>message from comp1:{{msg}}</p>
        <comp1 :solgan="solgan" @sloganEvent="onSloganEvent"></comp1>
        <comp2></comp2>
    </div>
</template>

<script>
    export default {
        name:"",
            data(){
            return{
                solgan:"啦啦啦啦啦啦",
                msg:null
            }
        },
        methods:{
            onSloganEvent(val){
                this.msg=val;
            }
        },
    components: {
        comp1:{
            name:"",
            props:["solgan"],
            data(){
            return{
                title:"123",
                val:666
            }
        },
        template:` <div>
        {{solgan}}11
            <input type="text" v-model="val"/>
            <button type="button" @click="send">发送 </button>
        </div>`,
        methods:{
            send(){
                this.$emit("sloganEvent",this.val)
                EventHub.$emit("HowAreYouToday",this.val);
            }
        },
    },
        comp2:{
            name:"",
            data(){
            return{
                title:"123",
                val:null,
            }
        },
        template:`<div>this is{{title}}  is{{val}}</div>`,
        mounted(){
            EventHub.$on("HowAreYouToday",res=>{
            this.val=res;
            });
            },
            methods:{

            }
        }
     }
      
    }
</script>

<style>

</style>