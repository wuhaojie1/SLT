<template>
    <div id="bottom">
        <div class="bottom">
            <div class="content1">
                <div class="content">
                    <div class="left-text1">联系地址</div>
                    <div class="left-text2">San Frandgcc CA 78567</div>
                    <div class="left-text3">地址：大连市沙河口区中山路688号</div>
                </div>
                <div class="content">
                    <div class="left-text1">联系方式</div>
                    <div class="left-text2">18535336852@qq.com</div>
                    <div class="left-text3">Hhttps://lanhuapp.com/..</div>
                </div>
                <div  class="content">
                    <div class="left-text1">通讯方式</div>
                    <div class="img-content">
                        <img :src=facebook class="facebook">
                        <img :src=ins class="ins">
                        <img :src=twitter class="twitter">
                    </div>
                </div>
            </div>
            <div class="line"></div>
            <div class="content2">
                Copright 小号沃尔玛 大号牛逼李有成全球2020.AII版权所有
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bottom",
        data(){
            return{
                facebook:`${require('../../static/img/bottom/facebook.png')}`,
                ins:`${require('../../static/img/bottom/ins.png')}`,
                twitter:`${require('../../static/img/bottom/twitter.png')}`
            }
        }
    }
</script>

<style scoped lang="less">
#bottom{
    // position: fixed;
    // bottom: 0;
    // z-index: 20;
    .bottom{
        width: 1920rem;
        height: 200rem;
        background: #040622;
        .content1{
            width: 100%;
            height: 150rem;
            display: flex;
            justify-content: space-around;
            .content{
                text-align: center;
                width: 280rem;
                height: 134rem;
                margin-top: 45rem;
                .left-text1{
                    font-size: 16rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #00B9FE;
                    margin-bottom: 19rem;
                }
                .left-text2{
                    font-size: 12rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #FFFFFF;
                    margin-bottom: 5rem;
                }
                .left-text3{
                    font-size: 12rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #FFFFFF;
                }
                .img-content{
                    display: flex;
                    justify-content: space-around;
                    width: 170rem;
                    height: 40rem;
                    margin: 0 auto;
                    padding-top: 3rem;
                    .facebook{
                        width: 11rem;
                        height: 24rem;
                    }
                    .ins{
                        width: 22rem;
                        height: 19rem;
                    }
                    .twitter{
                        width: 20rem;
                        height: 20rem;
                    }
                }
            }
        }
        .line{
            width: 1920rem;
            height: 1rem;
            background: #0B0E49;
        }
        .content2{
            width: 100%;
            height: 49rem;
            margin: 0 auto;
            line-height: 49rem;
            font-size: 14rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #FFFFFF;
        }
    }
}
</style>