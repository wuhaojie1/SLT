<template>
    <div>
        <div class="user-stu-con">
<!--          <div class="userinfo-stu-text">教育程度:</div>-->
          <div class="set-stu-con">
           <div class="choose-type" >
             <div>
                <div class="chooseitem"
                     style="width: 183rem;"
                     @click="control1">{{typearr[currentindex1]}}
                    <img class="arrow-down" src="../../static/img/goodsdetails/arrow-down.png" alt="">
                </div>
                </div>
                <ul v-show="showitem1">
                     <li v-for="(item,index) in typearr"
                    :key="index"
                  @click="changesize1(index)">{{item}}</li>
                </ul>
              </div>
           </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "selectitem",
        props:{
            typearr:{
                type:Array,
                default:()=>{}
            }
        },
        data(){
            return{
                currentindex1: 0,
                currentindex2: 0,
                showitem1: false,
                showitem2: false,
            }
        },
        methods:{
            control1() {
                this.showitem1 = !this.showitem1;
                this.showitem2 = false;
            },
            changesize1(index) {
                this.currentindex1 = index;
                this.showitem1 = false;
            },
        }
    }
</script>

<style scoped lang="less">
    .user-stu-con {
        padding-top: 20rem;
        height: 28rem;
        width: 183rem;

        .userinfo-stu-text {
            font-size: 14rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #444444;
            line-height: 28rem;
            float: left;
            margin-right: 20rem;
        }

        .set-stu-con {
            height: 28rem;
            width: 183rem;
            background: #FFFFFF;
            border: 1rem solid #E4E7ED;
            border-radius: 2rem;
            float: left;
            margin-right: 5rem;
            line-height: 28rem;

            .choose-type {
                float: left;
                margin-right: 27rem;
                width: 183rem;
                height: 338rem;
                overflow: hidden;

                .chooseitem {
                    font-size: 12rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                    line-height: 28rem;
                    float: left;
                    width: 183rem;
                    /*margin-left: 15rem;*/
                }

                .arrow-down {
                    width: 12rem;
                    height: 7rem;
                    float: right;
                    /*padding-left: 17rem;*/
                    padding-right: 10rem;
                    margin-top: 10rem;
                }

                ul {
                    height: 122rem;
                    width: 183rem;
                    font-size: 12rem;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #444444;
                    overflow: hidden;
                    overflow-y: scroll;
                    scrollbar-width: none;
                    margin-top: 33rem;
                    /*overflow-y: hidden;*/

                    ::-webkit-scrollbar {
                        display: none
                    }

                    li {
                        list-style: none;
                        /*display: none;*/
                        line-height: 28rem;
                        /*margin-left: 17rem;*/
                        background-color: #fff;
                        position: relative;
                        z-index: 10;
                        width: 183rem;
                        height: 28rem;
                    }

                    li:hover {
                        font-size: 12px;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #00B9FE;
                        background: #F8FAFC;

                    }
                }
            }
        }
    }
</style>