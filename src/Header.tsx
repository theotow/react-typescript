import * as React from 'react';
import styled from 'styled-components';
import Loadable from 'react-loadable';
import Example from './Hooks1';
import * as Context from './context';

const HeaderComp = styled.header`
  text-align: center;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

const LoadableComponent = Loadable({
  loader: () => import('./Button'),
  loading: () => null
});

function Header() {
  const context = React.useContext(Context.Context);
  return (
    <HeaderComp>
      <Example />
      <LoadableComponent
        onClick={() => context.setSidebar(true)}
        name="button name"
      />
    </HeaderComp>
  );
}

export default Header;
