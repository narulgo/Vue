new Vue({
    el: '#app',
    data: {
        persons: ['Joe', 'Mary']
    },
    methods: {
        addPerson() {
            Vue.set(this.persons, 5, 'Jane');
        }
    }
});