<template>
    <div class="userInfo">
        <div class="userInfo-title">基本信息</div>
        <div class="userInfo-con">
            <div class="user-name">
                <div class="user-name-text">手机号:</div>
                <input type="text" v-model="usermsg.username" class="user-name-input">
                <div class="change">修改</div>
                <div class="remind">用于登录用，要牢记哦~</div>
            </div>
            <div class="user-id-con">
                <div class="user-id-text">用户ID:</div>
                <div class="user-id">{{usermsg.userId}}</div>
            </div>
            <div class="userinfo-name-con">
                <div class="userinfo-name-text">真实姓名:</div>
                <div v-if="status0" class="userinfo-name">{{usermsg.realName}}</div>
                <input v-else type="text" class="userinfo-name-input" v-model="usermsg.realName">
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
                        <el-radio :label="1" v-model="radio" class="user-sex-item"><span
                            :style="{marginLeft:'11rem'}">男</span></el-radio>
                        <el-radio :label="0" v-model="radio" class="user-sex-item"><span
                            :style="{marginLeft:'11rem'}">女</span></el-radio>
                        <el-radio :label="2" v-model="radio" class="user-sex-item"><span :style="{marginLeft:'11rem'}">保密</span>
                        </el-radio>
                    </el-radio-group>
                </div>
            </div>
            <div class="user-bri-con">
                <div class="userinfo-bri-text">生日:</div>
                <div class="set-data-con">
<!--                    <dataselect :birthdayarr="birthdayarr"-->
<!--                                @getbirthday="getbirthday"-->
<!--                                @getbirthmonth="getbirthmonth"-->
<!--                                @getbirthyear="getbirthyear"></dataselect>-->
                    <el-date-picker
                            v-model="usermsg.birthday"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                </div>
            </div>
            <!--            <div class="user-stu-con">-->
            <!--                <div class="userinfo-stu-text">教育程度:</div>-->
            <!--                <div class="set-stu-con">-->
            <!--                    <div class="choose-type" >-->
            <!--                        <div>-->
            <!--                            <div class="chooseitem" style="width: 100rem;"  @click="control1">{{study[currentindex1]}}</div>-->
            <!--                            &lt;!&ndash;                    <img class="arrow-down" src="../../static/img/goodsdetails/arrow-down.png" alt="">&ndash;&gt;-->
            <!--                        </div>-->
            <!--                        <ul v-show="showitem1">-->
            <!--                            <li v-for="(item,index) in study"-->
            <!--                                :key="index"-->
            <!--                                @click="changesize1(index)">{{item}}</li>-->
            <!--                        </ul>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
            <!--            <div class="user-stu-con">-->
            <!--                <div class="userinfo-stu-text">所在行业:</div>-->
            <!--                <div class="set-stu-con">-->
            <!--                    <div class="choose-type" >-->
            <!--                        <div>-->
            <!--                            <div class="chooseitem" style="width: 100rem;"  @click="control2">{{perfarr[currentindex2]}}</div>-->
            <!--                            &lt;!&ndash;                    <img class="arrow-down" src="../../static/img/goodsdetails/arrow-down.png" alt="">&ndash;&gt;-->
            <!--                        </div>-->
            <!--                        <ul v-show="showitem2">-->
            <!--                            <li v-for="(item,index) in perfarr"-->
            <!--                                :key="index"-->
            <!--                                @click="changesize2(index)">{{item}}</li>-->
            <!--                        </ul>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
            <div class="userinfo-snum-con">
                <div class="userinfo-snum-text">身份证号:</div>
                <div v-if="status0" class="userinfo-snum">{{usermsg.idcard}}</div>
                <input v-else type="text" class="userinfo-snum-input" v-model="usermsg.idcard">
            </div>
            <div class="savebutton">
                <div class="savetext" @click="updatamsg">{{status0?edit:save}}</div>
            </div>
        </div>
    </div>
</template>

<script>
// import dataselect from "../../components/dataselect/dataselect";

