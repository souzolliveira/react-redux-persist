import React from 'react';

import LayerThree from '../LayerThree/LayerThree';

import '../styles.css';

const LayerTwo = ({ state, setState, side }) => {
  return (
    <div className='container'>
      <LayerThree state={state} setState={setState} side={side} />
    </div>
  );
};

export default LayerTwo;
