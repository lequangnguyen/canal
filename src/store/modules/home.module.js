import {ApiService} from '@/common/api.service';

const state = {
    articles: [],
};

const getters = {
    articles(state) {
        return state.articles;
    },
};

const mutations = {};

const actions = {};

export default {
    state,
    getters,
    mutations,
    actions
};
