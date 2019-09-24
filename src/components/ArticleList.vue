<template>
    <ArticlePreview></ArticlePreview>
</template>

<script>
import ArticlePreview from '@/components/ArticlePreview';
import { mapGetters } from 'vuex';

export default {
    name: 'ArticleList',
    components: {
        ArticlePreview
    },
    computed: {
        ...mapGetters(['articles'])
    }
};
</script>

<style scoped></style>
