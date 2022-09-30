import React from 'react';

import LayerEight from '../LayerEight/LayerEight';

import '../styles.css';

const LayerSeven = ({ state, setState, side }) => {
  return (
    <div className='container'>
      <LayerEight state={state} setState={setState} side={side} />
    </div>
  );
};

export default LayerSeven;
