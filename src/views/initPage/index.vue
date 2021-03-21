<template>
    <div></div>
</template>
<script>
    // import themeStickyHeader from "../../components/header/themeStickyHeader";
    export default {
        name: "initPage",
        // components:{themeStickyHeader}
        mounted(){
            // const setHtmlFontSize = () => {

                // const htmlDom = document.getElementsByTagName('html')[0];
                let that = this;

                let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

                if (htmlWidth <= 800) {
                    that.$router.push({
                        name: "index",
                    })
                    // htmlWidth = 750;
                    // htmlDom.style.fontSize = `${(htmlWidth / 750)}px`;
                } else {
                    that.$router.push({
                        name: "index",
                    })
                    // htmlDom.style.fontSize = `${(htmlWidth / 1920)}px`;
                }
                //1rem = 1px
                // htmlDom.style.fontSize = `${(htmlWidth / 1920)}px`;
            // };
            // window.onresize = setHtmlFontSize;
            // setHtmlFontSize();
        },
        methods:{

        }
    }
</script>