export default {
    name: "userInfo",
    // components: {dataselect},
    data() {
        return {
            // study:["请选择",'博士','研究生','本科','大专'],
            // perfarr:['请选择','医生','老师','CEO','经理','运营','策划'],
            currentindex1: 0,
            currentindex2: 0,
            showitem1: false,
            showitem2: false,
            usermsg: {},
            birthdayarr:[],
            year:'',
            month:'',
            day:'',
            radio:2,
            status0:true,
            status1:false,
            edit:'编辑',
            save:'保存'
        }
    },
    mounted() {
        this.getUserInfo();
    },
    methods: {
        control1() {
            this.showitem1 = !this.showitem1;
            this.showitem2 = false;
        },
        control2() {
            this.showitem2 = !this.showitem2;
            this.showitem1 = false;
        },
        changesize1(index) {
            this.currentindex1 = index;
            this.showitem1 = false;
        },
        changesize2(index) {
            this.currentindex2 = index;
            this.showitem2 = false;
        },
        // getbirthday(day){
        //     this.day = day
        //     console.log(this.day.value);
        //     this.usermsg.birthday = this.year.value+'-'+this.month.value+'-'+this.day.value
        //     console.log(this.usermsg.birthday)
        // },
        // getbirthmonth(month){
        //     this.month = month
        //     console.log(this.month.value);
        //     this.usermsg.birthday = this.year.value+'-'+this.month.value+'-'+this.day.value
        //     console.log(this.usermsg.birthday)
        // },
        // getbirthyear(year){
        //     this.year = year
        //     console.log(this.year.value);
        //     this.usermsg.birthday = this.year.value+'-'+this.month.value+'-'+this.day.value
        //     console.log(this.usermsg.birthday)
        // },
        // choosesex(){
        //   this.usermsg.gender = this.radio;
        //   console.log(this.usermsg.gender)
        // },
        // cansave(){
        //     this.status0 = true;
        // },
        updatamsg(){
            this.status0 = false;
            if(this.status1){
                let PostData = this.getnewmsgPostdata();
                this.axios({
                    url:'wx/user/update',
                    method:'post',
                    params:PostData
                }).then(res=>{
                    console.log(res);
                    this.status0 = true
                }).catch(err=>{
                    console.log(err);
                })
            }
            this.status1 = !this.status1
        },
        getnewmsgPostdata(){
            this.usermsg.gender = this.radio;
            console.log(this.usermsg.gender,this.radio,this.usermsg.birthday)
            let PostData=this.usermsg;
            return PostData;
        },
        getUserInfo() {
            this.axios({
                url: 'wx/user/userinfo',
                method: 'get',
                // params: getData,
            }).then(res => {
                // birthday: "2021-03-15"
                // culturalLevel: ""
                // gender: 1
                // idcard: ""
                // realName: ""
                // userId: 1
                // username: "user123"
                // "workingIndustry ": ""
                console.log(res);
                let data = res.data
                if (res.errno === 0) {
                    this.usermsg.gender = data.gender;
                    this.radio = this.usermsg.gender
                    let usermsg = {
                        ...data
                    }
                    this.usermsg = usermsg;
                    // this.birthdayarr = usermsg.birthday.split("-");
                    this.localStorage.set('user', usermsg)
                }

            }).catch(err => {
                console.log(err);
            })
        }
    }
}
</script>

