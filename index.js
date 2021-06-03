const INCREASE = 'increase';

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        [INCREASE](state, payload) {
            state.count += payload.amount;
        }
    }
});

new Vue({
    el: '#app',
    store,
    computed: Vuex.mapState(['count']),
    methods: {
        increase(amount) {
            this.$store.commit(INCREASE, { amount });
        }
    }
});