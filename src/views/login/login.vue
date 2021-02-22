<template>
    <div class="login">
        <div class="bgimg">
            <image src=""></image>
        </div>
        <div class="lefttext1">SLT coin</div>
        <div class="lefttext2">SLT coin!</div>
        <div class="lefttext3">SLTcoin 团队欢迎任何代购币购买或者业务查询。</div>
        <div class="loginbox"></div>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped lang="less">
    .bgimg{
        position: relative;
        z-index: -10;
    }
    .lefttext1{
        position: absolute;
        z-index: 5;
        width: 624rem;
        height: 127rem;
        font-size: 150rem;
        font-family: Source Han Sans CN;
        font-weight: 800;
        color: #0D2541;
        line-height: 445rem;
        opacity: 0.36;
    }
    .lefttext2{
        position: absolute;
        z-index: 10;
        width: 281rem;
        height: 49rem;
        font-size: 60rem;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #000000;
        line-height: 63rem;
    }
    .lefttext3{
        position: absolute;
        z-index: 10;
        width: 550rem;
        height: 25rem;
        font-size: 26rem;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #000000;
        line-height: 27rem;
    }
    .loginbox{
        position: absolute;
        z-index: 10;
    }

</style>