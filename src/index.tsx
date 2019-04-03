import * as ReactDom from 'react-dom';
import * as React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Provider, Context } from './context';

function App() {
  return (
    <Provider>
      <Header />
      <Context.Consumer>
        {state => (
          <Sidebar
            isOpen={state.sideBarOpen}
            onClose={() => state.setSidebar(false)}
          />
        )}
      </Context.Consumer>
    </Provider>
  );
}

ReactDom.render(<App />, document.querySelector('#app'));
