<template>
    <div>
        <p>{{ user.TITLE }}
            <span v-if="user.MARK">「{{ user.MARK }}」</span>
        </p>
        <p>{{ user.userInfo.name }}</p>
        <p>{{ user.userInfo.age }}</p>
        <p v-if="user.userInfo.height">{{ user.userInfo.height }}</p>
        <p>
            <button @click="setName('李四')">set name</button>
            <button @click="user.setAge('20')">set age</button>
            <button @click="user.setHeight('180')">set height</button>
            <button @click="user.$resetState">reset state</button>
            <button @click="user.$resetStore">reset store</button>
        </p>
    </div>
    <hr>
    <div>
        <h1>count: {{ counter.count }}</h1>
        <h1>double: {{ double }}</h1>
        <h3 v-if="counter.triple">triple: {{ counter.triple }}</h3>
        <button @click="setCount(1)">set counter</button>
        <button @click="counter.$resetStore">reset store</button>
    </div>
    <hr>
    <div>
        <h1>{{ calculator.result }}
        </h1>
        <input type="number" v-model="calculator.num1" placeholder="num1"/>
        <span>{{ calculator.sign }}</span>
        <input type="number" v-model="calculator.num2" placeholder="num2"/>
        <p>
            <button @click="setSign('+')">+</button>
            <button @click="setSign('-')">-</button>
        </p>
    </div>
    <hr>
    <div v-if="student">
        <ul>
            <li v-for="item of student.students"
                :key="item.id"
            >
                <p>ID: {{ item.ID }}</p>
                <p>name: {{ item.name }}</p>
                <p>age: {{ item.age }}</p>
            </li>
        </ul>
        <button @click="addStudent">add student</button>
    </div>
</template>

<script setup>
    import {computed, onMounted, ref} from 'vue'




    import useUserStore from '@/center/user'
    const user = useUserStore();

    import { useCenter } from '@/delfin/index.js'
    const center = useCenter();
    const { counter, calculator} = center;

    const double = computed(() => counter.double)
    const setCount = (num) => {
        counter.setCount(num);
        counter.$setGetter('triple', (store) =>
            store.count * 3
        )

        counter.$parent.student.addStudent({
            id: 5,
            name: '和二',
            age: 22
        })
    }
    const setName = (name) => {
        user.setName(name);

        user.$setState('userInfo', {
            height: 176
        });
        user.$setAction('setHeight', (store, height) => {
            store.userInfo.height = height
        });
        user.$setConstant('MARK', '隐私');
    }

    const setSign = calculator.setSign;

    let student = ref(null);
    onMounted(() => {
        setTimeout(() => {
            student.value = center.$setStore('student', {
                state: {
                    students: [
                        {
                            id: 1,
                            name: '张三',
                            age: 18
                        },
                        {
                            id: 2,
                            name: '李四',
                            age: 20
                        },
                        {
                            id: 3,
                            name: '王五',
                            age: 22
                        }
                    ]
                },
                actions: {
                    addStudent (store, student) {
                        store.students.push(student);
                    }
                }
            })
        }, 1000);
    })

    const addStudent = () => {
        student.value.addStudent({
            id: 4,
            name: '赵六',
            age: 20
        })
    }
</script>
