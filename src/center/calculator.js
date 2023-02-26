export default {
    state: {
        num1: 0,
        num2: 0,
        sign: '+'
    },
    getters: {
        plus (store) {
            return Number(store.num1 + store.num2)
        },
        minus (store) {
            return Number(store.num1 - store.num2)
        },
        result (store) {
            switch (store.sign) {
                case '+':
                    return this.plus;
                case '-':
                    return this.minus;
                default:
                    return 0;
            }
        }
    },
    actions: {
        setSign (store, sign) {
            store.sign = sign;
        }
    }
}