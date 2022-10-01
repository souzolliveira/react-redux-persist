import React, { useEffect, useState } from 'react';

import handleEffect from '../../helpers/binders';

import LayerSeven from '../LayerSeven/LayerSeven';

import '../styles.css';

const LayerSix = ({ state, setState, side }) => {
  const [intermediateState, setIntermediateState] = useState(null);
  const [tinted, setTinted] = useState(false);

  useEffect(() => {
    if (state === intermediateState) return;
    setTimeout(() => {
      if (side === 'left') setState(intermediateState);
      else if (side === 'right') setIntermediateState(state);
      setTinted(true);
    }, [500]);
  }, [state, setState, intermediateState, side]);

  return (
    <div className={`container ${handleEffect(state, intermediateState)} ${tinted ? 'tint' : ''}`}>
      <LayerSeven state={side === 'left' ? state : intermediateState} setState={setIntermediateState} side={side} />
    </div>
  );
};

export default LayerSix;
