<template>
    <div class="classify">
        <div class="classify-wrap">
            <div class="classify-title">
                <div class="text">{{$t('shop.classify')}}</div>
            </div>
            <div class="classify-filter">
                <div class="classify-filter-title">
                    <div class="text">{{$t('shop.classifyTip')}}</div>
                </div>
                <div class="classify-filter-list">
                    <div class="classify-filter-item"
                         v-for="(item, index) in filterList"
                         :key="index"
                         :class="selected === index ? 'active' : '' "
                         @click="addItem(index,item)">
                        <div class="content">
                            <div class="text">{{ item.name }}</div>
<!--                            <div class="icon">
                                <img :src="minus" alt="" class="minus" v-if="itemIndexes.includes(index)">
                                <img :src="plus" alt="" class="plus" v-if="!itemIndexes.includes(index)">
                            </div>-->
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "classify",
    data() {
        return {
            // filterList: [
            //     {
            //         name: '北特里'
            //     },
            //     {
            //         name: '小说'
            //     },
            //     {
            //         name: '诗/散文'
            //     },
            //     {
            //         name: '经济/经营'
            //     },
            //     {
            //         name: '自我启发'
            //     },
            //     {
            //         name: '政治/社会'
            //     },
            //     {
            //         name: '技术/工程'
            //     },
            //     {
            //         name: '计算机/IT'
            //     },
            //     {
            //         name: '参考书'
            //     },
            //     {
            //         name: '哲学'
            //     },
            //     {
            //         name: '科学'
            //     },
            // ],
            selected: 0,
            itemIndexes: [],
            items:[],
            minus: `${require('@/static/img/shoppingMall/minus.png')}`,
            plus: `${require('@/static/img/shoppingMall/plus.png')}`,
            filterList1:['books','tools','foods']
        }
    },
    props:{
        filterList:{
            type: Array,
            default: ()=>[]
        }
    },
    methods: {
        addItem(itemIndex,item) {
            this.selected = itemIndex;
            this.$emit('navSelected',{
                itemIndex,
                item: item
            })
            // if (this.itemIndexes.includes(itemIndex)) {
            //     let index = this.itemIndexes.indexOf(itemIndex)
            //     this.itemIndexes.splice(index, 1)
            // } else {
            //     this.itemIndexes.push(itemIndex)
            // }

        }
    }
}
</script>

<style scoped lang="less">
.classify {
    width: 314rem;
    height: auto;

    .classify-wrap {
        text-align: left;
        width: 100%;

        .classify-title {
            padding-bottom: 34rem;
            border-bottom: 1rem solid #E4E7ED;

            .text {
                font-size: 38rem;
                font-weight: 400;
                color: #444444;
            }

        }

        .classify-filter {
            width: 100%;

            .classify-filter-title {
                padding-top: 30rem;

                .text {
                    font-size: 20rem;
                    font-weight: 400;
                    color: #444444;
                }
            }

            .classify-filter-list {
                margin-top: 40rem;
                margin-bottom: 40rem;
                width: 100%;

                .classify-filter-item {
                    padding: 0 15rem;
                    box-sizing: border-box;
                    width: 100%;
                    cursor: pointer;

                    .content {
                        height: 44rem;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;


                        .text {

                        }

                        .icon {
                            display: flex;
                            align-items: center;

                            .minus {
                                width: 9rem;
                                height: 1rem;
                            }

                            .plus {
                                width: 9rem;
                                height: 9rem;
                            }
                        }
                    }
                }

                .active {
                    background: #FFFFFF;
                }
            }

        }
    }
}
</style>