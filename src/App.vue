<template>
    <todo-list-vuex />
    <todo-list-pinia />
    <delfin />
</template>

<script setup>
    import TodoListVuex from './components/TodoListVuex'
    import TodoListPinia from './components/TodoListPinia'
    import Delfin from './components/Delfin'
    import {
        onBeforeMount,
        onMounted,
        onBeforeUpdate,
        onUpdated,
        onBeforeUnmount,
        onUnmounted
    } from "vue";

    onBeforeMount(() => {
        console.log('onBeforeMount')
    });
    onMounted(() => {
        console.log('onMounted')
    })
    onBeforeUpdate(() => {
        console.log('onBeforeUpdate')
    })
    onUpdated(() => {
        console.log('onUpdated')
    })
    onBeforeUnmount(() => {
        console.log('onBeforeUnmount')
    })
    onUnmounted(() => {
        console.log('onUnmounted')
    })

    // onActivated()
    // onDeactivated()


</script>

<style scoped lang="scss">

</style>
