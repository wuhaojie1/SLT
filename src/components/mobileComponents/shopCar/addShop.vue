<template>
    <div class="addBox" v-show="isSHow">
        <div @click="closeModal" class="addMask"></div>
        <div class="addModal">
            <div class="modalTop">
                <div>{{$t('shopcar.already')}}</div>
                <img @click="closeModal" style="width:34rem;height:rem" src="../../../static/img/index/cross.png" alt="">
            </div>
            <div class="modalCenter">
                <div class="centerLeft">
                    <img src="../../../static/img/shop/carDmo2.png" alt="">
                </div>
                <ul class="centerRight">
                    <li>{{$t('shopcar.goodsName')}}</li>
                    <li>{{$t('shopcar.styleNum')}}</li>
                    <li>{{$t('shopcar.color')}}</li>
                    <li>{{$t('shopcar.size')}}</li>
                    <li>￥4,200</li>
                </ul>
            </div>
            <div class="modalBottom">
                <div class="addBtn">{{$t('shopcar.addShop')}}</div>
                <div class="nextBtn">{{$t('shopcar.goon')}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        
    },
    data(){
        return{
            isSHow:false
        }
    },
    methods:{
        openModal(){
            this.isSHow = true
        },
        closeModal(){
            this.isSHow = false
        }
    }
}
</script>

<style lang='less' scoped>
.addBox{
    .addMask{
        width: 100%;
        height: 200%;
        background-color: rgba(0, 0, 0, 0.4);
        position: absolute;
        left: 0;
        top: 0;
        animation: fade 0.2s ease-in-out;
    }
    .addModal{
        width: 100%;
        background: #FFFFFF;
        border-radius: 20rem 20rem 0rem 0rem;
        position: fixed;
        left: 0;
        bottom: 0;
        padding: 35rem;
        box-sizing: border-box;
        animation: modal 0.2s ease-in-out;
        .modalTop{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 32rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #444444;

        }
        .modalCenter{
            display: flex;
            justify-content: space-between;
            margin-top: 73rem;
            .centerLeft{
                width: 300rem;
                height: 300rem;
                background: #F3F5F7;
                padding: 30rem;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    height: 80%;
                }

            }
            .centerRight{
                flex-grow: 1;
                list-style: none;
                padding-left: 25rem;
                padding-top: 63rem;
                font-size: 24rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                li{
                    padding-bottom: 14rem;
                }
                li:nth-child(2){
                    color: #7E7E7E;
                }

            }
        }
        .modalBottom{
            padding-top: 50rem;
            div{
                width: 670rem;
                height: 88rem;
                font-size: 32rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                text-align: center;
                line-height: 88rem;

            }
            .addBtn{
                background-color: #082850;
                color: white;
            }
            .nextBtn{
                margin-top: 25rem;
                margin-bottom: 10rem;
                border: 1rem solid #082850;
            }
        }
    }
}

@keyframes fade{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
@keyframes modal{
    0%{
        transform: translateY(100%);
    }
    100%{
        transform: translateY(0%);
    }
}
</style>