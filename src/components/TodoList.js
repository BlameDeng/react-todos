import React from 'react'
import '../style/TodoList.scss'
const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="list">
      {todos.length ? (
        todos.map(todo => (
          <li className="todo" key={todo.id}>
            <span
              style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
            >
              {todo.content}
            </span>
            <div className="btn" onClick={() => toggleTodo(todo.id)}>
              {todo.done ? '标为待办' : '标为已办'}
            </div>
            <div className="btn" onClick={() => deleteTodo(todo.id)}>
              删除
            </div>
          </li>
        ))
      ) : (
        <li className="todo">还没有待办事项</li>
      )}
    </ul>
  )
}

export default TodoList
