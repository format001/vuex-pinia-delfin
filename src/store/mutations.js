export default {
    addTodo(state, text) {
        state.todos.push({
            id: state.id ++,
            text,
            isFinished: false
        })
    },
    removeTodo (state, id) {
        state.todos = state.todos.filter(todo => todo.id !== id);
    },
    toggleTodo (state, id) {
        state.todos = state.todos.map( todo => {
            if (todo.id === id) {
                todo.isFinished = !todo.isFinished;
            }
            return todo;
        })
    },
    setFilter(state, filter) {
        state.filter = filter;
    }
}