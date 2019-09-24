import Vue from 'vue';

const state = {
    article: {},
    comments: []
};

const getters = {
    article(state) {
        return state.article;
    },
    comments(state) {
        return state.comments;
    }
};

const mutations = {};

const actions = {};

export default {
    state,
    getters,
    mutations,
    actions
};
