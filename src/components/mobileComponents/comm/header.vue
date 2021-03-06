<template>
    <div class="pageHeader">
        <img style="width:80rem;height:42rem;" src="../../../static/img/index/Technology.png" alt="">
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
                src:require('../../../static/img/index/userIcon.png'),
                wdith:'27rem',
                height:'20rem'
            }
        }
    }
}
</script>

<style lang='less' scoped>
.pageHeader{
    height: 88rem;
    background-color: #02031e;
    padding: 0rem 35rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user{
        width: 38rem;
        height: 42rem;
    }
    .list{
        width: 27rem;
        height: 20rem;
    }
}
</style>