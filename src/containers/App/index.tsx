import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter } from '../../actions';
import AddTodo from '../../components/AddTodo';
import { TodoList } from '../../components/TodoList';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as filters from '../../constants/filters';
import { TodoState } from '../../reducers';

import './style.css';

interface Props {
  data: TodoState;
  dispatch: any;
}

export class App extends React.Component<Props, any> {
  render() {
    const { todos, filter } = this.props.data;

    let visibleTodos = todos;
    switch (filter) {
      case filters.SHOW_ALL:
        visibleTodos = todos;
        break;
      case filters.SHOW_COMPLETED:
        visibleTodos = todos.filter(todo => todo.completed);
        break;
      case filters.SHOW_ACTIVE:
        visibleTodos = todos.filter(todo => !todo.completed);
        break;
      default:
        break;
    }

    return(
      <div className="container">
        <Header />
        <div className="wrapper">
          <AddTodo
          onAddClick={text => {
            this.props.dispatch(addTodo({
              text: text,
            }));
          }}
          />
          <TodoList
          todos={visibleTodos}
          onTodoClick={index => {
            this.props.dispatch(completeTodo({
              index: index,
            }));
          }}
          />
          <Footer
          filter={this.props.data.filter}
          onFilterChange={nextFilter => {
            this.props.dispatch(setVisibilityFilter({
              filter: nextFilter,
            }));
          }}
          />
        </div>
      </div>
    );
  }
}

function mapState2Props(state) {
  return {
    data: state.app,
  };
}

export var TodoApp = connect(mapState2Props)(App);
