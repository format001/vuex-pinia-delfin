import {
    forEachValueKey
} from './utils.js'
import {computed} from 'vue'

/*
* function forEachValueKey (obj, callback) {
*   Object.keys(obj).forEach(key => callback(obj[key], key));
* }
* */

function createMutations (store, mutations) {
    forEachValueKey(mutations, (mutationFn, mutationKey) => {
        store._mutations[mutationKey] = (payload) => {
            mutationFn.apply(store, [store.state, payload]);
        }
    })
}

function createActions (store, actions) {
    forEachValueKey(actions, (actionFn, actionKey) => {
        store._actions[actionKey] = (payload) => {
            actionFn.apply(store, [store, payload]);
        }
    })
}

function createGetters (store, getters) {
    forEachValueKey(getters, (getterFn, getterKey) => {
        Object.defineProperty(store.getters, getterKey, {
            get: () => computed(() => getterFn(store.state, store.getters)).value
        })
    })
}

function createCommit (store, commit) {
    store.commit = function (type, payload) {
        commit.apply(store, [type, payload]);
    }
}

function createDispatchFn (store, dispatch) {
    store.dispatch = function (type, payload) {
        dispatch.apply(store, [type, payload]);
    }
}

export {
    createActions,
    createMutations,
    createGetters,
    createCommit,
    createDispatchFn
}