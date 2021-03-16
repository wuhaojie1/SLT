<template>
    <div id="myDate" >
        <div class="chooce-year">
            <div class="choose-type" >
                <div>
                    <div class="chooseitem" style="width: 100rem;"  @click="control">{{birthdayarr.length==0?years[currentindex].value:birthdayarr[0]}}</div>
<!--                    <img class="arrow-down" src="../../static/img/goodsdetails/arrow-down.png" alt="">-->
                </div>
                <ul v-show="showitem">
                    <li v-for="(item,index) in years"
                        :key="index"
                        @click="changesize(index)">{{item.value}}</li>
                </ul>
            </div>
<!--            <select v-model="yearsModel" @change="dateChange(1)" placeholder="请选择">-->
<!--                <option-->
<!--                    v-for="item in years"-->
<!--                    :key="item.value"-->
<!--                    :label="item.label"-->
<!--                    :value="item.value">-->
<!--                </option>-->
<!--            </select>-->
        </div>
        <div class="year">年</div>
        <div class="chooce-mouth">
            <div class="choose-type" >
                <div>
                    <div class="chooseitem" style="width: 100rem;"  @click="control1">{{birthdayarr.length==0?months[currentindex1].value:birthdayarr[1]}}</div>
                    <!--                    <img class="arrow-down" src="../../static/img/goodsdetails/arrow-down.png" alt="">-->
                </div>
                <ul v-show="showitem1">
                    <li v-for="(item,index) in months"
                        :key="index"
                        @click="changesize1(index)">{{item.value}}</li>
                </ul>
            </div>
        </div>
        <div class="mouth">月</div>
        <div class="chooce-day">
            <div class="choose-type" >
                <div>
                    <div class="chooseitem" style="width: 100rem;"  @click="control2">{{birthdayarr.length==0?days[currentindex2].value:birthdayarr[2]}}</div>
                    <!--                    <img class="arrow-down" src="../../static/img/goodsdetails/arrow-down.png" alt="">-->
                </div>
                <ul v-show="showitem2">
                    <li v-for="(item,index) in days"
                        :key="index"
                        @click="changesize2(index)">{{item.value}}</li>
                </ul>
            </div>
        </div>
        <div class="day">日</div>
    </div>
</template>

