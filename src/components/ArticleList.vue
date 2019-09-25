<template>
    <div>
        <ArticlePreview
            v-for="(article, index) in articles"
            :article="article"
            :key="article.title + index"
        />
    </div>
</template>

<script>
import ArticlePreview from '@/components/ArticlePreview';
import { mapGetters } from 'vuex';
import { FETCH_ARTICLES } from '../store/actions.type';

export default {
    name: 'ArticleList',
    components: {
        ArticlePreview
    },
    props: {
        type: {
            type: String,
            required: true,
            default: 'all'
        }
    },
    computed: {
        listConfig() {
            const { type } = this;
            return {
                type
            };
        },
        ...mapGetters(['articles', 'articlesCount', 'isLoading'])
    },
    mounted() {
        this.fetchArticles();
    },
    methods: {
        fetchArticles() {
            this.$store.dispatch(FETCH_ARTICLES, this.listConfig);
        }
    }
};
</script>

<style scoped></style>
