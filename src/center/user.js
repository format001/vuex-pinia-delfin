import { createStore } from '@/delfin/index.js'

export default createStore({
    state: {
        userInfo: {
            name: 'zhangSan',
            age: 18
        }
    },
    constant: {
        TITLE: '个人资料卡'
    },
    actions: {
        setName (store, name) {
            store.userInfo.name = name;
        } ,
        setAge (store, age) {
            store.userInfo.age = age;
        }
    }
})