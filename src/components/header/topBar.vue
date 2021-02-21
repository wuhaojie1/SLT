<template>
    <div class="topBar">
        <div class="topBar-wrap">
            <div class="left">
                <div class="item">
                    <svg t="1613801802206" class="icon phone"
                         viewBox="0 0 1024 1024"
                         version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3839" width="200" height="200"><path d="M626.24 773.632l37.888-71.168a64 64 0 0 1 72-32l174.72 43.52a64 64 0 0 1 48.512 62.08v71.936H960V960C465.152 960 64 558.848 64 64h112v0.256h70.4a64 64 0 0 1 62.08 48.512l43.52 174.72A64 64 0 0 1 320 359.488L249.92 396.8a787.136 787.136 0 0 0 376.32 376.832z"
                                                                                                                     fill="#262626" p-id="3840"></path></svg>
                    <div class="text">Call us  +82-70-8285-2698</div>
                </div>
                <div class="item">
                    <svg t="1613802092077"
                         class="icon phone" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3969" width="200" height="200"><path d="M513.92 537.216L99.968 278.592v96.96L513.92 637.44v-0.32l412.48-265.664V277.12L513.92 537.216zM0 128h1024v768H0V128z" fill="#262626" p-id="3970"></path></svg>
                    <div class="text">sltglobalcoin@gmail.com</div>
                </div>
            </div>
            <div class="right">
                <div class="item">
                    <svg t="1613802467241"
                         class="icon phone" viewBox="0 0 1024 1024"
                         version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4099" width="200" height="200"><path d="M512 1024c-205.76-241.472-326.272-411.712-361.664-510.72a384 384 0 1 1 723.072 0.832C837.76 612.928 717.312 782.848 512 1024.064z m0-512a128 128 0 1 0 0-256 128 128 0 0 0 0 256z" fill="#262626" p-id="4100"></path></svg>
                    <div class="text">SB-225, Gangnamparagon, 338, Hakdong-ro, Gangnam-gu, Seoul, South Korea</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "topBar",
        data(){
            return {

            }
        }
    }
</script>

<style scoped lang="less">
    .topBar {
        height: 48rem;
        width: 100%;
        background-color: #1622a7;

        .topBar-wrap {
            width: 1140rem;
            height: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;

            .left, .right {
                height: 100%;
                display: flex;
                align-items: center;
                /*font-weight: 900;*/
                color: #eee;
                /*line-height: 1.3em;*/
                /*float: left;*/
                font-size: 13rem;

                .item {
                    height: 100%;
                    display: flex;
                    align-items: center;
                    margin-left: 25rem;

                    .phone {
                        width: 13rem;
                        height: 13rem;
                    }

                    .text {
                        margin-left: 5rem;
                    }
                }

                .item:first-child {
                    margin-left: 0;
                }


            }
        }
    }
</style>