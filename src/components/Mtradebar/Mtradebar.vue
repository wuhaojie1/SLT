<template>
    <div>
        <div class="tradetype-con">
            <div :class="index==currentindex?'active':'trade-itme'"
                 v-for="(item,index) in tradetypearr"
                 :key="index" @click="changeitem(index,item.name)">{{item.text}}</div>
            <div v-if="currentindex==1" class="line1"></div>
            <div v-if="currentindex==0" class="line2"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Mtradebar",
        data(){
            return{
                tradetypearr:[
                    {
                        text:'自选交易',
                        name:'MTrade'
                    },
                    {
                        text:'一键买卖',
                        name:'Mdeal'
                    }
                    ],
                currentindex:0,
            }
        },
        methods:{
            changeitem(index,name){
                this.currentindex = index;
                this.Topage(name)
            },
            Topage(name){
                this.$router.push({
                    name: name
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .tradetype-con{
        width: 750rem;
        height: 88rem;
        display: flex;
        justify-content: flex-start;
        position: relative;
        box-shadow: 0rem 5rem 10rem 0rem rgba(153, 153, 153, 0.1);
        .trade-itme{
            font-size: 28rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #9AA5B5;
            line-height: 88rem;
            margin-left: 40rem;
            margin-right: 2rem;
        }
        .active{
            font-size: 30rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #00B9FE;
            line-height: 88rem;
            margin-left: 40rem;
            margin-right: 2rem;
        }
        .line1{
            width: 100rem;
            height: 4rem;
            background: #00B9FE;
            position: absolute;
            top: 88rem;
            left: 208rem;
        }
        .line2{
            width: 100rem;
            height: 4rem;
            background: #00B9FE;
            position: absolute;
            top: 88rem;
            left: 50rem;
        }
    }
</style>