import React from 'react';

import LayerSix from '../LayerSix/LayerSix';

import '../styles.css';

const LayerFive = ({ state, setState, side }) => {
  return (
    <div className='container'>
      <LayerSix state={state} setState={setState} side={side} />
    </div>
  );
};

export default LayerFive;
