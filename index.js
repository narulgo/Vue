new Vue({
    el: '#app',
    data: { states: ['foo', 'bar', 'baz'], state: '', index: 0 },
    methods: {
        rotate() {
            this.index = (this.index + 1) % this.states.length;
            this.state = this.states[this.index];
        }
    }
});