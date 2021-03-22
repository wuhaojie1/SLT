<template>
    <div>
<!--        <tophead></tophead>-->
        <PageHeader :isShowRight="false"></PageHeader>
        <div class="tradeM">
        <Mtradebar @changeitem="changeitem"></Mtradebar>
        <!-- <router-view></router-view> -->
        <deal v-if="chooseItem.name==='Mdeal'"/>
        <trade v-if="chooseItem.name==='MTrade'"/>
        </div>
    </div>
</template>

<script>
    // import tophead from '../../../components/header/Mheader';
    import Mtradebar from "@/components/Mtradebar/Mtradebar";
    import deal from "../trade/deal";
    import trade from "../trade/trade";
    // import Mtradebar from "@/components/Mtradebar/Mtradebar";
    import PageHeader from "@/components/mobileComponents/comm/header";
    export default {
        name: "exchange",
        components:{PageHeader, Mtradebar,deal,trade},
        data(){
            return{
                chooseItem:{
                    name: "MTrade",
                }
            }
        },
        mounted() {
            // this.$router.push({
            //     name: "MTrade",
            // })
        },
        methods: {
            clickCallback(item){
                // console.log(item)
                this.$router.push({
                    name: item.name,
                })
            },
            changeitem(item){
                console.log(item)
                this.chooseItem = item
            }
        }
    }
</script>

<style scoped>
    .tradeM{
        padding-top: 88rem;
    }
</style>