const vm = new Vue({
    el: '#app',
    data: {
        message: 'foo'
    },
    computed: {
        spelledMessage() {
            return this.message.split('').join('-');
        }
    }
}); console.log(vm.spelledMessage);