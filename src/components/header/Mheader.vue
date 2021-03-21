<template>
    <div id="Topheader">
        <div class="tophead">
            <div class="SLTimg-con">
                <img class="STLimg" src="../../static/img/index/sltlogo_60x120_white.png" alt="">
            </div>
<!--            <div class="user-img-con">-->
<!--                <img class="user-img" src="../../static/img/index/userIcon.png" alt="">-->
<!--            </div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Mheader"
    }
</script>

<style scoped lang="less">
#Topheader{
    .tophead{
        height: 88rem;
        width: 750rem;
        background-color: #02031E;
        position: relative;
        .SLTimg-con{
            width: 80rem;
            height: 42rem;
            position: absolute;
            top: 23rem;
            left: 35rem;
            .STLimg{
                width: 80rem;
                height: 42rem;
            }
        }
        .user-img-con{
            width: 38rem;
            height: 42rem;
            position: absolute;
            top: 23rem;
            right: 35rem;
            .user-img{
                width: 38rem;
                height: 42rem;
            }
        }
    }
}
</style>