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
    },
    mutations: {
        // NEVER-EVER :  Mutate States Asynchronsouly .
        increament: state => {
            state.count += 1;
        },
        decreament: state => {
            state.count -= 1;
        },
        decreamentTwo: (state, payload) => {
            state.count -= payload.by
        },
        resetAll: state => {
            state.count = 0;
        }
    },
    actions: {
        increase: ({ commit }) => {
            commit('increament');
        },
        // The Solution to USE Asynchronousity into VUEX .
        asyncIncrease: ({ commit }) => {
            setTimeout(() => commit('increament'), 2000)
        },
        // Adding Payload
        decreaseByAmount: ({ commit }, payload) => {
            setTimeout(() => commit('decreamentTwo', payload), payload.time)
        }
    }
});

export default store;
