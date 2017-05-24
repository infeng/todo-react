import React from 'react';
import { render, mount, shallow } from 'enzyme';
import AddTodo from '..';

function createAddTodo(props) {
  return (
    <AddTodo {...props}/>
  );
}

describe('AddTodo', () => {
  it('render AddTodo correctly', () => {
    let addTodo = createAddTodo();

    let wrapper1 = shallow(addTodo);
    expect(wrapper1.find('input').exists());

    let wrapper2 = render(addTodo);
    expect(wrapper2).toMatchSnapshot();
  });
  
  it('onAddClick() shoule be called after input text', () => {
    let onAddClick = jest.fn();
    let addTodo = createAddTodo({onAddClick});

    let wrapper = mount(addTodo);
    let input = wrapper.find('input');
    let button = wrapper.find('button');

    input.node.value = '233';  
    button.simulate('click');
    expect(onAddClick).toBeCalledWith('233');
  });

    it('clear input value after add todo', () => {
    let onAddClick = jest.fn();
    let addTodo = createAddTodo({onAddClick});

    let wrapper = mount(addTodo);
    let input = wrapper.find('input');
    let button = wrapper.find('button');

    input.node.value = '233';  
    button.simulate('click');
    expect(input.node.value).toBe('');
  });

  it('onAddClick() shoule not be called whihout input text', () => {
    let onAddClick = jest.fn();
    let addTodo = createAddTodo({onAddClick});

    let wrapper = mount(addTodo);
    let button = wrapper.find('button');

    button.simulate('click');
    expect(onAddClick).not.toBeCalled();
  });
});