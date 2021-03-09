<template>
    <div :class="isSlect?'checkBoxCustom select':'checkBoxCustom'" @click="changeSelect">
        <img v-if="isSlect" class="select" :src="select" />
    </div>
</template>

<script>
    export default {
        name: "checkBoxCustom",
        data(){
            return {
                select: `${require('../../static/img/shop/select.png')}`,
            }
        },
        props:{
            isSlect: {
                type: Boolean,
                default: false
            },
            //携带参数//标记
            formData:{
                type: [Boolean,Object,Array,String,Number],
                default:()=>{} 
            }

        },
        methods:{
            changeSelect(){
                let {isSlect,formData} = this.$props;
                this.$emit("changeSelect",{
                    isSlect:!isSlect,
                    data:formData
                })
            }
        }
    }
</script>

<style scoped lang="less">
.checkBoxCustom{
    width: 16rem;
    height: 16rem;
    background: #FFFFFF;
    border: 1rem solid #DBDEE4;
    border-radius: 2rem;
    position: relative;
    box-sizing: border-box;
    cursor: pointer;
    .select{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 12rem;
        height: 10rem;
    }
    // .tophead{
    //     height: 88rem;
    //     width: 750rem;
    //     background-color: #02031E;
    //     position: relative;
    //     .SLTimg-con{
    //         width: 80rem;
    //         height: 42rem;
    //         position: absolute;
    //         top: 23rem;
    //         left: 35rem;
    //         .STLimg{
    //             width: 80rem;
    //             height: 42rem;
    //         }
    //     }
    //     .user-img-con{
    //         width: 38rem;
    //         height: 42rem;
    //         position: absolute;
    //         top: 23rem;
    //         right: 35rem;
    //         .user-img{
    //             width: 38rem;
    //             height: 42rem;
    //         }
    //     }
    // }
}
.checkBoxCustom.select{
    
    border: 1rem solid #00B4FC;
}
</style>