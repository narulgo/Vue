const store = new Vuex.Store({
    state: {
        todos: [
            { id: 1, text: 'todo1', done: true },
            { id: 2, text: 'todo2', done: false }
        ]
    },
    getters: {
        getTodoById: state => id => {
            return state.todos.find(todo => todo.id === id);
        }
    }
});

new Vue({
    el: '#app',
    store,
    computed: Vuex.mapState({
        todos: 'todos'
    }),
    methods: {
        getTodoById(id) {
            return this.$store.getters.getTodoById(id);
        }
    }
});