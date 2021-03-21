<template>
    <div>
<!--        <tophead></tophead>-->
        <PageHeader :isShowRight="true"
                    :isHome="true"
                    @clickCallback="clickCallback"></PageHeader>
        <Mtradebar></Mtradebar>
        <router-view></router-view>
    </div>
</template>

<script>
    // import tophead from '../../../components/header/Mheader';
    import Mtradebar from "@/components/Mtradebar/Mtradebar";
    import PageHeader from "@/components/mobileComponents/comm/header";
    export default {
        name: "exchange",
        components:{PageHeader, Mtradebar},
        mounted() {
            this.$router.push({
                name: "MTrade",
            })
        },
        methods: {
            clickCallback(item){
                // console.log(item)
                this.$router.push({
                    name: item.name,
                })
            },
        }
    }
</script>

<style scoped>

</style>