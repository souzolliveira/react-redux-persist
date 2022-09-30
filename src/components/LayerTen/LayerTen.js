import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../../redux/reducer/types';

import '../styles.css';

const LayerTen = ({ state, setState, side }) => {
  const dispatch = useDispatch();
  const { value } = useSelector(store => store.reducerExample);

  const handleSubmit = e => {
    e.preventDefault();
    const newValue = e.target.newValue.value;
    setState(newValue);
    dispatch({
      type: types.ADD_VALUE,
      newValue,
    });
  };

  const handleClean = () => {
    dispatch({ type: types.CLEAN_VALUE });
    setState(null);
    document.getElementById('newValue').value = '';
  };

  const handleElement = s => {
    if (s === 'left') {
      return (
        <form className='' onSubmit={e => handleSubmit(e)}>
          <input name='newValue' id='newValue' maxLength={5} />
          <button type='submit'>Submit</button>
          <button type='button' onClick={() => handleClean()}>
            Clean
          </button>
        </form>
      );
    }
    if (s === 'right') {
      return (
        <div className='content'>
          <div className='inputGroup'>
            <span>Prop Drilling</span>
            <span>Value: {state}</span>
          </div>
          <div className='inputGroup'>
            <span>Redux</span>
            <span>value: {value}</span>
          </div>
        </div>
      );
    }
    return <></>;
  };
  return <div className='container'>{handleElement(side)}</div>;
};

export default LayerTen;
