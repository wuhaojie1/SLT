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
                        <el-upload  action="123"
                                    :on-change="uploadFaceFile"
                                    accept="image/jpeg,image/png,image/jpg">
                            <img style="width: 314rem;height: 219rem;" src="../../../static/img/user/card1.png" alt="">
                        </el-upload>
                        <div class="cardText">{{$t('identifi.uploadface')}}</div>
                    </div>
                    <div class="cardRight">
                        <el-upload :on-success="handleAvatarSuccess"
                                   :before-upload="beforeUpload"
                                   action="123"
                                   :on-change="uploadBackFile"
                                   accept="image/jpeg,image/png,image/jpg">
                            <img style="width: 314rem;height: 219rem;" src="../../../static/img/user/card2.png" alt="">
                        </el-upload>
                        <div class="cardText">{{$t('identifi.uploadback')}}</div>
                    </div>
                </div>
            </div>

            <div class="saveBtn">{{$t('identifi.auth')}}</div>
        </div>


        <BottomBar></BottomBar>
    </div>
</template>

<script>
import PageHeader from '../../../components/mobileComponents/comm/header.vue';
import BottomBar from '../../../components/mobileComponents/user/bottomBar.vue';
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
            face:false,
            back:false,
            idcard:'',
            realName: '',
            isErrorNum: true,
        }
    },

    methods:{
        uploadFaceFile(file){
            // let fileName = file.name;
            this.faceURL = URL.createObjectURL(file.raw)  // 获取URL
            this.face=true
        },
        uploadBackFile(file){
            // let fileName = file.name;
            this.backURL = URL.createObjectURL(file.raw)  // 获取URL
            this.back=true
        },

        userAuth(){
            let lang =  this.localStorage.get('langMsg');
            let PostData = this.getPostData();
            this.axios({
                url:'wx/user/auth',
                method:'post',
                params:PostData
            }).then(res=>{
                if (res.errno === 762){
                    if (lang.data.name === 'zh-CN'){
                        this.$t('identifi').goidenrifi = '请等待审核';
                    } else{
                        this.$t('identifi').goidenrifi = res.errmsg;
                    }
                }else {
                    this.$notify({
                        type:'error',
                        message: '申请认证失败'
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
                    message: '真实姓名不能为空'
                });
                return;
            }
            if (!this.idcard) {
                this.$notify({
                    type:'warning',
                    message: '身份证账号不能为空'
                });
                return;
            }
            if (!this.backURL) {
                this.$notify({
                    type:'warning',
                    message: '请上传身份证背面图片'
                });
                return;
            }
            if (!this.faceURL) {
                this.$notify({
                    type:'warning',
                    message: '请上传身份证正面图片'
                });
                return;
            }

            let PostData = {
                realName:this.realName,
                idcard:this.idcard,
                back:this.backURL,
                forword:this.faceURL
            }
            return PostData
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
