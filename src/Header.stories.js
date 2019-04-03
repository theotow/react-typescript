import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './Header.tsx';

storiesOf('Header', module)
  .add('with text', () => (
    <Header name="header"></Header>
  ));
