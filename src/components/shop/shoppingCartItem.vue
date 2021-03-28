<template>
    <div class="shoppingCartItem">
        <checkBoxCustom @choose="choose" :isSlect="goodsitem.checked"/>
        <img class="goodsImage" :src="goodsitem.picUrl"/>
        <div class="goodsItemCenter">
            <div class="goodsItemCenter_top">
                <div class="p p1">{{goodsitem.goodsName}}</div>
                <div class="p p2">{{$t('shopcar.goodsId')}} {{goodsitem.goodsSn}}</div>
                <div class="p p3">{{$t('shopcar.goodsStyle')}} {{goodsitem.goodstype}}</div>
            </div>
            <div class="text text4" v-if="goodsitem.havegoods">{{$t('shopcar.inStock')}}</div>
            <div class="text text4" v-else>{{$t('shopcar.outStock')}}</div>
            <div class="text text5">{{$t('shopcar.date')}}</div>
            <div class="btn text text6" @click="del">{{$t('shopcar.delete')}}</div>
        </div>
        <!-- <div class="goodsItemRight"> -->
        <div class="goodsItemRight_Num">
            <div class="lable">{{$t('shopcar.num')}}：</div>
            <input type="number" min="1" :value="goodsitem.number"/>
        </div>
        <div class="countPrice">￥ {{goodsitem.price}}</div>
            <!-- <div class="text text4">有货</div>
            <div class="text text5">预计发货后2-4个工作日送达</div>
            <div class="btn text text6">删除</div> -->
        <!-- </div> -->
    </div>
    <!-- <div :class="isSlect?'checkBoxCustom select':'checkBoxCustom'" @click="changeSelect">
        <img v-if="isSlect" class="select" :src="select" />
    </div> -->
</template>

<script>
    import checkBoxCustom from "../../components/checkBoxCustom/index";
    
    export default {
        name: "shoppingCartItem",
        components: {checkBoxCustom},
        data(){
            return {
                goodsImage: `${require('../../static/img/shop/carDmo2.png')}`,
            }
        },
        mounted() {
            // console.log(this.goodsitem)
        },
        props:{
            isSlect: {
                type: Boolean,
                default: false
            },
            //携带参数//标记
            formData:{
                type: [Boolean,Object,Array,String,Number],
                default:()=>{} 
            },
            goodsitem:{
                type:Object,
                default:()=>{}
            }

        },
        methods:{
            changeSelect(){
                let {isSlect,formData} = this.$props;
                this.$emit("changeSelect",{
                    isSlect:!isSlect,
                    data:formData
                })
            },
            del(){
                this.$emit("deletegoods")
            },
            choose(){
                this.$emit("choose")
            }
        }
    }
</script>

<style scoped lang="less">
.shoppingCartItem{
    width: 100%;
    height: auto;
    // background: red;
    padding-top: 50rem;
    border-top: 2rem solid #DBDEE4;
    display: flex;
    text-align: left;
    padding-bottom: 50rem;
    .line{
        height: 2rem;
        width: 100%;        
        background: #DBDEE4;
    }
    .goodsImage{
        width: 190rem;
        height: 150rem;
        margin: 0 30rem 0 20rem;
    }
    .goodsItemCenter{
        width: 285rem;
        height: 200rem;
        // background: sandybrown;
        
        .goodsItemCenter_top{
            
            width: 100%;
            box-sizing: border-box;
            border-right: 1rem solid #DBDEE4;
            .p{
                width: 100%;     
                height: 14rem;
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                line-height: 14rem;
            }
            .p2{
                margin: 15rem 0;
                font-size: 12rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #7E7E7E;
            }
        }
        .text{
            width: 100%;
            height: 12rem;
            font-size: 12rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #7E7E7E;
            line-height: 12rem;
        }
        .text4{
            margin: 50rem 0 12rem;
        }
        .btn{
            color: #444444;
            cursor: pointer;
            margin-top: 30rem;
        }
    }
    .goodsItemRight_Num{
        width: 140rem;
        height: 38rem;
        line-height: 38rem;
        display: flex;
        margin-left: 20rem;
        
        font-size: 14rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #444444;
        line-height: 38rem;
        .lable{
            width: 60rem;
        }
        input{
            width: 60rem;
            height: 38rem;
            text-align: center;
            box-sizing: border-box;
            display: block;
            
            border: 1rem solid #DBDEE4;
            border-radius: 2rem;
        }
    }
    .countPrice{
        // float: right;
        margin-left: auto;
        height: 14rem;
        font-size: 14rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #444444;
        line-height: 14rem;
    }
    
}
</style>