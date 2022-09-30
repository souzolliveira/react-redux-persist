import React from 'react';

import LayerFour from '../LayerFour/LayerFour';

import '../styles.css';

const LayerThree = ({ state, setState, side }) => {
  return (
    <div className='container'>
      <LayerFour state={state} setState={setState} side={side} />
    </div>
  );
};

export default LayerThree;
