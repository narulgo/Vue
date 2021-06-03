const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increase(state) {
            state.count++;
        }
    }
});

Vue.component('counter', {
    data() {
        return {
            localCount: 1
        };
    },
    template: `
    <div>
      <div>{{ count }}</div>
      <div>{{ countAlias }}</div>
      <div>{{ countPlusLocal }}</div>
    </div>
  `,
    computed: Vuex.mapState({
        count: state => state.count,
        countAlias: 'count',
        countPlusLocal(state) {
            return state.count + this.localCount;
        }
    })
});

new Vue({
    el: '#app',
    store
});