<style scoped lang="less">
.userInfo {
    .userInfo-title {
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

    .userInfo-con {
        width: 960rem;
        height: auto;
        margin-left: 70rem;

        .user-name {
            width: 100%;
            padding-bottom: 15rem;
            height: 38rem;

            .user-name-text {
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                line-height: 38rem;
                float: left;
                margin-right: 32rem;
            }

            .user-name-input {
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

            .change {
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #00B4FC;
                float: left;
                margin-left: 35rem;
                line-height: 38rem;
            }

            .remind {
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #9AA5B5;
                float: left;
                margin-left: 15rem;
                line-height: 38rem;
            }
        }

        .user-id-con {
            clear: both;
            height: 38rem;

            .user-id-text {
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                line-height: 38rem;
                float: left;
                margin-right: 32rem;
            }

            .user-id {
                float: left;
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                line-height: 38rem;
            }
        }

        .userinfo-name-con {
            clear: both;
            padding-top: 24rem;
            height: 38rem;

            .userinfo-name-text {
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                line-height: 38rem;
                float: left;
                margin-right: 20rem;
            }

            .userinfo-name{
                float: left;
                line-height: 38rem;
            }

            .userinfo-name-input {
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
                text-indent: 10rem;
            }
        }

        .user-sex-con {
            clear: both;
            text-align: left;
            height: 38rem;
            padding-top: 24rem;

            .user-sex-text {
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                line-height: 38rem;
                float: left;
                margin-right: 20rem;
            }

            .user-sex-choice {
                line-height: 38rem;

                .user-sex-item {
                    margin-right: 25rem;
                    font-size: 14rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                }
            }
        }

        .user-bri-con {
            clear: both;
            margin-top: 24rem;
            height: 38rem;

            .userinfo-bri-text {
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                line-height: 38rem;
                float: left;
                margin-right: 20rem;
                line-height: 40px;
            }

            .set-data-con {
                width: 100rem;
                height: auto;
                float: left;
            }
        }

        /*.user-stu-con {*/
        /*    clear: both;*/
        /*    padding-top: 24rem;*/
        /*    height: 38rem;*/

        /*    .userinfo-stu-text {*/
        /*        font-size: 14rem;*/
        /*        font-family: Source Han Sans CN;*/
        /*        font-weight: 400;*/
        /*        color: #444444;*/
        /*        line-height: 38rem;*/
        /*        float: left;*/
        /*        margin-right: 20rem;*/
        /*    }*/

        /*    .set-stu-con {*/
        /*        width: 100rem;*/
        /*        height: 38rem;*/
        /*        background: #FFFFFF;*/
        /*        border: 1rem solid #E4E7ED;*/
        /*        border-radius: 2rem;*/
        /*        float: left;*/
        /*        margin-right: 5rem;*/
        /*        line-height: 38rem;*/

        /*        .choose-type {*/
        /*            float: left;*/
        /*            margin-right: 27rem;*/
        /*            width: 100rem;*/
        /*            height: 338rem;*/
        /*            overflow: hidden;*/

        /*            .chooseitem {*/
        /*                font-size: 12rem;*/
        /*                font-family: Source Han Sans CN;*/
        /*                font-weight: 400;*/
        /*                color: #444444;*/
        /*                line-height: 42rem;*/
        /*                float: left;*/
        /*                !*margin-left: 15rem;*!*/
        /*            }*/

        /*            .arrow-down {*/
        /*                width: 12rem;*/
        /*                height: 7rem;*/
        /*                float: left;*/
        /*                !*padding-left: 17rem;*!*/
        /*                !*padding-right: 10rem;*!*/
        /*                margin-top: 17rem;*/
        /*            }*/

        /*            ul {*/
        /*                clear: both;*/
        /*                font-size: 12rem;*/
        /*                font-family: Source Han Sans CN;*/
        /*                font-weight: 400;*/
        /*                color: #444444;*/
        /*                width: 100rem;*/
        /*                height: 200rem;*/
        /*                overflow: hidden;*/
        /*                overflow-y: scroll;*/
        /*                scrollbar-width: none;*/
        /*                !*overflow-y: hidden;*!*/

        /*                ::-webkit-scrollbar {*/
        /*                    display: none*/
        /*                }*/

        /*                li {*/
        /*                    list-style: none;*/
        /*                    !*display: none;*!*/
        /*                    line-height: 38rem;*/
        /*                    !*margin-left: 17rem;*!*/
        /*                    background-color: #fff;*/
        /*                    position: relative;*/
        /*                    z-index: 10;*/
        /*                    width: 100rem;*/
        /*                    height: 38rem;*/
        /*                }*/

        /*                li:hover {*/
        /*                    background: #5E8FA0;*/
        /*                }*/
        /*            }*/
        /*        }*/
        /*    }*/
        /*}*/

        .userinfo-snum-con {
            clear: both;
            padding-top: 24rem;
            height: 38rem;

            .userinfo-snum-text {
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                line-height: 38rem;
                float: left;
                margin-right: 20rem;
            }
            .userinfo-snum{
                float: left;
                line-height: 38rem;
            }

            .userinfo-snum-input {
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
                text-indent: 10rem;
            }
        }

        .savebutton {
            clear: both;
            width: 200rem;
            height: 46rem;
            background: #00B4FC;
            border-radius: 2rem;
            margin-left: 92rem;
            margin-top: 45rem;
            margin-bottom: 40rem;

            .savetext {
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