new Vue({
    el: '#app',
    data: {
        persons: [{ name: 'Joe' }, { name: 'Jane' }, { name: 'Mary' }]
    },
    methods: {
        filterPerson() {
            this.persons = this.persons.filter(p => p.name !== 'Joe');
        }
    }
});