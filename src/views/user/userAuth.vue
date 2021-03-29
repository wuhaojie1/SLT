<template>
    <div id="userauth">
        <div class="optype">{{$t('identifi.identifitext')}}</div>
        <div class="auth-content">
            <div class="name-con">
                <div class="name-text">{{$t('identifi.truename')}}:</div>
                <input type="text" v-model="realName" :placeholder="$t('identifi.addname')" class="name-input" aria-required="true">
            </div>
            <div class="num-con">
                <div class="num-text">{{$t('identifi.idnum')}}:</div>
                <input type="text" max="18" v-model="idcard" :placeholder="$t('identifi.addidnum')" class="num-input" required>
            </div>
            <div class="face-text">{{$t('identifi.uploadface')}}</div>
            <div class="foce-con">
                <el-upload  :action="`${uploadUrl}/wx/storage/upload`"
                            :on-success="handleFaceSuccess"
                            accept="image/jpeg,image/png,image/jpg">
                    <img style="width: 314rem;height: 219rem;" :src="face?faceURL:faceimg" alt="">
                </el-upload>
            </div>
            <div class="back-text">{{$t('identifi.uploadback')}}</div>
            <div class="back-con">
                <el-upload :on-success="handleBackSuccess"
                           :before-upload="beforeUpload"
                           :action="`${uploadUrl}/wx/storage/upload`"
                           accept="image/jpeg,image/png,image/jpg">
                    <img style="width: 314rem;height: 219rem;" :src="back?backURL:backimg" alt="">
                </el-upload>
            </div>

            <div class="auth-button-con">
                <div class="auth-button" @click="userAuth">{{applyButton[applyStatus]}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import api from "../../static/js/api"
    export default {
        name: "userAuth",
        data(){
            return{
                faceURL:'',
                backURL:'',
                face:false,
                back:false,
                faceimg:`${require('../../static/img/user/idcardup.png')}`,
                backimg:`${require('../../static/img/user/idcarddown.png')}`,
                realName:'',
                idcard:'',
                uploadUrl: api.commApi,
                applyStatus: 'NORMAL',
                applyButton:{
                    NORMAL: '认证',
                    INIT: '请等待审核',
                    PASS: '认证通过',
                    REFUSE: '认证',
                }
            }
        },
        mounted() {
         this.getUserAuth();
        },
        methods:{
            // uploadFaceFile(file){
            //     // let fileName = file.name;
            //     this.faceURL = URL.createObjectURL(file.raw)  // 获取URL
            //     this.face=true
            //     // console.log(file)
            //     // console.log(this.posterURL)
            // },
            // uploadBackFile(file){
            //     // let fileName = file.name;
            //     this.backURL = URL.createObjectURL(file.raw)  // 获取URL
            //     this.back=true
            //     // console.log(file)
            //     // console.log(this.posterURL)
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
                    return false;
                }
                if (!this.idcard) {
                    this.$notify({
                        type:'warning',
                        message: '身份证账号不能为空'
                    });
                    return false;
                }
                if (!this.backURL) {
                    this.$notify({
                        type:'warning',
                        message: '请上传身份证背面图片'
                    });
                    return false;
                }
                if (!this.faceURL) {
                    this.$notify({
                        type:'warning',
                        message: '请上传身份证正面图片'
                    });
                    return false;
                }

                if (this.applyStatus==='INIT'||this.applyStatus==='PASS'){
                    console.log(1)
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
                                    message: '认证失败，请修改后重新认证'
                                });
                        }
                    }
                })

            }
        }
    }
</script>

<style scoped lang="less">
#userauth{
    .optype{
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
    .auth-content{
        width: 433rem;
        height: auto;
        margin: 0 auto;
        .name-con{
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding-bottom: 15rem;
            .name-text{
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                line-height: 38rem;
            }
            .name-input{
                width: 350rem;
                height: 38rem;
                background: #FFFFFF;
                border: 1rem solid #E4E7ED;
                border-radius: 2rem;
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                text-indent: 10rem;
            }
        }
        .num-con{
            width: 100%;
            display: flex;
            justify-content: space-between;
            .num-text{
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                line-height: 38rem;
            }
            .num-input{
                width: 350rem;
                height: 38rem;
                background: #FFFFFF;
                border: 1rem solid #E4E7ED;
                border-radius: 2rem;
                font-size: 14rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                text-indent: 10rem;
            }
        }
        .face-text{
            font-size: 14rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #9AA5B5;
            width: 100%;
            text-align: left;
            margin-top: 26rem;
        }
        .foce-con{
            width: 314rem;
            height: 219rem;
            /*background: #000;*/
            margin-top: 24rem;
            margin-left: 88rem;
        }
        .back-text{
            font-size: 14rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #9AA5B5;
            width: 100%;
            text-align: left;
            margin-top: 26rem;
        }
        .back-con{
            width: 314rem;
            height: 219rem;
            /*background: #000;*/
            margin-top: 24rem;
            margin-left: 88rem;
        }
        .auth-button-con{
            width: 100%;
            margin-left: 95rem;
            margin-top: 60rem;
            margin-bottom: 107rem;
            .auth-button{
                width: 300rem;
                height: 46rem;
                background: #00B4FC;
                border-radius: 4px;
                color: #FFFFFF;
                text-align: center;
                line-height: 46rem;
            }
        }
    }
}
</style>
