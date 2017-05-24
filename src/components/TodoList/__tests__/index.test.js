import React from 'react';
import { render, shallow } from 'enzyme';
import TodoList from '..';

function createTodoList(props) {
  return (
    <TodoList {...props}/>
  );
}

describe('Footer', () => {
  it('render Footer correctly', () => {
    let todoList = createTodoList({
      todos: [
        {
          text: 'hello world',
          completed: false,
        },
        {
          text: '233',
          completed: false,
        }
      ],
    });

    let wrapper = render(todoList);
    expect(wrapper).toMatchSnapshot();
  });

  it('render correctly when no todos', () => {
    let todoList = createTodoList({
      todos: []
    });

    let wrapper = render(todoList);
    expect(wrapper).toMatchSnapshot();    
  });

  it('click todo', () => {
    let onTodoClick = jest.fn();

    let todoList = createTodoList({
      todos: [
        {
          text: 'hello world',
          completed: false,
        },
        {
          text: '233',
          completed: false,
        }
      ],
      onTodoClick,
    });

    let wrapper = shallow(todoList);
    wrapper.find('Todo').at(0).simulate('click');
    expect(onTodoClick).toBeCalledWith(0);
  });
});