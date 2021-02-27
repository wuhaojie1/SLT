<template>
    <div class="userInfo">
        <div class="userInfo-title">基本信息</div>
        <div class="userInfo-con">
            <div class="user-name">
                <div class="user-name-text">用户名:</div>
                <input type="text" class="user-name-input">
                <div class="change">修改</div>
                <div class="remind">用于登录用，要牢记哦~</div>
            </div>
            <div class="user-id-con">
                <div class="user-id-text">用户名:</div>
                <div class="user-id">JCJDVJDS</div>
            </div>
            <div class="userinfo-name-con">
                <div class="userinfo-name-text">真实姓名:</div>
                <input type="text" class="userinfo-name-input" :value="name">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "userInfo",
        data() {
            return {
                name:'王**'
            }
        },
        methods: {

        }
    }
</script>

<style scoped lang="less">
    .userInfo {
        .userInfo-title{
            width: 990rem;
            font-size: 14rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
            /*float: left;*/
            margin-left: 40rem;
            margin-top: 24rem;
            text-align: left;
        }
        .userInfo-con{
            width: 960rem;
            height: auto;
            margin-left: 70rem;
            .user-name{
                width: 100%;
                padding-bottom: 15rem;
                .user-name-text{
                    font-size: 14rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                    line-height: 38rem;
                    float: left;
                    margin-right: 32rem;
                }
                .user-name-input{
                    width: 100rem;
                    height: 38rem;
                    background: #FFFFFF;
                    border: 0rem solid #E4E7ED;
                    border-radius: 2rem;
                    font-size: 14rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                    float: left;
                }
                .change{
                    font-size: 14rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #00B4FC;
                    float: left;
                    margin-left:35rem;
                    line-height: 38rem;
                }
                .remind{
                    font-size: 14rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #9AA5B5;
                    float: left;
                    margin-left: 15rem;
                    line-height: 38rem;
                }
            }
            .user-id-con{
                clear: both;
                .user-id-text{
                    font-size: 14rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                    line-height: 38rem;
                    float: left;
                    margin-right: 32rem;
                }
                .user-id{
                    float: left;
                    font-size: 14rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                    line-height: 38rem;
                }
            }
            .userinfo-name-con{
                clear: both;
                .userinfo-name-text{
                    font-size: 14rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                    line-height: 38rem;
                    float: left;
                    margin-right: 20rem;
                }
                .userinfo-name-input{
                    width: 160rem;
                    height: 38rem;
                    background: #FFFFFF;
                    border: 1rem solid #E4E7ED;
                    border-radius: 2rem;
                    font-size: 14rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                    float: left;
                }
            }
        }
    }
</style>