<template>
    <div class="timeCard">
        <div class="number" :style="numberStyle">{{number}}</div>
        <div class="date" :style="dateStyle">{{date}}</div>
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
            dateStyle: {
                type: Object,
                default: ()=>{}
            },
            number: {
                type: String,
                default: "01"
            },
            numberStyle: {
                type: Object,
                default: ()=>{

                }
            }
        }
    }
</script>

<style scoped lang="less">
    .timeCard {
        /*width: 60rem;*/
        /*height: 80rem;*/
        background: #fff;
        border-radius: 5rem;
        /*box-sizing: border-box;*/

        .number {
            height: 100rem;
            width: 100rem;
            line-height: 100rem;
            font-size: 42rem;
            color: #000;
        }
        .date {
            width: 100rem;
            height: 40rem;
            background: rgba(128, 128, 128, 0.2 );
            line-height: 40rem;
            border-radius: 0 0 5rem 5rem;
        }
    }
</style>