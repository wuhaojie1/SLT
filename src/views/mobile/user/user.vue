<template>
    <div class="user">
        <PageHeader :isShowRight="true"
                    :isHome="false"
                    @clickCallback="clickCallback"></PageHeader>
        <div class="userBox">
            <div class="userHeader">
                <span class="headerLeft">{{ $t('userInfo.userCenter') }}</span>
                <img style="width:24rem;height:14rem;" src="../../../static/img/user/arrowdown.png" alt="">
            </div>
            <div class="infoTitle">{{ $t('userInfo.basemsg') }}</div>
<!--            <ul class="infoBox">-->
<!--                <li v-for="(item,index) in list" :key="item.text" class="infoItem">-->
<!--                    <div class="itemLeft">{{ item.text }}</div>-->
<!--                    <div v-if="change" :style="'color:'+((index==2||index==5||index==6||index==7)?'#9AA5B5':'#444444')"-->
<!--                         class="itemCenter">{{ item.val }}-->
<!--                    </div>-->
<!--                    <input v-else v-model="item.val" :style="'color:'+((index==2||index==5||index==6||index==7)?'#9AA5B5':'#444444')"-->
<!--                         class="itemCenterinput" />-->
<!--                    <img v-if="item.isArrow" class="itemRight" style="width:12rem;height:20rem;"-->
<!--                         :src="require((index==6||index==7||index==5||index==2)?'../../../static/img/user/arrowgrey.png':'../../../static/img/user/arrowdart.png')"-->
<!--                         alt="">-->
<!--                </li>-->
<!--            </ul>-->
            <ul class="infoBox">
                <li class="infoItem">
                    <div class="itemLeft">{{$t('userInfo.phonenum')}}:</div>
                    <div v-if="change"
                         class="itemCenter">{{ usermsg.username }}
                    </div>
                    <input v-else v-model="usermsg.username"
                           class="itemCenterinput" />
                    <img class="itemRight" style="width:12rem;height:20rem;"
                         src="../../../static/img/user/arrowgrey.png"
                         alt="">
                </li>
                <li class="infoItem">
                    <div class="itemLeft">{{$t('userInfo.userID')}}</div>
                    <div v-if="change"
                         class="itemCenter">{{ usermsg.userId }}
                    </div>
                    <input v-else v-model="usermsg.userId"
                           class="itemCenterinput" />
                    <img class="itemRight" style="width:12rem;height:20rem;"
                         src="../../../static/img/user/arrowgrey.png"
                         alt="">
                </li>
                <li class="infoItem">
                    <div class="itemLeft">{{$t('userInfo.truename')}}</div>
                    <div v-if="change"
                         class="itemCenter">{{usermsg.realName}}
                    </div>
                    <input v-else v-model="usermsg.realName"
                           class="itemCenterinput" />
                    <img class="itemRight" style="width:12rem;height:20rem;"
                         src="../../../static/img/user/arrowgrey.png"
                         alt="">
                </li>
                <li class="infoItem">
                    <div class="itemLeft">{{$t('userInfo.sex')}}</div>
                    <el-radio-group v-model="radio" :disabled=change class="itemCenter">
                        <el-radio :label="1" v-model="radio" class="user-sex-item"><span
                                :style="{marginLeft:'11rem'}">{{$t('userInfo.man')}}</span></el-radio>
                        <el-radio :label="0" v-model="radio" class="user-sex-item"><span
                                :style="{marginLeft:'11rem'}">{{$t('userInfo.weman')}}</span></el-radio>
                        <el-radio :label="2" v-model="radio" class="user-sex-item"><span :style="{marginLeft:'11rem'}">{{$t('userInfo.secret')}}</span>
                        </el-radio>
                    </el-radio-group>
<!--                    <div v-if="change"-->
<!--                         class="itemCenter">{{ sex }}-->
<!--                    </div>-->
<!--                    <input v-else v-model="sex"-->
<!--                           class="itemCenterinput" />-->
                    <img class="itemRight" style="width:12rem;height:20rem;"
                         src="../../../static/img/user/arrowgrey.png"
                         alt="">
                </li>
                <li class="infoItem">
                    <div class="itemLeft">{{$t('userInfo.birthday')}}</div>
