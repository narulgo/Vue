new Vue({
    el: '#app',
    data: {
        foo: 'bar'
    },
    updated() {
        console.log(this.$refs.foo.textContent);
    },
    methods: {
        toggle() {
            this.foo = this.foo === 'bar' ? 'baz' : 'bar';
        }
    }
});