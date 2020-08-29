import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        exactCount: state => state.count,
        doubleCount: state => state.count * 2,
        oddOrEven: state => state.count % 2 ? 'odd' : 'even'
    }
});

export default store;
