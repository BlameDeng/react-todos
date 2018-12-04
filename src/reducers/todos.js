export default (state = [], action) => {
  const todos = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'add':
      todos.push(action.payload)
      return todos
    case 'delete':
      return todos.filter(todo => todo.id !== action.id)
    case 'toggle':
      return todos.map(todo => {
        if (todo.id === action.id) {
          todo.done = !todo.done
        }
        return todo
      })
    default:
      return state
  }
}
