<template>
    <div @click="clickItemHandel" class="positionBlock">
        <div class="positionBlock-wrap">
            <div class="positionBlock-content" :class="blockItem.color">
                <div class="text">
                    {{ blockItem.text }}
                </div>
                <div class="number">
                    ({{ blockItem.number }})
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "positionBlock",
    props: {
        blockItem: {
            type: Object,
            default: () => {
            }
        },
        clickItem:{
            type:Function,
            default:()=>()=>{}
        }
    },
    methods:{
        clickItemHandel(){
            this.$emit('clickItem',this.blockItem)
        }
    }
}
</script>

<style scoped lang="less">
.positionBlock {
    .positionBlock-wrap {
        .positionBlock-content {
            cursor: pointer;
            width: 300rem;
            height: 240rem;
            background: #F9FBFD;
            border-radius: 10rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            //justify-content: center;
            color: #8993A0;

            .text {
                //width: 55rem;
                //height: 18rem;
                font-size: 30rem;
                font-weight: bold;

                text-align: center;
                margin-top: 105rem;
            }

            .number {
                font-size: 16rem;
                font-weight: bold;
                //color: #8993A0;
                text-align: center;
                margin-top: 68rem;
                //text-align: center;
            }
        }
        .positionBlock-content:hover{
            opacity: 0.7;
        }

        .color1 {
            background: #F9FBFD;
            color: #8993A0;
        }

        .color2 {
            background: #E7F1F9;
            color: #7192FC;
        }

        .color3 {
            background: #FDFAE5;
            color: #E7D61E;
        }

        .color4 {
            background: #FAEFED;
            color: #EB6E65;
        }

        .color5 {
            background: #F0FBF6;
            color: #87DFB6;
        }

        .color6 {
            background: #EEF3FF;
            color: #647BDF;
        }

        .color7 {
            background: #FEEEE0;
            color: #FD8A25;
        }

        .color8 {
            background: #FBF4CD;
            color: #F4CF04;
        }
    }
}
</style>