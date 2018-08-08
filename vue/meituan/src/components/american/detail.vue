<template>
    <div class="right">

                 <dl v-for="(data,index) in lists" :key="index">
                    <dt><img v-lazy="data.picture" alt=""></dt>
                    <dd>
                        <h6 v-text="data.name"></h6>
                        <span v-text="data.description"></span>
                        <div class="btm">
                            <span v-html="data.min_price"></span>
                            <p>
                                <span @click="minus(index)">-</span>
                                <span v-text="data.status"></span>
                                <span @click="plus(index)">+</span>
                            </p>
                        </div>
                    </dd>
                </dl>  
    </div>
</template>

<script>
export default {
    name: 'App',
    props:{
        list:{
                type:Array,
                required:true
            },
            defaultlist:{
                type:Array,
                required:true
            }
    },
    data(){
    return{
     }
},
computed:{
    lists(){
        return this.list.length>1?this.list:this.defaultlist
    }
},
methods:{
           minus(index){
              if(this.lists[index].status < 1) return;
                    // this.list[index].status = 0;            
                    this.lists[index].status --;
                this.$emit('updata')
            },
            plus(index){
                this.lists[index].status++;
                this.$emit('updata')
            },
            checkItem(){
                this.$emit('updata')
            }
            
        }
}
</script>

<style scoped>

</style>