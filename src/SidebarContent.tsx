import * as React from 'react';
import Person, { PersonDetails } from './Person';
import HealthCover from './HealthCover';
import Children, { ChildrenDetails } from './Children';
import produce from 'immer';

type PersonKeys = 'person1' | 'person2';
type PersonKeysOpen = 'person1_isOpen' | 'person2_isOpen' | 'children_isOpen';
type HealthCoverBoolKeys = 'gp' | 'special' | 'dental';
type HealthCoverDetails = {
  excess: number;
  gp: boolean;
  special: boolean;
  dental: boolean;
};

type IState = {
  person1: PersonDetails | null;
  person2: PersonDetails | null;
  person1_isOpen: boolean;
  person2_isOpen: boolean;
  children_isOpen: boolean;
  children: ChildrenDetails | null;
  healthOptions: HealthCoverDetails;
};

const DEFAULT_PERSON: PersonDetails = { name: '', gender: '' };
const DEFAULT_CHILD: ChildrenDetails = { count: 0 };

function SidebarContent() {
  const [state, setState] = React.useState<IState>({
    person1_isOpen: false,
    person2_isOpen: false,
    children_isOpen: false,
    person1: null,
    person2: null,
    children: null,
    healthOptions: { excess: 500, gp: false, special: false, dental: false }
  });
  const handleEdit = (val: PersonKeysOpen) => () => {
    setState(
      produce(draft => {
        draft[val] = true;
      })
    );
  };
  const cancelEdit = (val: PersonKeysOpen) => () => {
    setState(
      produce(draft => {
        draft[val] = false;
      })
    );
  };
  const handleRemove = (val: PersonKeys, val2: PersonKeysOpen) => () => {
    setState(
      produce(draft => {
        draft[val] = null;
        draft[val2] = false;
      })
    );
  };
  const handleUpdatePerson = (val: PersonKeys, val2: PersonKeysOpen) => (
    newState: Partial<PersonDetails>
  ) => {
    setState(
      produce(draft => {
        if (!draft[val]) draft[val] = { ...DEFAULT_PERSON };
        draft[val]!.name = newState.name || '';
        draft[val]!.gender = newState.gender || '';
        draft[val2] = false;
      })
    );
  };
  const handleUpdateChildren = (newState: Partial<ChildrenDetails>) => {
    setState(
      produce(draft => {
        const val = 'children';
        const val2 = 'children_isOpen';
        if (!draft[val]) draft[val] = { ...DEFAULT_CHILD };
        draft[val]!.count = newState.count || 0;
        if (newState.count === 0) draft[val] = null;
        draft[val2] = false;
      })
    );
  };
  const setExcess = (val: string) => {
    setState(
      produce(draft => {
        draft.healthOptions.excess = parseInt(val);
      })
    );
  };
  const setHealthCoverBool = (name: HealthCoverBoolKeys) => (val: boolean) => {
    setState(
      produce(draft => {
        draft.healthOptions[name] = val;
      })
    );
  };
  return (
    <div>
      <hr />
      <div style={{ wordBreak: 'break-all' }}>{JSON.stringify(state)}</div>
      <hr />
      <Person
        isOpen={state.person1_isOpen}
        defaultState={state.person1 || DEFAULT_PERSON}
        updateState={handleUpdatePerson('person1', 'person1_isOpen')}
        clickEdit={handleEdit('person1_isOpen')}
        cancelEdit={cancelEdit('person1_isOpen')}
      />
      <Person
        removePerson={handleRemove('person2', 'person2_isOpen')}
        isOpen={state.person2_isOpen}
        defaultState={state.person2 || DEFAULT_PERSON}
        updateState={handleUpdatePerson('person2', 'person2_isOpen')}
        clickEdit={handleEdit('person2_isOpen')}
        cancelEdit={cancelEdit('person2_isOpen')}
      />
      <Children
        updateState={handleUpdateChildren}
        isOpen={state.children_isOpen}
        clickEdit={handleEdit('children_isOpen')}
        cancelEdit={cancelEdit('children_isOpen')}
        defaultState={state.children || DEFAULT_CHILD}
      />

      <HealthCover
        excess={state.healthOptions.excess}
        gp={state.healthOptions.gp}
        dental={state.healthOptions.dental}
        special={state.healthOptions.special}
        setGp={setHealthCoverBool('gp')}
        setDental={setHealthCoverBool('dental')}
        setSpecial={setHealthCoverBool('special')}
        setExcess={setExcess}
      />
    </div>
  );
}

export default SidebarContent;
