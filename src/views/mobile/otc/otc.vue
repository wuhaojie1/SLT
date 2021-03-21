<template>
    <div class="topup">
        <div class="topup-content">
            <div class="topup-list">
                <div v-if="!noDataStstus">
                    <positionRecord
                        v-for="(item, index) in recordList"
                        :key="index"
                        class="topupRecord"
                        :recordItem="item">
                    </positionRecord>
                </div>
                <div class="noData" v-if="noDataStstus">
                    <div class="noData-content">
                        <img :src="noData" alt="">
                        <div class="text">
                            暂无数据
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import positionRecord from "@/components/position/Topup";

export default {
    name: "otc",
    components: {positionRecord},
    data() {
        return {
            noDataStstus: true,
            recordList: [
                {
                    title: "SLT",
                    time: "2021-02-28",
                    type: "小说",
                    number: "10",
                    // price: "200",
                },
                {
                    title: "SLT",
                    time: "2021-02-28",
                    type: "小说",
                    number: "10",
                    // price: "200",
                },
                {
                    title: "SLT",
                    time: "2021-02-28",
                    type: "小说",
                    number: "10",
                    // price: "200",
                },
                {
                    title: "SLT",
                    time: "2021-02-28",
                    type: "小说",
                    number: "10",
                    // price: "200",
                },
            ],
            noData: `${require('@/static/img/wallet/nodata.png')}`
        }
    },
    methods: {}
}
</script>

<style scoped lang="less">
.topup {
    width: 100%;

    .topup-content {
        width: 100%;
        margin-top: 50rem;

        .topup-list {
            width: 100%;

            .topupRecord {
                width: 680rem;
                margin: 40rem auto 0;
            }

            .noData {
                width: 100%;
                height: 80vh;
                .noData-content {
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;

                    img {
                        width: 130rem;
                        height: 130rem;
                    }

                    text {

                    }
                }
            }
        }
    }
}
</style>