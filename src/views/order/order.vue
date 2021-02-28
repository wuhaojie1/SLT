<template>
    <div class="message">
        <StickyHeader/>
        <div class="messageBox">
            <div class="top">
                <div class="topContent">
                    <div class="tab" style="height:100%">
                        <div class="tabItem">订单</div>
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="theader">
                    <div class="headerLeft">
                        <div>成交明细</div>
                    </div>
                    <div class="headerRight">
                        <el-cascader
                        style="width:100px"
                        placeholder="近七天"
                        size="mini"
                        v-model="daysVal"
                        :options="days"
                        @change="handleChange"></el-cascader>
                        <el-input :v-model="inputVal" style="width:100px;margin-left:10px" size="mini" placeholder="币种"></el-input>
                        <span style="padding:0px 5px">/</span>
                        <el-cascader
                        style="width:100px;"
                        size="mini"
                        v-model="modeVal"
                        :options="mode"
                        @change="handleChange"></el-cascader>

                        <el-cascader
                        style="width:100px;margin-left:10px"
                        placeholder=""
                        size="mini"
                        v-model="directionVal"
                        :options="direction"
                        @change="handleChange"></el-cascader>

                        <el-button style="margin-left:10px" size="mini" type="primary">搜索</el-button>
                    </div>
                </div>

                <ul class="tbody">
                    <li class="header">
                        <ul class="row1">
                            <li>时间</li>
                            <li>交易对象</li>
                            <li>方式</li>
                            <li>方向</li>
                            <li>价格</li>
                            <li>数量</li>
                            <li>成交额</li>
                            <li>手续费</li>
                        </ul>
                    </li>
                    <li v-for="(item,index) in list" :key="index" class="option header">
                        <ul class="row1">
                            <li>{{item.time}}</li>
                            <li>{{item.obj}}</li>
                            <li>{{item.mode}}</li>
                            <li>{{item.direction}}</li>
                            <li>{{item.price}}</li>
                            <li>{{item.num}}</li>
                            <li>{{item.total}}</li>
                            <li>{{item.charge}}</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <Bottom/>
    </div>
</template>

<script>
import StickyHeader from '../../components/header/themeStickyHeader.vue';
import Bottom from '../../components/bottom/bottom.vue';
export default {
    components:{
        StickyHeader,
        Bottom
    },
    data() {
      return {
		inputVal:'',
        daysVal:'',
        modeVal: 'ETH',
        directionVal:'all',
        list:[
            {time:'2021-02-25',obj:'大院交易所',mode:'ETH',direction:'SLT', price:'1,000', num:'1,0000,0000',total:'1,0000',charge:'10%'},
            {time:'2021-02-25',obj:'大院交易所',mode:'ETH',direction:'SLT', price:'1,000', num:'1,0000,0000',total:'1,0000',charge:'10%'},
            {time:'2021-02-25',obj:'大院交易所',mode:'ETH',direction:'SLT', price:'1,000', num:'1,0000,0000',total:'1,0000',charge:'10%'}
        ],
        days:[
            {value:'yizhi',label:'一致'},
            {value:'fankui',label:'反馈'},
            {value:'xiaolv',label:'效率'},
            {value:'可控',label:'可控'},
        ],
        mode:[
            {value:'ETH',label:'ETH'},
            {value:'fankui',label:'反馈'},
            {value:'xiaolv',label:'效率'},
            {value:'可控',label:'可控'},
        ],
        direction:[
            {value:'all',label:'全部方向'},
            {value:'fankui',label:'反馈'},
            {value:'xiaolv',label:'效率'},
            {value:'可控',label:'可控'},
        ],
      }
    },
    methods: {
        handleChange(){

        }
    }
}
</script>

<style lang='less' scoped>
ul{
    list-style: none;
    padding: 0;
    margin: 0;
}
.message{
    padding-top: 75rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    .messageBox{
        min-height: calc(100vh - 75rem - 200rem);
        .top{
            width: 100%;
            height: 90rem;
            background: #041037;
            .topContent{
                width: 1200rem;
                height: 100%;
                margin: 0 auto;
                .tab{
                    display: flex;
                    align-items: flex-end;
                    padding-bottom: 14rem;
                    box-sizing: border-box;
                    img{
                        width: 17rem;
                        height: 20rem;
                    }
                    .tabItem{
                        font-size: 14rem;
                        color: #FFFFFF;
                        margin-left: 10rem;
                        position: relative;
                        &::after{
                            content: '';
                                display: block;
                                width: 12rem;
                                height: 4rem;
                                background: #00B9FE;
                                border-radius: 2rem;
                                position: absolute;
                                bottom: -7rem;
                                left: 50%;
                                transform: translateX(-50%);

                        }
                    }
                }
            }
        }
        .content{
            width: 1200rem;
            height: 100%;
            border: 1rem solid #E4E7ED;
            margin: 20rem auto 0 auto;
    
            .theader{
                width: 100%;
                height: 50rem;
                background: #F8FAFC;
                border-bottom: 1rem solid #E4E7ED;
                display: flex;
                justify-content: space-between;
                padding: 17rem 25rem 18rem 25rem;
                box-sizing: border-box;
                .headerLeft{
                    display: flex;
                    align-items: flex-end;
                    div:nth-child(1){
                        font-size: 14rem;
                        color: #444444;

                    }
                    div:nth-child(2){
                        font-size: 10rem;
                        color: #9AA5B5;
                        padding-left: 4rem;

                    }
                }
                .headerRight{
                    display: flex;
                    align-items: center;
                    
                }

            }
            .tbody{
                .header{
                    border-bottom:solid 1px #E4E7ED;
                    .row1{
                        display: flex;
                        box-sizing: border-box;
                        height: 65px;
                        text-align: left;
                        li{
                            padding: 26px 25px;
                            font-size: 14px;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #9AA5B5;
                            
                        }
                        li:nth-child(1){
                            width: 200px;
                        }
                        li:nth-child(2){
                            width: 200px;
                        }
                        li:nth-child(3){
                            width: 140px;
                        }
                        li:nth-child(4){
                            width: 140px;
                        }
                        li:nth-child(5){
                            width: 200px;
                        }
                        li:nth-child(6){
                            width: 200px;
                        }
                        li:nth-child(7){
                            width: 200px;
                        }
                        li:nth-child(8){
                            width: 100px;
                            text-align: right;
                        }
                    }
                    &:last-child{
                        border: none;
                    }
                }
                .option{
                    .row1{
                        li{
                            font-size: 14px;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #444444;
                        }
                        li:nth-child(3){
                            color: #7A96F5;

                        }
                        li:nth-child(4){
                            color: #00B9FE;

                        }
                        li:nth-child(5){
                            color: #22BF7C;

                        }
                    }
                }
            }

        }
    }
}
</style>