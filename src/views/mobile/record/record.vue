<template>
    <div class="record">
<!--        <Mheader :isShowRight="true"></Mheader>-->
        <PageHeader :isShowRight="true"></PageHeader>
        <RecordDrop @toPage="toPage"></RecordDrop>
        <router-view></router-view>
    </div>
</template>

<script>
// import Mheader from "@/components/header/Mheader";
import RecordDrop from "@/components/recordDrop";
import PageHeader from "@/components/mobileComponents/comm/header";

export default {
    name: "record",
    components: {PageHeader, RecordDrop},
    data() {
        return {}
    },
    mounted() {

    },
    methods: {
        toPage(item) {
            console.log(item)
            this.$router.push({
                name: item.name
            })
        }
    }
}
</script>

<style scoped lang="less">
.record {

}
</style>