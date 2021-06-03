const moduleA = {
    namespaced: true,
    state: {
        count: 0
    },
    mutations: {
        increase(state, payload) {
            state.count += payload.amount;
        }
    },
    actions: {
        increase({ commit }, payload) {
            commit('increase', payload);
        }
    }
};

const moduleB = {
    namespaced: true,
    state: {
        count: 1
    },
    mutations: {
        increase(state, payload) {
            state.count += payload.amount;
        }
    },
    actions: {
        increase({ commit }, payload) {
            commit('increase', payload);
        }
    }
};

const store = new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    }
});

new Vue({
    el: '#app',
    store,
    computed: {
        ...Vuex.mapState({
            a: state => state.a,
            b: state => state.b
        })
    },
    methods: {
        increaseA(payload) {
            this.$store.dispatch('a/increase', payload);
        },
        increaseB(payload) {
            this.$store.dispatch('b/increase', payload);
        }
    }
});