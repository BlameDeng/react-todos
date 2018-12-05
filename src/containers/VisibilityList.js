import { connect } from 'react-redux'
import TodoList from '../components/TodoList.js'
import { toggleTodo, deleteTodo, setFilter } from '../actions/index.js'

const getVisibleTodos = (todos, filter) => {
  if (filter === 'all') {
    return todos
  } else if (filter === 'finished') {
    return todos.filter(todo => todo.done)
  } else if (filter === 'unfinished') {
    return todos.filter(todo => !todo.done)
  }
}

const mapStateToProps = state => ({
  filter: state.filter,
  todos: getVisibleTodos(state.todos, state.filter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  setFilter: filter => dispatch(setFilter(filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
