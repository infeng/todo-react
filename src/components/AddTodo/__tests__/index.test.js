import React from 'react';
import { render, mount } from 'enzyme';
import AddTodo from '..';

function createAddTodo(props) {
  return (
    <AddTodo {...props}/>
  );
}

describe('AddTodo', () => {
  it('render AddTodo correctly', () => {
    let addTodo = createAddTodo();

    let wrapper = render(addTodo);
    expect(wrapper).toMatchSnapshot();
  });
  
  it('click', () => {
    let onAddClick = jest.fn();
    let addTodo = createAddTodo({onAddClick});

    let wrapper = mount(addTodo);
    wrapper.find('input').node.value = '233';  
    wrapper.find('button').simulate('click');
    expect(onAddClick).toBeCalledWith('233');
  });
});