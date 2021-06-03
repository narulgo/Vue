new Vue({
    el: '#app',
    data: {
        firstName: 'Joe',
        lastName: 'Smith'
    },
    computed: {
        name: {
            get() {
                return `${this.firstName} ${this.lastName}`;
            },
            set(newValue) {
                const [firstName, lastName] = newValue.split(' ');
                this.firstName = (firstName || '').trim();
                this.lastName = (lastName || '').trim();
            }
        }
    }
});