import React from 'react';

import LayerNine from '../LayerNine/LayerNine';

import '../styles.css';

const LayerEight = ({ state, setState, side }) => {
  return (
    <div className='container'>
      <LayerNine state={state} setState={setState} side={side} />
    </div>
  );
};

export default LayerEight;
