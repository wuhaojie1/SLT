<template>
    <div class="userSet">
        <div class="userSet-wrap">
            <div class="userSet-title">
                {{$t('userSet.title')}}
            </div>
            <div class="userSet-list">
                <div class="userSet-item"
                     v-for="(item, index) in userSetList"
                     :key="index"
                     @click="change(index,item.name)"
                     :class="active===index ? 'active' : ''">
                    <div class="userSet-item-text">
                        {{item.text}}
                    </div>
                </div>
                <!--<div class="userSet-item">
                    身份认证
                </div>
                <div class="userSet-item">
                    收货地址
                </div>
                <div class="userSet-item">
                    个人资产
                </div>
                <div class="userSet-item">
                    知识产权
                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "userSet",
        data() {
            return {
                userSetList: [
                    {
                        text: this.$t('userSet.tabArray')[0],
                        name: "userInfo",
                    },
                    {
                        text: this.$t('userSet.tabArray')[1],
                        name: "userAuth",
                    },
                    {
                        text: this.$t('userSet.tabArray')[2],
                        name: "userAddress",
                    },
                    {
                        text: this.$t('userSet.tabArray')[3],
                        name: "personasset",
                    },
                    {
                        text: this.$t('userSet.tabArray')[4],
                        name: "treasurelog",
                    },
                ],
                active: 0,
            }
        },
        methods: {
            change(index, name) {
                this.active = index
                this.topage(name)
            },
            topage(name) {
                this.$router.push({
                    name: name,
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .userSet {
        width: 160rem;

        .userSet-wrap {
            width: 160rem;
            /*height: 950rem;*/
            background: #FFFFFF;
            border: 1rem solid #E4E7ED;

            .userSet-title {
                text-align: center;
                font-size: 20rem;
                font-weight: 400;
                color: #333333;
                padding: 20rem 0;
            }

            .userSet-list {
                text-align: left;
                position: relative;

                .userSet-item {
                    padding: 0 20rem;
                    box-sizing: border-box;
                    height: 50rem;
                    line-height: 50rem;
                    cursor: pointer;
                    position: relative;

                    .userSet-item-text {

                    }

                }

                .active {
                    background: #F2F6FA;
                    color: #00B4FC;

                    .userSet-item-text:before {
                        top: 17rem;
                        left: 0;
                        position: absolute;
                        content: " ";
                        width: 4rem;
                        height: 16rem;
                        background-color: #00B4FC;
                    }
                }

                /*.active:before {
                    top: 17rem;
                    left: 0;
                    position: absolute;
                    content: " ";
                    width: 4rem;
                    height: 16rem;
                    background-color: #00B4FC;
                }*/
            }
        }
    }
</style>