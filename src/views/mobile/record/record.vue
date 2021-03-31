<template>
    <div class="record">
        <!--        <Mheader :isShowRight="true"></Mheader>-->
        <PageHeader :isShowRight="true"
                    :isHome="false"
                    class="PageHeader"
                    @clickCallback="clickCallback"></PageHeader>
        <RecordDrop @toPage="toPage"
                    class="RecordDrop"></RecordDrop>
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
        this.$router.push({
            name: "Mposition",
        })
    },
    methods: {
        toPage(item) {
            // console.log(item)
            this.$router.push({
                name: item.name
            })
        },
        clickCallback(item) {
            // console.log(item)
            this.$router.push({
                name: item.name,
            })
        },
    }
}
</script>

<style scoped lang="less">
.record {
    .PageHeader {
        top: 0;
    }

    .RecordDrop {
        position: absolute;
        top: 88rem;
        z-index: 5;
    }
}
</style>