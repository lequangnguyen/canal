<template>
    <div class="article-preview">
        <div class="article-meta">
            <a href="profile.html"
                ><img src="http://i.imgur.com/Qr71crq.jpg"
            /></a>
            <div class="info">
                <a href="" class="author">Eric Simons</a>
                <span class="date">January 20th</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> 29
            </button>
        </div>
        <router-link :to="articleLink" class="preview-link">
            <h1 v-text="article.title"></h1>
            <p v-text="article.description"></p>
            <span>Read more...</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'ArticlePreview',
    props: {
        article: {
            type: Object,
            required: true
        }
    },
    computed: {
        articleLink() {
            return {
                name: 'article',
                params: {
                    slug: this.article.slug
                }
            };
        }
    }
};
</script>

<style scoped></style>
