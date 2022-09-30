import React from 'react';

import LayerTwo from '../LayerTwo/LayerTwo';

import '../styles.css';

const LayerOne = ({ state, setState, side }) => {
  return (
    <div className='container'>
      <LayerTwo state={state} setState={setState} side={side} />
    </div>
  );
};

export default LayerOne;
