import React from 'react';

import LayerSeven from '../LayerSeven/LayerSeven';

import '../styles.css';

const LayerSix = ({ state, setState, side }) => {
  return (
    <div className='container'>
      <LayerSeven state={state} setState={setState} side={side} />
    </div>
  );
};

export default LayerSix;
