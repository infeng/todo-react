import React from 'react';
import { render, mount } from 'enzyme';
import Footer from '..';

function createFooter(props) {
  return (
    <Footer {...props}/>
  );
}

describe('Footer', () => {
  it('render Footer correctly', () => {
    let footer = createFooter();

    let wrapper = render(footer);
    expect(wrapper).toMatchSnapshot();
  });

  it('select filter', () => {
    let onFilterChange = jest.fn();

    let wrapper = mount(createFooter({onFilterChange}));
    
    wrapper.find('button').at(1).simulate('click');
    expect(onFilterChange).toBeCalledWith('SHOW_COMPLETED');

    wrapper.setProps({filter: 'SHOW_ACTIVE'});
    expect(wrapper.find('button').at(2).hasClass('selected')).toBe(true);
  });
});