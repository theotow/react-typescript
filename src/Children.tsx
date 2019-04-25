import React, { useState, useEffect } from 'react';

function getVal<T>(func: (v: T) => void) {
  return (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    func((event.target.value as unknown) as T);
  };
}

export interface ChildrenDetails {
  count: number;
}

interface IProps {
  updateState: (val: Partial<ChildrenDetails>) => void;
  defaultState: ChildrenDetails;
  clickEdit: () => void;
  cancelEdit: () => void;
  isOpen: boolean;
}

function Children(props: IProps) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(props.defaultState.count);
  }, [props.defaultState.count]);
  if (!props.isOpen) {
    if (count === 0) {
      return (
        <div>
          <button onClick={props.clickEdit}>Add Children</button>
        </div>
      );
    } else {
      return (
        <div>
          {count} <button onClick={props.clickEdit}>Edit</button>
        </div>
      );
    }
  }
  return (
    <div>
      <select value={count} onChange={getVal(setCount)}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>

      <button
        onClick={() => {
          props.updateState({
            count: parseInt((count as unknown) as string, 10)
          });
        }}
      >
        edit
      </button>
      <button onClick={props.cancelEdit}>cancel</button>
    </div>
  );
}

export default Children;
