import React from 'react';
import { mount, render } from 'enzyme';
import Todo from '..';

function createTodo(props) {
  return (
    <Todo text="hello world" {...props}/>
  );
}

describe('Todo', () => {
  it('render Todo correctly', () => {
    let todo = createTodo();

    const wrapper = render(todo);
    expect(wrapper).toMatchSnapshot();

    const wrapper2 = mount(todo);
    expect(wrapper2.text()).toBe('hello world');
  });

  it('completed Todo', () => {
    let todo = createTodo({completed: true});

    const wrapper = mount(todo);
    expect(wrapper.hasClass('completed')).toBe(true);
  });

  it('last Todo', () => {
    let todo = createTodo({isLast: true});

    const wrapper = mount(todo);
    expect(wrapper.hasClass('notlast')).toBe(false);
  });
});
