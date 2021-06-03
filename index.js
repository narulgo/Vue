const User = {
    data() {
        return {
            user: {},
            loading: true
        };
    },
    async beforeRouteEnter(to, from, next) {
        const user = await Promise.resolve({ id: to.params.id });
        next(vm => vm.setUser(user));
    },
    async beforeRouteUpdate(to, from, next) {
        const user = await Promise.resolve({ id: to.params.id });
        this.setUser(user);
        next();
    },
    methods: {
        setUser(user) {
            this.loading = true;
            this.user = user;
            this.loading = false;
        }
    },
    template: `
    <div>
      <div v-if='!loading'>user: {{user.id}}</div>
      <div v-if='loading'>Loading</div>
    </div>
  `
};

const routes = [
    {
        path: '/:id',
        component: User
    }
];

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router
});