const createId = () => {
    let now = new Date().getTime()
    let str = Math.random().toFixed(8)
    return now + str
}

export const addTodo = content => ({
    type: 'add',
    payload: {
        id: createId(),
        content,
        done: false
    }
})

export const toggleTodo = id => ({
    type: 'toggle',
    id
})

export const deleteTodo = id => ({
    type: 'delete',
    id
})

export const setFilter=filter=>({
    type:'setFilter',
    filter
})