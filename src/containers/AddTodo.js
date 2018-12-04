import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index.js'
import '../style/AddTodo.scss'

const AddTodo = ({ dispatch }) => {
  let input = null
  return (
    <div className="add-todo">
      <input type="text" ref={node => (input = node)} />
      <div
        className="add"
        onClick={() => {
          if (!input.value) return
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        添加
      </div>
    </div>
  )
}

export default connect()(AddTodo)
