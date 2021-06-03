new Vue({
    el: '#app',
    data: {
        persons: ['Joe', 'Mary']
    },
    methods: {
        addPerson() {
            this.persons.length = 5;
            this.persons.splice(5, 1, 'Jane');
        }
    }
});