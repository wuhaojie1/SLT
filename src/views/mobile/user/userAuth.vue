<template>
    <div class="user">
        <PageHeader></PageHeader>
        <div class="userBox">
            <div class="userHeader">
                <span class="headerLeft">{{$t('identifi.identifitext')}}</span>
                <img style="width:24rem;height:14rem;" src="../../../static/img/user/arrowdown.png" alt="">
            </div>
            <div class="infoTitle">{{$t('identifi.trueInfo')}}</div>
            <ul class="infoBox">
                <div  class="infoItem">
                    <div class="itemLeft">{{this.$t('identifi.truename')}}</div>
                    <input v-model="realName" class="itemCenter" type="text" :placeholder="$t('identifi.addname')">
                    <!--<img v-if="item.isArrow" class="itemRight" style="width:12rem;height:20rem;" :src="require('../../../static/img/user/arrowgrey.png')" alt="">-->
                </div>
                <div  class="infoItem">
                    <div class="itemLeft">{{this.$t('identifi.idnum')}}</div>
                    <input v-model="idcard" class="itemCenter" type="text" :placeholder="$t('identifi.addidnum')">
                    <!--<img v-if="item.isArrow" class="itemRight" style="width:12rem;height:20rem;" :src="require('../../../static/img/user/arrowgrey.png')" alt="">-->
                    <div v-if="isErrorNum" class="red">{{$t('identifi.inputTrueName')}}</div>
                </div>
            </ul>

            <div class="upload">
                <div class="upTitle">{{$t('identifi.uploadCard')}}</div>
                <div class="card">
                    <div class="cardLeft">
                        <el-upload  :action="`${uploadUrl}/wx/storage/upload`"
                                    :on-change="uploadFaceFile"
                                    :on-success="handleFaceSuccess"
                                    accept="image/jpeg,image/png,image/jpg">
                            <img style="width: 314rem;height: 219rem;" :src="face?faceURL:faceimg" alt="">
                        </el-upload>
                        <div class="cardText">{{$t('identifi.uploadface')}}</div>
                    </div>
                    <div class="cardRight">
                        <el-upload :on-success="handleBackSuccess"
                                   :before-upload="beforeUpload"
                                   :action="`${uploadUrl}/wx/storage/upload`"
                                   :on-change="uploadBackFile"
                                   accept="image/jpeg,image/png,image/jpg">
                            <img style="width: 314rem;height: 219rem;" :src="back?backURL:backimg" alt="">
                        </el-upload>
                        <div class="cardText">{{$t('identifi.uploadback')}}</div>
                    </div>
                </div>
            </div>

            <div class="saveBtn"  @click="userAuth">{{applyButton[applyStatus]}}</div>
        </div>


        <BottomBar></BottomBar>
    </div>
</template>

