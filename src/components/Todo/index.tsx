import * as React from 'react';
import './style.css';

interface Props {
  onClick: (e: any) => void;
  text: string;
  completed: boolean;
  isLast: boolean;
}

export default class Todo extends React.Component<Props, any> {
  render() {
    let className: string = 'todo';
    if (!this.props.isLast) {
      className += ' notlast';
    }
    if (this.props.completed) {
      className += ' completed';
    }
    return (
      <li className={className}
      onClick={this.props.onClick}
      >
        {this.props.text}
      </li>
    );
  }
}
