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
                <el-upload  action="123"
                            :on-change="uploadFaceFile"
                            accept="image/jpeg,image/png,image/jpg">
                    <img style="width: 314rem;height: 219rem;" :src="face?faceURL:faceimg" alt="">
                </el-upload>
            </div>
            <div class="back-text">{{$t('identifi.uploadback')}}</div>
            <div class="back-con">
                <el-upload :on-success="handleAvatarSuccess"
                           :before-upload="beforeUpload"
                           action="123"
                           :on-change="uploadBackFile"
                           accept="image/jpeg,image/png,image/jpg">
                    <img style="width: 314rem;height: 219rem;" :src="back?backURL:backimg" alt="">
                </el-upload>
            </div>

            <div class="auth-button-con">
                <div class="auth-button" @click="userAuth">{{$t('identifi.goidenrifi')}}</div>
            </div>
        </div>
    </div>
</template>

<script>
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
                idcard:''
            }
        },
        mounted() {
         this.getUserAuth();
        },
        methods:{
            uploadFaceFile(file){
                // let fileName = file.name;
                this.faceURL = URL.createObjectURL(file.raw)  // 获取URL
                this.face=true
                // console.log(file)
                // console.log(this.posterURL)
            },
            uploadBackFile(file){
                // let fileName = file.name;
                this.backURL = URL.createObjectURL(file.raw)  // 获取URL
                this.back=true
                // console.log(file)
                // console.log(this.posterURL)
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
            },
            // beforeUpload(file){
            //     console.log(file)
            // },

            getUserAuth(){
                this.axios({
                    url:'/wx/user/authIndex',
                    method: 'get',
                }).then((res)=>{
                    if (res.errorCode === 0){
                        console.log(res)
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