<script>
import PageHeader from '../../../components/mobileComponents/comm/header.vue';
import BottomBar from '../../../components/mobileComponents/user/bottomBar.vue';
import api from  '../../../static/js/api.js';
export default {
    components:{
        PageHeader,
        BottomBar
    },
    data(){
        return{
            // list:[
            //     {text:this.$t('identifi.truename'),val:'realName',isArrow:false,place:this.$t('identifi.addname')},
            //     {text:this.$t('identifi.idnum'),val:'idcard',isArrow:false,place:this.$t('identifi.addidnum')},
            // ],
            checked:false,
            faceURL:'',
            backURL:'',
            faceimg:`${require('../../../static/img/user/idcardup.png')}`,
            backimg:`${require('../../../static/img/user/idcarddown.png')}`,
            face:false,
            back:false,
            idcard:'',
            realName: '',
            isErrorNum: false,
            uploadUrl: api.commApi,
            applyStatus: 'NORMAL',
            applyButton:{
                NORMAL: this.$t('identifi.auth'),
                INIT: this.$t('identifi.wait'),
                PASS: this.$t('identifi.finish'),
                REFUSE: this.$t('identifi.fail'),
            }
        }
    },
    created(){
        this.getUserAuth();
    },

    methods:{
        // uploadFaceFile(file){
        //     // let fileName = file.name;
        //     this.faceURL = URL.createObjectURL(file.raw)  // 获取URL
        //     this.back=true
        // },
        // uploadBackFile(file){
        //     // let fileName = file.name;
        //     this.backURL = URL.createObjectURL(file.raw)  // 获取URL
        //     this.back=true
        // },
        handleFaceSuccess(res){
            this.faceURL = res.data.url;
            this.back=true;
        },
        handleBackSuccess(res){
            this.backURL = res.data.url;
            this.back=true;
        },

        userAuth(){
            let PostData = this.getPostData();
            if (!PostData){
                return;
            }
            this.axios({
                url:'wx/user/auth',
                method:'post',
                params:PostData
            }).then(res=>{
                if (res.errno === 0){
                    this.applyStatus="INIT";
                }else {
                    this.$notify({
                        type:'error',
                        message: this.$t('identifi.failed')
                    });
                }
            }).catch(err=>{
                console.log(err)
            })
        },
        getPostData(){
            if (!this.realName) {
                this.$notify({
                    type:'warning',
                    message: this.$t('identifi.havename')
                });
                return false;
            }
            if (!this.idcard) {
                this.$notify({
                    type:'warning',
                    message: this.$t('identifi.havenum')
                });
                return false;
            }
            if (!this.backURL) {
                this.$notify({
                    type:'warning',
                    message: this.$t('identifi.upback')
                });
                return false;
            }
            if (!this.faceURL) {
                this.$notify({
                    type:'warning',
                    message: this.$t('identifi.upface')
                });
                return false;
            }

            if (this.applyStatus==='INIT'||this.applyStatus==='PASS'){
                return false;
            }
            let PostData = {
                realName:this.realName,
                idcard:this.idcard,
                back:this.backURL,
                forword:this.faceURL
            }
            return PostData
        },
        // beforeUpload(file){
        //     console.log(file)
        // },

        getUserAuth(){
            this.axios({
                url:'/wx/user/authIndex',
                method: 'get',
            }).then((res)=>{
                if (res.errno === 0){
                    const authInfo = JSON.parse(res.data.authInfo);
                    this.face=true;
                    this.back=true;
                    this.realName = authInfo.realName;
                    this.idcard = authInfo.idcard;
                    this.backURL = authInfo.back;
                    this.faceURL = authInfo.forword;
                    this.applyStatus = res.data.applyStatus;
                    if (res.data.applyStatus === 'REFUSE') {
                        this.$notify({
                            type:'error',
                            message: this.$t('identifi.reauth')
                        });
                    }
                }
            })

        }
    }
}
</script>

<style lang='less' scoped>
.user{
    text-align: left;
    .userBox{
        height: calc(100vh - 88rem - 176rem);
        .userHeader{
            width: 750rem;
            height: 88rem;
            background: #FFFFFF;
            box-shadow: 0rem 5rem 10rem 0rem rgba(153, 153, 153, 0.1);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0rem 36rem;
            box-sizing: border-box;

            .headerLeft{
                width: 121rem;
                height: 29rem;
                font-size: 30rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #333333;
                line-height: 37rem;

            }
        }
        .infoTitle{
            width: 129rem;
            height: 31rem;
            font-size: 32rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #333333;
            padding: 40rem 0rem 40rem 36rem;

        }
        .infoBox{
            padding: 0rem 34rem;
            .infoItem{
                display: flex;
                justify-content: space-between;
                padding: 34rem 0rem;
                align-items: center;
                font-size: 28rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                border-bottom: solid 2rem #F5F6F7;
                position: relative;
                .itemLeft{
                    margin-right: 5rem;
                }
                .itemCenter{
                    flex-grow: 1;
                    text-align: right;
                }
                input::-webkit-input-placeholder {
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #9AA5B5;

                }

                input::-moz-placeholder {
                    /* Mozilla Firefox 19+ */
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #9AA5B5;
                }

                input:-moz-placeholder {
                    /* Mozilla Firefox 4 to 18 */
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #9AA5B5;
                }

                input:-ms-input-placeholder {
                    /* Internet Explorer 10-11 */
                    font-size: 28rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #9AA5B5;
                }
                .itemRight{
                    margin-left: 18rem;
                }
                .red{
                    position: absolute;
                    right: 0;
                    bottom: -10rem;
                    font-size: 22rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #FE6453;

                }
                &:last-child{
                    border-bottom: none;
                }
            }
        }
        .saveBtn{
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
            margin: 96rem auto 61rem auto;

        }
        .upload{
            padding: 60rem 36rem 0rem 36rem;
            .upTitle{
                font-size: 30rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;

            }
            .card{
                padding-top: 54rem;
                display: flex;
                justify-content: space-between;
                .cardLeft,.cardRight{
                    text-align: center;
                    img{
                        border: dashed 1rem #888888;
                        margin-bottom: 21rem;

                    }

                }
            }
        }
    }

}
</style>
