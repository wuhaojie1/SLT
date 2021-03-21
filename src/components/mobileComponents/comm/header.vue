<template>
    <div class="pageHeader">
        <div v-if="isHome==true" @click="backHandel" class="back">
            <img  style="width:17rem;height:28rem" src="../../../static/img/index/back.png" alt="">
        </div>
        <div class="logo" :style="'margin-left:'+(isHome?0:35)+'rem'">
            <img style="width:80rem;height:42rem;" src="../../../static/img/index/Technology.png" alt="">
        </div>
        <img v-if="isShowRight" :class="[(rightIcon==true)?'user':'list']" :src="((rightIcon==true)?user.src:list.src)" alt="">
    </div>
</template>

<script>
export default {
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
            }
        }
    },
    methods:{
        //回退
        backHandel(){
            console.log('回退');
            this.$router.go(-1);
        }
    }
}
</script>

<style lang='less' scoped>
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
}
</style>