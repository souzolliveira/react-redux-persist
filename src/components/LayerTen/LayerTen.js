import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as whiteTypes from '../../redux/whiteReducer/types';
import * as blackTypes from '../../redux/blackReducer/types';

import handleEffect from '../../helpers/binders';

import '../styles.css';

const LayerTen = ({ state, setState, side }) => {
  const dispatch = useDispatch();

  const { whiteValue } = useSelector(store => store.whiteReducer);
  const { blackValue } = useSelector(store => store.blackReducer);

  const [intermediateState, setIntermediateState] = useState(null);
  const [tinted, setTinted] = useState(false);

  useEffect(() => {
    if (state === intermediateState) return;

    if (side === 'right') setIntermediateState(state);
    setTinted(true);
  }, [state, setState, intermediateState, side]);

  const handleSubmit = e => {
    e.preventDefault();
    const newValue = e.target.newValue.value;
    setTinted(true);
    setTimeout(() => {
      setState(newValue);
      dispatch({
        type: whiteTypes.ADD_WHITE_VALUE,
        newValue,
      });
      dispatch({
        type: blackTypes.ADD_BLACK_VALUE,
        newValue,
      });
    }, [500]);
  };

  const handleClean = () => {
    dispatch({ type: whiteTypes.CLEAN_VALUE });
    dispatch({ type: blackTypes.CLEAN_VALUE });
    setState(null);
    document.getElementById('newValue').value = '';
  };

  const handleElement = s => {
    if (s === 'left') {
      return (
        <form className='leftForm' onSubmit={e => handleSubmit(e)}>
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
            <span>White value: {whiteValue}</span>
          </div>
          <div className='inputGroup'>
            <span>Redux</span>
            <span>Black value: {blackValue}</span>
          </div>
        </div>
      );
    }
    return <></>;
  };

  return <div className={`container ${handleEffect(state, intermediateState, tinted)} ${tinted ? 'tint' : ''}`}>{handleElement(side)}</div>;
};

export default LayerTen;
