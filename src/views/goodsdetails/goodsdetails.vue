<template>
    <div id="goodsdetails">
        <themeStickyHeader></themeStickyHeader>
        <div class="goodsmsg">
            <div class="goodsmsg-scoll">
                <el-carousel height="200px" direction="vertical" :autoplay="true" :loop="true">
                    <el-carousel-item v-for="item in 3" :key="item">
                        <h3 class="medium">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="goodsmsg-con"></div>
        </div>
    </div>
</template>

<script>
    import themeStickyHeader from "../../components/header/themeStickyHeader";
    export default {
        name: "goodsdetails",
        components:{
            themeStickyHeader
        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped lang="less">
#goodsdetails{
    .goodsmsg{
        margin-top: 75rem;
        padding-top: 229rem;
        .goodsmsg-scoll{
            width: 330rem;
            height: auto;
            .el-carousel__item h3 {
                color: #475669;
                font-size: 14px;
                opacity: 0.75;
                line-height: 200px;
                margin: 0;
            }

            .el-carousel__item:nth-child(2n) {
                background-color: #99a9bf;
            }

            .el-carousel__item:nth-child(2n+1) {
                background-color: #d3dce6;
            }
        }
        .goodsmsg-con{
            float: right;
            margin-right: 360rem;
        }
    }
}
</style>