import * as React from 'react';
import Loadable from 'react-loadable';
import * as Context from './context';
import { css } from 'emotion';

const LoadableComponent = Loadable({
  loader: () => import('./Button'),
  loading: () => null
});

const main = css`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  &:hover {
    color: red;
  }
`;

function Header() {
  const context = React.useContext(Context.Context);
  return (
    <div className={main}>
      <LoadableComponent
        onClick={() => context.setSidebar(true)}
        name="button name"
      />
    </div>
  );
}

export default Header;
