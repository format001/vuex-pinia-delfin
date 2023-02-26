<template>
    <div class="list">
        <div
            v-for="item of store.getters.filteredTodos"
            :key="item.id"
            class="item"
        >
            <input
                type="checkbox"
                :checked="item.isFinished"
                @click="toggleTodo(item.id)"
            >
            <span
                class="text"
                :class="{ finished: item.isFinished }">{{ item.text }}</span>
            <button
                @click="removeTodo(item.id)"
                class="btn"
            >
                DELETE
            </button>
        </div>
    </div>
</template>

<script setup>
    import {useStore} from '../../vuex/index.js'
   // import {useStore} from 'vuex'

    const store = useStore();
    const toggleTodo = (id) => {
        store.dispatch('toggleTodo', id);
    }

    const removeTodo = (id) => {
        store.dispatch('removeTodo', id);
    }

</script>

<style scoped lang="scss">
.list{
    margin:0 15px;
    .item{
        margin-bottom: 4px;

        .text{
            margin-left: 16px;
            &.finished{
                color: #6c757d;
            }
        }

        .btn{
            float: right;
            margin-left: 10px;
            padding: 4px 10px;
            border-radius: 5px;
            border: 0;
            cursor: pointer;
            color: #721c24;
            background-color: #f8d7da;
            border-color: #f5c6cb;
        }
    }

}
</style>