<template>
    <div>
        <tophead></tophead>
        <Mtradebar></Mtradebar>
        <router-view></router-view>
    </div>
</template>

<script>
    import tophead from '../../../components/header/Mheader';
    import Mtradebar from "../../../components/Mtradebar/Mtradebar";
    export default {
        name: "exchange",
        components:{tophead,Mtradebar},
    }
</script>

<style scoped>

</style>