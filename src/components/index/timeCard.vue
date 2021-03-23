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
            height: 60rem;
            width: 60rem;
            line-height: 60rem;
            font-size: 35rem;
            color: #000;
        }
        .date {
            width: 60rem;
            height: 20rem;
            background: rgba(128, 128, 128, 0.2 );
            line-height: 20rem;
            border-radius: 0 0 5rem 5rem;
        }
    }
</style>