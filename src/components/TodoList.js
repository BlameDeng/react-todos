import React from 'react'
import '../style/TodoList.scss'
const TodoList = ({ todos, filter, toggleTodo, deleteTodo, setFilter }) => {
  return (
    <ul className="list">
      <li className="todo nav">
        <div
          onClick={() => setFilter('all')}
          style={{ background: filter === 'all' ? 'rgba(0, 0, 0, 0.1)' : '' }}
        >
          全部
        </div>
        <div
          onClick={() => setFilter('unfinished')}
          style={{
            background: filter === 'unfinished' ? 'rgba(0, 0, 0, 0.1)' : ''
          }}
        >
          未完成
        </div>
        <div
          onClick={() => setFilter('finished')}
          style={{
            background: filter === 'finished' ? 'rgba(0, 0, 0, 0.1)' : ''
          }}
        >
          已完成
        </div>
      </li>
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
