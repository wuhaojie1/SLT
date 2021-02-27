<template>
    <div>
        <div class="con-head">
            <div class="buyslt" @click="gobuy('buycoin')">购买</div>
            <div class="saleslt" @click="gosale('salecoin')">出售</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dealsltbar",
        data(){
            return{

            }
        },
        methods:{
            gobuy(){

            },
            gosale(){

            },
            toppage(name) {
                this.$router.push({
                    name: name
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .con-head{
        width: 1200rem;
        height: 60rem;
        background: #F5F6FA;
        border-radius: 0rem 10rem 0px 10rem;
        box-sizing: border-box;
        margin: 0 auto;
        .buyslt{
            width: 100rem;
            font-size: 16rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #000000;
            float: left;
            line-height: 60rem;
        }
        .saleslt{
            width: 100rem;
            font-size: 16rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #000000;
            line-height: 60rem;
            float: left;
        }
    }
</style>