<template>
    <div class="themeStickyHeader">
        <div class="themeStickyHeader-wrap">
            <div class="left">
                <img :src="sltlogo" alt="">
            </div>
            <div class="right">
                <div class="right-text-list">
                    <div class="site-header-item">
                        <div class="text" @click="topage('index')">{{ $t('header.tabbar')[0] }}</div>
                    </div>
                    <div class="site-header-item">
                        <div class="text" @click="topage('whitPaper')">{{ $t('header.tabbar')[1] }}</div>
                    </div>
                    <div class="site-header-item" @click="topage('shoppingMall')">
                        <div class="text">{{ $t('header.tabbar')[2] }}</div>
                    </div>
                    <div class="site-header-item" @click="topage('position')">
                        <div class="text">{{ $t('header.tabbar')[3] }}</div>
                    </div>
                    <div class="site-header-item" @click="topage('buy')">
                        <div class="text">{{ $t('header.tabbar')[4] }}</div>
                    </div>
                    <!-- <div class="site-header-item">
                        <div class="text">帮助中心</div>
                    </div>
                    <div class="site-header-item">
                        <div class="text">关于我们</div>
                    </div> -->
                    <div class="site-header-item">
                        <img :src="userIcon" alt="" class="userIcon" v-if="islogin" @click="topage('userInfo')">
                        <!--                        <img :src="ring" alt="" class="ring">-->
                        <!--                        <img :src="service" alt="" class="service">-->
                        <div class="goin" v-else>
                            <div class="logintext" @click="topage('login')">{{ $t('header.loginText')[0] }}</div>
                            <div class="regiesttext" @click="topage('regiest')">{{ $t('header.loginText')[1] }}</div>
                        </div>
                    </div>
                    <!-- <div class="site-header-item" @click="selectLanguage()">
                        <div class="text">{{ $t('header.lenList')[0] }}</div>
                        <img :src="up" alt="" class="upImg">
                    </div>
                    <div class="language" v-show="languageShow">
                        <div class="language-wrap">
                            <div class="language-list">
                                <div class="language-item"
                                     v-for="item in languageList"
                                     :key="item.id"
                                     @click="chooseLangguageItem(item.text)">
                                    <div class="text">{{ item.text }}</div>
                                </div>
                            </div>
                        </div>
                    </div> -->
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
            islogin: '',
            languageList: [
                {
                    text: this.$t('header.lenList')[0],
                },
                {
                    text: this.$t('header.lenList')[1],
                }
            ],
            languageShow:false,
        }
    },
    mounted() {
        this.islogin = this.localStorage.get("isLogin");
    },
    methods: {
        topage(name) {
            this.$router.push({
                name: name
            })
        },
        selectLanguage() {
            this.languageShow = !this.languageShow;
        },
        chooseLangguageItem(item){
            console.log(item)
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
                position: relative;
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
                    position: relative;

                    .userIcon {
                        width: 17rem;
                        height: 20rem;
                    }

                    .goin {
                        width: 100rem;
                        height: 20rem;
                        display: flex;
                        justify-content: space-between;

                        .logintext {
                            font-size: 15rem;
                            line-height: 20rem;
                            color: #FFFFFF;
                        }

                        .regiesttext {
                            font-size: 12rem;
                            line-height: 20rem;
                            color: #DBDEE4;
                        }
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

                .language {
                    width: 130rem;
                    height: auto;
                    background: #FFF;
                    position: absolute;
                    right: 0;
                    top: 65rem;
                    color: #444444;
                    box-shadow: 0rem 0rem 5rem 0rem rgba(153, 153, 153, 0.35);
                    border-radius: 4rem;

                    .language-wrap {
                        .language-list {
                            .language-item {
                                width: 130rem;
                                height: 40rem;
                                line-height: 40rem;
                                text-align: center;
                                cursor: pointer;
                            }

                            .language-item:hover {
                                background: #F2F6FA;
                                color: #00B4FC;
                            }
                        }
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