<template>
    <div class="whitPaper">
        <ThemeStickyHeader class="whitPaper-header"></ThemeStickyHeader>
        <div class="whitPaper-pdf">
            <pdf src="/SLTWhitePaper.pdf"
                 class="pdfClass"
                 v-for="i in numPages"
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
            numPages: 37  //  pdf 文件总页数
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