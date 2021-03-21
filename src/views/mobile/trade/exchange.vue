<template>
    <div>
<!--        <tophead></tophead>-->
        <PageHeader :isShowRight="true"></PageHeader>
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
    }
</script>

<style scoped>

</style>