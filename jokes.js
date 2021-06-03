const vm = new Vue({
    el: '#app',
    data: {
        message: '',
        joke: ''
    }
});

vm.$watch(
    'message',
    _.debounce(async function () {
        const res = await fetch('https://api.icndb.com/jokes/random');
        const result = await res.json();
        this.joke = result.value.joke;
    }, 500)
);