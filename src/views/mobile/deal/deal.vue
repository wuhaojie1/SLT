<template>
    <div class="deal">
        <div class="deal-content">
            <div class="deal-list">
                <PositionRecord
                    v-for="(item, index) in recordList"
                    :key="index"
                    class="dealRecord"
                    :recordItem="item">
                </PositionRecord>
            </div>
        </div>
    </div>
</template>

<script>
import PositionRecord from "@/components/position/positionRecord";

export default {
    name: "deal",
    components: {PositionRecord},
    data() {
        return {
            recordList: [
                {
                    title: "晚熟的人",
                    time: "2021-02-28",
                    type: "小说",
                    number: "10",
                    price: "200",
                },
                {
                    title: "晚熟的人",
                    time: "2021-02-28",
                    type: "小说",
                    number: "10",
                    price: "200",
                },
                {
                    title: "晚熟的人",
                    time: "2021-02-28",
                    type: "小说",
                    number: "10",
                    price: "200",
                },
                {
                    title: "晚熟的人",
                    time: "2021-02-28",
                    type: "小说",
                    number: "10",
                    price: "200",
                },
            ]
        }
    },
    methods: {}
}
</script>

<style scoped lang="less">
.deal {
    width: 100%;

    .deal-content {
        width: 100%;
        margin-top: 50rem;

        .deal-list {
            width: 100%;

            .dealRecord {
                width: 680rem;
                margin: 40rem auto 0;
            }
        }
    }
}
</style>