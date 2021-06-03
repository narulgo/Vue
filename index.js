const store = new Vuex.Store({
    state: {
        count1: 0,
        count2: 0
    },
    mutations: {
        increase(state, payload) {
            state.count1 += payload.amount;
        },
        decrease(state, payload) {
            state.count2 -= payload.amount;
        }
    },
    actions: {
        async increaseAsync({ commit }, payload) {
            return Promise.resolve(commit('increase', payload));
        },
        async decreaseAsync({ commit }, payload) {
            return Promise.resolve(commit('decrease', payload));
        },
        async updateCounts({ dispatch }, payload) {
            await dispatch('increaseAsync', payload);
            await dispatch('decreaseAsync', payload);
        }
    }
});

new Vue({
    el: '#app',
    store,
    methods: {
        ...Vuex.mapActions(['updateCounts'])
    },
    computed: {
        ...Vuex.mapState(['count1', 'count2'])
    }
});