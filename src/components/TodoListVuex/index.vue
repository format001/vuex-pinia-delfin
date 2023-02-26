<template>
    <div class="todolist">
        <div class="title">todoList-vuex</div>
        <todo-tab />
        <todo-form />
        <todos />
       <div class="hr"></div>
    </div>
</template>

<script setup>
    import TodoTab from './Tab'
    import TodoForm from './Form';
    import Todos from  './Todos'
</script>

<style scoped lang="scss">
.todolist{
    width: 480px;
    border-radius: 10px;
    padding-bottom: 100px;
    margin-left: 50px;
    margin-bottom: 20px;
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