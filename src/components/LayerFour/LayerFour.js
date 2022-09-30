import React from 'react';

import LayerFive from '../LayerFive/LayerFive';

import '../styles.css';

const LayerFour = ({ state, setState, side }) => {
  return (
    <div className='container'>
      <LayerFive state={state} setState={setState} side={side} />
    </div>
  );
};

export default LayerFour;
