<template>
    <div class="user">
        <PageHeader></PageHeader>
        <div class="userBox">
            <div class="userHeader">
                <span class="headerLeft">{{$t('identifi.identifitext')}}</span>
                <img style="width:24rem;height:14rem;" src="../../../static/img/user/arrowdown.png" alt="">
            </div>
            <div class="infoTitle">{{$t('identifi.trueInfo')}}</div>
            <ul class="infoBox">
                <li v-for="(item,index) in list" :key="item.text" class="infoItem">
                    <div class="itemLeft">{{item.text}}</div>
                    <input v-model="item.val" class="itemCenter" type="text" :placeholder="item.place">
                    <img v-if="item.isArrow" class="itemRight" style="width:12rem;height:20rem;" :src="require('../../../static/img/user/arrowgrey.png')" alt="">
                    <div v-if="index==1" class="red">{{$t('identifi.inputTrueName')}}</div>
                </li>
            </ul>

            <div class="upload">
                <div class="upTitle">{{$t('identifi.uploadCard')}}</div>
                <div class="card">
                    <div class="cardLeft">
                        <img style="width:314rem;height:219rem" src="../../../static/img/user/card1.png" alt="">
                        <div class="cardText">{{$t('identifi.uploadface')}}</div>
                    </div>
                    <div class="cardRight">
                        <img style="width:314rem;height:219rem" src="../../../static/img/user/card2.png" alt="">
                        <div class="cardText">{{$t('identifi.uploadback')}}</div>
                    </div>
                </div>
            </div>

            <div class="saveBtn">{{$t('identifi.auth')}}</div>
        </div>
        

        <BottomBar></BottomBar>
    </div>
</template>

<script>
import PageHeader from '../../../components/mobileComponents/comm/header.vue';
import BottomBar from '../../../components/mobileComponents/user/bottomBar.vue';
export default {
    components:{
        PageHeader,
        BottomBar
    },
    data(){
        return{
            list:[
                {text:this.$t('identifi.truename'),val:'',isArrow:false,place:this.$t('identifi.addname')},
                {text:this.$t('identifi.idnum'),val:'',isArrow:false,place:this.$t('identifi.addidnum')},
            ],
            checked:false
        }
    }
}
</script>

<style lang='less' scoped>
.user{
    text-align: left;
    .userBox{
        height: calc(100vh - 88rem - 176rem);
        .userHeader{
            width: 750rem;
            height: 88rem;
            background: #FFFFFF;
            box-shadow: 0rem 5rem 10rem 0rem rgba(153, 153, 153, 0.1);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0rem 36rem;
            box-sizing: border-box;

            .headerLeft{
                width: 121rem;
                height: 29rem;
                font-size: 30rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #333333;
                line-height: 37rem;

            }
        }
        .infoTitle{
            width: 129rem;
            height: 31rem;
            font-size: 32rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #333333;
            padding: 40rem 0rem 40rem 36rem;

        }
        .infoBox{
            padding: 0rem 34rem;
            .infoItem{
                display: flex;
                justify-content: space-between;
                padding: 34rem 0rem;
                align-items: center;
                font-size: 28rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                border-bottom: solid 2rem #F5F6F7;
                position: relative;
                .itemLeft{
                    margin-right: 5rem;
                }
                .itemCenter{
                    flex-grow: 1;
                    text-align: right;
                }
                input::-webkit-input-placeholder {
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #9AA5B5;

                }
                
                input::-moz-placeholder {
                    /* Mozilla Firefox 19+ */
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #9AA5B5;
                }
                
                input:-moz-placeholder {
                    /* Mozilla Firefox 4 to 18 */
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #9AA5B5;
                }
                
                input:-ms-input-placeholder {
                    /* Internet Explorer 10-11 */
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #9AA5B5;
                }
                .itemRight{
                    margin-left: 18rem;
                }
                .red{
                    position: absolute;
                    right: 0;
                    bottom: -10rem;
                    font-size: 22rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #FE6453;

                }
                &:last-child{
                    border-bottom: none;
                }
            }
        }
        .saveBtn{
            width: 670rem;
            height: 88rem;
            background: #00B4FC;
            border-radius: 10rem;
            font-size: 34rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #FFFFFF;
            text-align: center;
            line-height: 88rem;
            margin: 96rem auto 61rem auto;

        }
        .upload{
            padding: 60rem 36rem 0rem 36rem;
            .upTitle{
                font-size: 30rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;

            }
            .card{
                padding-top: 54rem;
                display: flex;
                justify-content: space-between;
                .cardLeft,.cardRight{
                    text-align: center;
                    img{
                        border: dashed 1rem #888888;
                        margin-bottom: 21rem;

                    }
                    
                }
            }
        }
    }
    
}
</style>