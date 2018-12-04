import { connect } from 'react-redux'
import TodoList from '../components/TodoList.js'
import { toggleTodo, deleteTodo } from '../actions/index.js'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)