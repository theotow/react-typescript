import React, { useState, useEffect } from 'react';

function getVal<T>(func: (v: T) => void) {
  return (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    func((event.target.value as unknown) as T);
  };
}
function getValCheck<T>(func: (v: T) => void) {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    func((event.target.checked as unknown) as T);
  };
}

interface IProps {
  excess: number;
  dental: boolean;
  gp: boolean;
  special: boolean;
  setExcess: (val: string) => void;
  setGp: (val: boolean) => void;
  setDental: (val: boolean) => void;
  setSpecial: (val: boolean) => void;
}

function HealthCover(props: IProps) {
  return (
    <div>
      <select value={props.excess} onChange={getVal(props.setExcess)}>
        <option value="0">0</option>
        <option value="250">250</option>
        <option value="500">500</option>
      </select>
      <label htmlFor="special">specialist</label>
      <input
        type="checkbox"
        id="special"
        checked={props.special}
        onChange={getValCheck(props.setSpecial)}
      />
      <label htmlFor="gp">gp</label>
      <input
        type="checkbox"
        id="gp"
        checked={props.gp}
        onChange={getValCheck(props.setGp)}
      />
      <label htmlFor="dental">dental</label>
      <input
        type="checkbox"
        id="dental"
        checked={props.dental}
        onChange={getValCheck(props.setDental)}
      />
    </div>
  );
}

export default HealthCover;
