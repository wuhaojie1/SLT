<template>
    <div class="withdraw">
        <ThemeStickyHeader></ThemeStickyHeader>
        <div class="withdraw-wrap">
            <div class="withdraw-wrap-content">

            </div>
        </div>
        <Bottom></Bottom>
    </div>
</template>

<script>
    import ThemeStickyHeader from "../../components/header/themeStickyHeader";
    import Bottom from "../../components/bottom/bottom";
    export default {
        name: "withdraw",
        components: {Bottom, ThemeStickyHeader},
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped lang="less">
    .withdraw {
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;

        .withdraw-wrap {
            width: 100%;
            margin: 75rem 0 0 0;
            box-sizing: border-box;

            .withdraw-wrap-content {
                min-height: calc(100vh - 75rem - 200rem);
            }
        }
    }
</style>