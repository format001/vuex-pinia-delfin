<template>
    <div class="todolist">
        <div class="title">todoList-pinia</div>
        <todo-tab></todo-tab>
        <todo-form></todo-form>
        <todos></todos>
        <div class="hr"></div>
    </div>
</template>

<script setup>
  import TodoTab from './TodoTab.vue';
  import TodoForm from './TodoForm.vue';
  import Todos from './Todos.vue';
</script>

<style scoped lang="scss">
.todolist{
    margin-left: 50px;
    width: 480px;
    border-radius: 10px;
    padding-bottom: 100px;
    border: 1px solid #b8dbc0;
    box-sizing: border-box;
    overflow: hidden;

    .title{
        width: 100%;
        height: 38px;
        margin-bottom: 8px;
        line-height: 38px;
        text-align: center;
        color: #155724;
        background-color: #b8dbc0;
    }
}

</style>