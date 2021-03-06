<template>
    <div class="login">
        <div class="header">
            <img :src="sltlogo" alt="" class="sltlogo">
            <!--            <img :src="userIcon" alt="" class="userIcon">-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                sltlogo: `${require('@/static/img/index/sltlogo_60x120_white.png')}`,
                // userIcon: `${require('@/static/img/index/userIcon.png')}`,
            }
        },
        methods: {}
    }
</script>

<style scoped lang="less">
    .login {
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;

        .header {
            width: 750rem;
            height: 88rem;
            background: #02031E;
            display: flex;
            box-sizing: border-box;
            justify-content: space-between;
            align-items: center;
            padding: 0 35rem;

            .sltlogo {
                width: 80rem;
                height: 42rem;
            }

            /*.userIcon {
                width: 38rem;
                height: 42rem;
            }*/
        }
    }
</style>