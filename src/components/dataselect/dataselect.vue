<template>
    <div id="myDate" >
        <div class="chooce-year">
            <select v-model="yearsModel" @change="dateChange(1)" placeholder="请选择">
                <option
                    v-for="item in years"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </option>
            </select>
        </div>
        <div class="year">年</div>
        <div class="chooce-mouth">
            <select v-model="monthsModel" @change="dateChange(2)" placeholder="请选择">
                <option
                    v-for="item in months"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </option>
            </select>
        </div>
        <div class="mouth">月</div>
        <div class="chooce-day">
            <select v-model="daysModel" @change="dateChange(3)" placeholder="请选择">
                <option
                    v-for="item in days"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </option>
            </select>
        </div>
        <div class="day">日</div>
    </div>
</template>

<script>
    export default {
        props: {
        },
        data() {
            return {
                yearsModel:null,
                years:[],
                monthsModel:null,
                months:[],
                daysModel:null,
                days:[],
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
        },
        methods: {
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
            },
            initSelectMonth(){
                this.months = [];
                // this.months.push({value:0,label:"全部"});
                for(let i=1;i<=12;i++){
                    this.months.push({value:i,label:i});
                }
            },
            initSelectDay(year,month){
                var maxDay = this.getMaxDay(year,month);
                this.days = [];
                // this.days.push({value:0,label:"全部"});
                for(var i=1;i<=maxDay;i++){
                    this.days.push({value:i,label:i});
                }
            },
            dateChange(type){
                //1年 2月 3日 4 左 5右
                if(type == 1||type == 2){
                    if(this.monthsModel == 0){
                        this.daysModel = 0;
                        this.initSelectDay(this.yearsModel,1);
                    }else{
                        this.initSelectDay(this.yearsModel,this.monthsModel);
                    }
                }
                // if(type == 4){
                //     this.dayleft();
                // }
                // if(type == 5){
                //     this.dayright();
                // }

                //操作父组件方法
                let obj ={year:this.yearsModel,month:this.monthsModel,day:this.daysModel }
                this.$parent.dateChange(obj);

            },
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
            }
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
        select{
            /*清除select的边框样式*/
            border: none;
            /*清除select聚焦时候的边框颜色*/
            outline: none;
            /*将select的宽高等于div的宽高*/
            width: 100%;
            height: 38rem;
            line-height: 40rem;
            /*隐藏select的下拉图标*/
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            /*通过padding-left的值让文字居中*/
            padding-left: 20rem;
        }
        .chooce-year:after{
            content: "";
            width: 14rem;
            height: 8rem;
            /*background: url(../assets/arrow-down.png) no-repeat center;*/
            /*通过定位将图标放在合适的位置*/
            position: absolute;
            right: 20rem;
            top: 41%;
            /*给自定义的图标实现点击下来功能*/
            pointer-events: none;
        }
    }
    .year{
        float: left;
        line-height: 38rem;
        margin-right: 19rem;
    }
    .chooce-mouth{
        background: #FFFFFF;
        border: 1rem solid #E4E7ED;
        border-radius: 2rem;
        width: 100rem;
        height: 38rem;
        float: left;
        margin-right: 5rem;
        line-height: 38rem;
        select{
            /*清除select的边框样式*/
            border: none;
            /*清除select聚焦时候的边框颜色*/
            outline: none;
            /*将select的宽高等于div的宽高*/
            width: 100%;
            height: 38rem;
            line-height: 40rem;
            /*隐藏select的下拉图标*/
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            /*通过padding-left的值让文字居中*/
            padding-left: 20rem;
        }
        .chooce-mouth:after{
            content: "";
            width: 14rem;
            height: 8rem;
            /*background: url(../assets/arrow-down.png) no-repeat center;*/
            /*通过定位将图标放在合适的位置*/
            position: absolute;
            right: 20rem;
            top: 41%;
            /*给自定义的图标实现点击下来功能*/
            pointer-events: none;
        }
    }
    .mouth{
        float: left;
        line-height: 38rem;
        margin-right: 19rem;
    }
    .chooce-day{
        background: #FFFFFF;
        border: 1rem solid #E4E7ED;
        border-radius: 2rem;
        width: 100rem;
        height: 38rem;
        float: left;
        margin-right: 5rem;
        line-height: 38rem;
        select{
            /*清除select的边框样式*/
            border: none;
            /*清除select聚焦时候的边框颜色*/
            outline: none;
            /*将select的宽高等于div的宽高*/
            width: 100%;
            height: 38rem;
            line-height: 40rem;
            /*隐藏select的下拉图标*/
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            /*通过padding-left的值让文字居中*/
            padding-left: 20rem;
        }
        .chooce-day:after{
            content: "";
            width: 14rem;
            height: 8rem;
            /*background: url(../assets/arrow-down.png) no-repeat center;*/
            /*通过定位将图标放在合适的位置*/
            position: absolute;
            right: 20rem;
            top: 41%;
            /*给自定义的图标实现点击下来功能*/
            pointer-events: none;
        }
    }
    .day{
        float: left;
        line-height: 38rem;
        margin-right: 19rem;
    }
}
</style>