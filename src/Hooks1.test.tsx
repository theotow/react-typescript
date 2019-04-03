import Hooks1 from './Hooks1';
import React from 'react';
import { mount } from 'enzyme';

test('hooks', () => {
  const ele = mount(<Hooks1 />);
  ele.find('button').simulate('click');
  expect(ele).toMatchSnapshot();
});
