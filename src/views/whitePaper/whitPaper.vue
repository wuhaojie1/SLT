<template>
    <div class="whitPaper">
        <ThemeStickyHeader class="whitPaper-header"></ThemeStickyHeader>
        <div class="whitPaper-pdf" v-if="lan==='kr'">
            <pdf src="/SLTWhitePaper.pdf"
                 class="pdfClass"
                 v-for="i in numPages"
                 :key="i"
                 :page="i"></pdf>
        </div>

        <div class="whitPaper-pdf" v-if="lan==='chinese'">
            <pdf src="/SLT_chinese.pdf"
                 class="pdfClass"
                 v-for="i in CnumPages"
                 :key="i"
                 :page="i"></pdf>
        </div>

        <div class="whitPaper-pdf" v-if="lan==='english'">
            <pdf src="/SLT_english.pdf"
                 class="pdfClass"
                 v-for="i in EnumPages"
                 :key="i"
                 :page="i"></pdf>
        </div>

        <div class="whitPaper-pdf" v-if="lan==='japan'">
            <pdf src="/SLT_japanese.pdf"
                 class="pdfClass"
                 v-for="i in JnumPages"
                 :key="i"
                 :page="i"></pdf>
        </div>

    </div>
</template>

<script>
import Pdf from 'vue-pdf'
import ThemeStickyHeader from "@/components/header/themeStickyHeader";

export default {
    name: "whitPaper",
    components: {ThemeStickyHeader, Pdf},
    data() {
        return {
            numPages: 37,  //  pdf 文件总页数
            JnumPages:36,
            CnumPages:36,
            EnumPages:36,
            han:true,
            chinese:false,
            english:false,
            japanese:false,
            lan:'',
        }
    },
    mounted() {
        console.log(this.$route.query);
        if(this.$route.query.lan){
            this.lan = this.$route.query.lan;
        }else{
            this.lan = 'kr';
        }

    }
}
</script>

<style scoped lang="less">
.whitPaper {
    .whitPaper-header {

    }

    .whitPaper-pdf {
        padding-top: 75rem;
        width: 70%;
        min-width: 980rem;
        margin: 0 auto;

        .pdfClass {
            width: 100%;
            height: 100%;
        }

    }
}
</style>