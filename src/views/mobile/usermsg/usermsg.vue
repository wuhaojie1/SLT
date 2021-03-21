<template>
    <div id="usermsg">
        <PageHeader :isShowRight="true"></PageHeader>
        <div class="msg-con">
            <div class="base-user-msg-con">
                <div class="user-img"></div>
                <div class="user-msg">
                    <div class="username">130****3775</div>
                    <div class="userid">ID:JCJDVJDS</div>
                </div>
            </div>
            <div class="self-center"
                 v-for="item in usermsgarr"
                 :key="item.index"
                 @click="toPage(item.namePath)">
                <div class="self-center-text">{{item.name}}</div>
                <img class="self-center-img" :src="item.img" alt="">
            </div>
            <div class="out-button">{{this.$t('usermsg.out')}}</div>
        </div>
    </div>
</template>

<script>
    // import Mheader from "../../../components/header/Mheader";
    import PageHeader from "@/components/mobileComponents/comm/header";
    export default {
        name: "usermsg",
        components:{PageHeader},
        data(){
            return{
                usermsgarr:[
                    {
                        name:this.$t('usermsg.personcenter'),
                        img:`${require('../../../static/img/user/arrow.png')}`,
                        namePath: "Muser",
                    },
                    {
                        name:this.$t('usermsg.auth'),
                        img:`${require('../../../static/img/user/arrow.png')}`,
                        namePath: "MuserAuth",
                    },
                   /* {
                        name:'OTC',
                        img:`${require('../../../static/img/user/arrow.png')}`,
                        namePath: "",
                    },*/
                    /*{
                        name:this.$t('usermsg.order'),
                        img:`${require('../../../static/img/user/arrow.png')}`,
                        namePath: "",
                    },*/
                    /*{
                        name:this.$t('usermsg.localtionn'),
                        img:`${require('../../../static/img/user/arrow.png')}`,
                        namePath: "",
                    },*/
                    {
                        name:this.$t('usermsg.order'),
                        img:`${require('../../../static/img/user/arrow.png')}`,
                        namePath: "MuserAccount",
                    },
                    {
                        name:this.$t('usermsg.address'),
                        img:`${require('../../../static/img/user/arrow.png')}`,
                        namePath: "MuserAddress",
                    },
                    {
                        name:this.$t('usermsg.log'),
                        img:`${require('../../../static/img/user/arrow.png')}`,
                        namePath: "Mrecord",
                    }
                ]
            }
        },
        methods: {
            toPage(name){
                this.$router.push({
                    name: name,
                })
            }
        }
    }
</script>

<style scoped lang="less">
#usermsg{
    width: 750rem;
    height: calc(100vh - 184rem);
    /*padding-bottom: 88rem;*/
    .msg-con{
        width: 750rem;
        height: calc(100vh - 274rem);
        background-color: #FFFFFF;
        border-top: 1rem solid #FFFFFF;
        .base-user-msg-con{
            width: 750rem;
            height: 169rem;
            border-bottom: 1rem solid #FFFFFF;
            display: flex;
            justify-content: flex-start;
            .user-img{
                width: 88rem;
                height: 88rem;
                background-color: #000000;
                margin-left: 40rem;
                margin-top: 40rem;
                border-radius: 88rem;
                img{
                    width: 88rem;
                    height: 88rem;
                }
            }
            .user-msg{
                height: 88rem;
                width: 300rem;
                margin-top: 40rem;
                text-align: left;
                margin-left: 30rem;
                .username{
                    font-size: 32rem;
                    font-family: Source Han Sans CN;
                    font-weight: 500;
                    color: #000000;
                    margin-top: 9rem;
                }
                .userid{
                    font-size: 24rem;
                    font-family: Source Han Sans CN;
                    font-weight: 500;
                    color: #9AA5B5;
                    margin-top: 20rem;
                }
            }
        }
        .self-center{
            width: 750rem;
            height: 88rem;
            display: flex;
            justify-content: space-between;
            .self-center-text{
                font-size: 30rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #9AA5B5;
                margin-left: 40rem;
                line-height: 88rem;
            }
            .self-center-img{
                width: 14rem;
                height: 24rem;
                margin-right: 40rem;
                margin-top: 34rem;
            }
        }
        .out-button{
            width: 670rem;
            height: 88rem;
            background: #00B4FC;
            border-radius: 10rem;
            color: #FFFFFF;
            text-align: center;
            line-height: 88rem;
            font-size: 34rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            margin-left: 40rem;
            margin-top: 219rem;
        }
    }
}
</style>