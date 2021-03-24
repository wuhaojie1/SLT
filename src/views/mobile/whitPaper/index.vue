<template>
    <div class="whitPaper">
        <PageHeader :isShowRight="false"></PageHeader>
        <div class="whitPaper-pdf" v-if="han">
            <pdf src="/SLTWhitePaper.pdf"
                 class="pdfClass"
                 v-for="i in numPages"
                 :key="i"
                 :page="i"></pdf>
        </div>

        <div class="whitPaper-pdf" v-if="chinese">
            <pdf src="/SLT_chinese.pdf"
                 class="pdfClass"
                 v-for="i in CnumPages"
                 :key="i"
                 :page="i"></pdf>
        </div>

        <div class="whitPaper-pdf" v-if="english">
            <pdf src="/SLT_english.pdf"
                 class="pdfClass"
                 v-for="i in EnumPages"
                 :key="i"
                 :page="i"></pdf>
        </div>

        <div class="whitPaper-pdf" v-if="japanese">
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
import PageHeader from "@/components/mobileComponents/comm/header";

export default {
    name: "whitPaper",
    components: {PageHeader, Pdf},
    data() {
        return {
            numPages: 37,  //  pdf 文件总页数
            JnumPages:36,
            CnumPages:36,
            EnumPages:36,
            han:true,
            chinese:false,
            english:false,
            japanese:false
        }
    },
    beforeMount() {
        console.log(this.$route.params);
        if(this.$route.params.type=='english'){
            this.han = false;
            this.chinese=false,
                this.english=true,
                this.japanese=false
        }else if(this.$route.params.type=='chinese'){
            this.han = false;
            this.chinese=true,
                this.english=false,
                this.japanese=false
        }else if(this.$route.params.type=='japan'){
            this.han = false;
            this.chinese=false,
                this.english=false,
                this.japanese=true
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
        width: 100%;
        margin: 0 auto;

        .pdfClass {
            width: 100%;
            height: 100%;
        }

    }
}
</style>