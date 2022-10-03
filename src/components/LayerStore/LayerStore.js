import React from 'react';
import { useSelector } from 'react-redux';

import '../styles.css';

const LayerStore = () => {
  const { whiteValue } = useSelector(store => store.whiteReducer);
  const { blackValue } = useSelector(store => store.blackReducer);

  return (
    <div className='store'>
      <div id='store' className='inputGroup'>
        <span>Redux</span>
        <span>White value: {whiteValue}</span>
        <span>Black value: {blackValue}</span>
      </div>
    </div>
  );
};

export default LayerStore;
