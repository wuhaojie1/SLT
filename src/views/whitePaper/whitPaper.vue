<template>
    <div class="whitPaper">
        <ThemeStickyHeader class="whitPaper-header"></ThemeStickyHeader>
        <div class="whitPaper-pdf">
            <pdf src="/pdf/SLTWhitePaper.pdf" class="pdfClass"></pdf>
        </div>

    </div>
</template>

<script>
import pdf from 'vue-pdf'
import ThemeStickyHeader from "@/components/header/themeStickyHeader";

export default {
    name: "whitPaper",
    components: {ThemeStickyHeader, pdf},
    data() {
        return {}
    }
}
</script>

<style scoped lang="less">
.whitPaper {
    .whitPaper-header {

    }

    .whitPaper-pdf {
        padding-top: 75rem;
        width: 1200rem;
        margin: 0 auto;

        .pdfClass {
            width: 100%;
            height: 100%;
        }

    }
}
</style>