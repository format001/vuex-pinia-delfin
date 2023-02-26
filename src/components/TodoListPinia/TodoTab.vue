<template>
  <div class="nav-wrap">
    <a
      href="javascript:;"
      class="nav-item"
      :class="{ active: todoListStore.filter === 'all' }"
      @click="setFilter('all')"
    >All</a>
    <a 
      href="javascript:;"
      class="nav-item"
      :class="{ active: todoListStore.filter === 'finished' }"
      @click="setFilter('finished')"
    >Finished</a>
    <a 
      href="javascript:;"
      class="nav-item"
      :class="{ active: todoListStore.filter === 'unfinished' }"
      @click="setFilter('unfinished')"
    >Unfinished</a>
  </div>
</template>

<script setup>
  import { useTodoListStore } from '@/piniaStore';

  const todoListStore = useTodoListStore();

  const setFilter = (filter) => {
    todoListStore.$patch({ filter })
  }
</script>

<style scoped lang="scss">
.nav-wrap{
    margin-left: 15px;
    &::after{
        content: "";
        display: block;
        clear: both;
    }

    .nav-item {
        display: block;
        float: left;
        width: 140px;
        height: 30px;
        margin-right: 14px;
        line-height: 30px;
        text-align: center;
        border-radius: 5px;
        text-decoration: none;
        color: #6c757d;
        background-color: #dee2e6;
        box-sizing: border-box;

        &.active {
            color: darkcyan;
            background-color: #d4edda;
        }
    }
}
</style>