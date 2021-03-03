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
            <div class="user-sex-con">
                <div class="user-sex-text">性别:</div>
                <div class="user-sex-choice">
<!--                    <div class="user-sex-item">-->
<!--                        <input type="radio" value="男">-->
<!--                    </div>-->
<!--                    <div class="user-sex-item">-->
<!--                        <input type="radio" value="女">-->
<!--                    </div>-->
<!--                    <div class="user-sex-item">-->
<!--                        <input type="radio" value="保密">-->
<!--                    </div>-->
                    <el-radio-group v-model="radio">
                        <el-radio :label="3" class="user-sex-item"><span :style="{marginLeft:'11rem'}">男</span></el-radio>
                        <el-radio :label="6" class="user-sex-item"><span :style="{marginLeft:'11rem'}">女</span></el-radio>
                        <el-radio :label="9" class="user-sex-item"><span :style="{marginLeft:'11rem'}">保密</span></el-radio>
                    </el-radio-group>
                </div>
            </div>
            <div class="user-bri-con">
                <div class="userinfo-bri-text">生日:</div>
                <div class="set-data-con">
                    <dataselect></dataselect>
                </div>
            </div>
            <div class="user-stu-con">
                <div class="userinfo-stu-text">教育程度:</div>
                <div class="set-stu-con">
                    <select  placeholder="请选择">
                        <option
                                v-for="item in study"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </option>
                    </select>
                </div>
            </div>
            <div class="user-stu-con">
                <div class="userinfo-stu-text">所在行业:</div>
                <div class="set-stu-con">
                    <select  placeholder="请选择">
                        <option
                                v-for="item in study"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </option>
                    </select>
                </div>
            </div>
            <div class="userinfo-snum-con">
                <div class="userinfo-snum-text">身份证号:</div>
                <input type="text" class="userinfo-snum-input" :value="snum">
            </div>
            <div class="savebutton">
                <div class="savetext">保存</div>
            </div>
        </div>
    </div>
</template>

<script>
    import dataselect from "../../components/dataselect/dataselect";
    export default {
        name: "userInfo",
        components:{dataselect},
        data() {
            return {
                name:'王**',
                radio:'3',
                study:['博士','研究生','本科','大专'],
                snum:'511036...'
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
                height: 38rem;
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
                height: 38rem;
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
                padding-top: 24rem;
                height: 38rem;
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
            .user-sex-con{
                clear: both;
                text-align: left;
                height: 38rem;
                padding-top: 24rem;
                .user-sex-text{
                    font-size: 14rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                    line-height: 38rem;
                    float: left;
                    margin-right: 20rem;
                }
                .user-sex-choice{
                    line-height: 38rem;
                    .user-sex-item{
                        margin-right: 25rem;
                        font-size: 14rem;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #444444;
                    }
                }
            }
            .user-bri-con{
                clear: both;
                margin-top: 24rem;
                height: 38rem;
                .userinfo-bri-text{
                    font-size: 14rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                    line-height: 38rem;
                    float: left;
                    margin-right: 20rem;
                }
                .set-data-con{
                    width: 100rem;
                    height: auto;
                    float: left;
                }
            }
            .user-stu-con{
                clear: both;
                padding-top: 24rem;
                height: 38rem;
                .userinfo-stu-text{
                    font-size: 14rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                    line-height: 38rem;
                    float: left;
                    margin-right: 20rem;
                }
                .set-stu-con{
                        width: 100rem;
                        height: 38rem;
                        background: #FFFFFF;
                        border: 1rem solid #E4E7ED;
                        border-radius: 2rem;
                        float: left;
                        margin-right: 5rem;
                        line-height: 38rem;
                        select{
                            /*清除select的边框样式*/
                            border: none;
                            /*清除select聚焦时候的边框颜色*/
                            outline: none;
                            /*将select的宽高等于div的宽高*/
                            width: 100%;
                            height: 38rem;
                            line-height: 40rem;
                            /*隐藏select的下拉图标*/
                            appearance: none;
                            -webkit-appearance: none;
                            -moz-appearance: none;
                            /*通过padding-left的值让文字居中*/
                            padding-left: 20rem;
                        }
                        .chooce-year:after{
                            content: "";
                            width: 14rem;
                            height: 8rem;
                            /*background: url(../assets/arrow-down.png) no-repeat center;*/
                            /*通过定位将图标放在合适的位置*/
                            position: absolute;
                            right: 20rem;
                            top: 41%;
                            /*给自定义的图标实现点击下来功能*/
                            pointer-events: none;
                        }
                    }
            }
            .userinfo-snum-con{
                clear: both;
                padding-top: 24rem;
                height: 38rem;
                .userinfo-snum-text{
                    font-size: 14rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                    line-height: 38rem;
                    float: left;
                    margin-right: 20rem;
                }
                .userinfo-snum-input{
                    width: 200rem;
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
            .savebutton{
                clear: both;
                width: 200rem;
                height: 46rem;
                background: #00B4FC;
                border-radius: 2rem;
                margin-left:92rem;
                margin-top: 45rem;
                margin-bottom: 40rem;
                .savetext{
                    font-size: 16rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #FFFFFF;
                    text-align: center;
                    line-height: 46rem;
                }
            }
        }
    }
</style>