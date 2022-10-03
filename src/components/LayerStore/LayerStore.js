import React from 'react';
import { useSelector } from 'react-redux';

import '../styles.css';

const LayerStore = () => {
  const { whiteValue } = useSelector(store => store.whiteReducer);
  const { blackValue } = useSelector(store => store.blackReducer);

  return (
    <div id='store' className='store'>
      <span>Redux</span>
      <span>White value: {whiteValue}</span>
      <span>Black value: {blackValue}</span>
    </div>
  );
};

export default LayerStore;