<script>
    export default {
        props: {
            birthdayarr:{
                type:Array,
                default:()=>[]
            }
        },
        data() {
            return {
                yearsModel:null,
                years:[],
                monthsModel:null,
                months:[],
                daysModel:null,
                days:[],
                showitem:false,
                showitem1:false,
                showitem2:false,
                currentindex:0,
                currentindex1:0,
                currentindex2:0
            }
        },
        mounted() {
            //加条件判断，有数据就不为空
            this.yearsModel = null;
            this.monthsModel = null;
            this.daysModel = null;

        },
        created() {
            this.init();
            // console.log(this.birthdayarr.length);
        },
        methods: {
            control(){
                this.birthdayarr=[];
                this.showitem = !this.showitem;
                this.showitem1 = false;
                this.showitem2 = false;
                console.log(this.showitem);
            },
            control1(){
                this.birthdayarr=[];
                this.showitem1 = !this.showitem1;
                this.showitem = false;
                this.showitem2 = false;
                console.log(this.showitem1);
            },
            control2(){
                this.birthdayarr=[];
                this.showitem2 = !this.showitem2;
                this.showitem1 = false;
                this.showitem = false;
                console.log(this.showitem2);
            },
            changesize(index){
                this.showitem = false;
                this.currentindex = index;
                console.log(this.showitem);
                this.$emit('getbirthyear',this.years[index])
            },
            changesize1(index){
                this.showitem1 = false;
                this.currentindex1 = index;
                console.log(this.showitem);
                this.$emit('getbirthmonth',this.months[index])
            },
            changesize2(index){
                this.showitem2 = false;
                this.currentindex2 = index;
                console.log(this.showitem);
                this.$emit('getbirthday',this.days[index])
            },
            init(){
                var myDate = new Date;
                var year = myDate.getFullYear();//获取当前年
                var month = myDate.getMonth()+1;//获取当前月
                var day = myDate.getDate();//获取当前日

                this.initSelectYear(year)
                this.initSelectMonth();
                this.initSelectDay(year,month);
                this.yearsModel = year;
                this.monthsModel = month;
                this.daysModel = day;
                // let obj ={year:this.yearsModel,month:this.monthsModel,day:this.daysModel }
                // this.$parent.dateChange(obj);
            },
            initSelectYear(year){
                this.years = [];
                for(let i=0;i<60;i++){
                    this.years.push({value:(year - i),label:(year - i)});
                }
                this.years.unshift({value:'请选择'})
            },
            initSelectMonth(){
                this.months = [];
                // this.months.push({value:0,label:"全部"});
                for(let i=1;i<=12;i++){
                    this.months.push({value:i,label:i});
                }
                this.months.unshift({value:'请选择'})
            },
            initSelectDay(year,month){
                var maxDay = this.getMaxDay(year,month);
                this.days = [];
                // this.days.push({value:0,label:"全部"});
                for(var i=1;i<=maxDay;i++){
                    this.days.push({value:i,label:i});
                }
                this.days.unshift({value:'请选择'})
            },
            // dateChange(type){
            //     //1年 2月 3日 4 左 5右
            //     if(type == 1||type == 2){
            //         if(this.monthsModel == 0){
            //             this.daysModel = 0;
            //             this.initSelectDay(this.yearsModel,1);
            //         }else{
            //             this.initSelectDay(this.yearsModel,this.monthsModel);
            //         }
            //     }
            //     if(type == 4){
            //         this.dayleft();
            //     }
            //     if(type == 5){
            //         this.dayright();
            //     }
            //
            //     //操作父组件方法
            //     let obj ={year:this.yearsModel,month:this.monthsModel,day:this.daysModel }
            //     this.$parent.dateChange(obj);
            //
            // },
            // dayleft(){
            //
            //     var tmpYear = this.yearsModel;
            //     var tmpMonth =  this.monthsModel;
            //     var tmpDay = this.daysModel;
            //     if(tmpYear ==null){
            //         var myDate = new Date;
            //         var year = myDate.getFullYear();//获取当前年
            //         var month = myDate.getMonth()+1;//获取当前月
            //         var day = myDate.getDate();//获取当前日
            //         this.yearsModel = year;
            //         this.monthsModel = month;
            //         this.daysModel = day;
            //         return;
            //     }
            //     if(tmpMonth ==null){ tmpMonth = 0}
            //     if(tmpDay ==null){ tmpDay = 0}
            //
            //     var yearV = tmpYear;
            //     var monthV = tmpMonth ;
            //     var dayV = tmpDay;
            //
            //     if((tmpMonth == 0||tmpMonth == 1) && (tmpDay == 0||tmpDay == 1)){
            //         yearV = tmpYear  - 1; monthV = 12;
            //         dayV = this.getMaxDay(tmpYear,tmpMonth);
            //     }
            //     if(!(tmpMonth == 0||tmpMonth == 1) && (tmpDay == 0||tmpDay == 1)){
            //         monthV = tmpMonth - 1;
            //         dayV = this.getMaxDay(tmpYear,tmpMonth);
            //     }
            //     if((tmpMonth == 0||tmpMonth == 1) && !(tmpDay == 0||tmpDay == 1)){
            //         dayV = tmpDay - 1;
            //     }
            //     if(!(tmpMonth == 0||tmpMonth == 1) && !(tmpDay == 0||tmpDay == 1)){
            //         dayV = tmpDay - 1;
            //     }
            //     this.yearsModel = yearV;
            //     this.monthsModel = monthV;
            //     this.daysModel = dayV;
            // },
            // dayright(){
            //
            //     var myDate = new Date;
            //     var year = myDate.getFullYear();//获取当前年
            //     var month = myDate.getMonth()+1;//获取当前月
            //     var day = myDate.getDate();//获取当前日
            //
            //     var tmpYear = this.yearsModel;
            //     var tmpMonth =  this.monthsModel;
            //     var tmpDay = this.daysModel;
            //
            //     if(tmpYear ==null){
            //         var myDate = new Date;
            //         var year = myDate.getFullYear();//获取当前年
            //         var month = myDate.getMonth()+1;//获取当前月
            //         var day = myDate.getDate();//获取当前日
            //         this.yearsModel = year;
            //         this.monthsModel = month;
            //         this.daysModel = day;
            //         return;
            //     }
            //
            //     if(tmpMonth ==null){ tmpMonth = 0}
            //     if(tmpDay ==null){ tmpDay = 0}
            //     if(tmpYear>year){
            //         this.yearsModel = year;
            //         this.monthsModel = month;
            //         this.daysModel = day;
            //         return;
            //     }
            //     if(tmpYear == year){
            //         if((tmpMonth > month || tmpMonth ==0 )||(tmpMonth == month )&&(tmpDay >= day || tmpDay ==0)){
            //             this.yearsModel = year;
            //             this.monthsModel = month;
            //             this.daysModel = day;
            //             return;
            //         }
            //     }
            //
            //     var maxDay = this.getMaxDay(tmpYear,tmpMonth);
            //     var yearV = tmpYear;
            //     var monthV = tmpMonth ;
            //     var dayV = tmpDay;
            //
            //     if((tmpMonth == 0 || tmpMonth == 12) && (tmpDay == 0 || tmpDay == maxDay)){
            //         yearV = tmpYear  + 1; monthV = 1;
            //         dayV = 1;
            //     }
            //     if(!(tmpMonth == 0 || tmpMonth == 12) && (tmpDay == 0 || tmpDay == maxDay)){
            //         monthV = tmpMonth + 1;
            //         dayV = 1;
            //     }
            //     if(!(tmpMonth == 0 || tmpMonth == 12) && !(tmpDay == 0 || tmpDay == maxDay)){
            //         dayV = tmpDay + 1;
            //     }
            //
            //     this.yearsModel = yearV;
            //     this.monthsModel = monthV;
            //     this.daysModel = dayV;
            //
            // },
            getMaxDay(year,month){
                var new_year = year;  //取当前的年份
                var new_month = month++;//取下一个月的第一天，方便计算（最后一天不固定）
                if(month>12)      //如果当前大于12月，则年份转到下一年
                {
                    new_month -=12;    //月份减
                    new_year++;      //年份增
                }
                var new_date = new Date(new_year,new_month,1);//取当年当月中的第一天
                return (new Date(new_date.getTime()-1000*60*60*24)).getDate();//获取当月最后一天日期
            },
        }
    }
