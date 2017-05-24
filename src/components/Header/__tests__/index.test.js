import React from 'react';
import { mount, render } from 'enzyme';
import Header from '..';

function createHeader() {
  return (
    <Header/>
  );
}

describe('Header', () => {
  it('render Header correctly', () => {
    let header = createHeader();

    const wrapper = render(header);
    expect(wrapper).toMatchSnapshot();

    const wrapper2 = mount(header);
    expect(wrapper2.text()).toBe('Todos');
  });
});