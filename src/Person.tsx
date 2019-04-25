import React, { useState, useEffect } from 'react';

function getVal<T>(func: (v: T) => void) {
  return (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    func((event.target.value as unknown) as T);
  };
}

type Gender = 'male' | 'female' | '';

export interface PersonDetails {
  name: string;
  gender: Gender;
}

interface IProps {
  updateState: (val: Partial<PersonDetails>) => void;
  defaultState: PersonDetails;
  clickEdit: () => void;
  cancelEdit: () => void;
  isOpen: boolean;
  removePerson?: () => void;
}

function equalCheck(a: { [key: string]: any }, b: { [key: string]: any }) {
  const updatedKeys = Object.getOwnPropertyNames(a).filter(key => {
    return a[key] !== b[key];
  });
  console.log('updatedKeys', updatedKeys);
  return updatedKeys.length === 0;
}

function Person(props: IProps) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState<Gender>('');
  useEffect(() => {
    setName(props.defaultState.name);
    setGender(props.defaultState.gender);
  }, [props.defaultState.name, props.defaultState.gender]);
  if (!props.isOpen) {
    if (!name && !gender) {
      return (
        <div>
          <button onClick={props.clickEdit}>Add Person</button>
        </div>
      );
    } else {
      return (
        <div>
          {name}, {gender} <button onClick={props.clickEdit}>Edit</button>
        </div>
      );
    }
  }
  return (
    <div>
      <input type="text" onChange={getVal(setName)} value={name} />
      <select value={gender} onChange={getVal(setGender)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="" />
      </select>

      <button
        onClick={() => {
          props.updateState({
            gender,
            name
          });
        }}
      >
        edit
      </button>
      <button onClick={props.cancelEdit}>cancel</button>
      {props.removePerson &&
        props.defaultState.name &&
        props.defaultState.gender && (
          <button onClick={props.removePerson}>remove</button>
        )}
    </div>
  );
}

export default Person;
