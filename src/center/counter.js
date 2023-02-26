export default {
    state: {
        count: 0
    },
    getters: {
        double (store) {
            return store.count * 2;
        }
    },
    actions: {
        setCount (store, num) {
            store.count += num;
        }
    }
}