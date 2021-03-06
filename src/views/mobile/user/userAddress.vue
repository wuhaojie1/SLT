<template>
    <div class="user">
        <div class="userHeader">
            <span class="headerLeft">收货地址</span>
            <img style="width:24rem;height:14rem;" src="../../../static/img/user/arrowdown.png" alt="">
        </div>
        <div class="infoTitle">地址</div>
        <ul class="infoBox">
            <li v-for="item in list" :key="item.text" class="infoItem">
                <div class="itemLeft">{{item.text}}</div>
                <input v-model="item.val" class="itemCenter" type="text" :placeholder="item.place">
                <img v-if="item.isArrow" class="itemRight" style="width:12rem;height:20rem;" :src="require('../../../static/img/user/arrowgrey.png')" alt="">
            </li>
        </ul>
        <div class="saveBtn">保存</div>

        <div class="checkBox">
            <div @click="checked=!checked" class="check"><i style="color:#00B4FC" v-show="checked" class="el-icon-check"></i></div><div class="checkText">设置默认地址</div>
        </div>
        <div class="cell">
            <img style="width:18rem;height:18rem" src="../../../static/img/user/tips.png" alt="">
            <span>已保存两个地址</span>
        </div>
        <div class="addr">
            <ul>
                <li>四川省成都市双流区华阳街道</li>
                <li><span>瑞升 橡树华府五单元1401</span> <img style="width:30rem;height:32rem" src="../../../static/img/user/edit.png" alt=""></li>
                <li><span>李歪歪</span><span>130****3556</span></li>
            </ul>
            <ul>
                <li>四川省成都市双流区华阳街道</li>
                <li><span>瑞升 橡树华府五单元1401</span> <img style="width:30rem;height:32rem" src="../../../static/img/user/edit.png" alt=""></li>
                <li><span>李歪歪</span><span>130****3556</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {text:'收货人信息:',val:'',isArrow:false,place:'请输入收货人姓名'},
                {text:'地址信息:',val:'',isArrow:true,place:'请输入省/市/区/街道'},
                {text:'详情地址:',val:'',isArrow:true,place:'请输入详细地址信息，如小区,门牌号'},
                {text:'邮政编码:',val:'',isArrow:true,place:'请输入邮政编码'},
                {text:'手机号码:',val:'',isArrow:true,place:'请输入手机号码'}
            ],
            checked:false
        }
    }
}
</script>

<style lang='less' scoped>
.user{
    text-align: left;
    height: 100vh;
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
        margin: 75rem auto 0rem auto;

    }
    .checkBox{
        display: flex;
        align-items: center;
        padding: 30rem 0rem 40rem 35rem;
        .check{
            width: 35rem;
            height: 35rem;
            background: #FFFFFF;
            border: 1rem solid #00B4FC;
            border-radius: 2rem;
            text-align: center;
            line-height: 35rem;

        }
        .checkText{
            font-size: 28rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #9AA5B5;
            margin-left: 16rem;

        }
    }
    .cell{
        background: #F2F6FA;
        border-radius: 4rem;
        padding: 9rem 35rem;
        
        span{
            font-size: 20rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #9AA5B5;
            padding-left: 10rem;

        }

    }
    .addr{
        padding: 5rem 36rem 0rem 36rem;
        ul{
            list-style: none;
            margin: 0;
            border-bottom: solid 2rem #f5f6f7;
            padding-bottom: 35rem;
            padding-top: 36rem;
            li{
                font-size: 26rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #9AA5B5;

            }
            li:nth-child(2){
                font-size: 30rem;
                font-weight: 500;
                color: #444444;
                padding: 17rem 0rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            li:nth-child(3){
                span:nth-child(1){
                    padding-right: 101rem;
                }
            }
            &:last-child{
                border: none;
            }
        }
    }
}
</style>