<template>
    <div class="position">
        <div class="position-content">
            <div class="position-list">
                <PositionRecord
                    v-for="(item, index) in recordList"
                    :key="index"
                    class="PositionRecord"
                    :recordItem="item">
                </PositionRecord>
            </div>
        </div>
    </div>
</template>

<script>
import PositionRecord from "@/components/position/positionRecord";

export default {
    name: "position",
    components: {PositionRecord},
    data() {
        return {
            recordList: [
                {
                    title: "position",
                    time: "2021-02-28",
                    type: "XX",
                    number: "10",
                    price: "200",
                },
                {
                    title: "position",
                    time: "2021-02-28",
                    type: "XX",
                    number: "10",
                    price: "200",
                },
                {
                    title: "position",
                    time: "2021-02-28",
                    type: "XX",
                    number: "10",
                    price: "200",
                },
                {
                    title: "position",
                    time: "2021-02-28",
                    type: "XX",
                    number: "10",
                    price: "200",
                },
            ]
        }
    },
    methods: {

    }
}
</script>

<style scoped lang="less">
.position {
    width: 100%;

    .position-content {
        width: 100%;
        margin-top: 50rem;

        .position-list {
            width: 100%;

            .PositionRecord {
                width: 680rem;
                margin: 40rem auto 0;
            }
        }
    }
}
</style>
