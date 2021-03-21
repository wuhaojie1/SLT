<template>
    <div class="pageHeader">
        <div v-if="isHome==false" @click="backHandel" class="back">
            <img  style="width:17rem;height:28rem" src="../../../static/img/index/back.png" alt="">
        </div>
        <div class="logo" :style="'margin-left:'+(isHome?0:35)+'rem'">
            <img style="width:80rem;height:42rem;" src="../../../static/img/index/Technology.png" alt="">
        </div>
        <div v-if="isShowRight" class="dropmenu">
            <el-dropdown trigger="click" @command="clickItem">
                <img  :class="[(rightIcon==true)?'user':'list']" :src="((rightIcon==true)?user.src:list.src)" alt="">
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :command="item" v-for="item in itemList" @click="clickItem(item)"  :key="item.code">{{item.text}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    name: "pageHeader",
    props:{
        //是否显示右侧图标
        isShowRight:{
            type:Boolean,
            default:false
        },
        //true为人头，false为列表
        rightIcon:{
            type:Boolean,
            dafault:false
        },
        //是否为首页
        isHome:{
            type:Boolean,
            default:false
        },
        clickCallback:{
            type:Function,
            default:()=>()=>{}
        }
    },
    data(){
        return{
            user:{
                src:require('../../../static/img/index/userIcon.png'),
                wdith:'38rem',
                height:'42rem'
            },
            list:{
                src:require('../../../static/img/shop/list.png'),
                wdith:'27rem',
                height:'20rem'
            },
            itemList:[
                {code:0,text:this.$t('dropmenu.home')},
                {code:1,text:this.$t('dropmenu.mall')},
                {code:2,text:this.$t('dropmenu.otc')},
                {code:3,text:this.$t('dropmenu.pos')},
                {code:4,text:this.$t('dropmenu.userCenter')},
            ]
        }
    },
    methods:{
        //回退
        backHandel(){
            this.$router.go(-1);
        },
        //点击回调
        clickItem(e){
            this.$emit('clickCallback',e)
        }
    }
}
</script>

<style lang='less'>
.pageHeader{
    height: 88rem;
    background-color: #02031e;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user{
        width: 38rem;
        height: 42rem;
        margin: 35rem;
    }
    .list{
        width: 27rem;
        height: 20rem;
        margin: 35rem;
    }
    .back{
        height: 100%;
        width: 70rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .logo{
        flex-grow: 1;
        text-align: left;

    }
    .dropdown{

    }
}

/deep/.el-dropdown-menu{
    color: #02031e;
    background-color: #02031e !important;
}

.popper__arrow::after{
    // background-color: red;
}
</style>