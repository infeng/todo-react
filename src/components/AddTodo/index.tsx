import * as React from 'react';

import './style.css';

interface Props {
  onAddClick: (e: any) => void;
}

export default class AddTodo extends React.Component<Props, any> {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const node = this.refs['input'] as HTMLInputElement;
    const text: string = node.value.trim();
    if (!text) {
      return;
    }
    this.props.onAddClick(text);
    node.value = '';
  }

  render () {
    return (
      <div id="add-todo">
        <input type="text" ref="input" placeholder="What needs to be done?" />
        <button onClick={this.handleClick} >
        Add
        </button>
      </div>
    );
  }
}
