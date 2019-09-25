import Vue from 'vue';
import Vuex from 'vuex';
import article from '@/store/modules/article.module.js';
import home from '@/store/modules/home.module.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        article,
        home
    }
});
