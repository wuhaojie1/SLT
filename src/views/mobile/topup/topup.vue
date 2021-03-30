<template>
    <div class="topup">
        <div class="topup-content">
            <div class="topup-list">
                <positionRecord
                    v-for="(item, index) in recordList"
                    :key="index"
                    class="topupRecord"
                    :recordItem="item">
                </positionRecord>
            </div>
        </div>
    </div>
</template>

<script>
import positionRecord from "@/components/position/Topup";

export default {
    name: "topup",
    components: {positionRecord},
    data() {
        return {
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
            ]
        }
    },
    methods: {
        
    }
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
        }
    }
}
</style>