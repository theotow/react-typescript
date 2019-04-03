import React from 'react';
import immer from 'immer';

interface Props {
  sideBarOpen: boolean;
}

interface Actions {
  setSidebar: (val: boolean) => void;
}

export const Context = React.createContext<Props & Actions>({
  sideBarOpen: false,
  setSidebar: () => {}
});

export function Provider(props: React.Props<Props>) {
  const [state, setState] = React.useState<Props>({ sideBarOpen: false });

  function setSidebar(val: boolean) {
    setState(
      immer(snap => {
        snap.sideBarOpen = val;
      })
    );
  }

  const stateAndActions = {
    ...state,
    setSidebar
  };

  return (
    <Context.Provider value={stateAndActions}>
      {props.children}
    </Context.Provider>
  );
}
