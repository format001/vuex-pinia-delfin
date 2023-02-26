<template>
    <div class="input-wrap">
        <input
            class="input"
            type="text"
            placeholder="Please input something..."
            v-model="inputRef"
        >
        <button
            class="btn"
            @click="addTodo"
        >
        ADD TODO
        </button>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    import {useStore} from '../../vuex/index.js'
    // import {useStore} from 'vuex'

    const store = useStore();
    const inputRef = ref('');

    const addTodo = () => {
        store.dispatch('addTodo', inputRef.value);
        inputRef.value = '';
    }
</script>

<style scoped lang="scss">
.input-wrap{
    margin: 16px 15px;

    .input {
        width: 340px;
        height: 30px;
        padding: 0 15px;
        box-sizing: border-box;
        background-color: #fff;
        border: 1px solid #999;
        border-radius: 5px;
        outline: none;
        transition: all .2s linear;

        &:focus {
            border-color: #1890ff;
            box-shadow: 0 0 3px #1890ff;
        }
    }

    .btn{
        margin-left: 10px;
        padding: 6px 14px;
        border-radius: 5px;
        border: 0;
        cursor: pointer;
        color: #155724;
        background-color: #d4edda;
        border-color: #b8dbc0;
    }
}

</style>