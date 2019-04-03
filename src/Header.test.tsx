import Header from './Header';
import React from 'react';
import { shallow } from 'enzyme';

test('two plus two is four', () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});
