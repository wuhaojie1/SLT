<template>
    <div class="memberCard">
        <div class="memberCard-item">
            <img :src="img" alt="" class="img">
            <div class="name">{{name}}</div>
            <div class="position">{{position}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "memberCard",
        props:{
            name: {
                type: String,
                default: ""
            },
            position: {
                type: String,
                default: ""
            },
            img: {
                type: String,
                default: ""
            },

        },
        data() {
            return {
                // img: `${require('../../static/img/index/baesh-400x400.png')}`,
            }
        },

    }
</script>

<style scoped lang="less">
    .memberCard {
        width: 285rem;
        height: auto;
        padding: 0 15rem;
        box-sizing: border-box;

        .memberCard-item {
            box-sizing: border-box;
            width: 285rem;
            /*height: 326rem;*/
            padding: 30rem;
            .img {
                filter: grayscale(100%);
                border-radius: 50%;
                margin-bottom: 25rem;
                width: 195rem;
                height: 195rem;
                background: #00B4FC;
            }

            .name {
                line-height: 23rem;
                font-weight: 400;
                font-style: normal;
                font-size: 23rem;
                margin-bottom: 7rem;
                color: #fff;
            }

            .position {
                margin-top: 5rem;
                opacity: 0.7;
                color: #fff;
            }
        }
    }
</style>