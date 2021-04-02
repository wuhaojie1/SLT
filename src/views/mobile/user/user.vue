<template>
    <div class="user">
        <PageHeader :isShowRight="true"
                    :isHome="false"
                    @clickCallback="clickCallback"></PageHeader>
        <div class="userBox">
            <div class="userHeader">
                <span class="headerLeft">{{ $t('userInfo.userCenter') }}</span>
                <img style="width:24rem;height:14rem;" src="../../../static/img/user/arrowdown.png" alt="">
            </div>
            <div class="infoTitle">{{ $t('userInfo.basemsg') }}</div>
            <ul class="infoBox">
                <li v-for="(item,index) in list" :key="item.text" class="infoItem">
                    <div class="itemLeft">{{ item.text }}</div>
                    <div v-if="change" :style="'color:'+((index==2||index==5||index==6||index==7)?'#9AA5B5':'#444444')"
                         class="itemCenter">{{ item.val }}
                    </div>
                    <input v-else v-model="item.val" :style="'color:'+((index==2||index==5||index==6||index==7)?'#9AA5B5':'#444444')"
                         class="itemCenterinput" />
                    <img v-if="item.isArrow" class="itemRight" style="width:12rem;height:20rem;"
                         :src="require((index==6||index==7||index==5)?'../../../static/img/user/arrowgrey.png':'../../../static/img/user/arrowdart.png')"
                         alt="">
                </li>
            </ul>
            <div class="saveBtn" @click="save">{{ $t('userInfo.save') }}</div>
        </div>

        <BottomBar :usermsg="list"></BottomBar>
        <!-- <Tabbar></Tabbar> -->
    </div>
</template>

<script>
import PageHeader from '../../../components/mobileComponents/comm/header.vue';
import BottomBar from '../../../components/mobileComponents/user/bottomBar.vue';
// import Tabbar from '../../../components/mobileComponents/tabbar/tabbar.vue';
export default {
    components: {
        PageHeader,
        BottomBar,
        // Tabbar
    },
    data() {
        return {
            list: [
                {text: this.$t('userInfo.userName'), val: '13028143776', isArrow: true},
                {text: this.$t('userInfo.userID'), val: 'JCJDVJDS', isArrow: false},
                {text: this.$t('userInfo.truename'), val: '*상**.', isArrow: false},
                // {text: this.$t('userInfo.sex'), val: this.$t('userInfo.weman'), isArrow: true},
                // {text: this.$t('userInfo.birthday'), val: '1988.10.20', isArrow: true},
                // {text:this.$t('userInfo.education'),val:this.$t('userInfo.pleaseSelect'),isArrow:true},
                // {text:this.$t('userInfo.industry'),val:this.$t('userInfo.pleaseSelect'),isArrow:true},
                {text: this.$t('userInfo.idnum'), val: this.$t('userInfo.pleaseInput'), isArrow: true},

            ],
            change:true
        }
    },
    mounted() {
        this.getUserInfo();
    },
    methods: {
        save(){
            this.change = !this.change
        },
        clickCallback(item){
            // console.log(item)
            this.$router.push({
                name: item.name,
            })
        },
        getUserInfo() {
            this.axios({
                url: 'wx/user/userinfo',
                method: 'get',
                // params: getData,
            }).then(res => {
                console.log(res);
                this.list[0].val = res.data.username;
                this.list[1].val = res.data.userId;
                this.list[2].val = res.data.realName;
            })
        }
    },
}
</script>

<style lang='less' scoped>
.user {
    text-align: left;

    .userBox {
        height: calc(100vh - 88rem - 176rem);

        .userHeader {
            width: 750rem;
            height: 88rem;
            background: #FFFFFF;
            box-shadow: 0rem 5rem 10rem 0rem rgba(153, 153, 153, 0.1);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0rem 36rem;
            box-sizing: border-box;

            .headerLeft {
                width: 121rem;
                height: 29rem;
                font-size: 30rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #333333;
                line-height: 37rem;

            }
        }

        .infoTitle {
            width: 129rem;
            height: 31rem;
            font-size: 32rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #333333;
            padding: 40rem 0rem 40rem 36rem;

        }

        .infoBox {
            .infoItem {
                display: flex;
                justify-content: space-between;
                padding: 34rem 34rem;
                align-items: center;
                font-size: 28rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;

                .itemLeft {

                }

                .itemCenter {
                    flex-grow: 1;
                    text-align: right;
                    /*width: 200rem;*/
                }
                .itemCenterinput{
                    flex-grow: 1;
                    text-align: right;
                    border: 1rem solid #DBDEE4;
                    height: 40rem;
                    /*width: 200rem;*/
                }

                .itemRight {
                    margin-left: 18rem;
                }
            }

            .infoItem:nth-child(5) {
                padding-bottom: 60rem;
                border-bottom: solid 15rem #F2F6FA;
            }

            .infoItem:nth-child(6) {
                padding-top: 60rem;
            }
        }

        .saveBtn {
            width: 670rem;
            height: 88rem;
            background: #00B4FC;
            border-radius: 10rem;
            font-size: 34rem;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #FFFFFF;
            text-align: center;
            line-height: 88rem;
            margin: 79rem auto 61rem auto;

        }
    }

}
</style>