<!--                    <div v-if="change"-->
<!--                         class="itemCenter">{{ birthday }}-->
<!--                    </div>-->
<!--                    <input v-else v-model="birthday"-->
<!--                           class="itemCenterinput" />-->
                    <el-date-picker
                            class="itempicker"
                            v-model="usermsg.birthday"
                            type="date"
                            placeholder="날짜를선택하다"
                            :disabled=change>
                    </el-date-picker>
                    <img class="itemRight" style="width:12rem;height:20rem;"
                         src="../../../static/img/user/arrowgrey.png"
                         alt="">
                </li>
            </ul>
            <div class="saveBtn" @click="save">{{ $t('userInfo.save') }}</div>
        </div>

        <BottomBar :usermsg="list"></BottomBar>
        <!-- <Tabbar></Tabbar> -->
    </div>
</template>

<script>
import PageHeader from '../../../components/mobileComponents/comm/header.vue';
import BottomBar from '../../../components/mobileComponents/user/bottomBar.vue';
// import Tabbar from '../../../components/mobileComponents/tabbar/tabbar.vue';
export default {
    components: {
        PageHeader,
        BottomBar,
        // Tabbar
    },
    data() {
        return {
            list: [
                // {text: this.$t('userInfo.userName'), val: '13028143776', isArrow: true},
                // {text: this.$t('userInfo.userID'), val: 'JCJDVJDS', isArrow: false},
                // {text: this.$t('userInfo.truename'), val: '*상**.', isArrow: false},
                // {text: this.$t('userInfo.sex'), val: this.$t('userInfo.weman'), isArrow: true},
                // {text: this.$t('userInfo.birthday'), val: '1988.10.20', isArrow: true},
                // {text:this.$t('userInfo.education'),val:this.$t('userInfo.pleaseSelect'),isArrow:true},
                // {text:this.$t('userInfo.industry'),val:this.$t('userInfo.pleaseSelect'),isArrow:true},
                // {text: this.$t('userInfo.idnum'), val: this.$t('userInfo.pleaseInput'), isArrow: true},
            ],
            change:true,
            usermsg: {},
            radio:'2'
        }
    },
    mounted() {
        this.getUserInfo();
    },
    methods: {
        save(){
            this.change = !this.change;
            // if (!this.change){
                this.updatamsg()
            // }
        },
        clickCallback(item){
            // console.log(item)
            this.$router.push({
                name: item.name,
            })
        },
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
                console.log(res);
                let data = res.data
                if (res.errno === 0) {
                    this.usermsg.gender = data.gender;
                    this.radio = this.usermsg.gender
                    let usermsg = {
                        ...data
                    }
                    this.usermsg = usermsg;
                    this.localStorage.set('usermsg', usermsg)
                }
            })
        }
    },
}
</script>

<style lang='less' scoped>
.user {
    text-align: left;

    .userBox {
        height: calc(100vh - 88rem - 176rem);

        .userHeader {
            width: 750rem;
            height: 88rem;
            background: #FFFFFF;
            box-shadow: 0rem 5rem 10rem 0rem rgba(153, 153, 153, 0.1);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0rem 36rem;
            box-sizing: border-box;

            .headerLeft {
                width: 121rem;
                height: 29rem;
                font-size: 30rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #333333;
                line-height: 37rem;

            }
        }

        .infoTitle {
            width: 129rem;
            height: 31rem;
            font-size: 32rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #333333;
            padding: 40rem 0rem 40rem 36rem;

        }

        .infoBox {
            .infoItem {
                display: flex;
                justify-content: space-between;
                padding: 34rem 34rem;
                align-items: center;
                font-size: 28rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;

                .itemLeft {

                }

                .itemCenter {
                    flex-grow: 1;
                    text-align: right;
                    /*width: 200rem;*/
                    /*float:right;*/
                    /*margin-left: 200rem;*/
                }
                .itempicker{
                    margin-left: 155rem;
                }
                .itemCenterinput{
                    flex-grow: 1;
                    text-align: right;
                    /*border: 1rem solid #DBDEE4;*/
                    height: 40rem;
                    width: 200rem;
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                    /*margin-left: 350rem;*/
                }

                .itemRight {
                    margin-left: 18rem;
                }
            }

            .infoItem:nth-child(5) {
                padding-bottom: 60rem;
                /*border-bottom: solid 15rem #F2F6FA;*/
            }

            .infoItem:nth-child(6) {
                padding-top: 60rem;
            }
        }

        .saveBtn {
            width: 670rem;
            height: 88rem;
            background: #00B4FC;
            border-radius: 10rem;
            font-size: 34rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #FFFFFF;
            text-align: center;
            line-height: 88rem;
            margin: 79rem auto 61rem auto;

        }
    }

}
</style>