<template>
    <div class="recordDrop">
        <div class="recordDrop-content">
            <div class="recordDrop-item" @click="openRecord">
                <div class="left">
                    {{ chooseItem.text }}
                </div>
                <div class="right">
                    <img :src="downarrow" alt="">
                </div>
            </div>
            <div class="recordDrop-list" v-show="recordShow">
                <div class="recordDrop-list-item"
                     v-for="(item, index) in recordDropList"
                     :key="index" @click="chooseItemF(item)">
                    {{ item.text }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "recordDrop",
    data() {
        return {
            recordShow: false,
            downarrow: `${require('@/static/img/buy/downarrow.png')}`,
            recordDropList: [
                {
                    text: this.$t("TopUp.topUp"),
                    name: "Mtopup",
                },
                {
                    text: this.$t("TopUp.withdraw"),
                    name: "",
                },
                {
                    text: this.$t("TopUp.OTC"),
                    name: "MOTC",
                },
                {
                    text: this.$t("TopUp.position"),
                    name: "Mposition",
                },
                {
                    text: this.$t("TopUp.deal"),
                    name: "MDeal",
                },
            ],
            chooseItem:{
                text: this.$t("TopUp.topUp"),
                name: "Mtopup",
            }
        }
    },
    methods: {
        chooseItemF(item) {
            this.chooseItem = item
            this.recordShow = false
            this.$emit("toPage", item)
        },
        openRecord() {
            this.recordShow = !this.recordShow
        }
    }
}
</script>

<style scoped lang="less">
.recordDrop {
    .recordDrop-content {
        position: relative;
        .recordDrop-item {
            width: 750rem;
            height: 88rem;
            background: #FFFFFF;
            box-shadow: 0rem 5rem 10rem 0rem rgba(153, 153, 153, 0.1);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 35rem;
            box-sizing: border-box;

            .left {
                font-size: 30rem;
                font-weight: 400;
                color: #444444;
                line-height: 37rem;
            }

            .right {
                img {
                    width: 24rem;
                    height: 14rem;
                    transform: rotate(180deg);
                }
            }
        }

        .recordDrop-list {
            width: 750rem;
            position: absolute;
            z-index: 5;
            text-align: left;
            background: #fff;

            .recordDrop-list-item {
                box-sizing: border-box;
                padding-left: 36rem;
                height: 90rem;
                line-height: 90rem;
                font-size: 30rem;
                font-weight: 400;
                color: #444444;
            }
        }
    }
}
</style>