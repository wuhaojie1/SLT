<template>
    <div class="timeCard">
        <div class="number">{{number}}</div>
        <div class="date">{{date}}</div>
    </div>
</template>

<script>
    export default {
        name: "timeCard",
        props:{
            date: {
                type: String,
                default: "DAY"
            },
            number: {
                type: String,
                default: "01"
            }
        }
    }
</script>

<style scoped lang="less">
    .timeCard {
        width: 65rem;
        height: 85rem;
        background: #fff;
        border-radius: 5rem;
        /*box-sizing: border-box;*/

        .number {
            height: 60rem;
            line-height: 60rem;
            font-size: 42rem;
            color: #000;
        }
        .date {
            height: 25rem;
            background: rgba(128, 128, 128, 0.2 );
            line-height: 25rem;
            border-radius: 0 0 5rem 5rem;
        }
    }
</style>