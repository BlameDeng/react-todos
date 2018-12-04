import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index.js'
import '../style/App.scss'
import AddTodo from '../containers/AddTodo.js'
import VisibilityList from '../containers/VisibilityList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <VisibilityList />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { todos: state.todos }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: content => dispatch(addTodo(content))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