</script>

<style scoped lang="less">
#myDate{
    width: 500rem;
    height: 38rem;
    .chooce-year{
        width: 100rem;
        height: 38rem;
        background: #FFFFFF;
        border: 1rem solid #E4E7ED;
        border-radius: 2rem;
        float: left;
        margin-right: 5rem;
        line-height: 38rem;
        .choose-type {
            float: left;
            margin-right: 27rem;
            width: 100rem;
            height: 338rem;
            overflow: hidden;

            .chooseitem {
                font-size: 12rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                line-height: 42rem;
                float: left;
                /*margin-left: 15rem;*/
            }

            .arrow-down {
                width: 12rem;
                height: 7rem;
                float: left;
                /*padding-left: 17rem;*/
                /*padding-right: 10rem;*/
                margin-top: 17rem;
            }
                ul {
                clear: both;
                font-size: 12rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                width: 100rem;
                height: 200rem;
                overflow: hidden;
                overflow-y: scroll;
                scrollbar-width: none;
                li {
                    list-style: none;
                    /*display: none;*/
                    line-height: 38rem;
                    /*margin-left: 17rem;*/
                    background-color: #fff;
                    position: relative;
                    z-index: 10;
                    width: 100rem;
                    height: 38rem;
                }

                li:hover {
                    background: #5E8FA0;
                }
            }
        }
    }
    .year{
        float: left;
        line-height: 38rem;
        margin-right: 19rem;
    }
    .chooce-mouth{
        width: 100rem;
        height: 38rem;
        background: #FFFFFF;
        /*border: 1rem solid #E4E7ED;*/
        border-radius: 2rem;
        float: left;
        margin-right: 5rem;
        line-height: 38rem;
        .choose-type {
            float: left;
            margin-right: 27rem;
            /*background: #F3F5F7;*/
            border: 1px solid #DBDEE4;
            /*width: 160rem;*/
            width: 100rem;
            height: 38rem;

            .chooseitem {
                font-size: 12rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                line-height: 42rem;
                float: left;
                /*margin-left: 15rem;*/
            }

            .arrow-down {
                width: 12rem;
                height: 7rem;
                float: left;
                /*padding-left: 17rem;*/
                /*padding-right: 10rem;*/
                margin-top: 17rem;
            }

            ul {
                clear: both;
                font-size: 12rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                width: 100rem;
                height: 200rem;
                overflow: hidden;
                overflow-y: scroll;
                li {
                    list-style: none;
                    /*display: none;*/
                    line-height: 38rem;
                    /*margin-left: 17rem;*/
                    background-color: #fff;
                    position: relative;
                    z-index: 10;
                    width: 100rem;
                    height: 38rem;
                }

                li:hover {
                    background: #5E8FA0;
                }
            }
        }
    }
    .mouth{
        float: left;
        line-height: 38rem;
        margin-right: 19rem;
    }
    .chooce-day{
        width: 100rem;
        height: 38rem;
        background: #FFFFFF;
        /*border: 1rem solid #E4E7ED;*/
        border-radius: 2rem;
        float: left;
        margin-right: 5rem;
        line-height: 38rem;
        .choose-type {
            float: left;
            margin-right: 27rem;
            /*background: #F3F5F7;*/
            border: 1px solid #DBDEE4;
            /*width: 160rem;*/
            width: 100rem;
            height: 38rem;

            .chooseitem {
                font-size: 12rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                line-height: 42rem;
                float: left;
                /*margin-left: 15rem;*/
            }

            .arrow-down {
                width: 12rem;
                height: 7rem;
                float: left;
                /*padding-left: 17rem;*/
                /*padding-right: 10rem;*/
                margin-top: 17rem;
            }

            ul {
                clear: both;
                font-size: 12rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #444444;
                width: 100rem;
                height: 200rem;
                overflow: hidden;
                overflow-y: scroll;
                li {
                    list-style: none;
                    /*display: none;*/
                    line-height: 38rem;
                    /*margin-left: 17rem;*/
                    background-color: #fff;
                    position: relative;
                    z-index: 10;
                    width: 100rem;
                    height: 38rem;
                }

                li:hover {
                    background: #5E8FA0;
                }
            }
        }
    }
    .day{
        float: left;
        line-height: 38rem;
        margin-right: 19rem;
    }
}
</style>