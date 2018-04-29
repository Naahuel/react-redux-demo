import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

/**
 * Renders a component to add a todo
 */
class AddTodo extends Component {

  constructor(props){
    super(props);
    // Binding
    this._handleSubmit = this._handleSubmit.bind(this);
    // Refs
    this.refInput = createRef();
  }

  _handleSubmit(e){
    e.preventDefault()
    if (!this.refInput.current.value.trim()) {
      return
    }
    this.props.dispatch(addTodo(this.refInput.current.value))
    this.refInput.current.value = ''
  }

  render(){
    let input;

    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input ref={this.refInput} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo)