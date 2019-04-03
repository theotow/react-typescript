import React, { useReducer } from 'react';
import immer from 'immer';

interface State {
  count: number;
}

interface Action {
  type: string;
  whatever: string;
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'increase':
      return immer(state, (snap) => {
        snap.count += 1;
      });
    default:
      return state;
  }
}

export default function Hooks1() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <p>You clicked {state.count} times</p>
      // @ts-ignore
      <button onClick={() => dispatch({ type: 'increase' })}>Click me</button>
    </div>
  );
}
