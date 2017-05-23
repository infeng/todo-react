import * as React from 'react';
import Todo from '../Todo';
import { TodoModel } from '../../reducers';

import './style.css';

export interface TodoModel {
  text: string;
  completed: boolean;
}

interface Props {
  onTodoClick: (index: number) => void;
  todos: TodoModel[];
}

export class TodoList extends React.Component<Props, any> {
  render() {
    let todosNode: any = this.props.todos.map((todo, index) => {
      return (
        <Todo
        key={index}
        onClick={() => this.props.onTodoClick(index)}
        text={todo.text}
        completed={todo.completed}
        isLast={index === (this.props.todos.length - 1) ? true : false}
        /> 
      );
    });
    if (this.props.todos.length === 0) {
      todosNode = <p className="todo no-todo-list">Nothing</p>;
    }
    return (
      <ul id="todo-list">
        {todosNode}
      </ul>
    );
  }
}
