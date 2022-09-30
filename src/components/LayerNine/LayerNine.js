import React from 'react';

import LayerTen from '../LayerTen/LayerTen';

import '../styles.css';

const LayerNine = ({ state, setState, side }) => {
  return (
    <div className='container'>
      <LayerTen state={state} setState={setState} side={side} />
    </div>
  );
};

export default LayerNine;
