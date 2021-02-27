<template>
    <div class="themeStickyHeader">
        <div class="themeStickyHeader-wrap">
            <div class="left">
                <img :src="sltlogo" alt="">
            </div>
            <div class="right">
                <div class="right-text-list">
                    <div class="site-header-item">
                        <div class="text">INTRO</div>
                    </div>
                    <div class="site-header-item">
                        <div class="text">ABOUT</div>
                    </div>
                    <div class="site-header-item">
                        <div class="text">SLT BENEFITS</div>
                    </div>
                    <div class="site-header-item">
                        <div class="text">ICO FACTS</div>
                    </div>
                    <div class="site-header-item">
                        <div class="text">TEAM</div>
                    </div>
                    <div class="site-header-item">
                        <div class="text">ROADMAP</div>
                    </div>
                    <div class="site-header-item" @click="topage('userInfo')">
                        <img :src="userIcon" alt="" class="userIcon">
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
            }
        },
        methods:{
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
        background-color: rgba(1,1,25,0.9);
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
                    justify-content: space-between;
                    width: 570rem;

                    .site-header-item {
                        color: #ffffff;
                        transition: all 0.3s;
                        line-height: 75rem;
                        font-size: 15rem;
                        display: flex;
                        align-items: center;

                        .userIcon {
                            width: 18rem;
                            height: 20rem;
                        }
                    }

                    .site-header-item:hover {
                        color: #00b4fc;
                        cursor: pointer;
                    }
                }

            }
        }
    }
</style>