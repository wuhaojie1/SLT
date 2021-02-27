<template>
    <div>
        <div class="selectbar">
            <div class="selectbar-con">
                <div class="selectbar-item" @click="gocurrency1('freeTrade')" :style="this.currency1?{color:'#FFFFFF'}:''">自选交易
                    <div class="active-item" v-if="this.currency1"></div>
                </div>
                <div class="selectbar-item" @click="gocurrency2('deal')" :style="this.currency2?{color:'#FFFFFF'}:''">一键买卖
                    <div class="active-item" v-if="this.currency2"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tradebar",
        data(){
            return{
                currency1:true,
                currency2:false
            }
        },
        methods:{
            gocurrency1(name){
                this.currency1 = true;
                this.currency2 = false;
                this.toppage(name)
            },
            gocurrency2(name){
                this.currency1 = false;
                this.currency2 = true;
                this.toppage(name)
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
    .selectbar{
        width: 1920rem;
        height: 90rem;
        background: #041037;
        .selectbar-con{
            width: 300rem;
            height: 90rem;
            margin-left: 360rem;
            .selectbar-item{
                width: 90rem;
                height: 24rem;
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #77AFE7;
                float: left;
                margin-right: 39rem;
                margin-top: 60rem;
                cursor: pointer;
                .active-item{
                    width: 12rem;
                    height: 4rem;
                    background: #00B9FE;
                    border-radius: 2rem;
                    margin-top: 5rem;
                    margin-left: 39rem;
                }
            }
        }
    }
</style>