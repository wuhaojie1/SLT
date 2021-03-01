<template>
    <div class="user">
        <ThemeStickyHeader></ThemeStickyHeader>
        <div class="user-wrap">
            <div class="user-wrap-content">
                <UserSet></UserSet>
                <div class="routerBox">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <Bottom></Bottom>
    </div>
</template>

<script>
    import ThemeStickyHeader from "../../components/header/themeStickyHeader";
    import Bottom from "../../components/bottom/bottom";
    import UserSet from "../../components/userSet";

    export default {
        name: "user",
        components: {UserSet, Bottom, ThemeStickyHeader},
        data() {
            return {}
        },
        created() {
            this.$router.push({
                name: 'userInfo'
            })
        },
        methods: {},
    }
</script>

<style scoped lang="less">
    .user {
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;

        .user-wrap {
            width: 100%;
            margin: 75rem 0 0 0;
            /*min-height: calc(100vh - 75rem - 200rem);*/
            box-sizing: border-box;

            .user-wrap-content {
                min-height: calc(100vh - 75rem - 200rem);
                width: 1140rem;
                margin: 0 auto;
                box-sizing: border-box;
                padding: 20rem 0;
                display: flex;
                
                .routerBox {
                    width: 1030rem;
                    /*height: 950rem;*/
                    background: #FFFFFF;
                    border: 1rem solid #E4E7ED;
                    margin-left: 10rem;
                    box-sizing: border-box;
                }
            }
        }
    }
</style>