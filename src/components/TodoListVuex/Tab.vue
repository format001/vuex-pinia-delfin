<template>
    <div class="nav-wrap">
        <a
            href="javascript:;"
            class="nav-item"
            @click="setFilter('all')"
            :class="{active: $store.state.filter === 'all'}"
        >ALL</a>
        <a
            href="javascript:;"
            class="nav-item"
            @click="setFilter('finished')"
            :class="{active: $store.state.filter === 'finished'}"
        >Finished</a>
        <a
            href="javascript:;"
            class="nav-item"
            @click="setFilter('unfinished')"
            :class="{active: $store.state.filter === 'unfinished'}"
        >Unfinished</a>
    </div>
</template>

<script setup>

    import {useStore} from '@/vuex/index.js'
    // import {useStore} from 'vuex'

    const store = useStore();

    const setFilter = (filter) => {
        store.commit('setFilter', filter);
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