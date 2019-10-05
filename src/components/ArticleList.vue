<template>
    <div>
        <div v-if="isLoading">
            <img
                src="https://img.icons8.com/color/48/000000/spinner-frame-8.png"
            />
        </div>
        <div v-else>
            <div v-if="articles.length === 0" class="article-preview">
                No articles are here... yet.
            </div>
            <ArticlePreview
                v-for="(article, index) in articles"
                :article="article"
                :key="article.title + index"
            />
            <Pagination
                :page-count="pageCount"
                :prev-text="'<'"
                :next-text="'>'"
                :container-class="'my-pagination'"
                @updateCurrentPage="currentPage = $event"
            ></Pagination>
        </div>
    </div>
</template>

<script>
import ArticlePreview from '@/components/ArticlePreview';
import { mapGetters } from 'vuex';
import { FETCH_ARTICLES } from '../store/actions.type';
import Pagination from './Pagination';

export default {
    name: 'ArticleList',
    components: {
        Pagination,
        ArticlePreview
    },
    props: {
        type: {
            type: String,
            required: false,
            default: 'all'
        },
        itemsPerPage: {
            type: Number,
            required: false,
            default: 10
        }
    },
    data() {
        return {
            currentPage: 1
        };
    },
    computed: {
        listConfig() {
            const { type } = this;
            const filter = {
                offset: (this.currentPage - 1) * this.itemsPerPage,
                limit: this.itemsPerPage
            };
            return {
                type,
                filter
            };
        },
        pages() {
            if (this.isLoading || this.articlesCount <= this.itemsPerPage) {
                return [];
            }
            return [
                ...Array(
                    Math.ceil(this.articlesCount / this.itemsPerPage)
                ).keys()
            ].map(e => e + 1);
        },
        pageCount() {
            return Math.ceil(this.articlesCount / this.itemsPerPage);
        },
        ...mapGetters(['articles', 'articlesCount', 'isLoading'])
    },
    mounted() {
        this.fetchArticles();
    },
    watch: {
        currentPage(newValue) {
            this.listConfig.filter.offset = (newValue - 1) * this.itemsPerPage;
        }
    },
    methods: {
        fetchArticles() {
            this.$store.dispatch(FETCH_ARTICLES, this.listConfig);
        },
        test() {
            alert('ok');
        }
    }
};
</script>

<style scoped></style>
