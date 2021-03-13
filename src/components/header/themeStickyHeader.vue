<template>
    <div class="themeStickyHeader">
        <div class="themeStickyHeader-wrap">
            <div class="left">
                <img :src="sltlogo" alt="">
            </div>
            <div class="right">
                <div class="right-text-list">
                    <div class="site-header-item">
                        <div class="text" @click="topage('index')">首页</div>
                    </div>
                    <div class="site-header-item">
                        <div class="text" @click="topage('whitPaper')">白皮书</div>
                    </div>
                    <div class="site-header-item" @click="topage('shoppingMall')">
                        <div class="text">商场</div>
                    </div>
                    <div class="site-header-item" @click="topage('position')">
                        <div class="text">位置买卖</div>
                    </div>
                    <div class="site-header-item">
                        <div class="text">帮助中心</div>
                    </div>
                    <div class="site-header-item">
                        <div class="text">关于我们</div>
                    </div>
                    <div class="site-header-item" @click="topage('userInfo')">
                        <img :src="userIcon" alt="" class="userIcon">
                        <img :src="ring" alt="" class="ring">
                        <img :src="service" alt="" class="service">
                    </div>
                    <div class="site-header-item">
                        <div class="text">简体中文</div>
                        <img :src="up" alt="" class="upImg">
                    </div>
                </div>
                <div class="right-icon-list">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "themeStickyHeader",
    data() {
        return {
            sltlogo: `${require('../../static/img/index/sltlogo_60x120_white.png')}`,
            userIcon: `${require('../../static/img/index/userIcon.png')}`,
            ring: `${require('../../static/img/index/ring.png')}`,
            service: `${require('../../static/img/index/service.png')}`,
            up: `${require('../../static/img/index/up.png')}`,
        }
    },
    methods: {
        topage(name) {
            this.$router.push({
                name: name
            })
        }
    }
}
</script>

<style scoped lang="less">
.themeStickyHeader {
    width: 100%;
    height: 75rem;
    background-color: rgba(2, 3, 30, 1);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;

    .themeStickyHeader-wrap {
        height: 100%;
        width: 1170rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {

            img {
                width: 90rem;
                height: 45rem;
            }
        }

        .right {

            .right-text-list {
                display: flex;
                align-items: center;
                /*justify-content: space-between;*/
                /*width: 570rem;*/

                .site-header-item {
                    color: #ffffff;
                    transition: all 0.3s;
                    line-height: 75rem;
                    font-size: 15rem;
                    display: flex;
                    align-items: center;
                    margin-left: 35rem;

                    .userIcon {
                        width: 17rem;
                        height: 20rem;
                    }

                    .ring {
                        width: 17rem;
                        height: 20rem;
                        margin-left: 25rem;
                    }

                    .service {
                        margin-left: 25rem;
                        width: 20rem;
                        height: 20rem;
                    }

                    .upImg {
                        width: 18rem;
                        height: 10rem;
                        margin-left: 9rem;
                    }
                }

                .site-header-item:first-child {
                    margin-left: 0;
                }

                .site-header-item:hover {
                    color: #00B9FE;
                    cursor: pointer;
                }
            }

        }
    }
}
</style>