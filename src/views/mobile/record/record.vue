<template>
    <div class="record">
        <Mheader></Mheader>
        <RecordDrop @toPage="toPage" ></RecordDrop>
        <router-view></router-view>
    </div>
</template>

<script>
import Mheader from "@/components/header/Mheader";
import RecordDrop from "@/components/recordDrop";

export default {
    name: "record",
    components: {RecordDrop, Mheader},
    data() {
        return {}
    },
    methods: {
        toPage(item){
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