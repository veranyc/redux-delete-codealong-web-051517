import React, { Component } from 'react';

class Todo extends Component {

//the action object here includes delete as type and the id as the payload. the action is now being
//passed to the reducer by the dispatch method
  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_TODO',
      id: this.props.id,
    })
  }
  render() {
    return (
      <li>
        {this.props.text}
        <button onClick={this.handleOnClick} /
      </li>
    );
  }
};

export default Todo
