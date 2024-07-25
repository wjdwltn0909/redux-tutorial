let INSERT_TODO = 'todos/INSERT_TODO'
let TOGGLE_TODO = 'todos/TOGGLE_TODO'

let nextId = 1
export let insertToDo = text => ({
    type: INSERT_TODO,
    todo: {
        id: nextId++,
        text
    }
})
export let toggleToDo= id => ({
    type: TOGGLE_TODO,
    id
})

let initialState = [];

export default function todoReducer(state=initialState, action) {
    switch (action.type) {
        case INSERT_TODO:
            return state.concat(action.todo)
        case TOGGLE_TODO:
            return state.map(
                t => t.id === action.id? {...t, completed:
                    !t.completed}: t
            )
        default:
            return state;
    }
}